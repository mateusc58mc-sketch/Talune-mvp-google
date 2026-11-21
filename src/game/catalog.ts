import {
  ArmorVisualId,
  BaseClass,
  CapeVisualId,
  EnemyUnit,
  EnemyVisualType,
  EquipSlot,
  EquipmentItem,
  ItemStats,
  Rarity,
  SkillDef,
  StageBiomeConfig,
  WeaponVisualId,
} from './types';

export const CLASS_INFO: Record<
  BaseClass,
  {
    name: string;
    roleLabel: string;
    description: string;
    primaryAttrs: string;
    accentColor: string;
    defaultSkills: string[];
  }
> = {
  aprendiz: {
    name: 'Aprendiz',
    roleLabel: 'Iniciante Versátil',
    description: 'Aventureiro iniciante no Vale de Brumafonte. Escolhe uma classe-base no Nível 5.',
    primaryAttrs: 'STR / AGI / VIT',
    accentColor: '#55B9B0',
    defaultSkills: ['golpe_duplo', 'primeiros_socorros'],
  },
  guerreiro: {
    name: 'Guerreiro',
    roleLabel: 'Vanguarda · Tanque / Físico',
    description: 'Combatente de linha de frente capaz de interromper chefes e proteger aliados.',
    primaryAttrs: 'STR · VIT',
    accentColor: '#E07A5F',
    defaultSkills: ['impacto_escudo', 'golpe_combate', 'grito_batalha'],
  },
  cacador: {
    name: 'Caçador',
    roleLabel: 'DPS Físico · Crítico & ASPD',
    description: 'Atirador ágil focado em alta cadência de ataques e disparos perfurantes.',
    primaryAttrs: 'DEX · AGI · LUK',
    accentColor: '#67B96A',
    defaultSkills: ['tiro_preciso', 'disparo_rapido', 'foco_cacador'],
  },
  clerigo: {
    name: 'Clérigo',
    roleLabel: 'Suporte · Cura & Escudo',
    description: 'Guardião sagrado que sustenta a Party com curas diretas, preces e escudos.',
    primaryAttrs: 'INT · VIT',
    accentColor: '#E7BD68',
    defaultSkills: ['luz_restauradora', 'escudo_fe', 'prece_coletiva'],
  },
  mago: {
    name: 'Mago',
    roleLabel: 'DPS Mágico · Explosão Arcana',
    description: 'Conjurador de alto dano mágico que manipula fluxos arcanos e chamas.',
    primaryAttrs: 'INT · DEX',
    accentColor: '#7B8CDE',
    defaultSkills: ['explosao_arcana', 'missil_arcano', 'barreira_mana'],
  },
};

