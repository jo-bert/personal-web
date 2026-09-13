import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  Search, 
  ExternalLink, 
  Sparkles, 
  Wrench, 
  Terminal
} from 'lucide-react';
import { DAILY_TOOLS_DATA } from '../data/dailyTools.ts';
import { DEV_ARSENAL_DATA } from '../data/devArsenal.ts';

interface ToolsPageProps {
  onBack: () => void;
}

export const ToolsPage: React.FC<ToolsPageProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'daily' | 'dev'>('daily');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter daily tools
  const filteredDaily = useMemo(() => {
    const q = searchQuery.toLowerCase();

    return DAILY_TOOLS_DATA.filter((tool) =>
      tool.name.toLowerCase().includes(q) ||
      tool.tag.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Filter dev tools
  const filteredDev = useMemo(() => {
    const q = searchQuery.toLowerCase();

    return DEV_ARSENAL_DATA.filter((tool) =>
      tool.name.toLowerCase().includes(q) ||
      tool.badge.toLowerCase().includes(q) ||
      tool.tagline.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Back button */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F0E8DA] hover:bg-[#E8DFC9] text-[#4A453E] border border-[#DDD2BE] text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Profile</span>
        </button>
      </div>

      {/* Page Title Header */}
      <div className="mb-10">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#E8EFE6] text-[#425B3E] border border-[#C8DAC3] mb-3">
          Curated Catalog
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#24211E] tracking-tight">
          Useful Tools & Recommended Utilities
        </h1>
        <p className="mt-3 text-base text-[#615B52] leading-relaxed max-w-2xl">
          A personal collection of zero-adware web tools for everyday file conversions, video compression, and document work — plus developer tools and engineering resources.
        </p>
      </div>

      {/* Main Switcher: Daily Web Tools vs Developer Tools */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-[#E6DDCC] mb-8">
        
        <div className="flex gap-2 p-1 rounded-xl bg-[#EDE4D4] border border-[#DFD5C3]">
          <button
            onClick={() => setActiveTab('daily')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'daily'
                ? 'bg-[#FCFAF5] text-[#2D2A26] shadow-sm'
                : 'text-[#6B6459] hover:text-[#2D2A26]'
            }`}
          >
            <Wrench className="w-4 h-4 text-[#8C5248]" />
            <span>Daily Web Tools ({DAILY_TOOLS_DATA.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('dev')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'dev'
                ? 'bg-[#FCFAF5] text-[#2D2A26] shadow-sm'
                : 'text-[#6B6459] hover:text-[#2D2A26]'
            }`}
          >
            <Terminal className="w-4 h-4 text-[#425B3E]" />
            <span>Developer Stack ({DEV_ARSENAL_DATA.length})</span>
          </button>
        </div>

        {/* Search input */}
        <div className="relative flex-1 sm:max-w-xs">
          <Search className="w-4 h-4 text-[#544E42] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#FCFAF5] border border-[#DFD5C3] text-sm text-[#2D2A26] placeholder-[#6E675B] focus:outline-none focus:border-[#B5A58C] transition-colors"
          />
        </div>

      </div>

      {/* Content Area */}
      {activeTab === 'daily' ? (
        <div>
          <div className="mb-6 text-xs text-[#544E42] flex items-center justify-between">
            <span>Showing {filteredDaily.length} recommended utilities</span>
            <span>Zero adware • Click any card to visit</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredDaily.map((tool, idx) => (
              <a
                key={idx}
                href={tool.url}
                target="_blank"
                rel="noreferrer"
                className="group bg-[#FCFAF5] border border-[#E8DEC8] hover:border-[#BFAF95] hover:bg-[#FFFDF9] rounded-2xl p-5 flex flex-col justify-between transition-all hover:shadow-md cursor-pointer block"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-[#F5EFEB] text-[#6E5A4E] border border-[#DED3C9]">
                      {tool.tag}
                    </span>
                    <div className="flex items-center gap-2">
                      {tool.isFavorite && (
                        <span className="inline-flex items-center gap-1 text-xs text-[#6B4E1B] bg-[#FBF1E1] px-2 py-0.5 rounded border border-[#E8D6BD]">
                          <Sparkles className="w-3 h-3" />
                          <span>Favorite</span>
                        </span>
                      )}
                      <ExternalLink className="w-4 h-4 text-[#6B6152] group-hover:text-[#8C5248] transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#24211E] group-hover:text-[#8C5248] transition-colors">
                    {tool.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#544E44] leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-6 text-xs text-[#544E42] flex items-center justify-between">
            <span>Showing {filteredDev.length} developer tools</span>
            <span>Handpicked developer stack • Click any card to visit</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredDev.map((tool, idx) => (
              <a
                key={idx}
                href={tool.url}
                target="_blank"
                rel="noreferrer"
                className="group bg-[#FCFAF5] border border-[#E8DEC8] hover:border-[#BFAF95] hover:bg-[#FFFDF9] rounded-2xl p-5 flex flex-col justify-between transition-all hover:shadow-md cursor-pointer block"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-[#E8EFE6] text-[#425B3E] border border-[#C8DAC3]">
                      {tool.badge}
                    </span>
                    <ExternalLink className="w-4 h-4 text-[#6B6152] group-hover:text-[#8C5248] transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-[#24211E] group-hover:text-[#8C5248] transition-colors">
                    {tool.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#544E44] leading-relaxed">
                    {tool.tagline}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Back Button */}
      <div className="mt-12 text-center">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F0E8DA] hover:bg-[#E8DFC9] text-[#4A453E] border border-[#DDD2BE] text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Profile</span>
        </button>
      </div>

    </div>
  );
};
