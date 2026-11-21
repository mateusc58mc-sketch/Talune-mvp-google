import React from 'react';
import { Crown, Play, RotateCcw, Shield, Sparkles, Trophy, X } from 'lucide-react';
import { CLASS_INFO, RARITY_META } from '../game/catalog';
import { BaseClass, BossOutcomeSummary } from '../game/types';
import { ItemIconSvg } from './ItemIconSvg';

interface ClassModalProps {
  isOpen: boolean;
  onSelectClass: (cls: BaseClass) => void;
  onClose: () => void;
}

const BASE_CLASSES: BaseClass[] = ['guerreiro', 'cacador', 'clerigo', 'mago'];

export const ClassSelectionModal: React.FC<ClassModalProps> = ({
  isOpen,
  onSelectClass,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(10, 16, 30, 0.86)' }}
    >
      <div className="w-full max-w-[380px] rounded-2xl border-2 border-[#55B9B0] bg-[#142038] p-4 shadow-2xl">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#55B9B0]">
              <Sparkles className="h-4 w-4" />
              <span>Nível 5 Alcançado</span>
            </div>
            <h3 className="font-display mt-0.5 text-lg font-bold text-[#F3EBDD]">
              Escolha sua Classe-Base
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar escolha de classe"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#D7CEBE] hover:bg-slate-800 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-3 flex flex-col gap-2">
          {BASE_CLASSES.map((cls) => {
            const info = CLASS_INFO[cls];
            return (
              <button
                key={cls}
                type="button"
                onClick={() => onSelectClass(cls)}
                className="flex flex-col rounded-xl border border-[#4969A8]/60 bg-[#1B2B4B] p-3 text-left transition-colors hover:border-[#E7BD68] hover:bg-[#23375e] cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold" style={{ color: info.accentColor }}>
                    {info.name}
                  </span>
                  <span className="text-[11px] font-semibold text-[#E7BD68]">
                    {info.primaryAttrs}
                  </span>
                </div>
                <div className="mt-0.5 text-xs font-semibold text-[#F3EBDD]">
                  {info.roleLabel}
                </div>
                <p className="mt-1 text-[11px] leading-snug text-[#D7CEBE]/85">
                  {info.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface BossOutcomeModalProps {
  summary: BossOutcomeSummary | null;
  onClose: () => void;
  onEquipDropped?: (itemId: string) => void;
}

export const BossOutcomeModal: React.FC<BossOutcomeModalProps> = ({
  summary,
  onClose,
  onEquipDropped,
}) => {
  if (!summary) return null;
  const isWin = summary.outcome === 'victory';
  const drop = summary.droppedItem;
  const rarity = drop ? RARITY_META[drop.rarity] : null;

  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(10, 16, 30, 0.85)' }}
    >
      <div
        className={`w-full max-w-[360px] rounded-2xl border-2 bg-[#142038] p-5 shadow-2xl ${
          isWin ? 'border-[#E7BD68]' : 'border-rose-400/80'
        }`}
      >
        <div className="flex flex-col items-center text-center">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full border ${
              isWin
                ? 'border-[#E7BD68] bg-amber-950/60 text-[#E7BD68]'
                : 'border-rose-400 bg-rose-950/60 text-rose-300'
            }`}
          >
            {isWin ? <Trophy className="h-6 w-6" /> : <Shield className="h-6 w-6" />}
          </div>

          <h3 className="font-display mt-2.5 text-xl font-extrabold text-[#F3EBDD]">
            {isWin ? 'Chefe Derrotado!' : 'Derrota no Chefe'}
          </h3>
          <p className="mt-1 text-xs font-medium text-[#D7CEBE]">
            {summary.bossName} · Estágio {summary.stage}
          </p>
        </div>

        <div className="font-mono-num mt-4 grid grid-cols-3 gap-2 rounded-xl border border-[#4969A8]/40 bg-[#0e1626] p-3 text-center">
          <div>
            <div className="text-[10px] text-[#D7CEBE]/75">Duração</div>
            <div className="text-xs font-bold text-[#F3EBDD]">{summary.durationSec}s</div>
          </div>
          <div>
            <div className="text-[10px] text-[#D7CEBE]/75">DPS Party</div>
            <div className="text-xs font-bold text-[#55B9B0]">{summary.partyDps}/s</div>
          </div>
          <div>
            <div className="text-[10px] text-[#D7CEBE]/75">Recompensa</div>
            <div className="text-xs font-bold text-[#E7BD68]">+{summary.goldGained} Ouro</div>
          </div>
        </div>

        {isWin && drop && rarity && (
          <div className={`mt-3 rounded-xl border p-2.5 ${rarity.borderClass} ${rarity.bgClass}`}>
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#D7CEBE]/80">
              Saque Garantido do Chefe
            </div>
            <div className="mt-1.5 flex items-center gap-2.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0e1626]/85">
                <ItemIconSvg item={drop} size={28} />
              </div>
              <div className="min-w-0 flex-1">
                <div className={`truncate text-xs font-bold ${rarity.textClass}`}>
                  {rarity.symbol} {drop.name}
                </div>
                <div className="text-[11px] text-[#D7CEBE]/80">Adicionado à Bolsa</div>
              </div>
              {onEquipDropped && (
                <button
                  type="button"
                  onClick={() => {
                    onEquipDropped(drop.id);
                    onClose();
                  }}
                  className="min-h-[36px] rounded-lg border border-[#55B9B0] bg-[#16424a] px-2.5 text-xs font-bold text-[#F3EBDD] hover:bg-[#1c5660] cursor-pointer"
                >
                  Equipar
                </button>
              )}
            </div>
          </div>
        )}

        {!isWin && (
          <p className="mt-3 text-center text-xs leading-relaxed text-[#D7CEBE]">
            Sua Party retornou ao farm automático no checkpoint seguro para fortalecer atributos e equipamentos.
          </p>
        )}

        <button
          type="button"
          onClick={onClose}
          className="mt-4 flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl border-2 border-[#E7BD68] bg-[#243963] px-4 text-sm font-bold text-[#F3EBDD] hover:bg-[#2d477a] cursor-pointer"
        >
          <Crown className="h-4 w-4 text-[#E7BD68]" />
          <span>{isWin ? `Avançar para Estágio ${summary.stage + 1}` : 'Voltar ao Farm'}</span>
        </button>
      </div>
    </div>
  );
};

interface PauseModalProps {
  isOpen: boolean;
  onResume: () => void;
  onRestart: () => void;
  onQuitToTitle: () => void;
}

export const PauseModal: React.FC<PauseModalProps> = ({
  isOpen,
  onResume,
  onRestart,
  onQuitToTitle,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(10, 16, 30, 0.84)' }}
    >
      <div className="w-full max-w-[320px] rounded-2xl border-2 border-[#4969A8] bg-[#142038] p-5 text-center shadow-2xl">
        <h3 className="font-display text-xl font-bold text-[#F3EBDD]">Jogo Pausado</h3>
        <p className="mt-1 text-xs text-[#D7CEBE]/80">
          O combate automático está suspenso.
        </p>

        <div className="mt-4 flex flex-col gap-2.5">
          <button
            type="button"
            onClick={onResume}
            className="flex min-h-[46px] items-center justify-center gap-2 rounded-xl border-2 border-[#E7BD68] bg-[#243963] text-sm font-bold text-[#F3EBDD] hover:bg-[#2d477a] cursor-pointer"
          >
            <Play className="h-4 w-4 text-[#E7BD68]" />
            <span>Continuar</span>
          </button>

          <button
            type="button"
            onClick={onRestart}
            className="flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-[#4969A8]/60 bg-[#1B2B4B] text-sm font-semibold text-[#F3EBDD] hover:border-[#55B9B0] cursor-pointer"
          >
            <RotateCcw className="h-4 w-4 text-[#55B9B0]" />
            <span>Reiniciar Aventura</span>
          </button>

          <button
            type="button"
            onClick={onQuitToTitle}
            className="flex min-h-[44px] items-center justify-center rounded-xl border border-[#4969A8]/40 bg-[#121D33] text-xs font-semibold text-[#D7CEBE] hover:text-white cursor-pointer"
          >
            Voltar à Tela Inicial
          </button>
        </div>
      </div>
    </div>
  );
};
