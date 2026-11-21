import React from 'react';
import { Crown, Pause, ShieldAlert, Sparkles, Swords, Volume2, VolumeX } from 'lucide-react';
import { CLASS_INFO, getStageBiome } from '../game/catalog';
import { computeDerivedStats } from '../game/formulas';
import { FloatingText, GameState, HeroUnit } from '../game/types';
import { MonsterSvg } from './MonsterSvg';
import { PaperdollSvg } from './PaperdollSvg';

interface ArenaViewProps {
  state: GameState;
  onChallengeBoss: () => void;
  onRetreatBoss: () => void;
  onToggleMute: () => void;
  onPause: () => void;
  onOpenClassModal: () => void;
}

function getFloatingStyle(kind: FloatingText['kind']): string {
  switch (kind) {
    case 'crit':
      return 'text-lg font-extrabold text-[#E7BD68]';
    case 'heal':
      return 'text-sm font-bold text-emerald-300';
    case 'shield':
      return 'text-xs font-bold text-[#55B9B0]';
    case 'interrupt':
      return 'text-sm font-extrabold text-amber-300 tracking-wide';
    case 'buff':
      return 'text-xs font-bold text-amber-200';
    case 'miss':
      return 'text-xs font-semibold text-slate-300';
    case 'damage':
    default:
      return 'text-sm font-bold text-white';
  }
}

