import React, { useState } from 'react';
import { 
  Terminal, 
  ShieldCheck, 
  Code2, 
  Bot, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';
import { DEV_ARSENAL_DATA } from '../data/devArsenal.ts';

export const DevArsenalSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Complete Stack', icon: Layers },
    { id: 'compiler-linting', label: 'Speed & Linters', icon: Terminal },
    { id: 'frameworks-ui', label: 'Frontend & State', icon: Code2 },
    { id: 'backend-security', label: 'Microservices & Security', icon: ShieldCheck },
    { id: 'ai-workflow', label: 'AI & Productivity', icon: Bot },
  ];

  const filteredDevTools = activeCategory === 'all'
    ? DEV_ARSENAL_DATA
    : DEV_ARSENAL_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="dev-arsenal" className="py-20 border-b border-slate-900 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Engineering Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Development Stack</span> I Rely On.
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Every tool in my arsenal is selected for high performance, strict typing, and zero production regressions. Here is how I build enterprise-grade frontend architectures and banking microservices.
          </p>
        </div>

        {/* Category Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-600/30'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dev Tools Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredDevTools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-purple-500/50 transition-all hover:-translate-y-1 group"
            >
              <div>
                
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-950 text-purple-300 border border-purple-500/20">
                    {tool.badge}
                  </span>

                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 font-semibold">
                    {tool.verdict}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {tool.name}
                </h3>

                <p className="mt-2 text-sm text-slate-300">
                  {tool.tagline}
                </p>

                {/* Practical Takeaway */}
                <div className="mt-4 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                  <div className="text-xs font-mono text-purple-400 font-semibold mb-1">
                    How & Why I Use It:
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    {tool.whyAlbertUsesIt}
                  </div>
                </div>

              </div>

              {/* Status footer */}
              <div className="mt-5 pt-3 border-t border-slate-800/70 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Production Tested</span>
                </div>
                <span>Regulated Banking & Scale</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
