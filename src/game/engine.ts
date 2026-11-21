import {
  CLASS_INFO,
  SKILLS_CATALOG,
  generateEquipmentDrop,
  spawnEnemyForStage,
} from './catalog';
import {
  applyEffectiveDamage,
  computeDerivedStats,
  computeMitigatedDamage,
  getAttackIntervalMs,
  getEffectiveCooldownMs,
  xpRequiredForLevel,
} from './formulas';
import {
  AttributeKey,
  Attributes,
  BaseClass,
  CombatEventNotice,
  EquipmentItem,
  FloatingText,
  FloatingTextKind,
  GameState,
  HeroUnit,
} from './types';

export type SfxCue =
  | 'hit'
  | 'crit'
  | 'skill'
  | 'heal'
  | 'shield'
  | 'interrupt'
  | 'drop'
  | 'levelUp'
  | 'bossHorn'
  | 'victory'
  | 'defeat';

export interface StepResult {
  nextState: GameState;
  cues: SfxCue[];
}

function nextRandom(seed: number): { value: number; nextSeed: number } {
  const nextSeed = (seed * 1664525 + 1013904223) >>> 0;
  return { value: nextSeed / 4294967296, nextSeed };
}

function makeUid(prefix: string, seed: number): { id: string; nextSeed: number } {
  const r = nextRandom(seed);
  const hex = Math.floor(r.value * 0xffffff)
    .toString(16)
    .padStart(6, '0');
  return { id: `${prefix}_${hex}_${r.nextSeed % 1000}`, nextSeed: r.nextSeed };
}

function pushNotice(
  notices: CombatEventNotice[],
  id: string,
  text: string,
  tone: CombatEventNotice['tone']
): CombatEventNotice[] {
  return [{ id, text, tone }, ...notices].slice(0, 6);
}

function addFloatingText(
  list: FloatingText[],
  id: string,
  targetId: string,
  text: string,
  kind: FloatingTextKind,
  seed: number
): { list: FloatingText[]; nextSeed: number } {
  const rx = nextRandom(seed);
  const ry = nextRandom(rx.nextSeed);
  const item: FloatingText = {
    id,
    targetId,
    text,
    kind,
    offsetX: Math.round((rx.value - 0.5) * 26),
    offsetY: Math.round((ry.value - 0.5) * 14),
    ttlMs: 920,
  };
  return {
    list: [...list.slice(-18), item],
    nextSeed: ry.nextSeed,
  };
}

function createBotHero(
  id: string,
  name: string,
  baseClass: BaseClass,
  formationRow: 'front' | 'back',
  attributes: Attributes,
  appearance: HeroUnit['appearance'],
  weapon: EquipmentItem | null,
  armor: EquipmentItem | null,
  cape: EquipmentItem | null
): HeroUnit {
  const draft: HeroUnit = {
    id,
    name,
    isPlayer: false,
    formationRow,
    baseClass,
    level: 1,
    xp: 0,
    xpToNext: xpRequiredForLevel(1),
    unspentPoints: 0,
    attributes,
    equipment: { weapon, armor, cape },
    appearance,
    skillOrder: [...CLASS_INFO[baseClass].defaultSkills],
    cooldowns: {},
    castState: null,
    currentHp: 100,
    currentMp: 50,
    shield: 0,
    buffAtkTimerMs: 0,
    attackTimerMs: formationRow === 'front' ? 500 : 750,
    animState: 'idle',
    animTimerMs: 0,
    totalDamageDealt: 0,
    totalHealingDone: 0,
  };
  const stats = computeDerivedStats(draft);
  draft.currentHp = stats.maxHp;
  draft.currentMp = stats.maxMp;
  return draft;
}

