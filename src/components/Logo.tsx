import React from 'react';

interface LogoProps {
  variant?: 'full' | 'mark' | 'horizontal';
  theme?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';
  const primaryBlue = '#0E4D82';
  const lightBlue = '#1D70B8';
  const textColor = isDark ? '#FFFFFF' : '#0E4D82';
  const subtextColor = isDark ? '#94A3B8' : '#0B0F19';

  // Mark only (isometric cube monogram L-N-A)
  const emblem = (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full select-none"
      aria-hidden="true"
    >
      {/* Outer subtle shadow/glow */}
      <defs>
        <filter id="cubeShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
        </filter>
      </defs>

      <g filter="url(#cubeShadow)">
        {/* Isometric Cube Outline & Base */}
        {/* Left Face - Deep Blue with stylized 'L' cutout */}
        <path
          d="M80 82L24 50V110L80 142V82Z"
          fill={primaryBlue}
        />
        {/* 'L' face internal white geometry */}
        <path
          d="M36 60L54 70V105L70 114V126L36 107V60Z"
          fill="#FFFFFF"
        />

        {/* Right Face - Medium Blue with stylized 'N' */}
        <path
          d="M80 82L136 50V110L80 142V82Z"
          fill={lightBlue}
        />
        {/* 'N' face internal white geometry */}
        <path
          d="M88 126V88L106 100V126H88Z"
          fill="#FFFFFF"
        />
        <path
          d="M106 100L124 74V112H116V95L102 116H94L88 107V88L106 100Z"
          fill="#FFFFFF"
        />

        {/* Top Face - Angular roof with stylized 'A' */}
        <path
          d="M80 22L136 50L80 82L24 50L80 22Z"
          fill="#08375E"
        />
        {/* Top Facet geometric cut */}
        <path
          d="M80 34L120 54L80 74L40 54L80 34Z"
          fill="#FFFFFF"
        />
        <path
          d="M80 44L102 54L80 64L58 54L80 44Z"
          fill={primaryBlue}
        />
      </g>
    </svg>
  );

  if (variant === 'mark') {
    return <div className={`inline-block ${className}`}>{emblem}</div>;
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <div className="w-10 h-10 md:w-11 md:h-11 shrink-0">{emblem}</div>
        <div className="flex flex-col">
          <span
            className="text-lg md:text-xl font-bold tracking-tight font-serif leading-none"
            style={{ color: textColor }}
          >
            LUKENIADRI
          </span>
          <span
            className="text-[9px] md:text-[10px] tracking-wider uppercase font-semibold mt-1"
            style={{ color: subtextColor }}
          >
            Construções e Obras Públicas
          </span>
        </div>
      </div>
    );
  }

  // Full variant (matches the original logo layout)
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="w-16 h-16 md:w-20 md:h-20 mb-2">{emblem}</div>
      <span
        className="text-xl md:text-2xl font-bold tracking-tight font-serif"
        style={{ color: textColor }}
      >
        LUKENIADRI
      </span>
      <span
        className="text-[10px] md:text-[11px] tracking-widest uppercase font-semibold mt-1"
        style={{ color: subtextColor }}
      >
        CONSTRUÇÕES E OBRAS PÚBLICAS, (SU), LDA
      </span>
    </div>
  );
};
