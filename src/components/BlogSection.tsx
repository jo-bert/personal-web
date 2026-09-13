import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight, 
  X, 
  Share2, 
  Check 
} from 'lucide-react';
import { ARTICLES_DATA, Article } from '../data/articles.ts';

export const BlogSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="blog" className="py-20 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Articles & Field Notes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Field Runbooks</span>.
          </h2>
          <p className="mt-3 text-slate-300 text-base leading-relaxed">
            Deep-dives on legacy frontend refactoring, zero-downtime banking releases, and living as a software engineer in Southeast Asia.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES_DATA.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 cursor-pointer hover:border-amber-500/50 transition-all hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                
                {/* Meta info */}
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-slate-400 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-950 text-amber-300 border border-amber-500/20 font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {article.date}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {article.summary}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {article.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Read button */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl my-8 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100 max-h-[85vh] overflow-y-auto">
            
            {/* Modal Controls */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 gap-4">
              <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {selectedArticle.category}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Share"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Title & Meta */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {selectedArticle.title}
              </h2>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mt-3">
                <span>Published: {selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
                <span>•</span>
                <span>By Albert Jonathan</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="mt-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {selectedArticle.content.map((paragraph, pIdx) => {
                if (paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.') || paragraph.startsWith('4.')) {
                  return (
                    <h4 key={pIdx} className="text-base sm:text-lg font-bold text-white pt-2">
                      {paragraph}
                    </h4>
                  );
                }

                return (
                  <p key={pIdx} className="text-slate-300">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Tags & Footer */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {selectedArticle.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950 text-slate-400 border border-slate-800">
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