export function createInitialGameState(seed = 20250501): GameState {
  const playerDraft: HeroUnit = {
    id: 'player',
    name: 'Você',
    isPlayer: true,
    formationRow: 'front',
    baseClass: 'aprendiz',
    level: 1,
    xp: 0,
    xpToNext: xpRequiredForLevel(1),
    unspentPoints: 3,
    attributes: { str: 3, agi: 2, vit: 3, int: 1, dex: 2, luk: 1 },
    equipment: {
      weapon: {
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
      },
      armor: {
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
      },
      cape: null,
    },
    appearance: {
      skinTone: '#F6D0B1',
      hairStyle: 'spiky',
      hairColor: '#2B3A67',
      eyeColor: '#2F8F9D',
    },
    skillOrder: [...CLASS_INFO.aprendiz.defaultSkills],
    cooldowns: {},
    castState: null,
    currentHp: 120,
    currentMp: 50,
    shield: 0,
    buffAtkTimerMs: 0,
    attackTimerMs: 350,
    animState: 'idle',
    animTimerMs: 0,
    totalDamageDealt: 0,
    totalHealingDone: 0,
  };
  const playerStats = computeDerivedStats(playerDraft);
  playerDraft.currentHp = playerStats.maxHp;
  playerDraft.currentMp = playerStats.maxMp;

  const bram = createBotHero(
    'bot_bram',
    'Bram',
    'guerreiro',
    'front',
    { str: 3, agi: 1, vit: 4, int: 1, dex: 2, luk: 1 },
    { skinTone: '#E8B896', hairStyle: 'bob', hairColor: '#6D3D2A', eyeColor: '#4E342E' },
    {
      id: 'bot_wpn_bram',
      templateId: 'wpn_sword_iron',
      name: 'Espada de Ferro',
      slot: 'weapon',
      rarity: 'comum',
      tier: 0,
      visualId: 'sword_iron',
      stats: { atk: 7 },
      valueGold: 8,
      description: 'Espada confiável de vanguarda.',
    },
    {
      id: 'bot_arm_bram',
      templateId: 'arm_plate_iron',
      name: 'Cota de Ferro',
      slot: 'armor',
      rarity: 'comum',
      tier: 0,
      visualId: 'plate_iron',
      stats: { def: 6, maxHp: 25 },
      valueGold: 8,
      description: 'Armadura de proteção frontal.',
    },
    {
      id: 'bot_cap_bram',
      templateId: 'cap_traveler',
      name: 'Capa do Viajante',
      slot: 'cape',
      rarity: 'comum',
      tier: 0,
      visualId: 'cape_traveler',
      stats: { def: 2 },
      valueGold: 6,
      description: 'Capa leve de acampamento.',
    }
  );

  const lyra = createBotHero(
    'bot_lyra',
    'Lyra',
    'clerigo',
    'back',
    { str: 1, agi: 1, vit: 2, int: 4, dex: 2, luk: 1 },
    { skinTone: '#FBE0CA', hairStyle: 'long', hairColor: '#D6A44B', eyeColor: '#55B9B0' },
    {
      id: 'bot_wpn_lyra',
      templateId: 'wpn_mace_holy',
      name: 'Maça da Devoção',
      slot: 'weapon',
      rarity: 'comum',
      tier: 0,
      visualId: 'mace_holy',
      stats: { matk: 8 },
      valueGold: 8,
      description: 'Amplifica magias de cura.',
    },
    {
      id: 'bot_arm_lyra',
      templateId: 'arm_robe_cleric',
      name: 'Vestimenta Sagrada',
      slot: 'armor',
      rarity: 'comum',
      tier: 0,
      visualId: 'robe_cleric',
      stats: { def: 4, maxMp: 14 },
      valueGold: 8,
      description: 'Veste cerimonial de Brumafonte.',
    },
    null
  );

  const kael = createBotHero(
    'bot_kael',
    'Kael',
    'cacador',
    'back',
    { str: 1, agi: 3, vit: 1, int: 1, dex: 4, luk: 2 },
    { skinTone: '#DFB08C', hairStyle: 'ponytail', hairColor: '#2B5B4E', eyeColor: '#E7BD68' },
    {
      id: 'bot_wpn_kael',
      templateId: 'wpn_bow_hunter',
      name: 'Arco Recurvo',
      slot: 'weapon',
      rarity: 'comum',
      tier: 0,
      visualId: 'bow_hunter',
      stats: { atk: 7, aspdBonus: 0.1 },
      valueGold: 8,
      description: 'Arco leve de exploração.',
    },
    {
      id: 'bot_arm_kael',
      templateId: 'arm_leather_forest',
      name: 'Couro Florestal',
      slot: 'armor',
      rarity: 'comum',
      tier: 0,
      visualId: 'leather_forest',
      stats: { def: 4, aspdBonus: 0.06 },
      valueGold: 8,
      description: 'Couro ágil para arqueiros.',
    },
    {
      id: 'bot_cap_kael',
      templateId: 'cap_emerald',
      name: 'Capa Folha-Viva',
      slot: 'cape',
      rarity: 'comum',
      tier: 0,
      visualId: 'cape_emerald',
      stats: { aspdBonus: 0.05 },
      valueGold: 6,
      description: 'Capa camuflada da várzea.',
    }
  );

  // Give player two starter reserve pieces so Paperdoll visual swapping is immediately testable
  const starterBagItems: EquipmentItem[] = [
    {
      id: 'bag_init_sword_iron',
      templateId: 'wpn_sword_iron',
      name: 'Espada de Ferro do Vale',
      slot: 'weapon',
      rarity: 'incomum',
      tier: 0,
      visualId: 'sword_iron',
      stats: { atk: 12, str: 2 },
      valueGold: 18,
      description: 'Forjada no Acampamento da Travessia. Equipe na aba Bolsa ou Herói.',
    },
    {
      id: 'bag_init_cape_crimson',
      templateId: 'cap_crimson',
      name: 'Manto Rubro de Batalha',
      slot: 'cape',
      rarity: 'incomum',
      tier: 0,
      visualId: 'cape_crimson',
      stats: { atk: 7, critBonus: 0.04, str: 2 },
      valueGold: 20,
      description: 'Manto cerimonial que reforça a presença do aventureiro.',
    },
  ];

  const firstEnemy = spawnEnemyForStage(1, false, 1, 'mob_init_1');

  return {
    screen: 'title',
    activeTab: 'arena',
    muted: false,
    stage: 1,
    checkpointStage: 1,
    waveInStage: 1,
    wavesPerStage: 3,
    gold: 25,
    isBossBattle: false,
    bossBattleElapsedMs: 0,
    bossOutcome: null,
    classSelectionPending: false,
    party: [playerDraft, bram, lyra, kael],
    enemy: firstEnemy,
    inventory: starterBagItems,
    floatingTexts: [],
    recentNotices: [
      {
        id: 'notice_welcome',
        text: 'Party formada! Combate tático automático iniciado em Campos da Margem.',
        tone: 'info',
      },
    ],
    rngSeed: seed,
    encounterDamageTotal: 0,
    lastDropHighlightId: null,
  };
}

function autoDistributeBotPoints(bot: HeroUnit): Attributes {
  const next = { ...bot.attributes };
  switch (bot.baseClass) {
    case 'guerreiro':
      next.str += 1;
      next.vit += 1;
      break;
    case 'cacador':
      next.dex += 1;
      next.agi += 1;
      break;
    case 'clerigo':
      next.int += 1;
      next.vit += 1;
      break;
    case 'mago':
      next.int += 1;
      next.dex += 1;
      break;
    default:
      next.str += 1;
      next.vit += 1;
  }
  return next;
}

