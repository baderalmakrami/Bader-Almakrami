
import React from 'react';
import { LevelData } from '../types';

interface LevelDetailProps {
  data: LevelData;
  activeSolutions: Set<string>;
  onToggleSolution: (id: string) => void;
}

const LevelDetail: React.FC<LevelDetailProps> = ({ data, activeSolutions, onToggleSolution }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Hero */}
      <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
        <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
          <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase w-fit mb-2">Strategy Map</span>
          <h2 className="text-3xl font-bold text-white mb-1">{data.name}</h2>
          <p className="text-slate-200">{data.subtitle}</p>
        </div>
      </div>

      {/* Overview */}
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-slate-800">
          <span className="w-1.5 h-6 bg-green-500 rounded-full"></span>
          Overview
        </h3>
        <p className="text-slate-600 leading-relaxed italic">
          {data.overview}
        </p>
      </section>

      {/* Challenges & Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Challenges */}
        <section>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800">
            <span className="w-1.5 h-6 bg-red-500 rounded-full"></span>
            Key Challenges
          </h3>
          <div className="space-y-4">
            {data.challenges.map((c, idx) => (
              <div key={idx} className="bg-slate-100 p-4 rounded-xl flex items-start gap-4">
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">{c.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Solutions */}
        <section>
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800">
            <span className="w-1.5 h-6 bg-green-500 rounded-full"></span>
            Potential Solutions
          </h3>
          <div className="space-y-3">
            {data.solutions.map((s) => (
              <button
                key={s.id}
                onClick={() => onToggleSolution(s.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  activeSolutions.has(s.id)
                    ? 'bg-green-600 border-green-700 text-white shadow-md transform scale-[1.02]'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-green-300 hover:bg-green-50'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-sm">{s.title}</h4>
                  {activeSolutions.has(s.id) && (
                    <span className="text-[10px] bg-green-500 text-white px-2 py-0.5 rounded-full font-bold">ACTIVE</span>
                  )}
                </div>
                <p className={`text-xs leading-relaxed ${activeSolutions.has(s.id) ? 'text-green-50' : 'text-slate-500'}`}>
                  {s.description}
                </p>
                <div className="mt-2 h-1 bg-slate-200/20 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${activeSolutions.has(s.id) ? 'bg-white' : 'bg-green-500'}`} 
                    style={{ width: `${s.impactScore}%` }}
                  />
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LevelDetail;
