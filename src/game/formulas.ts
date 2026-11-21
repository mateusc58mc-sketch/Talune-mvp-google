import {
  Attributes,
  BaseClass,
  DerivedStats,
  HeroEquipment,
  HeroUnit,
} from './types';

export function xpRequiredForLevel(level: number): number {
  if (level <= 1) return 50;
  if (level === 2) return 90;
  if (level === 3) return 140;
  if (level === 4) return 200;
  return Math.floor(200 * Math.pow(1.42, level - 4));
}

export function getAttackIntervalMs(aspd: number): number {
  const safeAspd = Math.max(0.25, Math.min(5.0, aspd));
  return Math.ceil(1000 / safeAspd);
}

export function getEffectiveCooldownMs(baseCooldownMs: number, haste: number): number {
  const safeHaste = Math.max(0, Math.min(2.0, haste));
  const safeBase = Math.max(200, Math.floor(baseCooldownMs));
  return Math.max(200, Math.floor(safeBase / (1 + safeHaste)));
}

export function computeMitigatedDamage(
  rawAttack: number,
  targetDefense: number,
  skillPower: number,
  isCrit: boolean
): number {
  const raw = Math.floor(Math.max(0, rawAttack) * Math.max(0.1, skillPower));
  const critRaw = isCrit ? Math.floor(raw * 1.55) : raw;
  return Math.max(1, critRaw - Math.floor(Math.max(0, targetDefense) / 2));
}

export function applyEffectiveDamage(targetCurrentHp: number, mitigatedDamage: number): number {
  if (targetCurrentHp <= 0) return 0;
  return Math.min(targetCurrentHp, Math.max(1, mitigatedDamage));
}

function getClassScaling(baseClass: BaseClass): {
  hpBase: number;
  hpPerLv: number;
  mpBase: number;
  mpPerLv: number;
  atkBase: number;
  matkBase: number;
  defBase: number;
  aspdBase: number;
} {
  switch (baseClass) {
    case 'guerreiro':
      return { hpBase: 145, hpPerLv: 24, mpBase: 45, mpPerLv: 4, atkBase: 16, matkBase: 6, defBase: 12, aspdBase: 0.95 };
    case 'cacador':
      return { hpBase: 105, hpPerLv: 15, mpBase: 55, mpPerLv: 5, atkBase: 18, matkBase: 7, defBase: 7, aspdBase: 1.25 };
    case 'clerigo':
      return { hpBase: 115, hpPerLv: 17, mpBase: 85, mpPerLv: 9, atkBase: 9, matkBase: 18, defBase: 9, aspdBase: 0.85 };
    case 'mago':
      return { hpBase: 92, hpPerLv: 13, mpBase: 95, mpPerLv: 10, atkBase: 7, matkBase: 22, defBase: 6, aspdBase: 0.9 };
    case 'aprendiz':
    default:
      return { hpBase: 100, hpPerLv: 15, mpBase: 55, mpPerLv: 5, atkBase: 12, matkBase: 10, defBase: 6, aspdBase: 1.0 };
  }
}

export function sumEquipmentStats(equipment: HeroEquipment): {
  atk: number;
  matk: number;
  def: number;
  maxHp: number;
  maxMp: number;
  aspdBonus: number;
  hasteBonus: number;
  critBonus: number;
  attrBonus: Attributes;
} {
  const result = {
    atk: 0,
    matk: 0,
    def: 0,
    maxHp: 0,
    maxMp: 0,
    aspdBonus: 0,
    hasteBonus: 0,
    critBonus: 0,
    attrBonus: { str: 0, agi: 0, vit: 0, int: 0, dex: 0, luk: 0 },
  };

  const slots = [equipment.weapon, equipment.armor, equipment.cape];
  for (const item of slots) {
    if (!item) continue;
    const s = item.stats;
    result.atk += s.atk ?? 0;
    result.matk += s.matk ?? 0;
    result.def += s.def ?? 0;
    result.maxHp += s.maxHp ?? 0;
    result.maxMp += s.maxMp ?? 0;
    result.aspdBonus += s.aspdBonus ?? 0;
    result.hasteBonus += s.hasteBonus ?? 0;
    result.critBonus += s.critBonus ?? 0;
    result.attrBonus.str += s.str ?? 0;
    result.attrBonus.agi += s.agi ?? 0;
    result.attrBonus.vit += s.vit ?? 0;
    result.attrBonus.int += s.int ?? 0;
    result.attrBonus.dex += s.dex ?? 0;
    result.attrBonus.luk += s.luk ?? 0;
  }

  return result;
}

