import React from 'react';

export const HeroShipVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center pointer-events-none">
      {/* Soft Water Ripple Glow at Hull Line */}
      <div className="absolute bottom-6 w-3/4 h-8 bg-cyan-500/20 blur-xl rounded-full animate-pulse"></div>

      <svg
        className="w-full h-auto drop-shadow-[0_20px_40px_rgba(2,6,23,0.8)]"
        viewBox="0 0 600 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hullGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <linearGradient id="deckGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          <linearGradient id="superstructureGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>

          <linearGradient id="cargoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          <linearGradient id="waterLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Bulker Ship Hull Geometry (Panamax Class) */}
        {/* Lower Red Antifouling Waterline */}
        <path
          d="M 60 250 L 520 250 Q 560 250 575 230 L 565 265 Q 530 280 470 280 L 100 280 Q 50 280 45 260 Z"
          fill="url(#waterLine)"
        />

        {/* Main Black Steel Hull */}
        <path
          d="M 50 190 L 530 190 Q 570 190 585 160 L 575 230 Q 560 250 520 250 L 60 250 Q 40 230 45 200 Z"
          fill="url(#hullGradient)"
          stroke="#334155"
          strokeWidth="1.5"
        />

        {/* Bow Crest & Draft Marks */}
        <line x1="575" y1="170" x2="575" y2="250" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />

        {/* Cargo Holds Hatch Covers (7 Holds - Panamax Specification) */}
        {[100, 160, 220, 280, 340, 400, 460].map((x, i) => (
          <g key={i}>
            <rect
              x={x}
              y="178"
              width="48"
              height="14"
              rx="2"
              fill="url(#cargoGradient)"
              stroke="#64748b"
              strokeWidth="1"
            />
            {/* Hatch Detail */}
            <line x1={x + 6} y1="185" x2={x + 42} y2="185" stroke="#94a3b8" strokeWidth="0.75" opacity="0.5" />
          </g>
        ))}

        {/* Deck Cargo Cranes (Geared Supramax/Panamax rig) */}
        {[140, 260, 380].map((cx, idx) => (
          <g key={idx} opacity="0.85">
            <rect x={cx + 10} y="152" width="6" height="26" fill="#64748b" rx="1" />
            <line x1={cx + 13} y1="154" x2={cx + 55} y2="140" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
            <line x1={cx + 13} y1="154" x2={cx - 20} y2="145" stroke="#64748b" strokeWidth="1.5" />
          </g>
        ))}

        {/* Aft Bridge Superstructure & Accommodation Tower */}
        <g transform="translate(60, 110)">
          {/* Main Tower Block */}
          <path d="M 10 80 L 10 20 L 45 20 L 45 80 Z" fill="url(#superstructureGradient)" stroke="#cbd5e1" strokeWidth="1" />
          
          {/* Bridge Deck & Windows */}
          <rect x="5" y="15" width="45" height="12" rx="1.5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.75" />
          {[10, 18, 26, 34, 42].map((wx, wi) => (
            <rect key={wi} x={wx} y="18" width="5" height="5" fill="#0284c7" />
          ))}

          {/* Exhaust Funnel Stack */}
          <rect x="2" y="32" width="10" height="28" fill="#1e293b" rx="1" />
          <rect x="2" y="38" width="10" height="5" fill="#2563eb" />

          {/* Radar Mast & Navigation Sensors */}
          <line x1="28" y1="15" x2="28" y2="-10" stroke="#94a3b8" strokeWidth="2" />
          <line x1="20" y1="-5" x2="36" y2="-5" stroke="#94a3b8" strokeWidth="1.5" />
          <circle cx="28" cy="-10" r="2.5" fill="#38bdf8" className="animate-ping" style={{ animationDuration: '2s' }} />
        </g>

        {/* Technical Vessel Callout Text */}
        <text x="470" y="272" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold" opacity="0.8">
          76,000 DWT PANAMAX
        </text>
      </svg>
    </div>
  );
};
