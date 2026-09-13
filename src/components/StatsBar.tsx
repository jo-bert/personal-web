import React from 'react';
import { PROFILE_DATA } from '../data/profile.ts';

export const StatsBar: React.FC = () => {
  return (
    <div className="border-y border-slate-800/80 bg-slate-900/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
          {PROFILE_DATA.stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-3xl sm:text-4xl font-black tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-200">
                {stat.label}
              </div>
              <div className="mt-0.5 text-xs text-slate-400">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
