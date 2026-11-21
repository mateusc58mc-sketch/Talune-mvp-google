import React from 'react';
import {
  ArmorVisualId,
  CapeVisualId,
  HeroUnit,
  WeaponVisualId,
} from '../game/types';

interface PaperdollSvgProps {
  hero: HeroUnit;
  size?: number;
  showShadow?: boolean;
  className?: string;
}

function renderCapeLayer(capeId: CapeVisualId | undefined) {
  if (!capeId || capeId === 'cape_none') return null;

  switch (capeId) {
    case 'cape_traveler':
      return (
        <g className="anim-cape-sway">
          <path
            d="M44 58 L20 105 Q34 111 48 103 L54 62 Z"
            fill="#64748b"
            stroke="#1e2436"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <path d="M44 62 L28 100" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
        </g>
      );
    case 'cape_crimson':
      return (
        <g className="anim-cape-sway">
          <path
            d="M45 56 L14 108 Q32 115 50 106 L55 60 Z"
            fill="#c83e4d"
            stroke="#1e2436"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M17 104 Q33 111 49 103"
            fill="none"
            stroke="#E7BD68"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      );
    case 'cape_emerald':
      return (
        <g className="anim-cape-sway">
          <path
            d="M45 57 L16 104 L28 110 L38 103 L49 108 L54 62 Z"
            fill="#2d8a5b"
            stroke="#1e2436"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <path d="M42 66 L26 98" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" />
        </g>
      );
    case 'cape_ether':
      return (
        <g className="anim-cape-sway">
          <path
            d="M46 58 Q18 68 12 96 Q28 106 48 92 Z"
            fill="rgba(85, 185, 176, 0.85)"
            stroke="#1e2436"
            strokeWidth="2.2"
          />
          <path
            d="M44 66 Q22 80 18 106 Q34 112 49 100 Z"
            fill="rgba(165, 243, 252, 0.72)"
            stroke="#0e7490"
            strokeWidth="1.8"
          />
        </g>
      );
    case 'cape_rift':
      return (
        <g className="anim-cape-sway">
          <path
            d="M46 55 L11 108 L26 113 L37 107 L49 112 L55 61 Z"
            fill="#4c1d95"
            stroke="#1e2436"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M17 102 L30 92 L45 104"
            fill="none"
            stroke="#55B9B0"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>
      );
  }
}

