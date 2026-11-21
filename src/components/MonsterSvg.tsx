import React from 'react';
import { EnemyUnit } from '../game/types';

interface MonsterSvgProps {
  enemy: EnemyUnit;
  size?: number;
}

export const MonsterSvg: React.FC<MonsterSvgProps> = ({ enemy, size }) => {
  const computedSize = size ?? (enemy.isBoss ? 164 : 124);
  const isDead = enemy.currentHp <= 0;
  const isHit = enemy.animState === 'hit';
  const isAttacking = enemy.animState === 'attack';

  const animClass = isDead
    ? 'opacity-0 scale-75 transition-all duration-300'
    : isHit
      ? 'anim-hit-shake'
      : isAttacking
        ? 'anim-enemy-lunge'
        : 'anim-enemy-idle';

  return (
    <svg
      width={computedSize}
      height={computedSize}
      viewBox="0 0 160 150"
      className={`overflow-visible select-none ${animClass}`}
      aria-label={enemy.name}
    >
      {/* Ground shadow */}
      <ellipse
        cx="80"
        cy="132"
        rx={enemy.isBoss ? 48 : 34}
        ry={enemy.isBoss ? 11 : 8}
        fill="rgba(8, 12, 22, 0.5)"
      />

      {/* Boss Phase 2 Aura */}
      {enemy.isBoss && (
        <ellipse
          cx="80"
          cy="86"
          rx="54"
          ry="44"
          fill={enemy.phase === 2 ? 'rgba(225, 29, 72, 0.18)' : 'rgba(231, 189, 104, 0.12)'}
          stroke={enemy.phase === 2 ? 'rgba(244, 63, 94, 0.65)' : 'rgba(231, 189, 104, 0.45)'}
          strokeWidth="2.5"
          strokeDasharray="10 6"
        />
      )}

      {/* Boss Telegraph Warning Glow */}
      {enemy.castState && (
        <circle
          cx="80"
          cy="78"
          r="58"
          fill="rgba(244, 63, 94, 0.14)"
          stroke="#fb7185"
          strokeWidth="3"
        />
      )}

      {enemy.visualType === 'slime' && (
        <g>
          {/* Slime Body */}
          <path
            d="M30 112 Q24 62 56 44 Q82 32 108 46 Q136 64 130 112 Q114 128 80 128 Q46 128 30 112 Z"
            fill={enemy.isBoss ? '#0f766e' : '#38bdf8'}
            stroke="#1e2436"
            strokeWidth="3.2"
          />
          {/* Inner glossy volume */}
          <path
            d="M42 106 Q40 72 64 56 Q84 46 104 60 Q120 75 116 106 Q98 118 80 118 Q56 118 42 106 Z"
            fill={enemy.isBoss ? '#2dd4bf' : '#7dd3fc'}
            opacity="0.55"
          />
          <ellipse cx="56" cy="64" rx="10" ry="5" transform="rotate(-24 56 64)" fill="#ffffff" opacity="0.65" />
          {/* Eyes facing left toward party */}
          <ellipse cx="58" cy="84" rx="6" ry="7.5" fill="#1e2436" />
          <ellipse cx="86" cy="84" rx="6" ry="7.5" fill="#1e2436" />
          <circle cx="56" cy="81.5" r="2.2" fill="#ffffff" />
          <circle cx="84" cy="81.5" r="2.2" fill="#ffffff" />
          {/* Fierce brow if Boss */}
          {enemy.isBoss ? (
            <>
              <path d="M48 73 L66 78 M96 73 L78 78" stroke="#1e2436" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M62 102 Q72 95 82 102" fill="none" stroke="#1e2436" strokeWidth="3" strokeLinecap="round" />
              {/* Crown */}
              <path
                d="M54 42 L58 21 L70 33 L82 17 L94 33 L104 22 L106 42 Z"
                fill="#E7BD68"
                stroke="#1e2436"
                strokeWidth="2.8"
                strokeLinejoin="round"
              />
            </>
          ) : (
            <path d="M65 98 Q72 103 79 98" fill="none" stroke="#1e2436" strokeWidth="2.5" strokeLinecap="round" />
          )}
        </g>
      )}

      {enemy.visualType === 'wolf' && (
        <g>
          {/* Tail */}
          <path
            d="M114 96 Q142 82 138 58 Q126 68 112 84 Z"
            fill="#64748b"
            stroke="#1e2436"
            strokeWidth="3"
          />
          {/* Hind & Front legs */}
          <rect x="92" y="96" width="12" height="30" rx="5" fill="#475569" stroke="#1e2436" strokeWidth="2.8" />
          <rect x="50" y="96" width="12" height="30" rx="5" fill="#64748b" stroke="#1e2436" strokeWidth="2.8" />
          {/* Torso */}
          <ellipse cx="86" cy="88" rx="34" ry="22" fill="#64748b" stroke="#1e2436" strokeWidth="3" />
          {/* Mane */}
          <path
            d="M42 74 L58 52 L74 68 L68 96 L45 94 Z"
            fill="#94a3b8"
            stroke="#1e2436"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          {/* Wolf Head facing left */}
          <path
            d="M20 74 L42 54 L64 58 L62 84 L38 88 L22 81 Z"
            fill="#64748b"
            stroke="#1e2436"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Ears */}
          <polygon points="44,56 49,35 58,54" fill="#475569" stroke="#1e2436" strokeWidth="2.6" />
          <polygon points="56,57 65,37 69,58" fill="#64748b" stroke="#1e2436" strokeWidth="2.6" />
          {/* Eye & Fang */}
          <circle cx="44" cy="67" r="4" fill="#fbbf24" stroke="#1e2436" strokeWidth="1.5" />
          <circle cx="43" cy="67" r="1.5" fill="#1e2436" />
          <polygon points="28,81 33,89 37,82" fill="#ffffff" stroke="#1e2436" strokeWidth="1.5" />
        </g>
      )}

      {enemy.visualType === 'sprout' && (
        <g>
          {/* Roots / legs */}
          <path
            d="M58 106 L48 128 L64 128 L72 110 M88 110 L96 128 L112 128 L100 106"
            fill="#5c3d2e"
            stroke="#1e2436"
            strokeWidth="2.8"
            strokeLinejoin="round"
          />
          {/* Bark body */}
          <path
            d="M46 66 Q80 48 114 66 L110 112 Q80 122 50 112 Z"
            fill="#6d4026"
            stroke="#1e2436"
            strokeWidth="3"
          />
          {/* Leaf crown */}
          <path
            d="M42 54 Q60 22 80 44 Q100 22 118 54 Q98 66 80 56 Q62 66 42 54 Z"
            fill={enemy.isBoss ? '#15803d' : '#4ade80'}
            stroke="#1e2436"
            strokeWidth="2.8"
          />
          <circle cx="80" cy="40" r="7" fill="#55B9B0" stroke="#1e2436" strokeWidth="2" />
          {/* Glowing eyes */}
          <ellipse cx="66" cy="82" rx="5.5" ry="6.5" fill="#fde047" stroke="#1e2436" strokeWidth="2" />
          <ellipse cx="92" cy="82" rx="5.5" ry="6.5" fill="#fde047" stroke="#1e2436" strokeWidth="2" />
          <path d="M68 98 Q80 94 92 98" fill="none" stroke="#1e2436" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      )}

      {enemy.visualType === 'guardian' && (
        <g>
          {/* Floating Stone Wings */}
          <polygon
            points="22,64 46,48 44,92 26,88"
            fill="#334155"
            stroke="#1e2436"
            strokeWidth="2.8"
          />
          <polygon
            points="138,64 114,48 116,92 134,88"
            fill="#334155"
            stroke="#1e2436"
            strokeWidth="2.8"
          />
          {/* Monolith Torso */}
          <path
            d="M50 42 L80 28 L110 42 L106 108 L80 122 L54 108 Z"
            fill="#1e293b"
            stroke="#1e2436"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
          {/* Armor Trim */}
          <path
            d="M54 56 L80 44 L106 56"
            fill="none"
            stroke={enemy.phase === 2 ? '#fb7185' : '#55B9B0'}
            strokeWidth="3.2"
          />
          {/* Arcane Rift Core */}
          <polygon
            points="80,58 96,76 80,96 64,76"
            fill={enemy.phase === 2 ? '#f43f5e' : '#55B9B0'}
            stroke="#1e2436"
            strokeWidth="2.5"
          />
          <polygon points="80,66 89,76 80,87 71,76" fill="#e0f2fe" />
          {/* Visor Eye */}
          <rect x="64" y="42" width="32" height="8" rx="4" fill="#0f172a" stroke="#1e2436" strokeWidth="2" />
          <circle cx="74" cy="46" r="3" fill={enemy.phase === 2 ? '#fb7185' : '#38bdf8'} />
          <circle cx="86" cy="46" r="3" fill={enemy.phase === 2 ? '#fb7185' : '#38bdf8'} />
        </g>
      )}
    </svg>
  );
};