const HeroCombatSlot: React.FC<{
  hero: HeroUnit;
  floatingTexts: FloatingText[];
}> = ({ hero, floatingTexts }) => {
  const derived = computeDerivedStats(hero);
  const hpPct = Math.max(0, Math.min(100, (hero.currentHp / derived.maxHp) * 100));
  const shieldPct = Math.max(0, Math.min(100, (hero.shield / derived.maxHp) * 100));
  const mpPct = Math.max(0, Math.min(100, (hero.currentMp / derived.maxMp) * 100));
  const cls = CLASS_INFO[hero.baseClass];

  return (
    <div className="relative flex flex-col items-center">
      {/* Floating Numbers anchored above hero */}
      <div className="pointer-events-none absolute -top-4 left-1/2 z-30 w-28">
        {floatingTexts.map((ft) => (
          <div
            key={ft.id}
            style={{
              left: `calc(50% + ${ft.offsetX}px)`,
              top: `${ft.offsetY}px`,
              textShadow: '0 2px 4px rgba(0,0,0,0.92)',
            }}
            className={`anim-float-up font-mono-num absolute whitespace-nowrap ${getFloatingStyle(ft.kind)}`}
          >
            {ft.text}
          </div>
        ))}
      </div>

      {/* Skill Cast Bar above Paperdoll */}
      {hero.castState && (
        <div className="mb-0.5 w-20 rounded bg-[#0e1626]/90 px-1.5 py-0.5 border border-[#55B9B0]/70">
          <div className="truncate text-[9px] font-semibold text-[#55B9B0] text-center">
            {hero.castState.skillName}
          </div>
          <div className="mt-0.5 h-1 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full bg-[#55B9B0] transition-all duration-75"
              style={{
                width: `${Math.min(100, (hero.castState.elapsedMs / hero.castState.durationMs) * 100)}%`,
              }}
            />
          </div>
        </div>
      )}

      <PaperdollSvg hero={hero} size={74} />

      {/* Compact HP / Shield / MP Plate */}
      <div className="mt-0.5 w-[78px] rounded-md border border-[#4969A8]/55 bg-[#0e1626]/92 px-1.5 py-1 shadow-md">
        <div className="flex items-center justify-between text-[10px] leading-none">
          <span
            className={`truncate font-bold ${hero.isPlayer ? 'text-[#E7BD68]' : 'text-[#F3EBDD]'}`}
          >
            {hero.name}
          </span>
          <span className="font-mono-num text-[9px] text-[#D7CEBE]/80" style={{ color: cls.accentColor }}>
            {cls.name.slice(0, 3)}
          </span>
        </div>
        {/* HP Bar + Shield Overlay */}
        <div className="relative mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full bg-emerald-500 transition-all duration-100"
            style={{ width: `${hpPct}%` }}
          />
          {shieldPct > 0 && (
            <div
              className="absolute top-0 right-0 h-full bg-[#55B9B0]/85"
              style={{ width: `${Math.min(100, shieldPct)}%` }}
            />
          )}
        </div>
        {/* MP Sliver */}
        <div className="mt-0.5 h-1 w-full overflow-hidden rounded-full bg-slate-900">
          <div
            className="h-full bg-sky-400 transition-all duration-100"
            style={{ width: `${mpPct}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export const ArenaView: React.FC<ArenaViewProps> = ({
  state,
  onChallengeBoss,
  onRetreatBoss,
  onToggleMute,
  onPause,
  onOpenClassModal,
}) => {
  const biome = getStageBiome(state.stage);
  const player = state.party[0];
  const backRow = state.party.filter((h) => h.formationRow === 'back');
  const frontRow = state.party.filter((h) => h.formationRow === 'front');

  const enemyHpPct = Math.max(
    0,
    Math.min(100, (state.enemy.currentHp / state.enemy.maxHp) * 100)
  );
  const enemyFloats = state.floatingTexts.filter((f) => f.targetId === 'enemy');
  const latestNotice = state.recentNotices[0];

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-[#121D33]">
      {/* Top Minimal HUD Bar */}
      <header className="z-20 flex items-center justify-between border-b border-[#4969A8]/40 bg-[#0e1626] px-3 py-2">
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#F3EBDD]">
            <span className="font-display text-[#E7BD68]">Estágio {state.stage}</span>
            <span className="text-[#4969A8]">·</span>
            <span className="truncate">{biome.name}</span>
          </div>
          <div className="font-mono-num mt-0.5 flex items-center gap-1.5 text-[11px] text-[#D7CEBE]">
            {state.isBossBattle ? (
              <span className="font-bold text-rose-400">
                CHEFE · Fase {state.enemy.phase}
              </span>
            ) : (
              <span>
                Onda {state.waveInStage}/{state.wavesPerStage}
              </span>
            )}
            <span className="text-[#4969A8]">·</span>
            <span className="text-[#E7BD68]">{state.gold} Ouro</span>
            <span className="text-[#4969A8]">·</span>
            <span className="text-[#55B9B0]">Nv {player.level}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onToggleMute}
            aria-label={state.muted ? 'Ativar som' : 'Silenciar som'}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#4969A8]/40 bg-[#182844] text-[#D7CEBE] hover:border-[#E7BD68] hover:text-[#E7BD68] cursor-pointer"
          >
            {state.muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={onPause}
            aria-label="Pausar jogo"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#4969A8]/40 bg-[#182844] text-[#D7CEBE] hover:border-[#E7BD68] hover:text-[#E7BD68] cursor-pointer"
          >
            <Pause className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Illustrated Combat Stage */}
      <div
        className="relative flex-1 overflow-hidden"
        style={{ background: biome.fallbackGradient }}
      >
        <img
          src={biome.bgImage}
          alt={biome.name}
          referrerPolicy="no-referrer"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Subtle ground & top readability gradient */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,22,38,0.58) 0%, rgba(14,22,38,0.08) 38%, rgba(14,22,38,0.34) 76%, rgba(14,22,38,0.82) 100%)',
          }}
        />

        {/* Top Enemy / Boss Status Bar */}
        <div className="relative z-20 px-3 pt-2.5">
          <div className="rounded-xl border border-[#4969A8]/55 bg-[#0e1626]/90 px-3 py-2 shadow-lg">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 min-w-0">
                {state.enemy.isBoss && <Crown className="h-4 w-4 shrink-0 text-[#E7BD68]" />}
                <span className="truncate text-xs font-bold text-[#F3EBDD]">
                  {state.enemy.name}
                </span>
              </div>
              <span className="font-mono-num shrink-0 text-[11px] font-semibold text-[#D7CEBE]">
                {state.enemy.currentHp}/{state.enemy.maxHp}
              </span>
            </div>
            <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className={`h-full transition-all duration-100 ${
                  state.enemy.isBoss
                    ? state.enemy.phase === 2
                      ? 'bg-rose-500'
                      : 'bg-amber-500'
                    : 'bg-rose-500'
                }`}
                style={{ width: `${enemyHpPct}%` }}
              />
            </div>

            {/* Boss Telegraph Cast Bar */}
            {state.enemy.castState && (
              <div className="mt-2 rounded-md border border-rose-400/75 bg-rose-950/75 px-2 py-1">
                <div className="flex items-center justify-between text-[10px] font-bold text-rose-200">
                  <span className="flex items-center gap-1">
                    <ShieldAlert className="h-3.5 w-3.5 text-amber-300" />
                    {state.enemy.castState.name}
                  </span>
                  <span>Interrompível</span>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-rose-950">
                  <div
                    className="h-full bg-amber-400 transition-all duration-75"
                    style={{
                      width: `${Math.min(
                        100,
                        (state.enemy.castState.elapsedMs / state.enemy.castState.durationMs) * 100
                      )}%`,
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Combatants Formation Layer */}
        <div className="relative z-10 flex h-[calc(100%-92px)] items-end justify-between px-2.5 pb-4">
          {/* Left: 4-Member Tactical Party Formation (Back Row + Front Row) */}
          <div className="flex items-end gap-1.5">
            {/* Back Row */}
            <div className="flex flex-col gap-2 pb-5">
              {backRow.map((hero) => (
                <HeroCombatSlot
                  key={hero.id}
                  hero={hero}
                  floatingTexts={state.floatingTexts.filter((f) => f.targetId === hero.id)}
                />
              ))}
            </div>
            {/* Front Row */}
            <div className="flex flex-col gap-2">
              {frontRow.map((hero) => (
                <HeroCombatSlot
                  key={hero.id}
                  hero={hero}
                  floatingTexts={state.floatingTexts.filter((f) => f.targetId === hero.id)}
                />
              ))}
            </div>
          </div>

          {/* Right: Animated Enemy / Boss */}
          <div className="relative flex flex-col items-center pb-5 pr-3">
            {/* Enemy Floating Numbers */}
            <div className="pointer-events-none absolute -top-4 left-1/2 z-30 h-10 w-28 -translate-x-1/2">
              {enemyFloats.map((ft) => (
                <div
                  key={ft.id}
                  style={{
                    left: `calc(50% + ${ft.offsetX}px)`,
                    top: `${ft.offsetY}px`,
                    textShadow: '0 2px 5px rgba(0,0,0,0.95)',
                  }}
                  className={`anim-float-up font-mono-num absolute whitespace-nowrap ${getFloatingStyle(ft.kind)}`}
                >
                  {ft.text}
                </div>
              ))}
            </div>

            <MonsterSvg enemy={state.enemy} />
          </div>
        </div>
      </div>

      {/* Bottom Action & Event Strip above Tab Nav */}
      <div className="z-20 border-t border-[#4969A8]/45 bg-[#121D33] px-3 py-2.5">
        <div className="flex items-center gap-2">
          {!state.isBossBattle ? (
            <button
              type="button"
              onClick={onChallengeBoss}
              className="flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-xl border-2 border-[#E7BD68] bg-[#2a3f6b] px-4 py-2 text-sm font-bold text-[#F3EBDD] shadow-md transition-transform active:scale-[0.98] hover:bg-[#354f85] cursor-pointer"
            >
              <Crown className="h-4 w-4 text-[#E7BD68]" />
              <span>Desafiar Chefe</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onRetreatBoss}
              className="flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-xl border border-rose-400/70 bg-rose-950/80 px-4 py-2 text-sm font-bold text-rose-100 transition-colors hover:bg-rose-900/80 cursor-pointer"
            >
              <Swords className="h-4 w-4" />
              <span>Recuar ao Farm</span>
            </button>
          )}

          {state.classSelectionPending && (
            <button
              type="button"
              onClick={onOpenClassModal}
              className="flex min-h-[46px] items-center justify-center gap-1.5 rounded-xl border-2 border-[#55B9B0] bg-[#16424a] px-3 text-xs font-bold text-[#F3EBDD] animate-pulse cursor-pointer"
            >
              <Sparkles className="h-4 w-4 text-[#55B9B0]" />
              <span>Classe Nv 5</span>
            </button>
          )}
        </div>

        {/* Single-line Recent Combat / Loot Notice */}
        {latestNotice && (
          <p
            className={`mt-1.5 truncate text-[11px] font-medium ${
              latestNotice.tone === 'loot'
                ? 'text-sky-300'
                : latestNotice.tone === 'boss'
                  ? 'text-[#E7BD68]'
                  : latestNotice.tone === 'level'
                    ? 'text-emerald-300'
                    : 'text-[#D7CEBE]/85'
            }`}
          >
            {latestNotice.text}
          </p>
        )}
      </div>
    </div>
  );
};
