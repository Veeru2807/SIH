import React from 'react';
import { 
  TrendingUp, 
  Ship, 
  Clock, 
  FileCheck, 
  ShieldAlert, 
  Anchor, 
  Sliders, 
  Activity, 
  ArrowRight 
} from 'lucide-react';
import { MainNavPage } from './Navbar';

interface ServicesPageProps {
  onNavigate: (page: MainNavPage) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const services = [
    {
      id: 'forecast',
      title: 'Freight Rate Forecasting',
      icon: TrendingUp,
      desc: 'Probabilistic machine-learning forecasts across 7, 14, 30, and 90-day horizons with calibrated 80% and 95% confidence bounds.',
      features: ['DeepAR Recurrent Models', 'Contango/Backwardation Signal', 'Daily Spot Updating'],
    },
    {
      id: 'vessels',
      title: 'Vessel Charter Optimization',
      icon: Ship,
      desc: 'Determines the optimal vessel class (Handysize, Supramax, Panamax, Capesize) based on cargo parcel geometry and scale economics.',
      features: ['Turnaround Days Solver', 'Bunker Burn Estimation', 'DWT Payload Matching'],
    },
    {
      id: 'timing',
      title: 'Optimal Charter Timing',
      icon: Clock,
      desc: 'Predicts high-probability market troughs and recommends the exact charter entry window to hedge against price inflation.',
      features: ['Pre-Spike Entry Signals', 'Laycan Scheduling', 'Historical Seasonality'],
    },
    {
      id: 'contracts',
      title: 'Contract Strategy Advisor',
      icon: FileCheck,
      desc: 'Simulates Spot Single-Voyage, Short-Term consecutive fixtures, and Medium-Term Multiple-Voyage Contracts (COAs).',
      features: ['Volume Discount Modeling', 'Demurrage Capping', 'Index-Linked Formats'],
    },
    {
      id: 'risk',
      title: 'Risk Assessment & Alerts',
      icon: ShieldAlert,
      desc: 'Continuous indexing of freight volatility, geopolitical chokepoints, weather disruptions, and vessel availability queues.',
      features: ['Composite Risk Score (0-100)', 'Monsoon Advisory', 'Vessel Queue Monitoring'],
    },
    {
      id: 'ports',
      title: 'Port Intelligence',
      icon: Anchor,
      desc: 'Detailed geometric constraints for Indian East Coast discharge ports (Paradip, Vizag, Gangavaram, Dhamra, Haldia).',
      features: ['Draft & LOA Verification', 'Tidal Clearance Windows', 'Daily Handling Rates'],
    },
    {
      id: 'simulator',
      title: 'Scenario Simulator',
      icon: Sliders,
      desc: 'Stress-test freight rate shifts, bunker fuel shocks, and port discharge delays with instantaneous before-vs-after deltas.',
      features: ['Real-time Sensitivity', 'Demurrage Impact Analysis', 'Cost Breakdown'],
    },
    {
      id: 'market',
      title: 'Market Intelligence',
      icon: Activity,
      desc: 'Live tracking of Baltic Dry Index (BDI), Baltic Panamax Index (BPI), and Singapore VLSFO bunker benchmarks.',
      features: ['Real-time Indices', 'Commodity Spot Curves', 'Disruption Feeds'],
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-600">Decision-Support Capabilities</div>
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Maritime Intelligence Services
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Comprehensive quantitative modeling built specifically for bulk logistics managers, charterers, and industrial procurement organizations.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div 
              key={s.id}
              className="enterprise-card enterprise-card-hover p-6 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="space-y-1">
                  {s.features.map((f, i) => (
                    <div key={i} className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate('dashboard')}
                  className="pt-2 text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Launch in Terminal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
