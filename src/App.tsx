import { useCallback, useEffect, useRef, useState } from 'react';
import { Backpack, Shield, Swords, Zap } from 'lucide-react';
import { ArenaView } from './components/ArenaView';
import { CharacterTab } from './components/CharacterTab';
import { InventoryTab } from './components/InventoryTab';
import { BossOutcomeModal, ClassSelectionModal, PauseModal } from './components/Modals';
import { SkillsTab } from './components/SkillsTab';
import { TitleScreen } from './components/TitleScreen';
import { playSfxCue } from './game/audio';
import {
  allocateAttribute,
  challengeBoss,
  chooseBaseClass,
  createInitialGameState,
  equipItem,
  reorderSkill,
  resetAttributes,
  retreatFromBoss,
  sellCommonItems,
  sellItem,
  stepCombat,
  unequipSlot,
} from './game/engine';
import { ActiveTab, AttributeKey, BaseClass, EquipSlot, GameState } from './game/types';

function shouldAutostart(): boolean {
  if (typeof window === 'undefined') return false;
  return new URLSearchParams(window.location.search).get('autostart') === '1';
}

export default function App() {
  const [gameState, setGameState] = useState<GameState>(() => {
    const init = createInitialGameState();
    if (shouldAutostart()) {
      return { ...init, screen: 'playing' };
    }
    return init;
  });
  const [showClassModal, setShowClassModal] = useState(false);

  const stateRef = useRef<GameState>(gameState);
  stateRef.current = gameState;

  const commitState = useCallback((updater: (prev: GameState) => GameState) => {
    const next = updater(stateRef.current);
    stateRef.current = next;
    setGameState(next);
  }, []);

  // Sync body[data-state] for screen state machine & testability
  useEffect(() => {
    document.body.dataset.state = gameState.screen;
  }, [gameState.screen]);

  // Open class modal automatically the first time Lv 5 is reached
  useEffect(() => {
    if (gameState.classSelectionPending && gameState.screen === 'playing') {
      setShowClassModal(true);
    }
  }, [gameState.classSelectionPending, gameState.screen]);

  // Decoupled requestAnimationFrame simulation loop
  useEffect(() => {
    if (gameState.screen !== 'playing') return;

    let rafId = 0;
    let lastTime = performance.now();
    let lastReactSync = performance.now();

    const loop = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;

      const current = stateRef.current;
      if (current.screen === 'playing') {
        const { nextState, cues } = stepCombat(current, dt);
        stateRef.current = nextState;

        for (const cue of cues) {
          playSfxCue(cue, nextState.muted);
        }

        const importantEvent =
          nextState.bossOutcome !== current.bossOutcome ||
          nextState.stage !== current.stage ||
          nextState.waveInStage !== current.waveInStage ||
          nextState.inventory.length !== current.inventory.length ||
          nextState.party[0].level !== current.party[0].level;

        // Commit React state smoothly (~18Hz) or immediately on major discrete events
        if (importantEvent || now - lastReactSync >= 55) {
          lastReactSync = now;
          setGameState(nextState);
        }
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [gameState.screen]);

  // Keyboard shortcuts: Enter/Space to start on Title, M mute, P/Escape pause
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const cur = stateRef.current;
      if (cur.screen === 'title' && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        commitState((prev) => ({ ...prev, screen: 'playing' }));
        return;
      }
      if (e.key === 'm' || e.key === 'M') {
        commitState((prev) => ({ ...prev, muted: !prev.muted }));
        return;
      }
      if (e.key === 'p' || e.key === 'P' || e.key === 'Escape') {
        if (cur.screen === 'playing') {
          commitState((prev) => ({ ...prev, screen: 'paused' }));
        } else if (cur.screen === 'paused') {
          commitState((prev) => ({ ...prev, screen: 'playing' }));
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [commitState]);

  const handleStart = () => {
    commitState((prev) => ({ ...prev, screen: 'playing' }));
  };

  const handleToggleMute = () => {
    commitState((prev) => ({ ...prev, muted: !prev.muted }));
  };

  const handlePause = () => {
    commitState((prev) => ({ ...prev, screen: 'paused' }));
  };

  const handleResume = () => {
    commitState((prev) => ({ ...prev, screen: 'playing' }));
  };

  const handleRestart = () => {
    setShowClassModal(false);
    commitState((prev) => ({
      ...createInitialGameState(),
      muted: prev.muted,
      screen: 'playing',
    }));
  };

  const handleQuitToTitle = () => {
    setShowClassModal(false);
    commitState((prev) => ({
      ...createInitialGameState(),
      muted: prev.muted,
      screen: 'title',
    }));
  };

  const handleChallengeBoss = () => {
    playSfxCue('bossHorn', stateRef.current.muted);
    commitState((prev) => challengeBoss(prev));
  };

  const handleRetreatBoss = () => {
    commitState((prev) => retreatFromBoss(prev));
  };

  const handleAllocateAttr = (attr: AttributeKey) => {
    commitState((prev) => allocateAttribute(prev, attr));
  };

  const handleResetAttrs = () => {
    commitState((prev) => resetAttributes(prev));
  };

  const handleSelectBaseClass = (cls: BaseClass) => {
    setShowClassModal(false);
    playSfxCue('levelUp', stateRef.current.muted);
    commitState((prev) => chooseBaseClass(prev, cls));
  };

  const handleEquipItem = (itemId: string) => {
    playSfxCue('shield', stateRef.current.muted);
    commitState((prev) => equipItem(prev, itemId));
  };

  const handleUnequipSlot = (slot: EquipSlot) => {
    commitState((prev) => unequipSlot(prev, slot));
  };

  const handleSellItem = (itemId: string) => {
    commitState((prev) => sellItem(prev, itemId));
  };

  const handleSellCommon = () => {
    commitState((prev) => sellCommonItems(prev));
  };

  const handleReorderSkill = (heroId: string, skillId: string, dir: 'up' | 'down') => {
    commitState((prev) => reorderSkill(prev, heroId, skillId, dir));
  };

  const handleTabChange = (tab: ActiveTab) => {
    commitState((prev) => ({
      ...prev,
      activeTab: tab,
      lastDropHighlightId: tab === 'bag' ? prev.lastDropHighlightId : prev.lastDropHighlightId,
    }));
  };

  const player = gameState.party[0];
  const hasNewDrop = Boolean(gameState.lastDropHighlightId);

  return (
    <div
      className="flex h-dvh w-screen items-center justify-center overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 50% 28%, #1d3258 0%, #0d1524 68%, #070b14 100%)',
      }}
    >
      {/* Mobile-First 9:16 Game Viewport Shell */}
      <main className="relative flex h-full w-full max-w-[430px] flex-col overflow-hidden bg-[#121D33] shadow-[0_20px_60px_rgba(0,0,0,0.75)] md:h-[min(94dvh,850px)] md:rounded-[28px] md:border-2 md:border-[#4969A8]/60">
        {gameState.screen === 'title' ? (
          <TitleScreen
            muted={gameState.muted}
            onToggleMute={handleToggleMute}
            onStart={handleStart}
          />
        ) : (
          <>
            {/* Active Screen Content */}
            <div className="relative flex-1 overflow-hidden">
              {gameState.activeTab === 'arena' && (
                <ArenaView
                  state={gameState}
                  onChallengeBoss={handleChallengeBoss}
                  onRetreatBoss={handleRetreatBoss}
                  onToggleMute={handleToggleMute}
                  onPause={handlePause}
                  onOpenClassModal={() => setShowClassModal(true)}
                />
              )}
              {gameState.activeTab === 'hero' && (
                <CharacterTab
                  state={gameState}
                  onAllocateAttr={handleAllocateAttr}
                  onResetAttrs={handleResetAttrs}
                  onUnequipSlot={handleUnequipSlot}
                  onOpenClassModal={() => setShowClassModal(true)}
                  onGoToBag={() => handleTabChange('bag')}
                />
              )}
              {gameState.activeTab === 'skills' && (
                <SkillsTab state={gameState} onReorderSkill={handleReorderSkill} />
              )}
              {gameState.activeTab === 'bag' && (
                <InventoryTab
                  state={gameState}
                  onEquipItem={handleEquipItem}
                  onSellItem={handleSellItem}
                  onSellCommon={handleSellCommon}
                />
              )}
            </div>

            {/* Bottom 4-Tab Navigation Bar */}
            <nav
              aria-label="Navegação principal"
              className="z-30 grid grid-cols-4 border-t border-[#4969A8]/55 bg-[#0e1626] px-1.5 py-1.5"
            >
              {(
                [
                  { id: 'arena', label: 'Arena', icon: Swords, alert: false },
                  {
                    id: 'hero',
                    label: 'Herói',
                    icon: Shield,
                    alert: player.unspentPoints > 0 || gameState.classSelectionPending,
                  },
                  { id: 'skills', label: 'Skills', icon: Zap, alert: false },
                  { id: 'bag', label: 'Bolsa', icon: Backpack, alert: hasNewDrop },
                ] as const
              ).map((tab) => {
                const Icon = tab.icon;
                const active = gameState.activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabChange(tab.id)}
                    className={`relative flex min-h-[48px] flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-1 transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#1f3358] text-[#E7BD68]'
                        : 'text-[#D7CEBE]/75 hover:bg-[#162440] hover:text-[#F3EBDD]'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-[11px] font-bold">{tab.label}</span>
                    {tab.alert && (
                      <span
                        aria-hidden="true"
                        className="absolute top-1.5 right-4 h-2 w-2 rounded-full bg-[#55B9B0]"
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Modals */}
            <ClassSelectionModal
              isOpen={showClassModal}
              onSelectClass={handleSelectBaseClass}
              onClose={() => setShowClassModal(false)}
            />

            <BossOutcomeModal
              summary={gameState.bossOutcome}
              onClose={() => commitState((prev) => ({ ...prev, bossOutcome: null }))}
              onEquipDropped={handleEquipItem}
            />

            <PauseModal
              isOpen={gameState.screen === 'paused'}
              onResume={handleResume}
              onRestart={handleRestart}
              onQuitToTitle={handleQuitToTitle}
            />
          </>
        )}
      </main>
    </div>
  );
}
