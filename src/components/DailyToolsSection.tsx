import React, { useState, useMemo } from 'react';
import { 
  Wrench, 
  Search, 
  ExternalLink, 
  Sparkles, 
  Check, 
  Copy, 
  FileVideo,
  FileText,
  Palette,
  Shield,
  Zap
} from 'lucide-react';
import { DAILY_TOOLS_DATA } from '../data/dailyTools.ts';

export const DailyToolsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Utilities', icon: Wrench },
    { id: 'video-media', label: 'Video & Media', icon: FileVideo },
    { id: 'documents-pdf', label: 'Documents & PDF', icon: FileText },
    { id: 'graphics-design', label: 'Graphics & Design', icon: Palette },
    { id: 'privacy-security', label: 'Privacy & Security', icon: Shield },
    { id: 'productivity', label: 'Productivity', icon: Zap },
  ];

  const filteredTools = useMemo(() => {
    return DAILY_TOOLS_DATA.filter((tool) => {
      const matchesCat = activeCategory === 'all' || tool.category === activeCategory;
      const q = searchQuery.toLowerCase();

      const matchesSearch = 
        tool.name.toLowerCase().includes(q) ||
        tool.tag.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.whyItRocks.toLowerCase().includes(q);

      return matchesCat && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const copyToolLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  return (
    <section id="daily-tools" className="py-20 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Zero-Adware Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Non-Developer & Open-Source</span> Web Tools.
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Tired of spammy file converters and sites riddled with fake download buttons? Here are the battle-tested, clean utilities I personally use and recommend for video compression, formatting, document work, and design.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mt-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools (e.g. Stirling, PDF, convert)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.currentTarget.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Tools Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.length === 0 ? (
            <div className="col-span-full py-12 text-center text-slate-400 bg-slate-900/40 rounded-2xl border border-slate-800">
              No tools matching "{searchQuery}". Try searching for "PDF", "Stirling", or "convert".
            </div>
          ) : (
            filteredTools.map((tool, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all hover:-translate-y-1 group"
              >
                <div>
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-950 text-cyan-400 border border-cyan-500/20">
                      {tool.tag}
                    </span>

                    {tool.isFavorite && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        <Sparkles className="w-3 h-3" />
                        <span>Daily Driver</span>
                      </span>
                    )}
                  </div>

                  {/* Name & Link */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    <a href={tool.url} target="_blank" rel="noreferrer" className="hover:underline">
                      {tool.name}
                    </a>
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Why it rocks callout */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300">
                    <span className="text-cyan-400 font-semibold block mb-0.5">Why I recommend it:</span>
                    <span>{tool.whyItRocks}</span>
                  </div>

                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => copyToolLink(tool.url)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Copy URL"
                  >
                    {copiedUrl === tool.url ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy URL</span>
                      </>
                    )}
                  </button>

                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 hover:text-cyan-200 border border-cyan-500/30 text-xs font-semibold transition-colors"
                  >
                    <span>Visit Tool</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};
