import React, { useState } from 'react';
import { 
  Database, 
  Cpu, 
  LineChart, 
  TrendingUp, 
  Calculator, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { MainNavPage } from './Navbar';

interface MethodologyPageProps {
  onNavigate: (page: MainNavPage) => void;
}

export const MethodologyPage: React.FC<MethodologyPageProps> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Data Collection & Ingestion',
      icon: Database,
      summary: 'Aggregates global dry bulk fixtures, Baltic indices, bunker fuel quotes, and port congestion telemetry.',
      details: 'Ingests real-time Baltic Dry Index (BDI), Baltic Panamax Index (BPI), FOB Newcastle/Hay Point coal benchmarks, Singapore VLSFO bunker prices, and automated berth wait times across Indian East Coast ports.',
    },
    {
      num: '02',
      title: 'Data Cleansing & Normalization',
      icon: Cpu,
      summary: 'Filters noise, handles seasonal monsoon variations, and validates draft/LOA technical constraints.',
      details: 'Applies statistical anomaly detection, fills missing time-series points with Kalman smoothing, and cross-references vessel deadweight classes against port navigation envelopes.',
    },
    {
      num: '03',
      title: 'Market Regime Detection',
      icon: LineChart,
      summary: 'Identifies whether the corridor is in a Rising, Falling, Stable, or Highly Volatile state.',
      details: 'Uses momentum oscillators, rolling volatility indices, and Pacific ton-mile demand signals to classify regime confidence (e.g. 84.5% Rising Market contango).',
    },
    {
      num: '04',
      title: 'Probabilistic Prediction Engine',
      icon: TrendingUp,
      summary: 'DeepAR recurrent networks and XGBoost ensembles forecast forward freight curves with confidence bounds.',
      details: 'Generates 7D, 14D, 30D, and 90D probability distributions with 80% and 95% uncertainty cones to quantify downside and upside risk.',
    },
    {
      num: '05',
      title: 'Constraint & Cost Optimization Solver',
      icon: Calculator,
      summary: 'Evaluates Total Expected Cost = Charter Hire + Fuel + Port Dues + Demurrage Buffer.',
      details: 'Determines the optimal vessel class (Panamax vs Capesize vs Supramax), required voyages, round-trip sea days, and post-discharge ballast deadheading.',
    },
    {
      num: '06',
      title: 'Actionable Charter Directive',
      icon: CheckCircle2,
      summary: 'Outputs clear chartering decisions: Recommended Vessel, Optimal Timing Window, and Contract Format.',
      details: 'Quantifies spot vs medium-term multiple-voyage COA savings (e.g. ₹7.1 Cr / 7.1% cost reduction) and produces mathematically explainable justifications.',
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-600">Rigorous Mathematical Architecture</div>
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          How FreightQuant Computes Decisions
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Our 6-stage quantitative optimization pipeline bridges macroeconomic time-series forecasting with physical port navigation constraints.
        </p>
      </div>

      {/* Interactive Horizontal Timeline on Desktop / Stacked Accordion on Mobile */}
      <div className="space-y-8">
        {/* Step Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={s.num}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20' 
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className={`text-xs font-mono font-bold mb-1 ${isActive ? 'text-blue-200' : 'text-blue-600'}`}>
                  STAGE {s.num}
                </div>
                <div className="text-xs font-bold leading-tight">{s.title}</div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Dive */}
        <div className="enterprise-card p-8 sm:p-10 space-y-6 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 border-blue-200">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-blue-600 text-white font-mono font-bold text-sm flex items-center justify-center shadow-sm">
                {steps[activeStep].num}
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{steps[activeStep].title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{steps[activeStep].summary}</p>
              </div>
            </div>

            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
              Active Optimization Pipeline Stage
            </span>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Technical Details & Implementation</h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {steps[activeStep].details}
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between text-xs text-slate-500">
            <span>Deterministic mathematical formulation | Zero generative hallucinations</span>
            <button
              onClick={() => onNavigate('dashboard')}
              className="font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
            >
              <span>Test Live in Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