function applyXpAndLevelUp(
  hero: HeroUnit,
  xpAmount: number
): { hero: HeroUnit; leveledUp: boolean; unlockedBaseClass: boolean } {
  let xp = hero.xp + xpAmount;
  let level = hero.level;
  let xpToNext = hero.xpToNext;
  let unspentPoints = hero.unspentPoints;
  let attributes = { ...hero.attributes };
  let leveledUp = false;
  let unlockedBaseClass = false;

  while (xp >= xpToNext && level < 60) {
    xp -= xpToNext;
    level += 1;
    xpToNext = xpRequiredForLevel(level);
    leveledUp = true;
    if (hero.isPlayer) {
      unspentPoints += 3;
      if (level >= 5 && hero.baseClass === 'aprendiz') {
        unlockedBaseClass = true;
      }
    } else {
      attributes = autoDistributeBotPoints(hero);
    }
  }

  const updated: HeroUnit = {
    ...hero,
    level,
    xp,
    xpToNext,
    unspentPoints,
    attributes,
  };

  if (leveledUp) {
    const derived = computeDerivedStats(updated);
    updated.currentHp = derived.maxHp;
    updated.currentMp = derived.maxMp;
  }

  return { hero: updated, leveledUp, unlockedBaseClass };
}

function restorePartyFull(party: HeroUnit[]): HeroUnit[] {
  return party.map((h) => {
    const d = computeDerivedStats(h);
    return {
      ...h,
      currentHp: d.maxHp,
      currentMp: d.maxMp,
      shield: 0,
      castState: null,
      cooldowns: {},
      buffAtkTimerMs: 0,
      animState: 'idle',
      animTimerMs: 0,
      attackTimerMs: h.formationRow === 'front' ? 350 : 600,
    };
  });
}

function findLowestHpLivingAlly(party: HeroUnit[]): { hero: HeroUnit; ratio: number; maxHp: number } | null {
  let best: { hero: HeroUnit; ratio: number; maxHp: number } | null = null;
  for (const h of party) {
    if (h.currentHp <= 0) continue;
    const d = computeDerivedStats(h);
    const ratio = h.currentHp / d.maxHp;
    if (!best || ratio < best.ratio) {
      best = { hero: h, ratio, maxHp: d.maxHp };
    }
  }
  return best;
}