export const SKILLS_CATALOG: Record<string, SkillDef> = {
  golpe_duplo: {
    id: 'golpe_duplo',
    name: 'Golpe Duplo',
    description: 'Ataque físico ágil que causa 145% do ATK no alvo.',
    role: 'damage',
    damageType: 'physical',
    target: 'enemy',
    mpCost: 10,
    baseCooldownMs: 3600,
    castTimeMs: 0,
    power: 1.45,
    accentColor: '#E7BD68',
  },
  primeiros_socorros: {
    id: 'primeiros_socorros',
    name: 'Primeiros Socorros',
    description: 'Cura o aliado mais ferido em 120% do MATK + 18 HP.',
    role: 'heal',
    damageType: 'magical',
    target: 'lowestAlly',
    mpCost: 14,
    baseCooldownMs: 5200,
    castTimeMs: 450,
    power: 1.2,
    accentColor: '#55B9B0',
  },
  golpe_combate: {
    id: 'golpe_combate',
    name: 'Golpe de Combate',
    description: 'Golpe pesado de espada que causa 175% do ATK.',
    role: 'damage',
    damageType: 'physical',
    target: 'enemy',
    mpCost: 12,
    baseCooldownMs: 3400,
    castTimeMs: 0,
    power: 1.75,
    accentColor: '#E07A5F',
  },
  impacto_escudo: {
    id: 'impacto_escudo',
    name: 'Impacto de Escudo',
    description: 'Causa 135% do ATK e interrompe a conjuração do chefe.',
    role: 'interrupt',
    damageType: 'physical',
    target: 'enemy',
    mpCost: 15,
    baseCooldownMs: 6800,
    castTimeMs: 0,
    power: 1.35,
    accentColor: '#F4A261',
  },
  grito_batalha: {
    id: 'grito_batalha',
    name: 'Grito de Batalha',
    description: 'Aumenta o ATK e MATK de toda a Party em 20% por 6s.',
    role: 'buff',
    damageType: 'physical',
    target: 'party',
    mpCost: 18,
    baseCooldownMs: 11000,
    castTimeMs: 0,
    power: 0.2,
    accentColor: '#E7BD68',
  },
  disparo_rapido: {
    id: 'disparo_rapido',
    name: 'Disparo Rápido',
    description: 'Sequência veloz de flechas causando 155% do ATK.',
    role: 'damage',
    damageType: 'physical',
    target: 'enemy',
    mpCost: 10,
    baseCooldownMs: 2900,
    castTimeMs: 0,
    power: 1.55,
    accentColor: '#67B96A',
  },
  tiro_preciso: {
    id: 'tiro_preciso',
    name: 'Tiro Preciso',
    description: 'Disparo concentrado que causa 215% do ATK com alta chance crítica.',
    role: 'damage',
    damageType: 'physical',
    target: 'enemy',
    mpCost: 16,
    baseCooldownMs: 5200,
    castTimeMs: 400,
    power: 2.15,
    accentColor: '#90BE6D',
  },
  foco_cacador: {
    id: 'foco_cacador',
    name: 'Foco do Caçador',
    description: 'Eleva o poder ofensivo da equipe em 20% por 6s.',
    role: 'buff',
    damageType: 'physical',
    target: 'party',
    mpCost: 18,
    baseCooldownMs: 10500,
    castTimeMs: 0,
    power: 0.2,
    accentColor: '#A3E635',
  },
  luz_restauradora: {
    id: 'luz_restauradora',
    name: 'Luz Restauradora',
    description: 'Cura o aliado com menor HP em 185% do MATK.',
    role: 'heal',
    damageType: 'magical',
    target: 'lowestAlly',
    mpCost: 16,
    baseCooldownMs: 4200,
    castTimeMs: 400,
    power: 1.85,
    accentColor: '#55B9B0',
  },
  escudo_fe: {
    id: 'escudo_fe',
    name: 'Escudo da Fé',
    description: 'Concede escudo protetor (150% MATK) ao aliado mais ferido.',
    role: 'shield',
    damageType: 'magical',
    target: 'lowestAlly',
    mpCost: 15,
    baseCooldownMs: 6000,
    castTimeMs: 0,
    power: 1.5,
    accentColor: '#E7BD68',
  },
  prece_coletiva: {
    id: 'prece_coletiva',
    name: 'Prece Coletiva',
    description: 'Restaura 115% do MATK de HP para todos os membros vivos.',
    role: 'heal',
    damageType: 'magical',
    target: 'party',
    mpCost: 24,
    baseCooldownMs: 7800,
    castTimeMs: 550,
    power: 1.15,
    accentColor: '#6EE7B7',
  },
  missil_arcano: {
    id: 'missil_arcano',
    name: 'Míssil Arcano',
    description: 'Projétil de energia pura que causa 170% do MATK.',
    role: 'damage',
    damageType: 'magical',
    target: 'enemy',
    mpCost: 12,
    baseCooldownMs: 3200,
    castTimeMs: 0,
    power: 1.7,
    accentColor: '#7B8CDE',
  },
  explosao_arcana: {
    id: 'explosao_arcana',
    name: 'Explosão Arcana',
    description: 'Conjura uma onda arcana causando 240% do MATK.',
    role: 'damage',
    damageType: 'magical',
    target: 'enemy',
    mpCost: 22,
    baseCooldownMs: 5800,
    castTimeMs: 650,
    power: 2.4,
    accentColor: '#A78BFA',
  },
  barreira_mana: {
    id: 'barreira_mana',
    name: 'Barreira de Mana',
    description: 'Envolve o aliado mais vulnerável com escudo de 140% do MATK.',
    role: 'shield',
    damageType: 'magical',
    target: 'lowestAlly',
    mpCost: 16,
    baseCooldownMs: 7200,
    castTimeMs: 0,
    power: 1.4,
    accentColor: '#55B9B0',
  },
};

export const RARITY_META: Record<
  Rarity,
  {
    label: string;
    symbol: string;
    borderClass: string;
    textClass: string;
    bgClass: string;
    glowHex: string;
    multiplier: number;
  }
