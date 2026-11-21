import React from 'react';
import { EquipSlot, EquipmentItem } from '../game/types';

interface ItemIconSvgProps {
  item: Pick<EquipmentItem, 'slot' | 'visualId'> | null;
  fallbackSlot?: EquipSlot;
  size?: number;
}

export const ItemIconSvg: React.FC<ItemIconSvgProps> = ({
  item,
  fallbackSlot = 'weapon',
  size = 34,
}) => {
  if (!item) {
    return (
      <svg width={size} height={size} viewBox="0 0 36 36" className="opacity-35">
        {fallbackSlot === 'weapon' && (
          <path d="M10 26 L26 10 M21 10 L26 10 L26 15" stroke="#94a3b8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        )}
        {fallbackSlot === 'armor' && (
          <path d="M10 10 L14 8 L22 8 L26 10 L28 16 L24 18 L24 28 L12 28 L12 18 L8 16 Z" stroke="#94a3b8" strokeWidth="2.2" fill="none" />
        )}
        {fallbackSlot === 'cape' && (
          <path d="M12 9 L24 9 L28 28 L18 25 L8 28 Z" stroke="#94a3b8" strokeWidth="2.2" fill="none" />
        )}
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 36 36" className="select-none">
      {item.slot === 'weapon' && (
        <g transform="rotate(35 18 18)">
          {item.visualId === 'bow_hunter' || item.visualId === 'bow_elven' ? (
            <>
              <path
                d="M14 5 Q26 18 14 31"
                fill="none"
                stroke={item.visualId === 'bow_elven' ? '#34d399' : '#a16207'}
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <line x1="14" y1="6" x2="14" y2="30" stroke="#e2e8f0" strokeWidth="1.4" />
              <line x1="11" y1="18" x2="27" y2="18" stroke="#E7BD68" strokeWidth="2" />
            </>
          ) : item.visualId === 'staff_apprentice' || item.visualId === 'staff_arcane' ? (
            <>
              <rect x="16.5" y="12" width="3" height="20" rx="1.5" fill="#7c4a2d" stroke="#1e2436" strokeWidth="1.4" />
              <circle
                cx="18"
                cy="9"
                r="5.5"
                fill={item.visualId === 'staff_arcane' ? '#55B9B0' : '#38bdf8'}
                stroke="#E7BD68"
                strokeWidth="2"
              />
            </>
          ) : item.visualId === 'mace_holy' ? (
            <>
              <rect x="16.5" y="14" width="3" height="17" rx="1.5" fill="#8b5a3c" stroke="#1e2436" strokeWidth="1.4" />
              <circle cx="18" cy="10" r="6" fill="#E7BD68" stroke="#1e2436" strokeWidth="1.8" />
              <circle cx="18" cy="10" r="2.2" fill="#55B9B0" />
            </>
          ) : item.visualId === 'axe_berserker' ? (
            <>
              <rect x="16.5" y="7" width="3" height="24" rx="1.5" fill="#7c4a2d" stroke="#1e2436" strokeWidth="1.4" />
              <path d="M19 8 Q28 7 28 14 Q28 20 19 19 Z" fill="#cbd5e1" stroke="#1e2436" strokeWidth="1.8" />
              <path d="M17 9 Q10 8 10 14 Q10 19 17 18 Z" fill="#94a3b8" stroke="#1e2436" strokeWidth="1.6" />
            </>
          ) : (
            <>
              <rect x="16.5" y="23" width="3" height="8" rx="1" fill="#7c4a2d" stroke="#1e2436" strokeWidth="1.4" />
              <rect x="12" y="21" width="12" height="3" rx="1" fill="#E7BD68" stroke="#1e2436" strokeWidth="1.4" />
              <path
                d="M15.5 21 L15.5 8 L18 4 L20.5 8 L20.5 21 Z"
                fill={
                  item.visualId === 'sword_wood'
                    ? '#c79563'
                    : item.visualId === 'sword_runic'
                      ? '#55B9B0'
                      : item.visualId === 'dagger_shadow'
                        ? '#a78bfa'
                        : '#cbd5e1'
                }
                stroke="#1e2436"
                strokeWidth="1.6"
              />
            </>
          )}
        </g>
      )}

      {item.slot === 'armor' && (
        <path
          d="M9 9 L14 7 L22 7 L27 9 L30 16 L25 18 L25 29 L11 29 L11 18 L6 16 Z"
          fill={
            item.visualId === 'plate_royal'
              ? '#2b509e'
              : item.visualId === 'plate_iron'
                ? '#94a3b8'
                : item.visualId === 'leather_forest'
                  ? '#2f6f4e'
                  : item.visualId === 'robe_cleric'
                    ? '#f4efe6'
                    : item.visualId === 'robe_arcane'
                      ? '#4338ca'
                      : '#d6cfc2'
          }
          stroke="#1e2436"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      )}

      {item.slot === 'cape' && (
        <path
          d="M11 7 L25 7 L29 29 L18 25 L7 29 Z"
          fill={
            item.visualId === 'cape_crimson'
              ? '#c83e4d'
              : item.visualId === 'cape_emerald'
                ? '#2d8a5b'
                : item.visualId === 'cape_ether'
                  ? '#55B9B0'
                  : item.visualId === 'cape_rift'
                    ? '#5b21b6'
                    : '#64748b'
          }
          stroke="#1e2436"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
};