export function stepCombat(state: GameState, rawDtMs: number): StepResult {
  if (state.screen !== 'playing') {
    return { nextState: state, cues: [] };
  }

  const dt = Math.min(Math.max(0, rawDtMs), 50);
  if (dt <= 0) {
    return { nextState: state, cues: [] };
  }

  const cues: SfxCue[] = [];
  let seed = state.rngSeed;
  let floatingTexts = state.floatingTexts
    .map((f) => ({ ...f, ttlMs: f.ttlMs - dt }))
    .filter((f) => f.ttlMs > 0);
  let notices = [...state.recentNotices];
  let encounterDamageTotal = state.encounterDamageTotal;
  let bossBattleElapsedMs = state.isBossBattle ? state.bossBattleElapsedMs + dt : 0;

  let party = state.party.map((h) => {
    const d = computeDerivedStats(h);
    const nextCooldowns: Record<string, number> = {};
    for (const [k, v] of Object.entries(h.cooldowns)) {
      const rem = Math.max(0, v - dt);
      if (rem > 0) nextCooldowns[k] = rem;
    }
    const nextAnimTimer = Math.max(0, h.animTimerMs - dt);
    const nextAnimState =
      h.currentHp <= 0
        ? 'dead'
        : h.castState
          ? 'cast'
          : nextAnimTimer > 0
            ? h.animState
            : 'idle';

    return {
      ...h,
      cooldowns: nextCooldowns,
      buffAtkTimerMs: Math.max(0, h.buffAtkTimerMs - dt),
      animTimerMs: nextAnimTimer,
      animState: nextAnimState,
      currentMp: h.currentHp > 0 ? Math.min(d.maxMp, h.currentMp + (3.8 * dt) / 1000) : 0,
    };
  });

  let enemy = {
    ...state.enemy,
    animTimerMs: Math.max(0, state.enemy.animTimerMs - dt),
    animState:
      state.enemy.currentHp <= 0
        ? ('dead' as const)
        : Math.max(0, state.enemy.animTimerMs - dt) > 0
          ? state.enemy.animState
          : ('idle' as const),
  };

  const executeSkill = (casterIndex: number, skillId: string) => {
    const skill = SKILLS_CATALOG[skillId];
    if (!skill) return;
    const caster = party[casterIndex];
    if (!caster || caster.currentHp <= 0 || enemy.currentHp <= 0) return;

    const derived = computeDerivedStats(caster);
    const cd = getEffectiveCooldownMs(skill.baseCooldownMs, derived.haste);
    party[casterIndex] = {
      ...caster,
      cooldowns: { ...caster.cooldowns, [skillId]: cd },
      castState: null,
      animState: 'attack',
      animTimerMs: 280,
    };

    if (skill.role === 'damage' || skill.role === 'interrupt') {
      const critRoll = nextRandom(seed);
      seed = critRoll.nextSeed;
      const bonusCrit = skill.id === 'tiro_preciso' ? 0.25 : 0;
      const isCrit = critRoll.value < derived.critChance + bonusCrit;
      const rawStat = skill.damageType === 'magical' ? derived.matk : derived.atk;
      const mitigated = computeMitigatedDamage(rawStat, enemy.def, skill.power, isCrit);
      const dealt = applyEffectiveDamage(enemy.currentHp, mitigated);
      enemy = {
        ...enemy,
        currentHp: Math.max(0, enemy.currentHp - dealt),
        animState: 'hit',
        animTimerMs: 220,
      };
      party[casterIndex] = {
        ...party[casterIndex],
        totalDamageDealt: party[casterIndex].totalDamageDealt + dealt,
      };
      encounterDamageTotal += dealt;

      const u = makeUid('ft', seed);
      seed = u.nextSeed;
      const ft = addFloatingText(
        floatingTexts,
        u.id,
        'enemy',
        isCrit ? `${dealt}!` : `${dealt}`,
        isCrit ? 'crit' : 'damage',
        seed
      );
      floatingTexts = ft.list;
      seed = ft.nextSeed;
      cues.push(isCrit ? 'crit' : 'skill');

      // Check interrupt on enemy telegraph cast
      if (skill.role === 'interrupt' && enemy.castState && enemy.castState.interruptible) {
        enemy = { ...enemy, castState: null };
        const iu = makeUid('ft_int', seed);
        seed = iu.nextSeed;
        const ift = addFloatingText(
          floatingTexts,
          iu.id,
          'enemy',
          'INTERROMPIDO!',
          'interrupt',
          seed
        );
        floatingTexts = ift.list;
        seed = ift.nextSeed;
        const nu = makeUid('not_int', seed);
        seed = nu.nextSeed;
        notices = pushNotice(notices, nu.id, `${caster.name} interrompeu ${state.enemy.castState?.name}!`, 'boss');
        cues.push('interrupt');
      }
      return;
    }

    if (skill.role === 'heal') {
      if (skill.target === 'party') {
        const healAmount = Math.max(8, Math.round(derived.matk * skill.power));
        let healedAny = 0;
        party = party.map((ally) => {
          if (ally.currentHp <= 0) return ally;
          const ad = computeDerivedStats(ally);
          const actual = Math.min(ad.maxHp - ally.currentHp, healAmount);
          if (actual <= 0) return ally;
          healedAny += actual;
          const u = makeUid('ft_heal', seed);
          seed = u.nextSeed;
          const ft = addFloatingText(floatingTexts, u.id, ally.id, `+${actual}`, 'heal', seed);
          floatingTexts = ft.list;
          seed = ft.nextSeed;
          return { ...ally, currentHp: ally.currentHp + actual };
        });
        party[casterIndex] = {
          ...party[casterIndex],
          totalHealingDone: party[casterIndex].totalHealingDone + healedAny,
        };
      } else {
        const targetInfo = findLowestHpLivingAlly(party);
        if (targetInfo) {
          const healRaw = Math.max(12, Math.round(derived.matk * skill.power + 16));
          const actual = Math.min(targetInfo.maxHp - targetInfo.hero.currentHp, healRaw);
          party = party.map((ally) =>
            ally.id === targetInfo.hero.id ? { ...ally, currentHp: ally.currentHp + actual } : ally
          );
          party[casterIndex] = {
            ...party[casterIndex],
            totalHealingDone: party[casterIndex].totalHealingDone + actual,
          };
          const u = makeUid('ft_heal', seed);
          seed = u.nextSeed;
          const ft = addFloatingText(
            floatingTexts,
            u.id,
            targetInfo.hero.id,
            `+${actual}`,
            'heal',
            seed
          );
          floatingTexts = ft.list;
          seed = ft.nextSeed;
        }
      }
      cues.push('heal');
      return;
    }

    if (skill.role === 'shield') {
      const targetInfo = findLowestHpLivingAlly(party);
      if (targetInfo) {
        const shieldAmount = Math.max(15, Math.round(derived.matk * skill.power));
        party = party.map((ally) =>
          ally.id === targetInfo.hero.id
            ? { ...ally, shield: Math.max(ally.shield, shieldAmount) }
            : ally
        );
        const u = makeUid('ft_sh', seed);
        seed = u.nextSeed;
        const ft = addFloatingText(
          floatingTexts,
          u.id,
          targetInfo.hero.id,
          `+${shieldAmount} ESC`,
          'shield',
          seed
        );
        floatingTexts = ft.list;
        seed = ft.nextSeed;
        cues.push('shield');
      }
      return;
    }

    if (skill.role === 'buff') {
      party = party.map((ally) => (ally.currentHp > 0 ? { ...ally, buffAtkTimerMs: 6000 } : ally));
      const u = makeUid('ft_buf', seed);
      seed = u.nextSeed;
      const ft = addFloatingText(floatingTexts, u.id, caster.id, '+20% ATK!', 'buff', seed);
      floatingTexts = ft.list;
      seed = ft.nextSeed;
      cues.push('skill');
    }
  };

  // 1. Party actions (skill priority queue -> fallback basic attack)
  for (let i = 0; i < party.length; i++) {
    const hero = party[i];
    if (hero.currentHp <= 0 || enemy.currentHp <= 0) continue;

    if (hero.castState) {
      const nextElapsed = hero.castState.elapsedMs + dt;
      if (nextElapsed >= hero.castState.durationMs) {
        executeSkill(i, hero.castState.skillId);
      } else {
        party[i] = {
          ...hero,
          castState: { ...hero.castState, elapsedMs: nextElapsed },
          animState: 'cast',
        };
      }
      continue;
    }

    // Try skill priority queue
    let startedSkill = false;
    for (const skillId of hero.skillOrder) {
      const skill = SKILLS_CATALOG[skillId];
      if (!skill) continue;
      if ((hero.cooldowns[skillId] ?? 0) > 0) continue;
      if (hero.currentMp < skill.mpCost) continue;

      if (skill.role === 'heal') {
        const lowest = findLowestHpLivingAlly(party);
        if (!lowest || lowest.ratio >= 0.85) continue;
      } else if (skill.role === 'shield') {
        const lowest = findLowestHpLivingAlly(party);
        if (!lowest || lowest.hero.shield >= lowest.maxHp * 0.2) continue;
      } else if (skill.role === 'buff') {
        if (hero.buffAtkTimerMs > 1500) continue;
      }

      // Consume MP and start cast or fire immediately
      party[i] = {
        ...party[i],
        currentMp: party[i].currentMp - skill.mpCost,
      };
      if (skill.castTimeMs > 0) {
        party[i] = {
          ...party[i],
          castState: {
            skillId: skill.id,
            skillName: skill.name,
            elapsedMs: 0,
            durationMs: skill.castTimeMs,
          },
          animState: 'cast',
        };
      } else {
        executeSkill(i, skill.id);
      }
      startedSkill = true;
      break;
    }

    if (startedSkill || enemy.currentHp <= 0) continue;

    // Basic attack governed strictly by ASPD
    const derived = computeDerivedStats(party[i]);
    const nextTimer = party[i].attackTimerMs - dt;
    if (nextTimer <= 0) {
      const critRoll = nextRandom(seed);
      seed = critRoll.nextSeed;
      const isCrit = critRoll.value < derived.critChance;
      const mitigated = computeMitigatedDamage(derived.atk, enemy.def, 1.0, isCrit);
      const dealt = applyEffectiveDamage(enemy.currentHp, mitigated);
      enemy = {
        ...enemy,
        currentHp: Math.max(0, enemy.currentHp - dealt),
        animState: 'hit',
        animTimerMs: 190,
      };
      party[i] = {
        ...party[i],
        attackTimerMs: getAttackIntervalMs(derived.aspd),
        animState: 'attack',
        animTimerMs: 240,
        totalDamageDealt: party[i].totalDamageDealt + dealt,
      };
      encounterDamageTotal += dealt;

      const u = makeUid('ft_atk', seed);
      seed = u.nextSeed;
      const ft = addFloatingText(
        floatingTexts,
        u.id,
        'enemy',
        isCrit ? `${dealt}!` : `${dealt}`,
        isCrit ? 'crit' : 'damage',
        seed
      );
      floatingTexts = ft.list;
      seed = ft.nextSeed;
      cues.push(isCrit ? 'crit' : 'hit');
    } else {
      party[i] = { ...party[i], attackTimerMs: nextTimer };
    }
  }

  // 2. Enemy actions (Boss phase 2, telegraph cast, basic attack)
  if (enemy.currentHp > 0) {
    if (enemy.isBoss && enemy.phase === 1 && enemy.currentHp <= enemy.maxHp * 0.5) {
      enemy = {
        ...enemy,
        phase: 2,
        atk: Math.round(enemy.atk * 1.18),
        attackIntervalMs: Math.max(1050, Math.round(enemy.attackIntervalMs * 0.85)),
      };
      const nu = makeUid('not_ph2', seed);
      seed = nu.nextSeed;
      notices = pushNotice(notices, nu.id, `${enemy.name} entrou em Fúria (Fase 2)!`, 'boss');
      cues.push('bossHorn');
    }

    const applyHitToHero = (targetIndex: number, rawPower: number) => {
      const target = party[targetIndex];
      if (!target || target.currentHp <= 0) return;
      const td = computeDerivedStats(target);

      const fleeRoll = nextRandom(seed);
      seed = fleeRoll.nextSeed;
      if (fleeRoll.value < td.flee * 0.65) {
        const u = makeUid('ft_miss', seed);
        seed = u.nextSeed;
        const ft = addFloatingText(floatingTexts, u.id, target.id, 'Esquiva', 'miss', seed);
        floatingTexts = ft.list;
        seed = ft.nextSeed;
        return;
      }

      const dmg = computeMitigatedDamage(enemy.atk, td.def, rawPower, false);
      const absorbed = Math.min(target.shield, dmg);
      const afterShield = dmg - absorbed;
      const hpLost = applyEffectiveDamage(target.currentHp, afterShield);
      party[targetIndex] = {
        ...target,
        shield: target.shield - absorbed,
        currentHp: Math.max(0, target.currentHp - hpLost),
        animState: target.currentHp - hpLost <= 0 ? 'dead' : 'hit',
        animTimerMs: 220,
      };
      const u = makeUid('ft_edmg', seed);
      seed = u.nextSeed;
      const ft = addFloatingText(
        floatingTexts,
        u.id,
        target.id,
        hpLost > 0 ? `-${hpLost}` : 'Bloq',
        hpLost > 0 ? 'damage' : 'shield',
        seed
      );
      floatingTexts = ft.list;
      seed = ft.nextSeed;
    };

    const pickFrontTargetIndex = (): number => {
      const frontAlive = party
        .map((h, idx) => ({ h, idx }))
        .filter((x) => x.h.currentHp > 0 && x.h.formationRow === 'front');
      const pool =
        frontAlive.length > 0
          ? frontAlive
          : party.map((h, idx) => ({ h, idx })).filter((x) => x.h.currentHp > 0);
      if (pool.length === 0) return -1;
      const r = nextRandom(seed);
      seed = r.nextSeed;
      return pool[Math.floor(r.value * pool.length)].idx;
    };

    if (enemy.castState) {
      const nextElapsed = enemy.castState.elapsedMs + dt;
      if (nextElapsed >= enemy.castState.durationMs) {
        const cast = enemy.castState;
        enemy = { ...enemy, castState: null, animState: 'attack', animTimerMs: 280 };
        if (cast.aoe) {
          for (let i = 0; i < party.length; i++) {
            if (party[i].currentHp > 0) applyHitToHero(i, cast.power);
          }
        } else {
          const idx = pickFrontTargetIndex();
          if (idx >= 0) applyHitToHero(idx, cast.power);
        }
        cues.push('hit');
      } else {
        enemy = { ...enemy, castState: { ...enemy.castState, elapsedMs: nextElapsed } };
      }
    } else {
      if (enemy.isBoss) {
        const nextBossCd = enemy.bossSkillCooldownMs - dt;
        if (nextBossCd <= 0) {
          enemy = {
            ...enemy,
            bossSkillCooldownMs: enemy.phase === 2 ? 6200 : 7800,
            castState: {
              name: enemy.phase === 2 ? 'Ruptura da Fenda' : 'Golpe Sísmico',
              elapsedMs: 0,
              durationMs: 2100,
              interruptible: true,
              aoe: enemy.phase === 2,
              power: enemy.phase === 2 ? 1.3 : 1.55,
            },
          };
        } else {
          enemy = { ...enemy, bossSkillCooldownMs: nextBossCd };
        }
      }

      const nextAtkTimer = enemy.attackTimerMs - dt;
      if (nextAtkTimer <= 0 && !enemy.castState) {
        const idx = pickFrontTargetIndex();
        if (idx >= 0) {
          applyHitToHero(idx, 1.0);
        }
        enemy = {
          ...enemy,
          attackTimerMs: enemy.attackIntervalMs,
          animState: 'attack',
          animTimerMs: 250,
        };
      } else {
        enemy = { ...enemy, attackTimerMs: nextAtkTimer };
      }
    }
  }

  // 3. Check Enemy Defeat (Victory / Wave Clear / Loot Drop)
  if (enemy.currentHp <= 0) {
    let anyPlayerLeveled = false;
    let unlockedBaseClass = state.classSelectionPending;

    party = party.map((h) => {
      const res = applyXpAndLevelUp(h, enemy.xpReward);
      if (h.isPlayer && res.leveledUp) anyPlayerLeveled = true;
      if (res.unlockedBaseClass) unlockedBaseClass = true;
      return res.hero;
    });

    if (anyPlayerLeveled) {
      cues.push('levelUp');
      const nu = makeUid('not_lvl', seed);
      seed = nu.nextSeed;
      notices = pushNotice(
        notices,
        nu.id,
        `Você alcançou o Nível ${party[0].level}! (+3 Pontos de Atributo)`,
        'level'
      );
    }

    let inventory = [...state.inventory];
    let droppedItem: EquipmentItem | null = null;
    let lastDropHighlightId = state.lastDropHighlightId;

    const dropRoll = nextRandom(seed);
    seed = dropRoll.nextSeed;
    const dropChance = enemy.isBoss ? 1.0 : 0.24;
    if (dropRoll.value < dropChance) {
      const uid = makeUid('item', seed);
      seed = uid.nextSeed;
      const rngFn = () => {
        const r = nextRandom(seed);
        seed = r.nextSeed;
        return r.value;
      };
      droppedItem = generateEquipmentDrop(state.stage, enemy.isBoss, rngFn, uid.id);
      inventory = [droppedItem, ...inventory].slice(0, 48);
      lastDropHighlightId = droppedItem.id;
      cues.push('drop');
      const nu = makeUid('not_drop', seed);
      seed = nu.nextSeed;
      notices = pushNotice(notices, nu.id, `Drop: ${droppedItem.name}`, 'loot');
    }

    const gold = state.gold + enemy.goldReward;

    if (state.isBossBattle) {
      const durationSec = Number(Math.max(1, bossBattleElapsedMs / 1000).toFixed(1));
      const partyDps = Math.round(encounterDamageTotal / Math.max(1, durationSec));
      const nextStage = state.stage + 1;
      const nextCheckpoint = Math.max(state.checkpointStage, nextStage);
      const mobUid = makeUid('mob', seed);
      seed = mobUid.nextSeed;

      cues.push('victory');
      const nu = makeUid('not_boss_win', seed);
      seed = nu.nextSeed;
      notices = pushNotice(
        notices,
        nu.id,
        `Chefe derrotado! Estágio ${nextStage} desbloqueado.`,
        'boss'
      );

      return {
        nextState: {
          ...state,
          gold,
          stage: nextStage,
          checkpointStage: nextCheckpoint,
          waveInStage: 1,
          isBossBattle: false,
          bossBattleElapsedMs: 0,
          bossOutcome: {
            outcome: 'victory',
            stage: state.stage,
            bossName: enemy.name,
            durationSec,
            xpGained: enemy.xpReward,
            goldGained: enemy.goldReward,
            droppedItem,
            partyDps,
          },
          classSelectionPending: unlockedBaseClass,
          party: restorePartyFull(party),
          enemy: spawnEnemyForStage(nextStage, false, 1, mobUid.id),
          inventory,
          floatingTexts,
          recentNotices: notices,
          rngSeed: seed,
          encounterDamageTotal: 0,
          lastDropHighlightId,
        },
        cues,
      };
    }

    // Normal mob defeated -> next wave
    const nextWave = state.waveInStage >= state.wavesPerStage ? 1 : state.waveInStage + 1;
    const mobUid = makeUid('mob', seed);
    seed = mobUid.nextSeed;

    return {
      nextState: {
        ...state,
        gold,
        waveInStage: nextWave,
        classSelectionPending: unlockedBaseClass,
        party,
        enemy: spawnEnemyForStage(state.stage, false, nextWave, mobUid.id),
        inventory,
        floatingTexts,
        recentNotices: notices,
        rngSeed: seed,
        encounterDamageTotal: 0,
        lastDropHighlightId,
      },
      cues,
    };
  }

  // 4. Check Party Wipe (Defeat)
  const anyAlive = party.some((h) => h.currentHp > 0);
  if (!anyAlive) {
    const returnStage = state.checkpointStage;
    const mobUid = makeUid('mob', seed);
    seed = mobUid.nextSeed;
    cues.push('defeat');

    if (state.isBossBattle) {
      const durationSec = Number(Math.max(1, bossBattleElapsedMs / 1000).toFixed(1));
      const partyDps = Math.round(encounterDamageTotal / Math.max(1, durationSec));
      const nu = makeUid('not_boss_loss', seed);
      seed = nu.nextSeed;
      notices = pushNotice(
        notices,
        nu.id,
        `Derrota no chefe! Retornando ao farm no Estágio ${returnStage}.`,
        'boss'
      );

      return {
        nextState: {
          ...state,
          stage: returnStage,
          waveInStage: 1,
          isBossBattle: false,
          bossBattleElapsedMs: 0,
          bossOutcome: {
            outcome: 'defeat',
            stage: state.stage,
            bossName: enemy.name,
            durationSec,
            xpGained: 0,
            goldGained: 0,
            droppedItem: null,
            partyDps,
          },
          party: restorePartyFull(party),
          enemy: spawnEnemyForStage(returnStage, false, 1, mobUid.id),
          floatingTexts: [],
          recentNotices: notices,
          rngSeed: seed,
          encounterDamageTotal: 0,
        },
        cues,
      };
    }

    const nu = makeUid('not_wipe', seed);
    seed = nu.nextSeed;
    notices = pushNotice(notices, nu.id, 'Party reagrupada no acampamento!', 'info');

    return {
      nextState: {
        ...state,
        stage: returnStage,
        waveInStage: 1,
        party: restorePartyFull(party),
        enemy: spawnEnemyForStage(returnStage, false, 1, mobUid.id),
        floatingTexts: [],
        recentNotices: notices,
        rngSeed: seed,
        encounterDamageTotal: 0,
      },
      cues,
    };
  }

  return {
    nextState: {
      ...state,
      bossBattleElapsedMs,
      party,
      enemy,
      floatingTexts,
      recentNotices: notices,
      rngSeed: seed,
      encounterDamageTotal,
    },
    cues,
  };
}

