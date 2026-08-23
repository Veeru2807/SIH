import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Ship, 
  Layers,
  Sparkles,
  DollarSign,
  Calendar,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { MainNavPage } from './Navbar';

interface HomePageProps {
  onNavigate: (page: MainNavPage) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Smooth KPI count-up animations
  const [freightRate, setFreightRate] = useState(0);
  const [savingsVal, setSavingsVal] = useState(0);
  const [confidenceVal, setConfidenceVal] = useState(0);

  useEffect(() => {
    // 0 -> 28.40
    let start = 0;
    const duration = 1200;
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
    <div className="space-y-24">
      {/* 1. Hero Section */}
      <section className="relative bg-[#070e1e] text-white pt-36 pb-24 overflow-hidden border-b border-[#1e3362]">
        <div className="absolute inset-0 hero-grid opacity-60"></div>
        
        {/* Ambient Subtle Pulsing Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-blue-600/15 blur-[130px] animate-pulse-glow pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6 animate-fade-in-up">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111f42] border border-[#1e3362] text-xs font-medium text-blue-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
              <span>Intelligent Maritime Decision-Support Terminal</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300 font-mono">SIH Problem Statement 26006</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              AI-Powered Insights.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                Smarter Chartering.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              FreightQuant helps shipping companies and bulk procurement teams predict freight markets, optimize vessel chartering, and execute data-driven COA contracts.
            </p>

            {/* Action Buttons with Micro-interactions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('dashboard')}
                className="btn-primary px-6 py-3.5 text-sm font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/25 cursor-pointer group"
              >
                <span>Launch Dashboard</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="px-6 py-3.5 rounded-lg bg-[#111f42] hover:bg-[#162852] border border-[#1e3362] text-white text-sm font-semibold transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar with Live Animated Count-Up */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-[#1e3362]/80">
            <div className="transition-all duration-300 hover:translate-x-1">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Current Benchmark Rate</div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white mt-1">
                ${freightRate.toFixed(2)} <span className="text-xs text-slate-400 font-sans font-normal">/ MT</span>
              </div>
              <div className="text-xs text-blue-400 mt-0.5 font-medium">Pacific Hay Point → Paradip</div>
            </div>

            <div className="transition-all duration-300 hover:translate-x-1">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">30-Day Forecast Target</div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400 mt-1">
                $31.80 <span className="text-xs text-slate-400 font-sans font-normal">/ MT</span>
              </div>
              <div className="text-xs text-amber-400/90 mt-0.5 font-medium">+11.9% Contango Shift</div>
            </div>

            <div className="transition-all duration-300 hover:translate-x-1">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Market Regime</div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 mt-1">
                RISING
              </div>
              <div className="text-xs text-emerald-400/90 mt-0.5 font-medium">{confidenceVal}% Model Confidence</div>
            </div>

            <div className="transition-all duration-300 hover:translate-x-1">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Multi-Voyage Savings</div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-blue-400 mt-1">
                {savingsVal}% (₹7.1 Cr)
              </div>
              <div className="text-xs text-slate-400 mt-0.5 font-medium">vs Volatile Spot Market</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why FreightQuant (Light Editorial Surface) */}
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
          <div className="enterprise-card p-8 space-y-4 group">
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Probabilistic Forecasting</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              DeepAR recurrent models and XGBoost ensembles forecast 7D, 14D, and 30D rate trajectories with calibrated 80% and 95% confidence cones.
            </p>
          </div>

          <div className="enterprise-card p-8 space-y-4 group">
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Ship className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Vessel & Port Constraints</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Calculates geometric compatibility against Indian East Coast discharge drafts (Paradip, Vizag, Dhamra, Haldia) to avoid costly demurrage.
            </p>
          </div>

          <div className="enterprise-card p-8 space-y-4 group">
            <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">COA Contract Strategy</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Quantifies spot vs short-term vs medium-term multiple-voyage contracts, recommending optimal laycan windows with guaranteed volume discounts.
            </p>
          </div>
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
        </div>
      </section>

      {/* 4. CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-2xl p-10 sm:p-14 text-white flex flex-wrap items-center justify-between gap-8 shadow-xl shadow-blue-500/10">
          <div className="max-w-xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to optimize your vessel chartering strategy?
            </h2>
            <p className="text-sm text-blue-100 leading-relaxed font-normal">
              Access live probabilistic freight forecasting, port constraint simulation, and contract optimization directly in the platform dashboard.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('dashboard')}
              className="px-6 py-3.5 rounded-lg bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Open Platform Dashboard
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
