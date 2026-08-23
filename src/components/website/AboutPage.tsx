import React from 'react';
import { ShieldCheck, Target, Award, Users, CheckCircle2 } from 'lucide-react';
import { MainNavPage } from './Navbar';

interface AboutPageProps {
  onNavigate: (page: MainNavPage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-600">Company & Vision</div>
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          About FreightQuant
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Developed for SIH 2026 Problem Statement 26006 to revolutionize dry-bulk procurement and chartering decision intelligence for national logistics managers.
        </p>
      </div>

      {/* Mission & Vision Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="enterprise-card p-8 space-y-4">
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            To eliminate unhedged freight market exposure for bulk importers by providing transparent probabilistic machine learning forecasts, physical port constraint optimization, and structured multi-voyage contract strategies.
          </p>
        </div>

        <div className="enterprise-card p-8 space-y-4">
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            To become the premier maritime quantitative terminal powering maritime logistics, raw material procurement, and chartering operations across Indian East Coast ports and global corridors.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-6">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-600">Core Principles</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          What Drives Our Engineering
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Mathematical Precision', desc: 'Zero black-box guesses. Every recommendation is backed by geometric draft solvers and calibrated confidence intervals.' },
            { title: 'Explainability First', desc: 'Clear 5-pillar justifications explaining why a vessel, entry window, or contract format is selected.' },
            { title: 'Decision-Driven', desc: 'We do not simply forecast prices; we convert market signals into actionable laycan entry windows and contract structures.' },
            { title: 'Enterprise Reliability', desc: 'Designed for high throughput, sub-second sensitivity recalculation, and robust API extensibility.' },
          ].map((v, i) => (
            <div key={i} className="enterprise-card p-6 space-y-3">
              <span className="text-xs font-mono font-bold text-blue-600">0{i + 1}</span>
              <h4 className="text-base font-bold text-slate-900">{v.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