export function tickCombat(state: GameState, rawDtMs: number): GameState {
  return stepCombat(state, rawDtMs).nextState;
}

export function challengeBoss(state: GameState): GameState {
  if (state.isBossBattle) return state;
  const uid = makeUid('boss', state.rngSeed);
  const nu = makeUid('not_boss', uid.nextSeed);
  return {
    ...state,
    screen: 'playing',
    activeTab: 'arena',
    isBossBattle: true,
    bossBattleElapsedMs: 0,
    bossOutcome: null,
    party: restorePartyFull(state.party),
    enemy: spawnEnemyForStage(state.stage, true, 1, uid.id),
    floatingTexts: [],
    recentNotices: pushNotice(
      state.recentNotices,
      nu.id,
      `Desafio ao Chefe do Estágio ${state.stage} iniciado!`,
      'boss'
    ),
    rngSeed: nu.nextSeed,
    encounterDamageTotal: 0,
  };
}

export function retreatFromBoss(state: GameState): GameState {
  if (!state.isBossBattle) return state;
  const uid = makeUid('mob', state.rngSeed);
  const nu = makeUid('not_retreat', uid.nextSeed);
  return {
    ...state,
    isBossBattle: false,
    bossBattleElapsedMs: 0,
    stage: state.checkpointStage,
    waveInStage: 1,
    party: restorePartyFull(state.party),
    enemy: spawnEnemyForStage(state.checkpointStage, false, 1, uid.id),
    floatingTexts: [],
    recentNotices: pushNotice(
      state.recentNotices,
      nu.id,
      `Recuou para o farm automático no Estágio ${state.checkpointStage}.`,
      'info'
    ),
    rngSeed: nu.nextSeed,
    encounterDamageTotal: 0,
  };
}