function renderArmorLayer(armorId: ArmorVisualId | undefined, skinTone: string) {
  const id = armorId ?? 'tunic_apprentice';

  switch (id) {
    case 'plate_iron':
      return (
        <g>
          {/* Chestplate */}
          <path
            d="M43 59 L77 59 L79 90 Q60 95 41 90 Z"
            fill="#94a3b8"
            stroke="#1e2436"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M60 60 L60 90" stroke="#475569" strokeWidth="2.2" />
          {/* Belt */}
          <rect x="42" y="83" width="36" height="6" rx="2" fill="#5c3d2e" stroke="#1e2436" strokeWidth="2" />
          <rect x="56" y="82" width="8" height="8" rx="1.5" fill="#E7BD68" stroke="#1e2436" strokeWidth="1.8" />
          {/* Shoulder Pauldrons */}
          <ellipse cx="41" cy="65" rx="8" ry="6.5" fill="#cbd5e1" stroke="#1e2436" strokeWidth="2.4" />
          <ellipse cx="79" cy="65" rx="8" ry="6.5" fill="#cbd5e1" stroke="#1e2436" strokeWidth="2.4" />
          <circle cx="40" cy="65" r="1.5" fill="#334155" />
          <circle cx="80" cy="65" r="1.5" fill="#334155" />
          {/* Gauntlet hand */}
          <circle cx="80" cy="82" r="5" fill="#94a3b8" stroke="#1e2436" strokeWidth="2.2" />
          <circle cx="40" cy="82" r="5" fill={skinTone} stroke="#1e2436" strokeWidth="2.2" />
        </g>
      );

    case 'plate_royal':
      return (
        <g>
          <path
            d="M42 58 L78 58 L80 91 Q60 97 40 91 Z"
            fill="#2b509e"
            stroke="#1e2436"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M47 64 L60 76 L73 64" fill="none" stroke="#E7BD68" strokeWidth="3" strokeLinecap="round" />
          <rect x="41" y="83" width="38" height="6.5" rx="2" fill="#E7BD68" stroke="#1e2436" strokeWidth="2" />
          {/* Winged Pauldrons */}
          <path d="M32 62 Q40 54 48 63 L45 71 L33 68 Z" fill="#E7BD68" stroke="#1e2436" strokeWidth="2.3" />
          <path d="M88 62 Q80 54 72 63 L75 71 L87 68 Z" fill="#E7BD68" stroke="#1e2436" strokeWidth="2.3" />
          <circle cx="60" cy="66" r="3" fill="#55B9B0" stroke="#1e2436" strokeWidth="1.5" />
          <circle cx="80" cy="82" r="5" fill="#E7BD68" stroke="#1e2436" strokeWidth="2.2" />
          <circle cx="40" cy="82" r="5" fill="#E7BD68" stroke="#1e2436" strokeWidth="2.2" />
        </g>
      );

    case 'leather_forest':
      return (
        <g>
          <path
            d="M44 59 L76 59 L78 90 Q60 95 42 90 Z"
            fill="#2f6f4e"
            stroke="#1e2436"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Cross strap */}
          <path d="M46 60 L75 86" stroke="#7c4a2d" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M46 60 L75 86" stroke="#1e2436" strokeWidth="1.2" strokeLinecap="round" />
          <rect x="43" y="83" width="34" height="5.5" rx="2" fill="#6d4026" stroke="#1e2436" strokeWidth="2" />
          <ellipse cx="42" cy="65" rx="6.5" ry="5" fill="#8b5a3c" stroke="#1e2436" strokeWidth="2.2" />
          <ellipse cx="78" cy="65" rx="6.5" ry="5" fill="#8b5a3c" stroke="#1e2436" strokeWidth="2.2" />
          <circle cx="80" cy="82" r="4.8" fill={skinTone} stroke="#1e2436" strokeWidth="2.2" />
          <circle cx="40" cy="82" r="4.8" fill={skinTone} stroke="#1e2436" strokeWidth="2.2" />
        </g>
      );

    case 'robe_cleric':
      return (
        <g>
          <path
            d="M43 59 L77 59 L82 96 Q60 101 38 96 Z"
            fill="#f4efe6"
            stroke="#1e2436"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Teal stole */}
          <path d="M53 59 L53 95 L67 95 L67 59 Z" fill="#55B9B0" stroke="#1e2436" strokeWidth="2" />
          <path d="M60 66 L60 78 M55 71 L65 71" stroke="#E7BD68" strokeWidth="2.8" strokeLinecap="round" />
          <ellipse cx="42" cy="65" rx="6.5" ry="5.5" fill="#E7BD68" stroke="#1e2436" strokeWidth="2.2" />
          <ellipse cx="78" cy="65" rx="6.5" ry="5.5" fill="#E7BD68" stroke="#1e2436" strokeWidth="2.2" />
          <circle cx="80" cy="82" r="4.8" fill={skinTone} stroke="#1e2436" strokeWidth="2.2" />
          <circle cx="40" cy="82" r="4.8" fill={skinTone} stroke="#1e2436" strokeWidth="2.2" />
        </g>
      );

    case 'robe_arcane':
      return (
        <g>
          <path
            d="M42 58 L78 58 L83 96 Q60 101 37 96 Z"
            fill="#312e81"
            stroke="#1e2436"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Arcane collar & trim */}
          <path d="M44 58 L60 71 L76 58" fill="none" stroke="#55B9B0" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="60" cy="79" r="4" fill="#a78bfa" stroke="#1e2436" strokeWidth="1.8" />
          <path d="M39 92 L81 92" stroke="#E7BD68" strokeWidth="2.4" />
          <ellipse cx="41" cy="64" rx="7" ry="6" fill="#4338ca" stroke="#1e2436" strokeWidth="2.2" />
          <ellipse cx="79" cy="64" rx="7" ry="6" fill="#4338ca" stroke="#1e2436" strokeWidth="2.2" />
          <circle cx="80" cy="82" r="4.8" fill={skinTone} stroke="#1e2436" strokeWidth="2.2" />
          <circle cx="40" cy="82" r="4.8" fill={skinTone} stroke="#1e2436" strokeWidth="2.2" />
        </g>
      );

    case 'tunic_apprentice':
    default:
      return (
        <g>
          <path
            d="M44 59 L76 59 L77 89 Q60 94 43 89 Z"
            fill="#e2dccb"
            stroke="#1e2436"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path d="M52 59 L60 69 L68 59" fill="none" stroke="#55B9B0" strokeWidth="2.8" strokeLinejoin="round" />
          <rect x="43" y="82" width="34" height="5.5" rx="2" fill="#7c4a2d" stroke="#1e2436" strokeWidth="2" />
          <rect x="57" y="81.5" width="6" height="6.5" rx="1" fill="#E7BD68" stroke="#1e2436" strokeWidth="1.5" />
          <ellipse cx="43" cy="65" rx="5.8" ry="4.8" fill="#55B9B0" stroke="#1e2436" strokeWidth="2.2" />
          <ellipse cx="77" cy="65" rx="5.8" ry="4.8" fill="#55B9B0" stroke="#1e2436" strokeWidth="2.2" />
          <circle cx="80" cy="82" r="4.8" fill={skinTone} stroke="#1e2436" strokeWidth="2.2" />
          <circle cx="40" cy="82" r="4.8" fill={skinTone} stroke="#1e2436" strokeWidth="2.2" />
        </g>
      );
  }
}

