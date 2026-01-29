
import React, { useState, useMemo } from 'react';
import { ImpactLevel, LevelData, Solution } from './types';
import { LEVELS } from './constants';
import LevelDetail from './components/LevelDetail';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import ImpactSimulator from './components/ImpactSimulator';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  const [currentLevelId, setCurrentLevelId] = useState<ImpactLevel>(ImpactLevel.SCHOOL);
  const [activeSolutions, setActiveSolutions] = useState<Set<string>>(new Set());
  const [view, setView] = useState<'explore' | 'simulator' | 'ai'>('explore');

  const currentLevel = useMemo(() => 
    LEVELS.find(l => l.id === currentLevelId) || LEVELS[0], 
    [currentLevelId]
  );

  const toggleSolution = (id: string) => {
    setActiveSolutions(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const totalImpact = useMemo(() => {
    let score = 0;
    LEVELS.forEach(level => {
      level.solutions.forEach(sol => {
        if (activeSolutions.has(sol.id)) {
          score += sol.impactScore;
        }
      });
    });
    return Math.min(score, 500); // Caps at 500 for the visualization
  }, [activeSolutions]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-slate-900 text-white p-4 sticky top-0 z-50 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <div className="bg-green-500 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">ET</div>
          <div>
            <h1 className="text-lg font-bold leading-none">EcoTransition</h1>
            <p className="text-xs text-slate-400">CSIG Fossil Fuel Strategy</p>
          </div>
        </div>
        
        <div className="flex bg-slate-800 rounded-full p-1">
          <button 
            onClick={() => setView('explore')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${view === 'explore' ? 'bg-green-600 text-white' : 'hover:bg-slate-700 text-slate-400'}`}
          >
            Explore Levels
          </button>
          <button 
            onClick={() => setView('simulator')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${view === 'simulator' ? 'bg-green-600 text-white' : 'hover:bg-slate-700 text-slate-400'}`}
          >
            Strategy Simulator
          </button>
          <button 
            onClick={() => setView('ai')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${view === 'ai' ? 'bg-green-600 text-white' : 'hover:bg-slate-700 text-slate-400'}`}
          >
            Expert Advisor
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8 space-y-8">
        {view === 'explore' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <aside className="lg:col-span-3">
              <Navigation 
                current={currentLevelId} 
                onSelect={setCurrentLevelId} 
              />
              <div className="mt-6 p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Context</h3>
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  "Addressing fossil fuel dependence is essential to combat climate change and achieve SDG 13."
                </p>
              </div>
            </aside>
            <div className="lg:col-span-9">
              <LevelDetail 
                data={currentLevel} 
                activeSolutions={activeSolutions}
                onToggleSolution={toggleSolution}
              />
            </div>
          </div>
        )}

        {view === 'simulator' && (
          <ImpactSimulator 
            levels={LEVELS}
            activeSolutions={activeSolutions}
            onToggleSolution={toggleSolution}
            totalImpact={totalImpact}
          />
        )}

        {view === 'ai' && (
          <AIConsultant />
        )}
      </main>

      <footer className="bg-slate-100 border-t border-slate-200 py-6 px-4 text-center">
        <p className="text-sm text-slate-500">
          Presented by Climate Systems Innovation Group (CSIG) • Aligned with Saudi Vision 2030 & IB TOK Lenses
        </p>
      </footer>
    </div>
  );
};

export default App;