export function allocateAttribute(state: GameState, attr: AttributeKey): GameState {
  const player = state.party[0];
  if (!player || player.unspentPoints <= 0) return state;

  const updatedPlayer: HeroUnit = {
    ...player,
    unspentPoints: player.unspentPoints - 1,
    attributes: {
      ...player.attributes,
      [attr]: player.attributes[attr] + 1,
    },
  };
  const newStats = computeDerivedStats(updatedPlayer);
  updatedPlayer.currentHp = Math.min(newStats.maxHp, updatedPlayer.currentHp + 12);

  return {
    ...state,
    party: [updatedPlayer, ...state.party.slice(1)],
  };
}

export function resetAttributes(state: GameState): GameState {
  const player = state.party[0];
  if (!player) return state;

  const baseAttr: Attributes = { str: 3, agi: 2, vit: 3, int: 1, dex: 2, luk: 1 };
  const currentTotal =
    player.attributes.str +
    player.attributes.agi +
    player.attributes.vit +
    player.attributes.int +
    player.attributes.dex +
    player.attributes.luk;
  const baseTotal = 12;
  const refunded = Math.max(0, currentTotal - baseTotal);
  if (refunded === 0) return state;

  const updatedPlayer: HeroUnit = {
    ...player,
    attributes: baseAttr,
    unspentPoints: player.unspentPoints + refunded,
  };
  const newStats = computeDerivedStats(updatedPlayer);
  updatedPlayer.currentHp = Math.min(newStats.maxHp, updatedPlayer.currentHp);
  updatedPlayer.currentMp = Math.min(newStats.maxMp, updatedPlayer.currentMp);

  return {
    ...state,
    party: [updatedPlayer, ...state.party.slice(1)],
  };
}

