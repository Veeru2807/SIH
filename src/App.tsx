import React, { useState } from 'react';
import { Sidebar, NavPage } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { KPICards } from './components/dashboard/KPICards';
import { ForecastChart } from './components/charts/ForecastChart';
import { RiskMonitorPanel } from './components/dashboard/RiskMonitorPanel';
import { CharterPlanner } from './components/planner/CharterPlanner';
import { VesselPortOptimizer } from './components/vessels/VesselPortOptimizer';
import { CharterStrategyView } from './components/strategy/CharterStrategyView';
import { WhatIfSimulator } from './components/simulator/WhatIfSimulator';
import { IdlePlannerView } from './components/idle/IdlePlannerView';
import { MarketRiskMonitorView } from './components/market/MarketRiskMonitorView';
import { ModelTransparencyView } from './components/transparency/ModelTransparencyView';
import { SettingsDataSourcesView } from './components/settings/SettingsDataSourcesView';
import { ExplanationModal } from './components/modals/ExplanationModal';
import { DemoGuideModal } from './components/modals/DemoGuideModal';

import { 
  CharterPlannerInput, 
  CharterRecommendationResult, 
  FreightForecastPoint 
} from './types/freight';
import { 
  generateFreightForecast, 
  runOptimizationEngine, 
  evaluateMarketRegime 
} from './services/charterEngine';
import { PORTS } from './data/maritimeData';

export function App() {
  const [activePage, setActivePage] = useState<NavPage>('dashboard');
  const [isExplainModalOpen, setIsExplainModalOpen] = useState(false);
  const [isDemoGuideOpen, setIsDemoGuideOpen] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  // Baseline SIH 26006 Scenario
  const [plannerInput, setPlannerInput] = useState<CharterPlannerInput>({
    commodity: 'Premium Coking Coal',
    cargoQuantityMT: 100000,
    originCountry: 'Australia',
    originPortId: 'port-hay-point',
    destPortId: 'port-paradip',
    laycanStart: '2026-08-27',
    deliveryDeadline: '2026-09-26',
    contractHorizonMonths: 3,
    expectedVoyagesCount: 2,
    preferredVesselClass: 'Panamax',
    maxAcceptableFreightUSD: 32.0,
    riskTolerance: 'BALANCED',
    fuelPriceAssumptionUSD: 620,
    urgency: 'NORMAL',
  });

  // Freight Forward Curve Data
  const forecastData = React.useMemo<FreightForecastPoint[]>(() => {
    return generateFreightForecast(30);
  }, []);

  // Optimized Recommendation State
  const [recommendation, setRecommendation] = useState<CharterRecommendationResult>(() => {
    return runOptimizationEngine(plannerInput);
  });

  const handleAnalyze = (input: CharterPlannerInput) => {
    setIsCalculating(true);
    setPlannerInput(input);

    // Simulate multi-objective solver calculation time
    setTimeout(() => {
      const result = runOptimizationEngine(input);
      setRecommendation(result);
      setIsCalculating(false);
      setActivePage('strategy');
    }, 600);
  };

  const handleRunSIHDemo = () => {
    const demoInput: CharterPlannerInput = {
      commodity: 'Premium Coking Coal',
      cargoQuantityMT: 100000,
      originCountry: 'Australia',
      originPortId: 'port-hay-point',
      destPortId: 'port-paradip',
      laycanStart: '2026-08-27',
      deliveryDeadline: '2026-09-26',
      contractHorizonMonths: 3,
      expectedVoyagesCount: 2,
      preferredVesselClass: 'Panamax',
      maxAcceptableFreightUSD: 32.0,
      riskTolerance: 'BALANCED',
      fuelPriceAssumptionUSD: 620,
      urgency: 'NORMAL',
    };
    handleAnalyze(demoInput);
  };

  const selectedOrigin = PORTS.find(p => p.id === plannerInput.originPortId)?.name || 'Hay Point';
  const selectedDest = PORTS.find(p => p.id === plannerInput.destPortId)?.name || 'Paradip Port';
  const routeName = `${selectedOrigin} (Aus) → ${selectedDest} (India)`;

  return (
    <div className="flex min-h-screen bg-[#070d1e] text-slate-100 font-sans">
      {/* Persistent Terminal Sidebar */}
      <Sidebar
        activePage={activePage}
        onNavigate={(p) => setActivePage(p)}
        isAnalyzed={true}
      />

      {/* Main Terminal Workspace */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <Header
          selectedRouteName={routeName}
          onOpenExplainModal={() => setIsExplainModalOpen(true)}
          onOpenDemoFlow={() => setIsDemoGuideOpen(true)}
        />

        <main className="flex-1 p-6 space-y-6 max-w-7xl w-full mx-auto">
          {/* Executive Dashboard */}
          {activePage === 'dashboard' && (
            <div className="space-y-6">
              <KPICards
                currentRate={28.40}
                forecast7D={29.25}
                forecast30D={31.80}
                regime={recommendation.regime}
                risk={recommendation.riskEvaluation}
                savingsPct={recommendation.expectedSavingsPct}
                onOpenPlanner={() => setActivePage('planner')}
              />

              <ForecastChart data={forecastData} />

              <RiskMonitorPanel risk={recommendation.riskEvaluation} />
            </div>
          )}

          {/* Charter Planner */}
          {activePage === 'planner' && (
            <CharterPlanner
              initialValues={plannerInput}
              onAnalyze={handleAnalyze}
              isCalculating={isCalculating}
            />
          )}

          {/* Forecast Time Series View */}
          {activePage === 'forecast' && (
            <div className="space-y-6">
              <ForecastChart data={forecastData} />
              <RiskMonitorPanel risk={recommendation.riskEvaluation} />
            </div>
          )}

          {/* Vessel & Port Optimizer */}
          {activePage === 'vessels' && (
            <VesselPortOptimizer
              candidates={recommendation.vesselCandidates}
              destPortId={plannerInput.destPortId}
            />
          )}

          {/* Charter Strategy View */}
          {activePage === 'strategy' && (
            <CharterStrategyView
              recommendation={recommendation}
              onOpenExplainModal={() => setIsExplainModalOpen(true)}
              onOpenSimulator={() => setActivePage('simulator')}
            />
          )}

          {/* What-If Simulator */}
          {activePage === 'simulator' && (
            <WhatIfSimulator
              baseInput={plannerInput}
              baseRecommendation={recommendation}
            />
          )}

          {/* Market & Risk Monitor */}
          {activePage === 'market' && (
            <MarketRiskMonitorView />
          )}

          {/* Model Transparency View */}
          {activePage === 'performance' && (
            <ModelTransparencyView />
          )}

          {/* Settings & Data Sources */}
          {activePage === 'settings' && (
            <SettingsDataSourcesView />
          )}
        </main>
      </div>

      {/* Explanation / Proof Modal */}
      <ExplanationModal
        isOpen={isExplainModalOpen}
        onClose={() => setIsExplainModalOpen(false)}
        recommendation={recommendation}
      />

      {/* SIH Judges Guided Demo Modal */}
      <DemoGuideModal
        isOpen={isDemoGuideOpen}
        onClose={() => setIsDemoGuideOpen(false)}
        onNavigate={(p) => setActivePage(p)}
        onRunSIHDemo={handleRunSIHDemo}
      />
    </div>
  );
}

export default App;
