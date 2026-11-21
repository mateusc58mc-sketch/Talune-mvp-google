import React, { useState } from 'react';
import { Check, Coins, Trash2 } from 'lucide-react';
import { RARITY_META } from '../game/catalog';
import { EquipSlot, EquipmentItem, GameState } from '../game/types';
import { ItemIconSvg } from './ItemIconSvg';

interface InventoryTabProps {
  state: GameState;
  onEquipItem: (itemId: string) => void;
  onSellItem: (itemId: string) => void;
  onSellCommon: () => void;
}

type FilterOption = 'all' | EquipSlot;

function formatItemStats(item: EquipmentItem): string[] {
  const lines: string[] = [];
  const s = item.stats;
  if (s.atk) lines.push(`+${s.atk} ATK`);
  if (s.matk) lines.push(`+${s.matk} MATK`);
  if (s.def) lines.push(`+${s.def} DEF`);
  if (s.maxHp) lines.push(`+${s.maxHp} HP`);
  if (s.maxMp) lines.push(`+${s.maxMp} MP`);
  if (s.aspdBonus) lines.push(`+${s.aspdBonus.toFixed(2)} ASPD`);
  if (s.hasteBonus) lines.push(`+${Math.round(s.hasteBonus * 100)}% Haste`);
  if (s.critBonus) lines.push(`+${Math.round(s.critBonus * 100)}% CRIT`);
  if (s.str) lines.push(`+${s.str} STR`);
  if (s.agi) lines.push(`+${s.agi} AGI`);
  if (s.vit) lines.push(`+${s.vit} VIT`);
  if (s.int) lines.push(`+${s.int} INT`);
  if (s.dex) lines.push(`+${s.dex} DEX`);
  if (s.luk) lines.push(`+${s.luk} LUK`);
  return lines;
}

const SLOT_NAME: Record<EquipSlot, string> = {
  weapon: 'Arma',
  armor: 'Armadura',
  cape: 'Capa',
};

export const InventoryTab: React.FC<InventoryTabProps> = ({
  state,
  onEquipItem,
  onSellItem,
  onSellCommon,
}) => {
  const [filter, setFilter] = useState<FilterOption>('all');
  const player = state.party[0];

  const filtered = state.inventory.filter((item) =>
    filter === 'all' ? true : item.slot === filter
  );
  const commonCount = state.inventory.filter((i) => i.rarity === 'comum').length;

  return (
    <div className="talune-scroll flex h-full w-full flex-col overflow-y-auto bg-[#121D33] px-3.5 py-3 pb-5">
      {/* Header & Bulk Sell */}
      <div className="flex items-center justify-between gap-2">
        <div>
          <h2 className="font-display text-lg font-bold text-[#F3EBDD]">Bolsa de Saques</h2>
          <p className="font-mono-num text-xs text-[#E7BD68]">
            {state.gold} Ouro · {state.inventory.length}/48 itens
          </p>
        </div>

        <button
          type="button"
          disabled={commonCount === 0}
          onClick={onSellCommon}
          className="flex min-h-[40px] items-center gap-1.5 rounded-xl border border-[#4969A8]/60 bg-[#192845] px-3 py-1.5 text-xs font-bold text-[#D7CEBE] disabled:opacity-35 hover:border-[#E7BD68] hover:text-[#E7BD68] cursor-pointer disabled:cursor-not-allowed"
        >
          <Trash2 className="h-3.5 w-3.5" />
          <span>Vender Comuns ({commonCount})</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="mt-3 grid grid-cols-4 gap-1.5">
        {(
          [
            { id: 'all', label: 'Todos' },
            { id: 'weapon', label: 'Armas' },
            { id: 'armor', label: 'Armaduras' },
            { id: 'cape', label: 'Capas' },
          ] as { id: FilterOption; label: string }[]
        ).map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setFilter(tab.id)}
            className={`min-h-[40px] rounded-xl border text-xs font-bold transition-colors cursor-pointer ${
              filter === tab.id
                ? 'border-[#E7BD68] bg-[#243963] text-[#F3EBDD]'
                : 'border-[#4969A8]/40 bg-[#192845] text-[#D7CEBE]/80 hover:border-[#4969A8]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Item List */}
      <div className="mt-3 flex flex-col gap-2.5">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-[#4969A8]/35 bg-[#192845]/60 p-6 text-center text-xs text-[#D7CEBE]/75">
            Nenhum equipamento nesta categoria. Derrote ondas e chefes na Arena para saquear novos itens.
          </div>
        ) : (
          filtered.map((item) => {
            const rarity = RARITY_META[item.rarity];
            const statLines = formatItemStats(item);
            const equippedSameSlot = player.equipment[item.slot];
            const isRecent = state.lastDropHighlightId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border p-3 transition-colors ${rarity.borderClass} ${rarity.bgClass} ${
                  isRecent ? 'ring-2 ring-[#E7BD68]/70' : ''
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#4969A8]/40 bg-[#0e1626]/85">
                    <ItemIconSvg item={item} size={34} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`truncate text-sm font-bold ${rarity.textClass}`}>
                        {rarity.symbol} {item.name}
                      </span>
                      <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-[#D7CEBE]/75">
                        {SLOT_NAME[item.slot]}
                      </span>
                    </div>

                    <div className="font-mono-num mt-1 text-xs font-semibold text-[#F3EBDD]">
                      {statLines.join(' · ')}
                    </div>

                    {equippedSameSlot && (
                      <div className="mt-1 truncate text-[10px] text-[#D7CEBE]/70">
                        Atual: {equippedSameSlot.name}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-2.5 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onEquipItem(item.id)}
                    className="flex min-h-[40px] flex-1 items-center justify-center gap-1.5 rounded-xl border border-[#55B9B0] bg-[#16424a] px-3 text-xs font-bold text-[#F3EBDD] hover:bg-[#1c5660] cursor-pointer"
                  >
                    <Check className="h-3.5 w-3.5 text-[#55B9B0]" />
                    <span>Equipar</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSellItem(item.id)}
                    className="flex min-h-[40px] items-center justify-center gap-1 rounded-xl border border-[#4969A8]/50 bg-[#121D33] px-3 text-xs font-semibold text-[#E7BD68] hover:border-[#E7BD68] cursor-pointer"
                  >
                    <Coins className="h-3.5 w-3.5" />
                    <span className="font-mono-num">+{item.valueGold}</span>
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