export function chooseBaseClass(state: GameState, baseClass: BaseClass): GameState {
  if (baseClass === 'aprendiz') return state;
  const player = state.party[0];
  if (!player) return state;

  const updatedPlayer: HeroUnit = {
    ...player,
    baseClass,
    skillOrder: [...CLASS_INFO[baseClass].defaultSkills],
    cooldowns: {},
    castState: null,
  };
  const stats = computeDerivedStats(updatedPlayer);
  updatedPlayer.currentHp = stats.maxHp;
  updatedPlayer.currentMp = stats.maxMp;

  const nu = makeUid('not_cls', state.rngSeed);

  return {
    ...state,
    classSelectionPending: false,
    party: [updatedPlayer, ...state.party.slice(1)],
    recentNotices: pushNotice(
      state.recentNotices,
      nu.id,
      `Classe escolhida: ${CLASS_INFO[baseClass].name}! Novas habilidades desbloqueadas.`,
      'level'
    ),
    rngSeed: nu.nextSeed,
  };
}

export function equipItem(state: GameState, itemId: string): GameState {
  const item = state.inventory.find((i) => i.id === itemId);
  if (!item) return state;

  const player = state.party[0];
  if (!player) return state;

  const prevEquipped = player.equipment[item.slot];
  const remainingInventory = state.inventory.filter((i) => i.id !== itemId);
  if (prevEquipped) {
    remainingInventory.push(prevEquipped);
  }

  const updatedPlayer: HeroUnit = {
    ...player,
    equipment: {
      ...player.equipment,
      [item.slot]: item,
    },
  };

  const stats = computeDerivedStats(updatedPlayer);
  updatedPlayer.currentHp = Math.min(stats.maxHp, updatedPlayer.currentHp + (item.stats.maxHp ?? 0));
  updatedPlayer.currentMp = Math.min(stats.maxMp, updatedPlayer.currentMp + (item.stats.maxMp ?? 0));

  const nu = makeUid('not_eq', state.rngSeed);

  return {
    ...state,
    party: [updatedPlayer, ...state.party.slice(1)],
    inventory: remainingInventory,
    lastDropHighlightId: state.lastDropHighlightId === itemId ? null : state.lastDropHighlightId,
    recentNotices: pushNotice(state.recentNotices, nu.id, `Equipou ${item.name}.`, 'info'),
    rngSeed: nu.nextSeed,
  };
}

