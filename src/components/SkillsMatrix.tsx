import React, { useState } from 'react';
import { CheckCircle2, Shield, Terminal, Database, Cloud } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

export const SkillsMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const icons = [Terminal, Database, Shield, Cloud];

  return (
    <section className="py-16 border-b border-slate-900 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-8">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 mb-2">
            Technical Proficiency & Tooling
          </h3>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Comprehensive Full-Stack Mastery
          </h2>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-2 pb-6">
          {PROFILE_DATA.skillCategories.map((cat, idx) => {
            const Icon = icons[idx % icons.length];

            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === idx
                    ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Skills Grid */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <h4 className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider mb-4">
            {PROFILE_DATA.skillCategories[activeTab].title} Core Competencies
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {PROFILE_DATA.skillCategories[activeTab].skills.map((skill, sIdx) => (
              <div 
                key={sIdx}
                className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-2.5 text-sm text-slate-200 hover:border-indigo-500/40 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium text-xs sm:text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
