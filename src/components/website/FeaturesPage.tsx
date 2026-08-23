import React, { useState } from 'react';
import { 
  TrendingUp, 
  Ship, 
  Anchor, 
  Activity, 
  ShieldAlert, 
  FileCheck, 
  Sliders, 
  DollarSign, 
  BarChart3,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  Search,
  ChevronRight,
  Database,
  LineChart,
  Navigation
} from 'lucide-react';
import { MainNavPage } from './Navbar';

interface FeaturesPageProps {
  onNavigate: (page: MainNavPage) => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'forecasting' | 'constraints' | 'contracts' | 'simulation'>('forecasting');

  const featureTabs = [
    {
      id: 'forecasting' as const,
      label: 'DeepAR Rate Forecasting',
      icon: TrendingUp,
      badge: 'PROBABILISTIC ML',
      headline: 'Multi-Horizon Probabilistic Forward Curves',
      subhead: 'DeepAR recurrent architectures trained on 15-year Baltic indices, fuel spreads, and China steel demand.',
      stats: [
        { label: 'Forecast Horizons', value: '7D, 14D, 30D, 90D' },
        { label: 'Confidence Envelopes', value: 'P80 & P95 Calibrated' },
        { label: 'Market Regime Model', value: 'Markov 4-State Detection' },
      ],
      points: [
        'Forecasts spot rates for Coking Coal (Australia to Paradip) & Thermal Coal (Indonesia to Vizag)',
        'Quantifies upside contango and downside backwardation risk',
        'Automatic regime tagging: RISING, VOLATILE, STABLE, or DECLINING'
      ]
    },
    {
      id: 'constraints' as const,
      label: 'Port & Vessel Draft Solver',
      icon: Anchor,
      badge: 'GEOMETRIC OPTIMIZER',
      headline: 'Discharge Port Geometric Compatibility',
      subhead: 'Real-time validation against draft tides, beam limits, and discharge rates across Indian East Coast.',
      stats: [
        { label: 'Ports Mapped', value: 'Paradip, Vizag, Dhamra, Haldia' },
        { label: 'Vessel Classes', value: 'Handysize to Capesize' },
        { label: 'Demurrage Guard', value: 'Zero Over-Draft Risk' },
      ],
      points: [
        'Prevents draft violations by calculating maximum allowable arrival parcel size',
        'Evaluates daily discharge speeds (MT/day) and port turnaround waiting queues',
        'Computes tidal window adjustments for high-risk seasonal monsoon periods'
      ]
    },
    {
      id: 'contracts' as const,
      label: 'COA Contract Matrix',
      icon: FileCheck,
      badge: 'STRATEGY ENGINE',
      headline: 'Spot vs Short-Term vs Medium-Term COA',
      subhead: 'Mathematical expected-value contract optimizer with volume discount factoring.',
      stats: [
        { label: 'Multi-Voyage Savings', value: 'Up to 7.1% (₹7.1 Cr)' },
        { label: 'Laycan Windows', value: 'Automated 4–7 Day Timing' },
        { label: 'Hedging Ratio', value: 'Dynamic Spot/COA Split' },
      ],
      points: [
        'Compares total cost of single-voyage spot fixtures against 3-voyage and 6-voyage COAs',
        'Recommends optimal vessel charter entry windows based on forward curve slope',
        'Quantifies bunker fuel escalation pass-through formulas'
      ]
    },
    {
      id: 'simulation' as const,
      label: 'Real-Time Sensitivity Lab',
      icon: Sliders,
      badge: 'STRESS-TEST ENGINE',
      headline: 'Scenario What-If Simulation Suite',
      subhead: 'Interactive Monte Carlo sensitivity engine testing rate spikes, fuel volatility, and port delays.',
      stats: [
        { label: 'Freight Stress', value: '±30% Spot Volatility' },
        { label: 'Bunker Shock', value: '±50% VLSFO Shift' },
        { label: 'Queue Delays', value: '0 to 14 Days Demurrage' },
      ],
      points: [
        'Real-time recalculation of total voyage expenditures under market shocks',
        'Instant strategy re-ranking when market switches from contango to backwardation',
        'Exportable executive audit reports for procurement committee approval'
      ]
    }
  ];

  const currentTab = featureTabs.find(t => t.id === activeTab)!;

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold uppercase tracking-wider text-cyan-600">Enterprise Decision Intelligence</div>
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Platform Architecture & Capabilities
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Engineered for high data density, quantitative explainability, and speed. Explore how FreightQuant models dry-bulk logistics.
        </p>
      </div>

      {/* Interactive Feature Exploration Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {featureTabs.map((tab) => {
          const Icon = tab.icon;
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-5 rounded-xl text-left transition-all border cursor-pointer ${
                isSelected
                  ? 'bg-[#070e1e] text-white border-blue-500 shadow-xl shadow-blue-500/10'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  isSelected ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                  isSelected ? 'bg-blue-500/30 text-blue-300' : 'bg-slate-100 text-slate-500'
                }`}>
                  {tab.badge}
                </span>
              </div>
              <div className="text-sm font-bold">{tab.label}</div>
            </button>
          );
        })}
      </div>

      {/* Tab Detail Panel (Interactive Architecture Workspace) */}
      <div className="bg-[#070e1e] rounded-2xl p-8 sm:p-12 text-white border border-[#1e3362] shadow-2xl space-y-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
              MODULE 0{featureTabs.findIndex(t => t.id === activeTab) + 1} // {currentTab.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              {currentTab.headline}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {currentTab.subhead}
            </p>
          </div>

          <button
            onClick={() => onNavigate('dashboard')}
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Open in Terminal Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#1e3362]">
          {currentTab.stats.map((stat, idx) => (
            <div key={idx} className="bg-[#0c1630] border border-[#1e3362] p-5 rounded-xl space-y-1">
              <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
              <div className="text-lg sm:text-xl font-bold text-cyan-300 font-mono">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Capability Checklist */}
        <div className="space-y-3 pt-4">
          <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">Key Capabilities:</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentTab.points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-[#0a1226] p-4 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6 Core Enterprise Modules Grid */}
      <div className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Integrated Decision Engine Suite
          </h2>
          <p className="text-sm text-slate-600">
            Every module works synchronously to deliver explainable and mathematically optimal vessel charter directives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: '1. Market Regime Classifier',
              desc: 'Identifies macroeconomic inflection points across contango, backwardation, and volatile regimes.',
              icon: TrendingUp
            },
            {
              title: '2. Multi-Port Geometric Solver',
              desc: 'Calculates air draft, water depth tides, beam, and maximum arrival displacement at discharge berths.',
              icon: Anchor
            },
            {
              title: '3. Laycan Window Timing',
              desc: 'Pinpoints the exact 4-7 day booking window to capture anticipated forward curve dips.',
              icon: Navigation
            },
            {
              title: '4. COA vs Spot Optimizer',
              desc: 'Solves the multi-voyage allocation problem for coking coal and thermal coal tenders.',
              icon: FileCheck
            },
            {
              title: '5. Ballast & Backhaul Planner',
              desc: 'Minimizes deadweight repositioning burn by analyzing Indian return cargo availability.',
              icon: DollarSign
            },
            {
              title: '6. Governance & SIH Audit Log',
              desc: 'Maintains complete model parameter transparency and explainable cost breakdown matrices.',
              icon: Database
            }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="enterprise-card p-6 space-y-3 hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
