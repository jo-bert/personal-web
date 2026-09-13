import React, { useState } from 'react';
import { 
  Compass, 
  Train, 
  Utensils, 
  ExternalLink, 
  CheckCircle, 
  Wifi, 
  Smartphone 
} from 'lucide-react';
import { MALAYSIA_GUIDE_DATA } from '../data/malaysiaGuide.ts';

export const MalaysiaHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'neighborhoods', label: 'Neighborhoods & Condos' },
    { id: 'transit', label: 'Transit & Commuting' },
    { id: 'finances', label: 'Finances & Cashless' },
    { id: 'lifestyle', label: 'Food & Lifestyle' },
    { id: 'visas', label: 'Visas & Immigration' },
  ];

  const filteredTopics = activeCategory === 'all'
    ? MALAYSIA_GUIDE_DATA
    : MALAYSIA_GUIDE_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="malaysia" className="py-20 border-b border-slate-900 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Living & Working in KL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Engineer's Guide to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Living in Malaysia</span>.
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            I’ve been based in Kuala Lumpur working across regional banking and high-traffic tech platforms. Here is my curated runbook for tech leads, expats, and digital nomads navigating life in KL.
          </p>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <Wifi className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">500 Mbps Fiber</div>
              <div className="text-xs text-slate-400">~RM139 / mo ($30 USD)</div>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">100% Cashless</div>
              <div className="text-xs text-slate-400">Universal DuitNow QR</div>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
              <Train className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">My50 Rail Pass</div>
              <div className="text-xs text-slate-400">Unlimited MRT/LRT for RM50</div>
            </div>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">24/7 Mamaks</div>
              <div className="text-xs text-slate-400">Night-owl coding & dining</div>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Topics Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTopics.map((topic) => (
            <div 
              key={topic.id}
              className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-950 text-emerald-400 border border-emerald-500/20">
                    {topic.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {topic.title}
                </h3>

                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {topic.summary}
                </p>

                {/* Practical Tips List */}
                <div className="mt-4 space-y-2.5">
                  {topic.tips.map((tip, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Links / Apps */}
              {topic.recommendedAppsOrLinks.length > 0 && (
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">Recommended Services:</span>
                  <div className="flex flex-wrap gap-2">
                    {topic.recommendedAppsOrLinks.map((app, aIdx) => (
                      <a
                        key={aIdx}
                        href={app.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs transition-colors"
                        title={app.note}
                      >
                        <span>{app.name}</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