function renderWeaponLayer(weaponId: WeaponVisualId | undefined, isAttacking: boolean) {
  if (!weaponId) return null;
  const swingClass = isAttacking ? 'anim-weapon-swing' : '';

  switch (weaponId) {
    case 'sword_wood':
      return (
        <g className={swingClass}>
          <rect x="79" y="79" width="6" height="10" rx="2" fill="#7c4a2d" stroke="#1e2436" strokeWidth="2" />
          <rect x="75" y="75" width="14" height="4.5" rx="1.5" fill="#9a6b48" stroke="#1e2436" strokeWidth="2" />
          <path d="M79 75 L79 44 L82 37 L85 44 L85 75 Z" fill="#c79563" stroke="#1e2436" strokeWidth="2.2" />
        </g>
      );

    case 'sword_iron':
      return (
        <g className={swingClass}>
          <rect x="79" y="80" width="6" height="10" rx="2" fill="#475569" stroke="#1e2436" strokeWidth="2" />
          <rect x="73" y="75" width="18" height="5" rx="2" fill="#E7BD68" stroke="#1e2436" strokeWidth="2" />
          <path d="M78 75 L78 39 L82 30 L86 39 L86 75 Z" fill="#cbd5e1" stroke="#1e2436" strokeWidth="2.3" />
          <line x1="82" y1="41" x2="82" y2="71" stroke="#64748b" strokeWidth="1.6" />
        </g>
      );

    case 'sword_runic':
      return (
        <g className={swingClass}>
          <rect x="79" y="80" width="6" height="11" rx="2" fill="#1e293b" stroke="#1e2436" strokeWidth="2" />
          <path d="M71 76 L82 72 L93 76 L89 80 L75 80 Z" fill="#E7BD68" stroke="#1e2436" strokeWidth="2" />
          <path d="M77 75 L77 35 L82 24 L87 35 L87 75 Z" fill="#64748b" stroke="#1e2436" strokeWidth="2.4" />
          <path d="M82 34 L82 69" stroke="#55B9B0" strokeWidth="3" strokeLinecap="round" />
          <circle cx="82" cy="76" r="2.2" fill="#55B9B0" />
        </g>
      );

    case 'axe_berserker':
      return (
        <g className={swingClass}>
          <rect x="79" y="42" width="5.5" height="48" rx="2" fill="#5c3d2e" stroke="#1e2436" strokeWidth="2.2" />
          <path
            d="M84 44 Q102 38 103 55 Q102 68 84 62 Z"
            fill="#cbd5e1"
            stroke="#1e2436"
            strokeWidth="2.4"
          />
          <path d="M98 44 Q103 53 98 63" fill="none" stroke="#e11d48" strokeWidth="2.4" strokeLinecap="round" />
          <path
            d="M79 47 Q68 44 68 54 Q68 62 79 59 Z"
            fill="#94a3b8"
            stroke="#1e2436"
            strokeWidth="2.2"
          />
        </g>
      );

    case 'bow_hunter':
      return (
        <g className={swingClass}>
          <path
            d="M79 44 Q97 65 79 90"
            fill="none"
            stroke="#8b5a3c"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M79 44 Q97 65 79 90"
            fill="none"
            stroke="#1e2436"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line x1="79" y1="45" x2="79" y2="89" stroke="#e2e8f0" strokeWidth="1.5" />
          <line x1="75" y1="67" x2="98" y2="67" stroke="#E7BD68" strokeWidth="2.2" />
          <polygon points="98,64 104,67 98,70" fill="#cbd5e1" stroke="#1e2436" strokeWidth="1.2" />
        </g>
      );

    case 'bow_elven':
      return (
        <g className={swingClass}>
          <path
            d="M78 40 Q101 66 78 94"
            fill="none"
            stroke="#2d8a5b"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path d="M84 52 Q94 67 84 82" fill="none" stroke="#E7BD68" strokeWidth="2.2" />
          <line x1="78" y1="41" x2="78" y2="93" stroke="#a7f3d0" strokeWidth="1.6" />
          <line x1="75" y1="67" x2="101" y2="67" stroke="#55B9B0" strokeWidth="2.4" />
          <polygon points="100,63.5 107,67 100,70.5" fill="#E7BD68" stroke="#1e2436" strokeWidth="1.3" />
        </g>
      );

    case 'staff_apprentice':
      return (
        <g className={swingClass}>
          <rect x="80" y="46" width="5" height="48" rx="2.5" fill="#7c4a2d" stroke="#1e2436" strokeWidth="2.2" />
          <circle cx="82.5" cy="40" r="7" fill="#38bdf8" stroke="#1e2436" strokeWidth="2.3" />
          <circle cx="80.5" cy="38" r="2" fill="#e0f2fe" />
        </g>
      );

    case 'staff_arcane':
      return (
        <g className={swingClass}>
          <rect x="80" y="46" width="5.5" height="50" rx="2.5" fill="#4c1d95" stroke="#1e2436" strokeWidth="2.2" />
          <path d="M75 47 Q82.5 52 90 47" fill="none" stroke="#E7BD68" strokeWidth="3" strokeLinecap="round" />
          <circle cx="82.5" cy="35" r="9.5" fill="none" stroke="#E7BD68" strokeWidth="2.2" />
          <polygon points="82.5,27 88,35 82.5,43 77,35" fill="#55B9B0" stroke="#1e2436" strokeWidth="1.8" />
        </g>
      );

    case 'mace_holy':
      return (
        <g className={swingClass}>
          <rect x="80" y="54" width="5" height="38" rx="2" fill="#8b5a3c" stroke="#1e2436" strokeWidth="2.2" />
          <circle cx="82.5" cy="46" r="8.5" fill="#E7BD68" stroke="#1e2436" strokeWidth="2.3" />
          <path d="M74 44 L69 39 M91 44 L96 39" stroke="#E7BD68" strokeWidth="3" strokeLinecap="round" />
          <circle cx="82.5" cy="46" r="3.5" fill="#55B9B0" />
        </g>
      );

    case 'dagger_shadow':
      return (
        <g className={swingClass}>
          <rect x="79" y="79" width="5" height="8" rx="1.5" fill="#1e293b" stroke="#1e2436" strokeWidth="2" />
          <rect x="75" y="76" width="13" height="3.5" rx="1.5" fill="#a78bfa" stroke="#1e2436" strokeWidth="1.8" />
          <path d="M79 76 Q81 58 87 50 Q86 64 84 76 Z" fill="#334155" stroke="#1e2436" strokeWidth="2.2" />
          <path d="M81 71 L84 56" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" />
        </g>
      );
  }
}

