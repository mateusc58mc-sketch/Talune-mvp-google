import assert from 'node:assert/strict';
import test from 'node:test';
import {
  allocateAttribute,
  challengeBoss,
  chooseBaseClass,
  createInitialGameState,
  equipItem,
  reorderSkill,
  retreatFromBoss,
  tickCombat,
} from './engine';
import {
  applyEffectiveDamage,
  computeDerivedStats,
  getAttackIntervalMs,
  getEffectiveCooldownMs,
} from './formulas';

test('ASPD strictly controls basic attack interval and Haste strictly controls skill cooldowns', () => {
  const interval1 = getAttackIntervalMs(1.0);
  const interval2 = getAttackIntervalMs(2.0);
  assert.equal(interval1, 1000);
  assert.equal(interval2, 500);

  const cdNoHaste = getEffectiveCooldownMs(4000, 0);
  const cdWithHaste = getEffectiveCooldownMs(4000, 1.0);
  assert.equal(cdNoHaste, 4000);
  assert.equal(cdWithHaste, 2000);

  // Verify DEX increases haste without increasing ASPD, while AGI increases ASPD without increasing haste
  const base = createInitialGameState().party[0];
  const baseStats = computeDerivedStats(base);

  const highAgi = { ...base, attributes: { ...base.attributes, agi: base.attributes.agi + 10 } };
  const highAgiStats = computeDerivedStats(highAgi);
  assert.ok(highAgiStats.aspd > baseStats.aspd);
  assert.equal(highAgiStats.haste, baseStats.haste);

  const highDex = { ...base, attributes: { ...base.attributes, dex: base.attributes.dex + 10 } };
  const highDexStats = computeDerivedStats(highDex);
  assert.ok(highDexStats.haste > baseStats.haste);
  assert.equal(highDexStats.aspd, baseStats.aspd);
});

test('Damage capping prevents overkill / negative HP', () => {
  assert.equal(applyEffectiveDamage(15, 999), 15);
  assert.equal(applyEffectiveDamage(0, 50), 0);
  assert.equal(applyEffectiveDamage(100, 27), 27);
});

test('Attribute allocation and equipment equipping update stats immediately', () => {
  let state = createInitialGameState();
  state.screen = 'playing';

  const before = computeDerivedStats(state.party[0]);
  state = allocateAttribute(state, 'str');
  const afterAttr = computeDerivedStats(state.party[0]);
  assert.ok(afterAttr.atk > before.atk);
  assert.equal(state.party[0].unspentPoints, 2);

  // Equip starter bag Espada de Ferro do Vale
  const bagSword = state.inventory.find((i) => i.id === 'bag_init_sword_iron');
  assert.ok(bagSword);
  state = equipItem(state, bagSword.id);
  assert.equal(state.party[0].equipment.weapon?.visualId, 'sword_iron');
  const afterEquip = computeDerivedStats(state.party[0]);
  assert.ok(afterEquip.atk > afterAttr.atk);
});

test('Skill priority reorder and heal skip rule work correctly', () => {
  let state = createInitialGameState();
  state.screen = 'playing';

  // At full HP, heal skill (primeiros_socorros) must be skipped even if placed first
  state = reorderSkill(state, 'player', 'primeiros_socorros', 'up');
  assert.equal(state.party[0].skillOrder[0], 'primeiros_socorros');

  state = tickCombat(state, 50);
  // Player should NOT have started casting primeiros_socorros since everyone is full HP
  assert.equal(state.party[0].castState, null);
  // Instead, player should have executed golpe_duplo (cooldown set)
  assert.ok((state.party[0].cooldowns.golpe_duplo ?? 0) > 0);
});

test('Level 5 unlocks Base Class selection and Boss victory advances stage & checkpoint', () => {
  let state = createInitialGameState();
  state.screen = 'playing';

  // Simulate leveling up to Lv 5 by defeating waves
  state.party = state.party.map((h) => ({ ...h, level: 4, xp: 70, xpToNext: 75 }));
  state.enemy = { ...state.enemy, currentHp: 1, xpReward: 20 };
  state = tickCombat(state, 50);

  assert.equal(state.party[0].level, 5);
  assert.equal(state.classSelectionPending, true);

  state = chooseBaseClass(state, 'guerreiro');
  assert.equal(state.classSelectionPending, false);
  assert.equal(state.party[0].baseClass, 'guerreiro');
  assert.ok(state.party[0].skillOrder.includes('impacto_escudo'));

  // Challenge Boss and win
  state = challengeBoss(state);
  assert.equal(state.isBossBattle, true);
  assert.equal(state.enemy.isBoss, true);

  state.enemy = { ...state.enemy, currentHp: 1 };
  state = tickCombat(state, 50);

  assert.equal(state.isBossBattle, false);
  assert.equal(state.stage, 2);
  assert.equal(state.checkpointStage, 2);
  assert.equal(state.bossOutcome?.outcome, 'victory');
  assert.ok(state.bossOutcome?.droppedItem !== null);
});

test('Boss defeat or retreat returns party to checkpoint automatic farm at full HP', () => {
  let state = createInitialGameState();
  state.screen = 'playing';
  state.stage = 2;
  state.checkpointStage = 2;

  state = challengeBoss(state);
  assert.equal(state.isBossBattle, true);

  // Simulate party wipe during boss
  state.party = state.party.map((h) => ({ ...h, currentHp: 0 }));
  state = tickCombat(state, 50);

  assert.equal(state.isBossBattle, false);
  assert.equal(state.stage, 2);
  assert.equal(state.bossOutcome?.outcome, 'defeat');
  assert.ok(state.party.every((h) => h.currentHp > 0));

  // Also test manual retreat
  state = challengeBoss(state);
  assert.equal(state.isBossBattle, true);
  state = retreatFromBoss(state);
  assert.equal(state.isBossBattle, false);
  assert.equal(state.enemy.isBoss, false);
});