> = {
  comum: {
    label: 'Comum',
    symbol: '•',
    borderClass: 'border-slate-500/60',
    textClass: 'text-slate-300',
    bgClass: 'bg-slate-800/70',
    glowHex: '#94a3b8',
    multiplier: 1.0,
  },
  incomum: {
    label: 'Incomum',
    symbol: '◆',
    borderClass: 'border-emerald-500/75',
    textClass: 'text-emerald-300',
    bgClass: 'bg-emerald-950/50',
    glowHex: '#34d399',
    multiplier: 1.35,
  },
  rara: {
    label: 'Rara',
    symbol: '✦',
    borderClass: 'border-sky-400/80',
    textClass: 'text-sky-300',
    bgClass: 'bg-sky-950/55',
    glowHex: '#38bdf8',
    multiplier: 1.75,
  },
  epica: {
    label: 'Épica',
    symbol: '❖',
    borderClass: 'border-violet-400/85',
    textClass: 'text-violet-300',
    bgClass: 'bg-violet-950/60',
    glowHex: '#a78bfa',
    multiplier: 2.25,
  },
  lendaria: {
    label: 'Lendária',
    symbol: '★',
    borderClass: 'border-amber-400/90',
    textClass: 'text-amber-300',
    bgClass: 'bg-amber-950/60',
    glowHex: '#E7BD68',
    multiplier: 2.9,
  },
};

interface ItemTemplate {
  templateId: string;
  name: string;
  slot: EquipSlot;
  visualId: WeaponVisualId | ArmorVisualId | CapeVisualId;
  baseStats: ItemStats;
  description: string;
}

export const ITEM_TEMPLATES: ItemTemplate[] = [
  // Weapons
  {
    templateId: 'wpn_sword_iron',
    name: 'Espada de Ferro do Vale',
    slot: 'weapon',
    visualId: 'sword_iron',
    baseStats: { atk: 12, str: 2 },
    description: 'Lâmina equilibrada forjada no Acampamento da Travessia.',
  },
  {
    templateId: 'wpn_sword_runic',
    name: 'Lâmina Rúnica de Brumafonte',
    slot: 'weapon',
    visualId: 'sword_runic',
    baseStats: { atk: 18, str: 3, hasteBonus: 0.08 },
    description: 'Gravada com veios turquesa que aceleram o fluxo de combate.',
  },
  {
    templateId: 'wpn_axe_berserker',
    name: 'Machado da Fenda',
    slot: 'weapon',
    visualId: 'axe_berserker',
    baseStats: { atk: 22, critBonus: 0.06, str: 4 },
    description: 'Machado pesado de impacto brutal e corte profundo.',
  },
  {
    templateId: 'wpn_bow_hunter',
    name: 'Arco Recurvo da Várzea',
    slot: 'weapon',
    visualId: 'bow_hunter',
    baseStats: { atk: 14, aspdBonus: 0.18, dex: 2 },
    description: 'Arco leve que favorece disparos contínuos.',
  },
  {
    templateId: 'wpn_bow_elven',
    name: 'Arco Longo das Raízes',
    slot: 'weapon',
    visualId: 'bow_elven',
    baseStats: { atk: 19, aspdBonus: 0.25, critBonus: 0.05, agi: 3 },
    description: 'Talhado em madeira viva do Bosque das Raízes.',
  },
  {
    templateId: 'wpn_staff_arcane',
    name: 'Cajado da Nascente Arcana',
    slot: 'weapon',
    visualId: 'staff_arcane',
    baseStats: { matk: 20, int: 4, hasteBonus: 0.12 },
    description: 'Canaliza energia primordial do Coração do Mundo.',
  },
  {
    templateId: 'wpn_mace_holy',
    name: 'Maça da Devoção',
    slot: 'weapon',
    visualId: 'mace_holy',
    baseStats: { matk: 15, atk: 8, vit: 3, maxMp: 18 },
    description: 'Símbolo sagrado que amplifica curas e proteção.',
  },
  {
    templateId: 'wpn_dagger_shadow',
    name: 'Adaga Silenciosa',
    slot: 'weapon',
    visualId: 'dagger_shadow',
    baseStats: { atk: 15, aspdBonus: 0.32, critBonus: 0.08, agi: 2 },
    description: 'Lâmina veloz ideal para builds de ASPD elevada.',
  },

  // Armors
  {
    templateId: 'arm_plate_iron',
    name: 'Cota de Ferro Reforçada',
    slot: 'armor',
    visualId: 'plate_iron',
    baseStats: { def: 10, maxHp: 55, vit: 2 },
    description: 'Armadura confiável para resistir aos lobos e chefes.',
  },
  {
    templateId: 'arm_plate_royal',
    name: 'Armadura do Guardião Real',
    slot: 'armor',
    visualId: 'plate_royal',
    baseStats: { def: 16, maxHp: 95, vit: 4, str: 2 },
    description: 'Placas douradas e turquesa com proteção superior.',
  },
  {
    templateId: 'arm_leather_forest',
    name: 'Veste de Couro Florestal',
    slot: 'armor',
    visualId: 'leather_forest',
    baseStats: { def: 7, maxHp: 42, aspdBonus: 0.14, agi: 3 },
    description: 'Couro flexível que preserva agilidade e esquiva.',
  },
  {
    templateId: 'arm_robe_cleric',
    name: 'Vestimenta Sagrada de Marfim',
    slot: 'armor',
    visualId: 'robe_cleric',
    baseStats: { def: 8, maxHp: 50, maxMp: 24, int: 3 },
    description: 'Manto ceremonial bordado em fios dourados.',
  },
  {
    templateId: 'arm_robe_arcane',
    name: 'Manto Arcano da Fenda',
    slot: 'armor',
    visualId: 'robe_arcane',
    baseStats: { def: 6, matk: 10, maxMp: 30, hasteBonus: 0.1 },
    description: 'Tecido rúnico que reduz o tempo de recarga das magias.',
  },

  // Capes
  {
    templateId: 'cap_traveler',
    name: 'Capa do Viajante',
    slot: 'cape',
    visualId: 'cape_traveler',
    baseStats: { def: 4, maxHp: 25, agi: 1 },
    description: 'Capa leve usada pelos exploradores de Brumafonte.',
  },
  {
    templateId: 'cap_crimson',
    name: 'Manto Rubro de Batalha',
    slot: 'cape',
    visualId: 'cape_crimson',
    baseStats: { atk: 7, critBonus: 0.04, str: 2 },
    description: 'Insígnia escarlate que inspira golpes decisivos.',
  },
  {
    templateId: 'cap_emerald',
    name: 'Capa Folha-Viva',
    slot: 'cape',
    visualId: 'cape_emerald',
    baseStats: { aspdBonus: 0.15, dex: 2, maxHp: 30 },
    description: 'Tecida com fibras das raízes vivas do bosque.',
  },
  {
    templateId: 'cap_ether',
    name: 'Asas de Éter Turquesa',
    slot: 'cape',
    visualId: 'cape_ether',
    baseStats: { matk: 9, hasteBonus: 0.12, maxMp: 20 },
    description: 'Projeção etérea luminosa que acelera conjurações.',
  },
  {
    templateId: 'cap_rift',
    name: 'Véu da Fenda Corrompida',
    slot: 'cape',
    visualId: 'cape_rift',
    baseStats: { atk: 9, matk: 9, critBonus: 0.06, def: 5 },
    description: 'Relíquia rara obtida nos confins das Ruínas da Nascente.',
  },
];