function renderHairLayer(
  style: HeroUnit['appearance']['hairStyle'],
  hairColor: string,
  armorId: ArmorVisualId | undefined
) {
  let hairShape: React.ReactNode = null;
  switch (style) {
    case 'spiky':
      hairShape = (
        <path
          d="M36 40 Q34 21 50 17 L56 11 L63 18 L73 14 L75 23 Q85 27 83 41 Q76 31 66 32 L60 26 L52 33 Q42 31 36 40 Z"
          fill={hairColor}
          stroke="#1e2436"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
      );
      break;
    case 'bob':
      hairShape = (
        <path
          d="M35 44 Q34 18 60 17 Q86 18 85 45 L79 49 Q75 33 60 32 Q45 33 41 49 Z"
          fill={hairColor}
          stroke="#1e2436"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
      );
      break;
    case 'long':
      hairShape = (
        <g>
          <path
            d="M35 42 Q32 62 39 73 L46 66 L44 42 Z"
            fill={hairColor}
            stroke="#1e2436"
            strokeWidth="2.2"
          />
          <path
            d="M36 40 Q36 16 60 16 Q84 16 84 40 Q74 30 60 31 Q46 30 36 40 Z"
            fill={hairColor}
            stroke="#1e2436"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
        </g>
      );
      break;
    case 'ponytail':
      hairShape = (
        <g>
          <path
            d="M38 34 Q22 36 22 57 Q31 53 38 44 Z"
            fill={hairColor}
            stroke="#1e2436"
            strokeWidth="2.2"
          />
          <path
            d="M37 40 Q37 17 60 17 Q83 17 83 40 Q72 29 60 31 Q48 29 37 40 Z"
            fill={hairColor}
            stroke="#1e2436"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
        </g>
      );
      break;
  }

  // Headgear ornament reflecting equipped armor
  let headgear: React.ReactNode = null;
  if (armorId === 'plate_royal') {
    headgear = (
      <path
        d="M42 26 L50 18 L60 23 L70 18 L78 26 L75 30 L45 30 Z"
        fill="#E7BD68"
        stroke="#1e2436"
        strokeWidth="2"
      />
    );
  } else if (armorId === 'robe_arcane') {
    headgear = (
      <g>
        <path
          d="M45 27 L60 12 L75 27"
          fill="#4338ca"
          stroke="#1e2436"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <circle cx="60" cy="24" r="3" fill="#55B9B0" stroke="#1e2436" strokeWidth="1.5" />
      </g>
    );
  } else if (armorId === 'robe_cleric') {
    headgear = (
      <path
        d="M41 28 Q60 22 79 28 L76 32 Q60 27 44 32 Z"
        fill="#f4efe6"
        stroke="#E7BD68"
        strokeWidth="2"
      />
    );
  } else if (armorId === 'leather_forest') {
    headgear = (
      <path
        d="M38 30 Q60 25 82 30 L81 34 Q60 29 39 34 Z"
        fill="#2f6f4e"
        stroke="#1e2436"
        strokeWidth="1.8"
      />
    );
  }

  return (
    <g>
      {hairShape}
      {headgear}
    </g>
  );
}