export function computeDerivedStats(
  unit: Pick<HeroUnit, 'baseClass' | 'level' | 'attributes' | 'equipment' | 'isPlayer' | 'buffAtkTimerMs'>
): DerivedStats {
  const scaling = getClassScaling(unit.baseClass);
  const eq = sumEquipmentStats(unit.equipment);

  const totalStr = unit.attributes.str + eq.attrBonus.str;
  const totalAgi = unit.attributes.agi + eq.attrBonus.agi;
  const totalVit = unit.attributes.vit + eq.attrBonus.vit;
  const totalInt = unit.attributes.int + eq.attrBonus.int;
  const totalDex = unit.attributes.dex + eq.attrBonus.dex;
  const totalLuk = unit.attributes.luk + eq.attrBonus.luk;

  const botFactor = unit.isPlayer ? 1 : 0.72; // GDD rule: bots have ~70% power of real player

  const baseHp = scaling.hpBase + (unit.level - 1) * scaling.hpPerLv + totalVit * 12 + eq.maxHp;
  const baseMp = scaling.mpBase + (unit.level - 1) * scaling.mpPerLv + totalInt * 6 + eq.maxMp;

  const isRangedPhys = unit.baseClass === 'cacador';
  const primaryPhys = isRangedPhys ? totalDex : totalStr;
  const secondaryPhys = isRangedPhys ? Math.floor(totalStr / 2) : Math.floor(totalDex / 3);

  const rawAtk =
    scaling.atkBase +
    unit.level * 2 +
    primaryPhys * 2 +
    Math.floor(Math.pow(Math.floor(primaryPhys / 10), 2)) +
    secondaryPhys +
    eq.atk;

  const rawMatk =
    scaling.matkBase +
    unit.level * 2 +
    totalInt * 2.2 +
    Math.floor(Math.pow(Math.floor(totalInt / 7), 2)) +
    eq.matk;

  const buffMult = unit.buffAtkTimerMs > 0 ? 1.2 : 1.0;

  const def = Math.floor((scaling.defBase + Math.floor(totalVit * 1.1) + eq.def) * botFactor);
  const mdef = Math.floor((scaling.defBase * 0.8 + Math.floor(totalInt * 0.9) + Math.floor(eq.def * 0.6)) * botFactor);

  // ASPD strictly controls basic attack frequency; Haste strictly controls skill cooldowns
  const aspd = Number(
    Math.min(4.2, (scaling.aspdBase + totalAgi * 0.032 + eq.aspdBonus) * (unit.isPlayer ? 1 : 0.92)).toFixed(2)
  );
  const haste = Number(
    Math.min(1.5, Math.max(0, totalDex * 0.015 + eq.hasteBonus)).toFixed(2)
  );

  const critChance = Math.min(0.65, 0.05 + totalLuk * 0.009 + eq.critBonus);
  const flee = Math.min(0.45, 0.03 + totalAgi * 0.006 + totalLuk * 0.002);

  return {
    maxHp: Math.max(40, Math.floor(baseHp * botFactor)),
    maxMp: Math.max(25, Math.floor(baseMp)),
    atk: Math.max(4, Math.floor(rawAtk * botFactor * buffMult)),
    matk: Math.max(4, Math.floor(rawMatk * botFactor * buffMult)),
    def: Math.max(1, def),
    mdef: Math.max(1, mdef),
    aspd,
    haste,
    critChance,
    flee,
  };
}