export function createStarterWeapon(): EquipmentItem {
  return {
    id: 'starter_wpn_player',
    templateId: 'wpn_sword_wood',
    name: 'Espada de Treino',
    slot: 'weapon',
    rarity: 'comum',
    tier: 0,
    visualId: 'sword_wood',
    stats: { atk: 6 },
    valueGold: 5,
    description: 'Arma inicial de todo Aprendiz em Talune.',
  };
}

export function createStarterArmor(): EquipmentItem {
  return {
    id: 'starter_arm_player',
    templateId: 'arm_tunic',
    name: 'Túnica de Aprendiz',
    slot: 'armor',
    rarity: 'comum',
    tier: 0,
    visualId: 'tunic_apprentice',
    stats: { def: 4, maxHp: 20 },
    valueGold: 5,
    description: 'Veste leve padrão do Acampamento da Travessia.',
  };
}

export function generateEquipmentDrop(
  stage: number,
  guaranteedRareOrBetter: boolean,
  rng: () => number,
  uid: string
): EquipmentItem {
  const roll = rng();
  let rarity: Rarity = 'comum';
  if (guaranteedRareOrBetter) {
    if (roll > 0.9) rarity = 'lendaria';
    else if (roll > 0.62) rarity = 'epica';
    else rarity = 'rara';
  } else {
    if (roll > 0.96) rarity = 'lendaria';
    else if (roll > 0.87) rarity = 'epica';
    else if (roll > 0.66) rarity = 'rara';
    else if (roll > 0.34) rarity = 'incomum';
    else rarity = 'comum';
  }

  const tpl = ITEM_TEMPLATES[Math.floor(rng() * ITEM_TEMPLATES.length)];
  const meta = RARITY_META[rarity];
  const stageScale = 1 + (stage - 1) * 0.28;
  const totalMult = meta.multiplier * stageScale;

  const stats: ItemStats = {};
  if (tpl.baseStats.atk) stats.atk = Math.max(1, Math.round(tpl.baseStats.atk * totalMult));
  if (tpl.baseStats.matk) stats.matk = Math.max(1, Math.round(tpl.baseStats.matk * totalMult));
  if (tpl.baseStats.def) stats.def = Math.max(1, Math.round(tpl.baseStats.def * totalMult));
  if (tpl.baseStats.maxHp) stats.maxHp = Math.max(5, Math.round(tpl.baseStats.maxHp * totalMult));
  if (tpl.baseStats.maxMp) stats.maxMp = Math.max(5, Math.round(tpl.baseStats.maxMp * totalMult));
  if (tpl.baseStats.aspdBonus)
    stats.aspdBonus = Number((tpl.baseStats.aspdBonus * (0.85 + meta.multiplier * 0.25)).toFixed(2));
  if (tpl.baseStats.hasteBonus)
    stats.hasteBonus = Number((tpl.baseStats.hasteBonus * (0.85 + meta.multiplier * 0.25)).toFixed(2));
  if (tpl.baseStats.critBonus)
    stats.critBonus = Number((tpl.baseStats.critBonus * (0.85 + meta.multiplier * 0.2)).toFixed(2));
  if (tpl.baseStats.str) stats.str = Math.max(1, Math.round(tpl.baseStats.str * meta.multiplier));
  if (tpl.baseStats.agi) stats.agi = Math.max(1, Math.round(tpl.baseStats.agi * meta.multiplier));
  if (tpl.baseStats.vit) stats.vit = Math.max(1, Math.round(tpl.baseStats.vit * meta.multiplier));
  if (tpl.baseStats.int) stats.int = Math.max(1, Math.round(tpl.baseStats.int * meta.multiplier));
  if (tpl.baseStats.dex) stats.dex = Math.max(1, Math.round(tpl.baseStats.dex * meta.multiplier));
  if (tpl.baseStats.luk) stats.luk = Math.max(1, Math.round(tpl.baseStats.luk * meta.multiplier));

  const tier = Math.floor((stage - 1) / 3);
  const rarityPrefix = rarity === 'comum' ? '' : ` ${meta.label}`;
  const valueGold = Math.round(14 * meta.multiplier * stageScale);

  return {
    id: uid,
    templateId: tpl.templateId,
    name: `${tpl.name}${rarityPrefix}`,
    slot: tpl.slot,
    rarity,
    tier,
    visualId: tpl.visualId,
    stats,
    valueGold,
    description: tpl.description,
  };
}

