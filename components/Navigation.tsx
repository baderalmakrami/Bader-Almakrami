
import React from 'react';
import { ImpactLevel } from '../types';
import { LEVELS } from '../constants';

interface NavigationProps {
  current: ImpactLevel;
  onSelect: (id: ImpactLevel) => void;
}

const Navigation: React.FC<NavigationProps> = ({ current, onSelect }) => {
  return (
    <nav className="space-y-2">
      <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 px-4">5 Levels of Impact</h3>
      {LEVELS.map((level, idx) => (
        <button
          key={level.id}
          onClick={() => onSelect(level.id)}
          className={`w-full text-left p-4 rounded-xl transition-all flex items-center gap-4 ${
            current === level.id 
              ? 'bg-green-50 border-green-200 border shadow-sm text-green-900' 
              : 'bg-white border-transparent border hover:bg-slate-100 text-slate-600'
          }`}
        >
          <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
            current === level.id ? 'bg-green-600 text-white' : 'bg-slate-200 text-slate-500'
          }`}>
            {idx + 1}
          </span>
          <div>
            <div className="font-semibold text-sm">{level.name}</div>
            <div className="text-[10px] opacity-70 uppercase font-bold">{level.id}</div>
          </div>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
