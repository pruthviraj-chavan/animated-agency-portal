export function Sculptural3DTorus() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-24 w-24 sm:h-28 sm:w-28 drop-shadow-md"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="dvTorusGrad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFA27B" />
          <stop offset="55%" stopColor="#FF5422" />
          <stop offset="100%" stopColor="#8F2204" />
        </radialGradient>
      </defs>
      <path
        d="M60 18 C88 18 106 36 106 60 C106 84 88 102 60 102 C32 102 14 84 14 60 C14 36 32 18 60 18 Z M60 44 C48 44 40 50 40 60 C40 70 48 76 60 76 C72 76 80 70 80 60 C80 50 72 44 60 44 Z"
        fill="url(#dvTorusGrad)"
        fillRule="evenodd"
        transform="rotate(-14 60 60)"
      />
      <ellipse
        cx="48"
        cy="36"
        rx="14"
        ry="5"
        fill="#FFD2BF"
        opacity="0.55"
        transform="rotate(-18 48 36)"
      />
    </svg>
  );
}

export function Sculptural3DCapsules() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-24 w-24 sm:h-28 sm:w-28 drop-shadow-md"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dvCapGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFA782" />
          <stop offset="55%" stopColor="#FF5422" />
          <stop offset="100%" stopColor="#9C2706" />
        </linearGradient>
        <linearGradient id="dvCapGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFB899" />
          <stop offset="60%" stopColor="#F55B2B" />
          <stop offset="100%" stopColor="#7C1D04" />
        </linearGradient>
      </defs>
      <rect
        x="44"
        y="14"
        width="32"
        height="90"
        rx="16"
        fill="url(#dvCapGrad1)"
        transform="rotate(-24 60 60)"
      />
      <rect
        x="44"
        y="16"
        width="32"
        height="86"
        rx="16"
        fill="url(#dvCapGrad2)"
        transform="rotate(28 60 60)"
      />
      <circle cx="60" cy="60" r="14" fill="#FF7B4D" opacity="0.9" />
      <ellipse cx="56" cy="54" rx="6" ry="3.5" fill="#FFD9C9" opacity="0.65" />
    </svg>
  );
}

export function Sculptural3DBurst() {
  const rays = Array.from({ length: 12 }, (_, idx) => idx * 30);
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-24 w-24 sm:h-28 sm:w-28 drop-shadow-md"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dvRayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFA27B" />
          <stop offset="55%" stopColor="#FF5422" />
          <stop offset="100%" stopColor="#9E2706" />
        </linearGradient>
      </defs>
      {rays.map((deg) => (
        <rect
          key={deg}
          x="55"
          y="12"
          width="10"
          height="36"
          rx="5"
          fill="url(#dvRayGrad)"
          transform={`rotate(${deg} 60 60)`}
        />
      ))}
      <circle cx="60" cy="60" r="13" fill="url(#dvRayGrad)" />
      <circle cx="56" cy="56" r="4" fill="#FFD4C2" opacity="0.6" />
    </svg>
  );
}

export function Sculptural3DCross() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-24 w-24 sm:h-28 sm:w-28 drop-shadow-md"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dvCrossV" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB08E" />
          <stop offset="52%" stopColor="#FF5422" />
          <stop offset="100%" stopColor="#902104" />
        </linearGradient>
        <linearGradient id="dvCrossH" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFA07A" />
          <stop offset="55%" stopColor="#F24C1C" />
          <stop offset="100%" stopColor="#7C1C03" />
        </linearGradient>
      </defs>
      <rect
        x="48"
        y="12"
        width="24"
        height="96"
        rx="12"
        fill="url(#dvCrossV)"
        transform="rotate(24 60 60)"
      />
      <rect
        x="14"
        y="48"
        width="92"
        height="24"
        rx="12"
        fill="url(#dvCrossH)"
        transform="rotate(14 60 60)"
      />
      <ellipse
        cx="54"
        cy="34"
        rx="5"
        ry="12"
        fill="#FFD4C2"
        opacity="0.45"
        transform="rotate(24 54 34)"
      />
      <ellipse
        cx="78"
        cy="60"
        rx="11"
        ry="4.5"
        fill="#FFD4C2"
        opacity="0.4"
        transform="rotate(14 78 60)"
      />
    </svg>
  );
}

export function Sculptural3DKnot() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-24 w-24 sm:h-28 sm:w-28 drop-shadow-md"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dvKnotA" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB899" />
          <stop offset="55%" stopColor="#FF5422" />
          <stop offset="100%" stopColor="#8E2204" />
        </linearGradient>
      </defs>
      <path
        d="M36 42 C22 24 52 10 66 28 C80 46 40 74 54 92 C68 110 98 96 84 78 C70 60 30 88 26 64 C22 40 94 34 94 60 C94 82 72 96 58 84"
        fill="none"
        stroke="url(#dvKnotA)"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 42 C26 28 48 16 60 24"
        fill="none"
        stroke="#FFD8C7"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function Sculptural3DStack() {
  const pills = [-24, -8, 8, 24];
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-24 w-24 sm:h-28 sm:w-28 drop-shadow-md"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dvStackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB08E" />
          <stop offset="55%" stopColor="#FF5422" />
          <stop offset="100%" stopColor="#8D2104" />
        </linearGradient>
      </defs>
      {pills.map((offset, i) => (
        <g key={offset} transform={`translate(${offset * 0.45} ${offset}) rotate(-32 60 60)`}>
          <rect
            x="24"
            y="50"
            width="72"
            height="19"
            rx="9.5"
            fill="url(#dvStackGrad)"
            stroke="#FFC9B3"
            strokeWidth={i === 0 ? 0.9 : 0.4}
          />
          <rect x="33" y="54" width="28" height="4" rx="2" fill="#FFD8C7" opacity="0.5" />
        </g>
      ))}
    </svg>
  );
}
