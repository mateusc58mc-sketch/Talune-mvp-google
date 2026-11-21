export type GameScreenState = 'title' | 'playing' | 'paused' | 'gameover';

export type ActiveTab = 'arena' | 'hero' | 'skills' | 'bag';

export type BaseClass = 'aprendiz' | 'guerreiro' | 'cacador' | 'clerigo' | 'mago';

export type Rarity = 'comum' | 'incomum' | 'rara' | 'epica' | 'lendaria';

export type EquipSlot = 'weapon' | 'armor' | 'cape';

export type AttributeKey = 'str' | 'agi' | 'vit' | 'int' | 'dex' | 'luk';

export interface Attributes {
  str: number;
  agi: number;
  vit: number;
  int: number;
  dex: number;
  luk: number;
}

export interface DerivedStats {
  maxHp: number;
  maxMp: number;
  atk: number;
  matk: number;
  def: number;
  mdef: number;
  aspd: number; // Attacks per second
  haste: number; // Decimal ratio (e.g. 0.25 = 25% faster cooldowns)
  critChance: number; // 0..1
  flee: number; // 0..0.75
}

export type WeaponVisualId =
  | 'sword_wood'
  | 'sword_iron'
  | 'sword_runic'
  | 'axe_berserker'
  | 'bow_hunter'
  | 'bow_elven'
  | 'staff_apprentice'
  | 'staff_arcane'
  | 'mace_holy'
  | 'dagger_shadow';

export type ArmorVisualId =
  | 'tunic_apprentice'
  | 'plate_iron'
  | 'plate_royal'
  | 'leather_forest'
  | 'robe_cleric'
  | 'robe_arcane';

export type CapeVisualId =
  | 'cape_none'
  | 'cape_traveler'
  | 'cape_crimson'
  | 'cape_emerald'
  | 'cape_ether'
  | 'cape_rift';

export interface ItemStats {
  atk?: number;
  matk?: number;
  def?: number;
  maxHp?: number;
  maxMp?: number;
  aspdBonus?: number;
  hasteBonus?: number;
  critBonus?: number;
  str?: number;
  agi?: number;
  vit?: number;
  int?: number;
  dex?: number;
  luk?: number;
}

export interface EquipmentItem {
  id: string;
  templateId: string;
  name: string;
  slot: EquipSlot;
  rarity: Rarity;
  tier: number;
  visualId: WeaponVisualId | ArmorVisualId | CapeVisualId;
  stats: ItemStats;
  valueGold: number;
  description: string;
}

export type SkillRole = 'damage' | 'heal' | 'shield' | 'buff' | 'interrupt';
export type SkillTarget = 'enemy' | 'lowestAlly' | 'party' | 'self';
export type SkillDamageType = 'physical' | 'magical';

export interface SkillDef {
  id: string;
  name: string;
  description: string;
  role: SkillRole;
  damageType: SkillDamageType;
  target: SkillTarget;
  mpCost: number;
  baseCooldownMs: number;
  castTimeMs: number;
  power: number; // Multiplier on ATK/MATK or heal ratio
  accentColor: string;
}

export interface HeroAppearance {
  skinTone: string;
  hairStyle: 'spiky' | 'bob' | 'long' | 'ponytail';
  hairColor: string;
  eyeColor: string;
}

export interface HeroEquipment {
  weapon: EquipmentItem | null;
  armor: EquipmentItem | null;
  cape: EquipmentItem | null;
}

export interface CastState {
  skillId: string;
  skillName: string;
  elapsedMs: number;
  durationMs: number;
}

export type UnitAnimState = 'idle' | 'attack' | 'cast' | 'hit' | 'dead';

export interface HeroUnit {
  id: string;
  name: string;
  isPlayer: boolean;
  formationRow: 'front' | 'back';
  baseClass: BaseClass;
  level: number;
  xp: number;
  xpToNext: number;
  unspentPoints: number;
  attributes: Attributes;
  equipment: HeroEquipment;
  appearance: HeroAppearance;
  skillOrder: string[];
  cooldowns: Record<string, number>;
  castState: CastState | null;
  currentHp: number;
  currentMp: number;
  shield: number;
  buffAtkTimerMs: number;
  attackTimerMs: number;
  animState: UnitAnimState;
  animTimerMs: number;
  totalDamageDealt: number;
  totalHealingDone: number;
}

export type EnemyVisualType = 'slime' | 'wolf' | 'sprout' | 'guardian';

export interface EnemyCastState {
  name: string;
  elapsedMs: number;
  durationMs: number;
  interruptible: boolean;
  aoe: boolean;
  power: number;
}

export interface EnemyUnit {
  id: string;
  templateId: string;
  name: string;
  isBoss: boolean;
  stage: number;
  phase: 1 | 2;
  visualType: EnemyVisualType;
  maxHp: number;
  currentHp: number;
  atk: number;
  def: number;
  attackIntervalMs: number;
  attackTimerMs: number;
  bossSkillCooldownMs: number;
  castState: EnemyCastState | null;
  animState: 'idle' | 'attack' | 'hit' | 'dead';
  animTimerMs: number;
  xpReward: number;
  goldReward: number;
}

export type FloatingTextKind = 'damage' | 'crit' | 'heal' | 'shield' | 'miss' | 'interrupt' | 'buff';

export interface FloatingText {
  id: string;
  targetId: string; // 'enemy' or hero.id
  text: string;
  kind: FloatingTextKind;
  offsetX: number;
  offsetY: number;
  ttlMs: number;
}

export interface CombatEventNotice {
  id: string;
  text: string;
  tone: 'info' | 'loot' | 'boss' | 'level';
}

export interface BossOutcomeSummary {
  outcome: 'victory' | 'defeat';
  stage: number;
  bossName: string;
  durationSec: number;
  xpGained: number;
  goldGained: number;
  droppedItem: EquipmentItem | null;
  partyDps: number;
}

export interface GameState {
  screen: GameScreenState;
  activeTab: ActiveTab;
  muted: boolean;
  stage: number;
  checkpointStage: number;
  waveInStage: number;
  wavesPerStage: number;
  gold: number;
  isBossBattle: boolean;
  bossBattleElapsedMs: number;
  bossOutcome: BossOutcomeSummary | null;
  classSelectionPending: boolean;
  party: HeroUnit[];
  enemy: EnemyUnit;
  inventory: EquipmentItem[];
  floatingTexts: FloatingText[];
  recentNotices: CombatEventNotice[];
  rngSeed: number;
  encounterDamageTotal: number;
  lastDropHighlightId: string | null;
}

export interface StageBiomeConfig {
  id: string;
  name: string;
  subtitle: string;
  bgImage: string;
  fallbackGradient: string;
  mobPool: string[];
  bossId: string;
}