export const STAGE_BIOMES: StageBiomeConfig[] = [
  {
    id: 'campos',
    name: 'Campos da Margem',
    subtitle: 'Vale de Brumafonte · Margens Fluviais',
    bgImage: '/src/assets/images/stage_campos_1795232044123.jpg',
    fallbackGradient: 'linear-gradient(180deg, #3b6e8c 0%, #4b8f74 52%, #2b4d38 100%)',
    mobPool: ['lodo_rio', 'lobo_varzea'],
    bossId: 'boss_lodo_soberano',
  },
  {
    id: 'bosque',
    name: 'Bosque das Raízes',
    subtitle: 'Vale de Brumafonte · Veios Ancestrais',
    bgImage: '/src/assets/images/stage_bosque_1795232045025.jpg',
    fallbackGradient: 'linear-gradient(180deg, #1b3b34 0%, #245743 55%, #162e23 100%)',
    mobPool: ['lobo_varzea', 'broto_raiz'],
    bossId: 'boss_anciao_raizes',
  },
  {
    id: 'ruinas',
    name: 'Ruínas da Nascente',
    subtitle: 'Vale de Brumafonte · Fenda Corrompida',
    bgImage: '/src/assets/images/stage_ruinas_1795232044291.jpg',
    fallbackGradient: 'linear-gradient(180deg, #27294b 0%, #264d5e 52%, #192434 100%)',
    mobPool: ['broto_raiz', 'vigia_fenda'],
    bossId: 'boss_guardiao_fenda',
  },
];

