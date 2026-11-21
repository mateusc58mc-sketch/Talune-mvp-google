import React from 'react';
import { Plus, RotateCcw, Sparkles, X } from 'lucide-react';
import { CLASS_INFO, RARITY_META } from '../game/catalog';
import { computeDerivedStats } from '../game/formulas';
import { AttributeKey, EquipSlot, GameState } from '../game/types';
import { ItemIconSvg } from './ItemIconSvg';
import { PaperdollSvg } from './PaperdollSvg';

interface CharacterTabProps {
  state: GameState;
  onAllocateAttr: (attr: AttributeKey) => void;
  onResetAttrs: () => void;
  onUnequipSlot: (slot: EquipSlot) => void;
  onOpenClassModal: () => void;
  onGoToBag: () => void;
}

const ATTR_META: { key: AttributeKey; label: string; effect: string }[] = [
  { key: 'str', label: 'STR', effect: 'ATK corpo-a-corpo' },
  { key: 'agi', label: 'AGI', effect: 'ASPD & Esquiva' },
  { key: 'vit', label: 'VIT', effect: 'HP Máx & DEF' },
  { key: 'int', label: 'INT', effect: 'MATK & MP Máx' },
  { key: 'dex', label: 'DEX', effect: 'Haste (Recarga) & Arco' },
  { key: 'luk', label: 'LUK', effect: 'Chance Crítica' },
];

const SLOT_LABELS: Record<EquipSlot, string> = {
  weapon: 'Arma',
  armor: 'Armadura',
  cape: 'Capa',
};

