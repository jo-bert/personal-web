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
import { Language, TRANSLATIONS } from '../i18n/translations.ts';

interface ToolsPageProps {
  language: Language;
  onBack: () => void;
}

export const ToolsPage: React.FC<ToolsPageProps> = ({ language, onBack }) => {
  const [activeTab, setActiveTab] = useState<'daily' | 'dev'>('daily');
  const [searchQuery, setSearchQuery] = useState('');

  const t = TRANSLATIONS[language].toolsPage;

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
    <div className="tools-page min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Back button */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="tools-back-button inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-surface-subtle)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] border border-[var(--border-subtle)] text-sm font-medium transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.back}</span>
        </button>
      </div>

      {/* Page Title Header */}
      <div className="mb-10">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] mb-3">
          {t.tag}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
          {t.title}
        </h1>
        <p className="mt-3 text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
          {t.desc}
        </p>
      </div>

      {/* Main Switcher: Daily Web Tools vs Developer Tools */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)] mb-8">
        
        <div className="tools-switcher flex gap-2 p-1 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)]">
          <button
            type="button"
            aria-pressed={activeTab === 'daily'}
            onClick={() => setActiveTab('daily')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'daily'
                ? 'bg-[var(--bg-surface)] text-[var(--accent-primary)] shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span>{t.dailyTab} ({DAILY_TOOLS_DATA.length})</span>
          </button>

          <button
            type="button"
            aria-pressed={activeTab === 'dev'}
            onClick={() => setActiveTab('dev')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'dev'
                ? 'bg-[var(--bg-surface)] text-[var(--accent-primary)] shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>{t.devTab} ({DEV_ARSENAL_DATA.length})</span>
          </button>
        </div>

        {/* Search input */}
        <div className="relative flex-1 sm:max-w-xs">
          <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.currentTarget.value)}
            className="tools-search w-full pl-10 pr-4 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
          />
        </div>

      </div>

      {/* Content Area */}
      {activeTab === 'daily' ? (
        <div>
          <div className="mb-6 text-xs text-[var(--text-muted)] flex items-center justify-between">
            <span>Showing {filteredDaily.length} recommended utilities</span>
            <span>{t.verifiedBadge}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredDaily.map((tool, idx) => (
              <a
                key={idx}
                href={tool.url}
                target="_blank"
                rel="noreferrer"
                className="tools-card group bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-subtle)] rounded-2xl p-5 flex flex-col justify-between transition-all hover:shadow-md cursor-pointer block"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                      {tool.tag}
                    </span>
                    <div className="flex items-center gap-2">
                      {tool.isFavorite && (
                        <span className="inline-flex items-center gap-1 text-xs text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-medium">
                          <Sparkles className="w-3 h-3" />
                          <span>Favorite</span>
                        </span>
                      )}
                      <ExternalLink className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                    {tool.name}
                  </h3>

                  <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-6 text-xs text-[var(--text-muted)] flex items-center justify-between">
            <span>Showing {filteredDev.length} developer tools</span>
            <span>Handpicked developer stack</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredDev.map((tool, idx) => (
              <a
                key={idx}
                href={tool.url}
                target="_blank"
                rel="noreferrer"
                className="tools-card group bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-subtle)] rounded-2xl p-5 flex flex-col justify-between transition-all hover:shadow-md cursor-pointer block"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
                      {tool.badge}
                    </span>
                    <ExternalLink className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                    {tool.name}
                  </h3>

                  <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
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
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--bg-surface-subtle)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] border border-[var(--border-subtle)] text-sm font-medium transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.back}</span>
        </button>
      </div>

    </div>
  );
};