export function getStageBiome(stage: number): StageBiomeConfig {
  const index = (Math.max(1, stage) - 1) % STAGE_BIOMES.length;
  return STAGE_BIOMES[index];
}

interface EnemyTemplate {
  templateId: string;
  name: string;
  visualType: EnemyVisualType;
  isBoss: boolean;
  baseHp: number;
  baseAtk: number;
  baseDef: number;
  attackIntervalMs: number;
  xpReward: number;
  goldReward: number;
}

export const ENEMY_TEMPLATES: Record<string, EnemyTemplate> = {
  lodo_rio: {
    templateId: 'lodo_rio',
    name: 'Lodo-de-Rio',
    visualType: 'slime',
    isBoss: false,
    baseHp: 320,
    baseAtk: 15,
    baseDef: 6,
    attackIntervalMs: 2100,
    xpReward: 14,
    goldReward: 10,
  },
  lobo_varzea: {
    templateId: 'lobo_varzea',
    name: 'Lobo-de-Várzea',
    visualType: 'wolf',
    isBoss: false,
    baseHp: 270,
    baseAtk: 21,
    baseDef: 4,
    attackIntervalMs: 1500,
    xpReward: 17,
    goldReward: 13,
  },
  broto_raiz: {
    templateId: 'broto_raiz',
    name: 'Broto de Raiz',
    visualType: 'sprout',
    isBoss: false,
    baseHp: 390,
    baseAtk: 24,
    baseDef: 7,
    attackIntervalMs: 1800,
    xpReward: 22,
    goldReward: 16,
  },
  vigia_fenda: {
    templateId: 'vigia_fenda',
    name: 'Vigia da Fenda',
    visualType: 'guardian',
    isBoss: false,
    baseHp: 480,
    baseAtk: 28,
    baseDef: 10,
    attackIntervalMs: 1900,
    xpReward: 28,
    goldReward: 20,
  },
  boss_lodo_soberano: {
    templateId: 'boss_lodo_soberano',
    name: 'Lodo Soberano da Margem',
    visualType: 'slime',
    isBoss: true,
    baseHp: 1850,
    baseAtk: 30,
    baseDef: 10,
    attackIntervalMs: 1750,
    xpReward: 75,
    goldReward: 75,
  },
  boss_anciao_raizes: {
    templateId: 'boss_anciao_raizes',
    name: 'Ancião das Raízes',
    visualType: 'sprout',
    isBoss: true,
    baseHp: 2900,
    baseAtk: 37,
    baseDef: 12,
    attackIntervalMs: 1650,
    xpReward: 115,
    goldReward: 110,
  },
  boss_guardiao_fenda: {
    templateId: 'boss_guardiao_fenda',
    name: 'Guardião da Fenda',
    visualType: 'guardian',
    isBoss: true,
    baseHp: 4200,
    baseAtk: 44,
    baseDef: 15,
    attackIntervalMs: 1550,
    xpReward: 165,
    goldReward: 160,
  },
};

export function spawnEnemyForStage(
  stage: number,
  isBoss: boolean,
  waveInStage: number,
  uid: string
): EnemyUnit {
  const biome = getStageBiome(stage);
  const templateKey = isBoss
    ? biome.bossId
    : biome.mobPool[(waveInStage - 1) % biome.mobPool.length];
  const tpl = ENEMY_TEMPLATES[templateKey];

  const cycle = Math.floor((stage - 1) / STAGE_BIOMES.length);
  const scale = Math.pow(1.48, stage - 1) * (1 + cycle * 0.22);

  const maxHp = Math.round(tpl.baseHp * scale);
  const atk = Math.round(tpl.baseAtk * (1 + (stage - 1) * 0.34));
  const def = Math.round(tpl.baseDef * (1 + (stage - 1) * 0.25));

  return {
    id: uid,
    templateId: tpl.templateId,
    name: cycle > 0 ? `${tpl.name} +${cycle}` : tpl.name,
    isBoss,
    stage,
    phase: 1,
    visualType: tpl.visualType,
    maxHp,
    currentHp: maxHp,
    atk,
    def,
    attackIntervalMs: tpl.attackIntervalMs,
    attackTimerMs: 950,
    bossSkillCooldownMs: isBoss ? 2400 : 999999,
    castState: null,
    animState: 'idle',
    animTimerMs: 0,
    xpReward: Math.round(tpl.xpReward * (1 + (stage - 1) * 0.32)),
    goldReward: Math.round(tpl.goldReward * (1 + (stage - 1) * 0.35)),
  };
}