export const CharacterTab: React.FC<CharacterTabProps> = ({
  state,
  onAllocateAttr,
  onResetAttrs,
  onUnequipSlot,
  onOpenClassModal,
  onGoToBag,
}) => {
  const player = state.party[0];
  const derived = computeDerivedStats(player);
  const classInfo = CLASS_INFO[player.baseClass];
  const xpPct = Math.min(100, Math.round((player.xp / player.xpToNext) * 100));

  return (
    <div className="talune-scroll flex h-full w-full flex-col overflow-y-auto bg-[#121D33] px-3.5 py-3 pb-5">
      {/* Header Summary */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-display text-lg font-bold text-[#F3EBDD]">
              {player.name} · Nv {player.level}
            </h2>
            <span
              className="text-xs font-bold"
              style={{ color: classInfo.accentColor }}
            >
              {classInfo.name}
            </span>
          </div>
          <p className="text-[11px] text-[#D7CEBE]/80">{classInfo.roleLabel}</p>
        </div>

        {state.classSelectionPending && (
          <button
            type="button"
            onClick={onOpenClassModal}
            className="flex min-h-[40px] items-center gap-1.5 rounded-xl border border-[#55B9B0] bg-[#16424a] px-3 py-1.5 text-xs font-bold text-[#F3EBDD] cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#55B9B0]" />
            <span>Escolher Classe</span>
          </button>
        )}
      </div>

      {/* XP Bar */}
      <div className="mt-2">
        <div className="font-mono-num flex justify-between text-[11px] text-[#D7CEBE]">
          <span>XP {player.xp}/{player.xpToNext}</span>
          <span>
            {player.baseClass === 'aprendiz' && player.level < 5
              ? `Classe-base no Nv 5`
              : `${xpPct}%`}
          </span>
        </div>
        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full bg-[#55B9B0] transition-all duration-150"
            style={{ width: `${xpPct}%` }}
          />
        </div>
      </div>

      {/* Enlarged Interactive 2D Paperdoll Showcase + 3 Equipment Slots */}
      <div className="mt-3 grid grid-cols-[1.1fr_1fr] gap-2.5 rounded-2xl border border-[#4969A8]/55 bg-[#192845] p-3">
        <div className="relative flex flex-col items-center justify-center rounded-xl border border-[#4969A8]/35 bg-gradient-to-b from-[#21365d] to-[#121D33] py-2">
          <PaperdollSvg hero={{ ...player, animState: 'idle' }} size={138} />
          <span className="mt-1 text-[10px] font-medium text-[#D7CEBE]/75">
            Visualização ao vivo
          </span>
        </div>

        <div className="flex flex-col justify-between gap-2">
          {(['weapon', 'armor', 'cape'] as EquipSlot[]).map((slot) => {
            const item = player.equipment[slot];
            const rarity = item ? RARITY_META[item.rarity] : null;
            return (
              <div
                key={slot}
                className={`flex items-center gap-2 rounded-xl border p-1.5 ${
                  rarity ? `${rarity.borderClass} ${rarity.bgClass}` : 'border-[#4969A8]/35 bg-[#121D33]/70'
                }`}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0e1626]/80">
                  <ItemIconSvg item={item} fallbackSlot={slot} size={28} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] uppercase tracking-wider text-[#D7CEBE]/70">
                    {SLOT_LABELS[slot]}
                  </div>
                  {item ? (
                    <div className={`truncate text-xs font-bold ${rarity?.textClass}`}>
                      {rarity?.symbol} {item.name}
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={onGoToBag}
                      className="text-left text-[11px] font-semibold text-[#55B9B0] hover:underline cursor-pointer"
                    >
                      Equipar na Bolsa
                    </button>
                  )}
                </div>
                {item && (
                  <button
                    type="button"
                    onClick={() => onUnequipSlot(slot)}
                    aria-label={`Remover ${item.name}`}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white cursor-pointer"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Derived Stats Summary */}
      <div className="mt-3 rounded-2xl border border-[#4969A8]/45 bg-[#192845]/85 p-3">
        <div className="text-xs font-bold uppercase tracking-wider text-[#E7BD68]">
          Status de Combate
        </div>
        <div className="font-mono-num mt-2 grid grid-cols-4 gap-2 text-center">
          <div className="rounded-lg bg-[#121D33] px-1.5 py-1.5">
            <div className="text-[10px] text-[#D7CEBE]/75">ATK</div>
            <div className="text-xs font-bold text-[#F3EBDD]">{derived.atk}</div>
          </div>
          <div className="rounded-lg bg-[#121D33] px-1.5 py-1.5">
            <div className="text-[10px] text-[#D7CEBE]/75">MATK</div>
            <div className="text-xs font-bold text-[#55B9B0]">{derived.matk}</div>
          </div>
          <div className="rounded-lg bg-[#121D33] px-1.5 py-1.5">
            <div className="text-[10px] text-[#D7CEBE]/75">DEF</div>
            <div className="text-xs font-bold text-[#F3EBDD]">{derived.def}</div>
          </div>
          <div className="rounded-lg bg-[#121D33] px-1.5 py-1.5">
            <div className="text-[10px] text-[#D7CEBE]/75">HP Máx</div>
            <div className="text-xs font-bold text-emerald-300">{derived.maxHp}</div>
          </div>
          <div className="rounded-lg bg-[#121D33] px-1.5 py-1.5">
            <div className="text-[10px] text-[#D7CEBE]/75">ASPD</div>
            <div className="text-xs font-bold text-[#E7BD68]">{derived.aspd.toFixed(2)}/s</div>
          </div>
          <div className="rounded-lg bg-[#121D33] px-1.5 py-1.5">
            <div className="text-[10px] text-[#D7CEBE]/75">Haste</div>
            <div className="text-xs font-bold text-sky-300">{Math.round(derived.haste * 100)}%</div>
          </div>
          <div className="rounded-lg bg-[#121D33] px-1.5 py-1.5">
            <div className="text-[10px] text-[#D7CEBE]/75">CRIT</div>
            <div className="text-xs font-bold text-amber-300">{Math.round(derived.critChance * 100)}%</div>
          </div>
          <div className="rounded-lg bg-[#121D33] px-1.5 py-1.5">
            <div className="text-[10px] text-[#D7CEBE]/75">Esquiva</div>
            <div className="text-xs font-bold text-[#D7CEBE]">{Math.round(derived.flee * 100)}%</div>
          </div>
        </div>
      </div>

      {/* 6-Attribute Allocation */}
      <div className="mt-3 rounded-2xl border border-[#4969A8]/45 bg-[#192845]/85 p-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E7BD68]">
              Atributos
            </span>
            <span className="font-mono-num ml-2 text-xs font-bold text-[#55B9B0]">
              {player.unspentPoints} pontos livres
            </span>
          </div>
          <button
            type="button"
            onClick={onResetAttrs}
            className="flex min-h-[36px] items-center gap-1 rounded-lg border border-[#4969A8]/50 bg-[#121D33] px-2.5 text-[11px] font-semibold text-[#D7CEBE] hover:border-[#E7BD68] hover:text-[#E7BD68] cursor-pointer"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Resetar</span>
          </button>
        </div>

        <div className="mt-2.5 grid grid-cols-2 gap-2">
          {ATTR_META.map((a) => (
            <div
              key={a.key}
              className="flex items-center justify-between rounded-xl border border-[#4969A8]/35 bg-[#121D33] px-2.5 py-1.5"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-extrabold text-[#F3EBDD]">{a.label}</span>
                  <span className="font-mono-num text-sm font-bold text-[#E7BD68]">
                    {player.attributes[a.key]}
                  </span>
                </div>
                <div className="truncate text-[10px] text-[#D7CEBE]/70">{a.effect}</div>
              </div>
              <button
                type="button"
                disabled={player.unspentPoints <= 0}
                onClick={() => onAllocateAttr(a.key)}
                aria-label={`Aumentar ${a.label}`}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#55B9B0]/60 bg-[#183344] text-[#55B9B0] transition-colors disabled:opacity-30 hover:bg-[#1e465c] cursor-pointer disabled:cursor-not-allowed"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