export function unequipSlot(state: GameState, slot: EquipmentItem['slot']): GameState {
  const player = state.party[0];
  if (!player) return state;
  const current = player.equipment[slot];
  if (!current) return state;

  const updatedPlayer: HeroUnit = {
    ...player,
    equipment: {
      ...player.equipment,
      [slot]: null,
    },
  };
  const stats = computeDerivedStats(updatedPlayer);
  updatedPlayer.currentHp = Math.min(stats.maxHp, updatedPlayer.currentHp);
  updatedPlayer.currentMp = Math.min(stats.maxMp, updatedPlayer.currentMp);

  return {
    ...state,
    party: [updatedPlayer, ...state.party.slice(1)],
    inventory: [current, ...state.inventory],
  };
}

export function sellItem(state: GameState, itemId: string): GameState {
  const item = state.inventory.find((i) => i.id === itemId);
  if (!item) return state;
  return {
    ...state,
    gold: state.gold + item.valueGold,
    inventory: state.inventory.filter((i) => i.id !== itemId),
    lastDropHighlightId: state.lastDropHighlightId === itemId ? null : state.lastDropHighlightId,
  };
}

export function sellCommonItems(state: GameState): GameState {
  let goldGain = 0;
  const kept: EquipmentItem[] = [];
  for (const item of state.inventory) {
    if (item.rarity === 'comum') {
      goldGain += item.valueGold;
    } else {
      kept.push(item);
    }
  }
  if (goldGain === 0) return state;
  const nu = makeUid('not_sell', state.rngSeed);
  return {
    ...state,
    gold: state.gold + goldGain,
    inventory: kept,
    recentNotices: pushNotice(
      state.recentNotices,
      nu.id,
      `Vendeu itens comuns por +${goldGain} Ouro.`,
      'info'
    ),
    rngSeed: nu.nextSeed,
  };
}

export function reorderSkill(
  state: GameState,
  heroId: string,
  skillId: string,
  direction: 'up' | 'down'
): GameState {
  const heroIndex = state.party.findIndex((h) => h.id === heroId);
  if (heroIndex < 0) return state;
  const hero = state.party[heroIndex];
  const idx = hero.skillOrder.indexOf(skillId);
  if (idx < 0) return state;

  const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
  if (swapIdx < 0 || swapIdx >= hero.skillOrder.length) return state;

  const nextOrder = [...hero.skillOrder];
  const temp = nextOrder[idx];
  nextOrder[idx] = nextOrder[swapIdx];
  nextOrder[swapIdx] = temp;

  const nextParty = [...state.party];
  nextParty[heroIndex] = { ...hero, skillOrder: nextOrder };
  return {
    ...state,
    party: nextParty,
  };
}
