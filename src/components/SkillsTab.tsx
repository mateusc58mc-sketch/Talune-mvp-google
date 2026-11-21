import React, { useState } from 'react';
import { ArrowDown, ArrowUp, Zap } from 'lucide-react';
import { CLASS_INFO, SKILLS_CATALOG } from '../game/catalog';
import { computeDerivedStats, getEffectiveCooldownMs } from '../game/formulas';
import { GameState } from '../game/types';

interface SkillsTabProps {
  state: GameState;
  onReorderSkill: (heroId: string, skillId: string, direction: 'up' | 'down') => void;
}

export const SkillsTab: React.FC<SkillsTabProps> = ({ state, onReorderSkill }) => {
  const [selectedHeroId, setSelectedHeroId] = useState<string>(state.party[0]?.id ?? 'player');
  const hero = state.party.find((h) => h.id === selectedHeroId) ?? state.party[0];
  const derived = computeDerivedStats(hero);
  const classInfo = CLASS_INFO[hero.baseClass];

  return (
    <div className="talune-scroll flex h-full w-full flex-col overflow-y-auto bg-[#121D33] px-3.5 py-3 pb-5">
      <div>
        <h2 className="font-display text-lg font-bold text-[#F3EBDD]">
          Rotação Tática da Party
        </h2>
        <p className="mt-0.5 text-xs text-[#D7CEBE]/80">
          As habilidades são conjuradas de cima para baixo quando disponíveis. Ajuste a ordem de prioridade de cada membro.
        </p>
      </div>

      {/* Party Member Selector */}
      <div className="mt-3 grid grid-cols-4 gap-1.5">
        {state.party.map((member) => {
          const active = member.id === hero.id;
          const mClass = CLASS_INFO[member.baseClass];
          return (
            <button
              key={member.id}
              type="button"
              onClick={() => setSelectedHeroId(member.id)}
              className={`min-h-[46px] rounded-xl border px-1.5 py-1.5 text-center transition-colors cursor-pointer ${
                active
                  ? 'border-[#E7BD68] bg-[#243963] text-[#F3EBDD]'
                  : 'border-[#4969A8]/40 bg-[#192845] text-[#D7CEBE]/80 hover:border-[#4969A8]'
              }`}
            >
              <div className="truncate text-xs font-bold">{member.name}</div>
              <div className="truncate text-[10px]" style={{ color: mClass.accentColor }}>
                {mClass.name}
              </div>
            </button>
          );
        })}
      </div>

      {/* Hero Haste / Cast Readout */}
      <div className="mt-3 flex items-center justify-between rounded-xl border border-[#4969A8]/40 bg-[#192845]/85 px-3 py-2 text-xs">
        <span className="font-semibold text-[#F3EBDD]">
          {hero.name} · {classInfo.name}
        </span>
        <span className="font-mono-num text-[#55B9B0]">
          Haste {Math.round(derived.haste * 100)}% · MP {Math.floor(hero.currentMp)}/{derived.maxMp}
        </span>
      </div>

      {/* Skill Priority Queue */}
      <div className="mt-3 flex flex-col gap-2.5">
        {hero.skillOrder.map((skillId, idx) => {
          const skill = SKILLS_CATALOG[skillId];
          if (!skill) return null;
          const effectiveCdSec = (
            getEffectiveCooldownMs(skill.baseCooldownMs, derived.haste) / 1000
          ).toFixed(1);
          const remainingCd = (hero.cooldowns[skillId] ?? 0) / 1000;

          return (
            <div
              key={skillId}
              className="flex items-center gap-2.5 rounded-2xl border border-[#4969A8]/50 bg-[#192845] p-3"
            >
              <div
                className="font-mono-num flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#4969A8]/50 bg-[#121D33] text-sm font-extrabold"
                style={{ color: skill.accentColor }}
              >
                {idx + 1}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 shrink-0" style={{ color: skill.accentColor }} />
                  <span className="truncate text-sm font-bold text-[#F3EBDD]">{skill.name}</span>
                </div>
                <p className="mt-0.5 text-[11px] leading-snug text-[#D7CEBE]/85">
                  {skill.description}
                </p>
                <div className="font-mono-num mt-1.5 flex items-center gap-2 text-[10px] text-sky-300">
                  <span>{skill.mpCost} MP</span>
                  <span className="text-[#4969A8]">·</span>
                  <span>Recarga {effectiveCdSec}s</span>
                  {skill.castTimeMs > 0 && (
                    <>
                      <span className="text-[#4969A8]">·</span>
                      <span className="text-amber-300">Conjuração {(skill.castTimeMs / 1000).toFixed(1)}s</span>
                    </>
                  )}
                  {remainingCd > 0 && (
                    <>
                      <span className="text-[#4969A8]">·</span>
                      <span className="text-emerald-300">{remainingCd.toFixed(1)}s</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <button
                  type="button"
                  disabled={idx === 0}
                  onClick={() => onReorderSkill(hero.id, skillId, 'up')}
                  aria-label={`Subir prioridade de ${skill.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#4969A8]/50 bg-[#121D33] text-[#F3EBDD] disabled:opacity-30 hover:border-[#E7BD68] cursor-pointer disabled:cursor-not-allowed"
                >
                  <ArrowUp className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  disabled={idx === hero.skillOrder.length - 1}
                  onClick={() => onReorderSkill(hero.id, skillId, 'down')}
                  aria-label={`Descer prioridade de ${skill.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#4969A8]/50 bg-[#121D33] text-[#F3EBDD] disabled:opacity-30 hover:border-[#E7BD68] cursor-pointer disabled:cursor-not-allowed"
                >
                  <ArrowDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