export const PaperdollSvg: React.FC<PaperdollSvgProps> = ({
  hero,
  size = 86,
  showShadow = true,
  className = '',
}) => {
  const isDead = hero.currentHp <= 0;
  const isAttacking = hero.animState === 'attack';
  const isCasting = hero.animState === 'cast';
  const isHit = hero.animState === 'hit';

  const animClass = isDead
    ? 'opacity-45 grayscale rotate-[-14deg] translate-y-2 transition-all duration-300'
    : isAttacking
      ? 'anim-attack-lunge'
      : isCasting
        ? 'anim-cast-pulse'
        : isHit
          ? 'anim-hit-shake'
          : 'anim-idle-bob';

  const weaponId = hero.equipment.weapon?.visualId as WeaponVisualId | undefined;
  const armorId = hero.equipment.armor?.visualId as ArmorVisualId | undefined;
  const capeId = hero.equipment.cape?.visualId as CapeVisualId | undefined;

  return (
    <svg
      width={size}
      height={Math.round(size * 1.08)}
      viewBox="0 0 120 130"
      className={`overflow-visible select-none ${animClass} ${className}`}
      aria-label={`Personagem ${hero.name}`}
    >
      {/* Ground shadow */}
      {showShadow && (
        <ellipse cx="60" cy="116" rx="26" ry="7" fill="rgba(8, 12, 22, 0.45)" />
      )}

      {/* Buff ATK golden aura */}
      {hero.buffAtkTimerMs > 0 && !isDead && (
        <g opacity="0.85">
          <ellipse
            cx="60"
            cy="112"
            rx="30"
            ry="8"
            fill="none"
            stroke="#E7BD68"
            strokeWidth="2.5"
            strokeDasharray="6 4"
          />
        </g>
      )}

      {/* Layer 1: Cape (Behind body) */}
      {renderCapeLayer(capeId)}

      {/* Layer 2: Base Legs & Boots */}
      <g>
        <rect
          x="46"
          y="88"
          width="10"
          height="22"
          rx="4"
          fill="#334155"
          stroke="#1e2436"
          strokeWidth="2.3"
        />
        <rect
          x="64"
          y="88"
          width="10"
          height="22"
          rx="4"
          fill="#334155"
          stroke="#1e2436"
          strokeWidth="2.3"
        />
        {/* Boots */}
        <path
          d="M44 103 L58 103 L60 113 L43 113 Q42 108 44 103 Z"
          fill="#5c3d2e"
          stroke="#1e2436"
          strokeWidth="2.3"
        />
        <path
          d="M62 103 L76 103 L79 113 L61 113 Q60 108 62 103 Z"
          fill="#5c3d2e"
          stroke="#1e2436"
          strokeWidth="2.3"
        />
      </g>

      {/* Layer 3: Equipped Armor */}
      {renderArmorLayer(armorId, hero.appearance.skinTone)}

      {/* Layer 4: Head, Face & Hair */}
      <g>
        {/* Neck */}
        <rect x="55" y="52" width="10" height="9" fill={hero.appearance.skinTone} />
        {/* Head */}
        <ellipse
          cx="60"
          cy="39"
          rx="22"
          ry="20"
          fill={hero.appearance.skinTone}
          stroke="#1e2436"
          strokeWidth="2.5"
        />
        {/* Cheeks */}
        <ellipse cx="48" cy="45" rx="3.5" ry="2" fill="rgba(235, 110, 110, 0.35)" />
        <ellipse cx="73" cy="45" rx="3.5" ry="2" fill="rgba(235, 110, 110, 0.35)" />
        {/* Eyes (looking slightly right toward enemy) */}
        <ellipse cx="54" cy="40" rx="3.3" ry="4.2" fill="#1e2436" />
        <ellipse cx="70" cy="40" rx="3.3" ry="4.2" fill="#1e2436" />
        <circle cx="55" cy="39" r="1.4" fill={hero.appearance.eyeColor} />
        <circle cx="71" cy="39" r="1.4" fill={hero.appearance.eyeColor} />
        <circle cx="53.4" cy="38" r="1.2" fill="#ffffff" />
        <circle cx="69.4" cy="38" r="1.2" fill="#ffffff" />
        {/* Mouth */}
        {isAttacking || isCasting ? (
          <path d="M59 48 Q63 51 67 48" fill="none" stroke="#1e2436" strokeWidth="2.2" strokeLinecap="round" />
        ) : (
          <path d="M59 48 Q63 50.5 66 48" fill="none" stroke="#1e2436" strokeWidth="1.9" strokeLinecap="round" />
        )}
        {/* Hair & Armor Headgear */}
        {renderHairLayer(hero.appearance.hairStyle, hero.appearance.hairColor, armorId)}
      </g>

      {/* Layer 5: Equipped Weapon */}
      {renderWeaponLayer(weaponId, isAttacking)}

      {/* Shield Aura */}
      {hero.shield > 0 && !isDead && (
        <circle
          cx="60"
          cy="66"
          r="46"
          fill="rgba(85, 185, 176, 0.14)"
          stroke="rgba(85, 185, 176, 0.85)"
          strokeWidth="2.4"
          strokeDasharray="8 5"
        />
      )}
    </svg>
  );
};
