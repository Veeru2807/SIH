import React from 'react';

export const MaritimeRouteCanvas: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-70 z-0">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle Grid Pattern */}
          <pattern id="maritimeGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(37, 99, 235, 0.08)" strokeWidth="0.75" />
          </pattern>

          {/* Route Gradients */}
          <linearGradient id="routeGradientAus" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="routeGradientUS" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="routeGradientIndo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
          </linearGradient>

          {/* Glow Filters */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="url(#maritimeGrid)" />

        {/* Global Hub Nodes */}
        {/* India East Coast Destination Hub (Paradip / Vizag) */}
        <g transform="translate(620, 270)">
          <circle r="18" fill="rgba(6, 182, 212, 0.12)" className="animate-ping" style={{ animationDuration: '3s' }} />
          <circle r="8" fill="#06b6d4" fillOpacity="0.3" />
          <circle r="4" fill="#38bdf8" filter="url(#glow)" />
          <text x="12" y="4" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold" letterSpacing="0.5">
            INDIA EAST COAST (PARADIP)
          </text>
        </g>

        {/* Australia (Hay Point / Dalrymple Bay) */}
        <g transform="translate(850, 460)">
          <circle r="5" fill="#3b82f6" />
          <circle r="2.5" fill="#93c5fd" />
          <text x="10" y="3" fill="#94a3b8" fontSize="9" fontFamily="monospace">
            HAY POINT (AU)
          </text>
        </g>

        {/* Indonesia (Taboneo) */}
        <g transform="translate(730, 360)">
          <circle r="4" fill="#10b981" />
          <circle r="2" fill="#a7f3d0" />
          <text x="10" y="3" fill="#94a3b8" fontSize="9" fontFamily="monospace">
            TABONEO (ID)
          </text>
        </g>

        {/* Mozambique (Maputo) */}
        <g transform="translate(420, 440)">
          <circle r="4" fill="#f59e0b" />
          <circle r="2" fill="#fde68a" />
          <text x="-75" y="3" fill="#94a3b8" fontSize="9" fontFamily="monospace">
            MAPUTO (MZ)
          </text>
        </g>

        {/* United States (Baltimore via Cape) */}
        <g transform="translate(180, 200)">
          <circle r="4" fill="#818cf8" />
          <circle r="2" fill="#c7d2fe" />
          <text x="-85" y="3" fill="#94a3b8" fontSize="9" fontFamily="monospace">
            BALTIMORE (US)
          </text>
        </g>

        {/* Primary Maritime Curved Route Lines (SVG Paths) */}
        {/* Route 1: Australia -> India (Primary Coking Coal Corridor) */}
        <path
          id="routeAus"
          d="M 850 460 Q 750 380 620 270"
          stroke="url(#routeGradientAus)"
          strokeWidth="2.5"
          strokeDasharray="6 4"
          fill="none"
          filter="url(#glow)"
        />

        {/* Route 2: Indonesia -> India */}
        <path
          id="routeIndo"
          d="M 730 360 Q 670 310 620 270"
          stroke="url(#routeGradientIndo)"
          strokeWidth="2"
          strokeDasharray="5 3"
          fill="none"
        />

        {/* Route 3: Mozambique -> India */}
        <path
          id="routeMoz"
          d="M 420 440 Q 510 360 620 270"
          stroke="#f59e0b"
          strokeWidth="1.75"
          strokeDasharray="4 4"
          strokeOpacity="0.7"
          fill="none"
        />

        {/* Route 4: US -> India */}
        <path
          id="routeUS"
          d="M 180 200 Q 340 380 620 270"
          stroke="url(#routeGradientUS)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeOpacity="0.5"
          fill="none"
        />

        {/* Moving Particles along Route 1 (Australia to Paradip) */}
        <circle r="3.5" fill="#38bdf8" filter="url(#glow)">
          <animateMotion dur="4.5s" repeatCount="indefinite" path="M 850 460 Q 750 380 620 270" />
        </circle>
        <circle r="2" fill="#ffffff">
          <animateMotion dur="4.5s" repeatCount="indefinite" path="M 850 460 Q 750 380 620 270" />
        </circle>

        {/* Staggered Secondary Particle */}
        <circle r="3" fill="#06b6d4" opacity="0.8">
          <animateMotion dur="4.5s" begin="2.25s" repeatCount="indefinite" path="M 850 460 Q 750 380 620 270" />
        </circle>

        {/* Moving Particle along Route 2 (Indonesia) */}
        <circle r="2.5" fill="#10b981">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M 730 360 Q 670 310 620 270" />
        </circle>

        {/* Moving Particle along Route 3 (Mozambique) */}
        <circle r="2.5" fill="#f59e0b">
          <animateMotion dur="6s" repeatCount="indefinite" path="M 420 440 Q 510 360 620 270" />
        </circle>
      </svg>
    </div>
  );
};
