
import React from 'react';
import { LevelData } from '../types';

interface ImpactSimulatorProps {
  levels: LevelData[];
  activeSolutions: Set<string>;
  onToggleSolution: (id: string) => void;
  totalImpact: number;
}

const ImpactSimulator: React.FC<ImpactSimulatorProps> = ({ levels, activeSolutions, onToggleSolution, totalImpact }) => {
  const percentage = Math.min((totalImpact / 400) * 100, 100);

  return (
    <div className="space-y-8 animate-in zoom-in-95 duration-500">
      {/* Master Meter */}
      <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 blur-[100px] rounded-full -mr-20 -mt-20"></div>
        <div className="relative z-10 text-center space-y-6">
          <h2 className="text-3xl font-bold">Fossil Fuel Dependence Reduction</h2>
          <div className="flex justify-center items-center gap-8 py-4">
            <div className="text-left">
              <div className="text-5xl font-black text-green-400">{percentage.toFixed(1)}%</div>
              <div className="text-slate-400 text-sm uppercase font-bold tracking-widest">Efficiency Gain</div>
            </div>
            <div className="w-1 h-16 bg-slate-800"></div>
            <div className="text-left">
              <div className="text-5xl font-black text-blue-400">{activeSolutions.size}</div>
              <div className="text-slate-400 text-sm uppercase font-bold tracking-widest">Active Policies</div>
            </div>
          </div>
          
          <div className="w-full h-6 bg-slate-800 rounded-full overflow-hidden border-2 border-slate-700">
            <div 
              className="h-full bg-gradient-to-r from-green-600 via-green-400 to-emerald-300 transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(34,197,94,0.4)]"
              style={{ width: `${percentage}%` }}
            />
          </div>
          
          <p className="text-slate-400 max-w-2xl mx-auto text-sm">
            Based on the CSIG framework, this represents the theoretical reduction in carbon intensity 
            as we scale solutions from individual classrooms to global treaties.
          </p>
        </div>
      </div>

      {/* Solution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map(level => (
          <div key={level.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-slate-100 px-2 py-1 rounded font-bold text-slate-500">{level.id}</span>
              <h3 className="font-bold text-slate-800">{level.name}</h3>
            </div>
            <div className="space-y-2">
              {level.solutions.map(s => (
                <div 
                  key={s.id}
                  onClick={() => onToggleSolution(s.id)}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                    activeSolutions.has(s.id) ? 'bg-green-50 text-green-700' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-xs font-medium">{s.title}</span>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    activeSolutions.has(s.id) ? 'border-green-500 bg-green-500 text-white' : 'border-slate-300'
                  }`}>
                    {activeSolutions.has(s.id) && <span className="text-[10px]">✓</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactSimulator;
