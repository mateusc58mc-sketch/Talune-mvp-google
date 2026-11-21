import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface TitleScreenProps {
  muted: boolean;
  onToggleMute: () => void;
  onStart: () => void;
}

export const TitleScreen: React.FC<TitleScreenProps> = ({
  muted,
  onToggleMute,
  onStart,
}) => {
  return (
    <div
      className="relative flex h-full w-full flex-col justify-between overflow-hidden select-none"
      style={{
        background: 'linear-gradient(180deg, #162844 0%, #244b5e 52%, #132234 100%)',
      }}
    >
      {/* Generated Title Art Backdrop */}
      <img
        src="/src/assets/images/title_bg_1795232044690.jpg"
        alt="Vale de Brumafonte em Talune"
        referrerPolicy="no-referrer"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Atmospheric Vignette for Crisp Contrast */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,18,32,0.58) 0%, rgba(11,18,32,0.18) 42%, rgba(11,18,32,0.78) 78%, rgba(11,18,32,0.94) 100%)',
        }}
      />

      {/* Top Audio Control */}
      <div className="relative z-10 flex items-center justify-end p-4">
        <button
          type="button"
          onClick={onToggleMute}
          aria-label={muted ? 'Ativar áudio' : 'Silenciar áudio'}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#4969A8]/60 bg-[#0e1626]/85 text-[#F3EBDD] transition-colors hover:border-[#E7BD68] hover:text-[#E7BD68] cursor-pointer"
        >
          {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      </div>

      {/* Bespoke Inline SVG Title Lockup */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-2 text-center">
        <svg
          width="92"
          height="74"
          viewBox="0 0 110 88"
          className="mb-2 drop-shadow-[0_6px_18px_rgba(14,22,38,0.85)]"
          aria-hidden="true"
        >
          {/* Runic Crest */}
          <polygon
            points="55,6 88,28 76,72 34,72 22,28"
            fill="rgba(18, 29, 51, 0.82)"
            stroke="#E7BD68"
            strokeWidth="2.8"
          />
          <polygon
            points="55,15 78,32 69,63 41,63 32,32"
            fill="none"
            stroke="#55B9B0"
            strokeWidth="2"
          />
          {/* Crossed Sword & Crystal */}
          <path d="M55 21 L61 42 L55 58 L49 42 Z" fill="#55B9B0" stroke="#F3EBDD" strokeWidth="1.5" />
          <path d="M36 46 L74 46" stroke="#E7BD68" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="55" cy="42" r="3.2" fill="#F3EBDD" />
        </svg>

        <h1
          className="font-display text-5xl font-extrabold tracking-[0.16em] text-[#F3EBDD]"
          style={{
            textShadow: '0 4px 18px rgba(10, 16, 30, 0.92), 0 1px 0 #1e2436',
          }}
        >
          TALUNE
        </h1>
        <p
          className="mt-1.5 text-sm font-semibold tracking-[0.22em] text-[#E7BD68] uppercase"
          style={{ textShadow: '0 2px 10px rgba(10, 16, 30, 0.9)' }}
        >
          MMORPG Idle Cooperativo
        </p>
      </div>

      {/* Bottom Primary Action & Flat Control Hint */}
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 pb-8">
        <button
          type="button"
          data-start="true"
          onClick={onStart}
          className="w-full max-w-[300px] min-h-[52px] rounded-xl border-2 border-[#E7BD68] bg-[#21365d] px-6 py-3.5 text-base font-bold tracking-wide text-[#F3EBDD] shadow-[0_8px_24px_rgba(10,16,30,0.75)] transition-transform active:scale-[0.98] hover:bg-[#2a4577] cursor-pointer"
        >
          Entrar em Talune
        </button>

        <p className="text-xs font-medium tracking-wide text-[#D7CEBE]/90">
          Enter Iniciar · M Áudio · P Pausa
        </p>
      </div>
    </div>
  );
};
