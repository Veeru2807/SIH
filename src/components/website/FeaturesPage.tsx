import React from 'react';
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
  Sparkles
} from 'lucide-react';
import { MainNavPage } from './Navbar';

interface FeaturesPageProps {
  onNavigate: (page: MainNavPage) => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onNavigate }) => {
  const featureList = [
    {
      title: 'DeepAR Probabilistic Forecasting',
      desc: 'Machine learning time-series engine predicting 7D/14D/30D/90D rates with 80% & 95% confidence intervals.',
      icon: TrendingUp,
    },
    {
      title: 'Indian East Coast Port Engine',
      desc: 'Draft, LOA, and handling rate envelopes for Paradip, Vizag, Gangavaram, Dhamra, Gopalpur, and Haldia.',
      icon: Anchor,
    },
    {
      title: 'Vessel Geometric Sizing',
      desc: 'Evaluates deadweight capacity, sea days, and bunker burn across Handysize, Supramax, Panamax, and Capesize.',
      icon: Ship,
    },
    {
      title: 'COA Contract Trade-Off Matrix',
      desc: 'Direct quantitative comparison between Spot Single-Voyage, Short-Term consecutive, and Medium-Term COAs.',
      icon: FileCheck,
    },
    {
      title: 'Real-Time What-If Simulator',
      desc: 'Instant sensitivity stress-testing for freight rate shifts (±30%), bunker fuel changes (±50%), and port delays.',
      icon: Sliders,
    },
    {
      title: 'Idle Time & Backhaul Planner',
      desc: 'Optimizes post-discharge ballast deadheading and calculates repositioning costs against idle demurrage.',
      icon: DollarSign,
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-600">Enterprise Suite</div>
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Platform Features & Capabilities
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Engineered for high data density, explainability, and speed. FreightQuant provides all necessary tools for quantitative chartering teams.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureList.map((f, i) => {
          const Icon = f.icon;
          return (
            <div key={i} className="enterprise-card enterprise-card-hover p-8 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{f.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Product Preview Card */}
      <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-white space-y-8 border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400">Interactive Trading Terminal</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Experience the Full Platform Dashboard
            </h2>
          </div>

          <button
            onClick={() => onNavigate('dashboard')}
            className="btn-primary px-6 py-3 text-xs font-semibold flex items-center gap-2 cursor-pointer"
          >
            <span>Launch Platform Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800">
          <div className="space-y-2">
            <span className="text-sm font-bold text-white block">1. Charter Planner</span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Input parcel sizes, laycans, origin countries, and Indian discharge ports.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-sm font-bold text-white block">2. Decision Recommendation</span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Panamax vessel + 4-7 days entry window + Medium-Term COA contract with ₹7.1 Cr savings.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-sm font-bold text-white block">3. Sensitivity Simulator</span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Stress-test freight rate surges (+15%) and observe automated adaptation in real time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
