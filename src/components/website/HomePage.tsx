import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Ship, 
  Sparkles, 
  Play
} from 'lucide-react';
import { MainNavPage } from './Navbar';
import { MaritimeRouteCanvas } from './MaritimeRouteCanvas';
import { HeroShipVisual } from './HeroShipVisual';

interface HomePageProps {
  onNavigate: (page: MainNavPage) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Mouse movement parallax state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Animated KPI count-up values
  const [freightRate, setFreightRate] = useState(0);
  const [savingsVal, setSavingsVal] = useState(0);
  const [confidenceVal, setConfidenceVal] = useState(0);

  // Scroll parallax effects
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.2]);
  const heroParallaxY = useTransform(scrollYProgress, [0, 0.4], [0, 60]);

  // Handle subtle mouse parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    setMousePos({ x, y });
  };

  useEffect(() => {
    const duration = 1400;
    const startTime = performance.now();

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setFreightRate(Number((28.40 * easeOut).toFixed(2)));
      setSavingsVal(Number((7.1 * easeOut).toFixed(1)));
      setConfidenceVal(Number((84.5 * easeOut).toFixed(1)));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    requestAnimationFrame(updateCount);
  }, []);

  return (
    <div className="space-y-28 overflow-hidden">
      {/* 1. Hero Section */}
      <section 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-[92vh] bg-[#070e1e] text-white pt-32 pb-20 flex flex-col justify-between overflow-hidden border-b border-[#1e3362]"
      >
        {/* Animated Maritime World Route Canvas (Background confined to right side) */}
        <MaritimeRouteCanvas />

        {/* Hero Content Container */}
        <motion.div 
          style={{ opacity: heroOpacity, y: heroParallaxY }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center my-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (7 Cols) - Unobscured Clean Typography */}
            <div className="lg:col-span-7 space-y-6">
              {/* Tag / Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111f42] border border-[#1e3362] text-xs font-medium text-blue-300 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span>Intelligent Maritime Decision-Support Terminal</span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-300 font-mono">SIH 26006</span>
              </motion.div>

              {/* Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.06]"
              >
                AI-Powered Insights.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                  Smarter Chartering.
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal"
              >
                FreightQuant helps shipping companies predict freight forward curves, evaluate Indian East Coast port drafts, and execute data-driven COA contracts.
              </motion.p>

              {/* CTAs with Light Sweep */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="relative group overflow-hidden btn-primary px-7 py-3.5 text-sm font-semibold flex items-center gap-2 shadow-xl shadow-blue-600/30 cursor-pointer"
                >
                  <span className="relative z-10">Launch Dashboard</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </button>

                <button
                  onClick={() => onNavigate('methodology')}
                  className="px-6 py-3.5 rounded-lg bg-[#111f42] hover:bg-[#162852] border border-[#1e3362] text-white text-sm font-semibold transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                  <span>Explore Methodology</span>
                </button>
              </motion.div>
            </div>

            {/* Right Visual: Cinematic Panamax Vessel Photo (5 Cols) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.2 }}
              style={{
                transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px)`,
              }}
              className="lg:col-span-5 relative flex flex-col items-center justify-center"
            >
              {/* Floating Badge 1: Market Regime */}
              <motion.div 
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 right-2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0c1630]/95 border border-emerald-500/50 backdrop-blur-md shadow-xl text-xs"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                <span className="text-slate-300">Market:</span>
                <span className="font-bold text-emerald-400 font-mono">RISING (+11.9%)</span>
              </motion.div>

              {/* Floating Badge 2: Recommended Window */}
              <motion.div 
                animate={{ y: [3, -4, 3] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                className="absolute -top-4 left-0 z-20 flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0c1630]/95 border border-amber-500/50 backdrop-blur-md shadow-xl text-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-slate-300">Entry:</span>
                <span className="font-bold text-amber-300 font-mono">Next 4–7 Days</span>
              </motion.div>

              {/* High-Resolution Hero Ship Photo */}
              <motion.div
                animate={{ 
                  x: [0, 5, 0],
                  y: [0, -3.5, 0] 
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity, 
                  ease: 'easeInOut' 
                }}
                className="w-full rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl shadow-cyan-950/60 bg-black/60 relative group"
              >
                <img
                  src="/hero_ship.jpg"
                  alt="Panamax Bulk Carrier at Sea"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070e1e] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-3 left-4 text-[11px] font-mono text-cyan-300 font-bold flex items-center gap-1.5">
                  <Ship className="w-3.5 h-3.5" />
                  <span>STAR NOVA • 76,000 DWT PANAMAX</span>
                </div>
              </motion.div>

              {/* Floating Badge 3: Optimal Vessel */}
              <motion.div 
                animate={{ y: [-2, 3, -2] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                className="mt-3 flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0c1630]/95 border border-cyan-500/50 backdrop-blur-md shadow-xl text-xs z-20"
              >
                <Ship className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-slate-300">Optimal Vessel Fit:</span>
                <span className="font-bold text-cyan-300 font-mono">PANAMAX 76k DWT (13.8m Draft)</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Clean Staggered KPI Metric Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-6 border-t border-[#1e3362]/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-1 hover:translate-x-1 transition-transform"
            >
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Current Benchmark Rate</div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white">
                ${freightRate.toFixed(2)} <span className="text-xs text-slate-400 font-sans font-normal">/ MT</span>
              </div>
              <div className="text-xs text-cyan-400 font-medium">Hay Point (Aus) → Paradip (Ind)</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="space-y-1 hover:translate-x-1 transition-transform"
            >
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">30-Day Forecast Target</div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400">
                $31.80 <span className="text-xs text-slate-400 font-sans font-normal">/ MT</span>
              </div>
              <div className="text-xs text-amber-400/90 font-medium">+11.9% Contango Trajectory</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="space-y-1 hover:translate-x-1 transition-transform"
            >
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Market Regime State</div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">
                RISING
              </div>
              <div className="text-xs text-emerald-400/90 font-medium">{confidenceVal}% Model Confidence</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="space-y-1 hover:translate-x-1 transition-transform"
            >
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Multi-Voyage Savings</div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-blue-400">
                {savingsVal}% (₹7.1 Cr)
              </div>
              <div className="text-xs text-slate-400 font-medium">vs Volatile Spot Market</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Why FreightQuant Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600">Enterprise Decision Intelligence</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Built for Logistics & Bulk Procurement Teams
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Move from subjective spot fixtures to automated quantitative optimization. FreightQuant converts probabilistic market predictions into defensible chartering decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Probabilistic Forecasting',
              desc: 'DeepAR recurrent models and XGBoost ensembles forecast 7D, 14D, and 30D rate trajectories with calibrated 80% and 95% confidence cones.',
              icon: TrendingUp,
            },
            {
              title: 'Vessel & Port Constraints',
              desc: 'Calculates geometric compatibility against Indian East Coast discharge drafts (Paradip, Vizag, Dhamra, Haldia) to avoid costly demurrage.',
              icon: Ship,
            },
            {
              title: 'COA Contract Strategy',
              desc: 'Quantifies spot vs short-term vs medium-term multiple-voyage contracts, recommending optimal laycan windows with guaranteed volume discounts.',
              icon: ShieldCheck,
            }
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="enterprise-card p-8 space-y-4 group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Methodology Snapshot */}
      <section className="bg-slate-900 text-white py-20 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400">Core Methodology</div>
              <h2 className="text-3xl font-bold text-white tracking-tight mt-1">
                From Raw Market Signals to Executable Decision
              </h2>
            </div>
            <button
              onClick={() => onNavigate('methodology')}
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer group"
            >
              <span>Explore Detailed Methodology</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Data Ingestion', desc: 'Baltic Dry indices, Singapore bunker spreads, and port wait queues.' },
              { step: '02', title: 'Forward Curve ML', desc: 'Generates probabilistic price paths and market regime signals.' },
              { step: '03', title: 'Constraint Solver', desc: 'Evaluates drafts, LOA, turnaround days, and fuel burn.' },
              { step: '04', title: 'Charter Directive', desc: 'Outputs recommended vessel, entry timing, and contract type.' },
            ].map((m) => (
              <div key={m.step} className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-blue-500/50 p-6 rounded-xl space-y-3 transition-all transform hover:-translate-y-1">
                <span className="text-xs font-mono font-bold text-blue-400">{m.step}</span>
                <h3 className="text-lg font-bold text-white">{m.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* High-Resolution Platform Architecture Showcase Image */}
          <div className="pt-6">
            <div className="rounded-xl overflow-hidden border border-slate-700/90 shadow-2xl bg-black/50">
              <img 
                src="/freightquant_showcase.jpg" 
                alt="FreightQuant High Fidelity Architecture & Platform Preview" 
                className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-2xl p-10 sm:p-14 text-white flex flex-wrap items-center justify-between gap-8 shadow-2xl shadow-blue-500/20 relative overflow-hidden">
          <div className="max-w-xl space-y-3 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to optimize your vessel chartering strategy?
            </h2>
            <p className="text-sm text-blue-100 leading-relaxed font-normal">
              Access live probabilistic freight forecasting, port constraint simulation, and contract optimization directly in the platform dashboard.
            </p>
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <button
              onClick={() => onNavigate('dashboard')}
              className="px-7 py-3.5 rounded-lg bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Open Platform Dashboard
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
