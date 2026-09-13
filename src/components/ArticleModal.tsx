import React from 'react';
import { X, Clock, Calendar, ExternalLink } from 'lucide-react';
import { Article } from '../data/articles.ts';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  const renderFormattedText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s)]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noreferrer"
            className="text-[#8C5248] underline hover:text-[#5E322A] break-all inline-flex items-center gap-1 font-mono text-xs sm:text-sm font-medium"
          >
            <span>{part}</span>
            <ExternalLink className="w-3 h-3 inline-block shrink-0" />
          </a>
        );
      }

      return part;
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#26231E]/60 backdrop-blur-sm overflow-y-auto">
      <div className="article-dialog relative w-full max-w-2xl my-8 bg-[#FAF5EB] border border-[#DDD1BD] rounded-2xl shadow-xl p-6 sm:p-8 text-[#2E2A24] max-h-[88vh] overflow-y-auto">
        
        {/* Top bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[#EAE0CE] gap-4">
          <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-[#E8EFE6] text-[#425B3E] border border-[#C8DAC3]">
            {article.category}
          </span>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#EFE6D6] hover:bg-[#E2D8C5] text-[#595246] transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title */}
        <div className="pt-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#231F1B] leading-tight tracking-tight">
            {article.title}
          </h2>
          <div className="flex items-center gap-4 text-xs font-mono text-[#544E42] mt-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Article Body */}
        <div className="mt-8 space-y-3.5 text-[#423C33] text-sm sm:text-base leading-relaxed">
          {article.content.map((paragraph, pIdx) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h3 key={pIdx} className="text-lg sm:text-xl font-bold text-[#24201C] pt-5 tracking-tight border-b border-[#E8DFC9] pb-1.5">
                  {paragraph.replace('## ', '')}
                </h3>
              );
            }

            if (paragraph.startsWith('### ')) {
              return (
                <h4 key={pIdx} className="text-base sm:text-lg font-bold text-[#24201C] pt-3 tracking-tight">
                  {paragraph.replace('### ', '')}
                </h4>
              );
            }

            if (paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.') || paragraph.startsWith('4.')) {
              return (
                <h4 key={pIdx} className="text-base sm:text-lg font-bold text-[#24201C] pt-3 tracking-tight">
                  {paragraph}
                </h4>
              );
            }

            if (paragraph.startsWith('- ') || paragraph.startsWith('• ')) {
              return (
                <div key={pIdx} className="flex items-start gap-2.5 text-[#423C33] ml-1 sm:ml-2">
                  <span className="text-[#8C5248] text-base leading-snug shrink-0">•</span>
                  <span className="text-sm sm:text-base leading-relaxed">
                    {renderFormattedText(paragraph.replace(/^[-•]\s*/, ''))}
                  </span>
                </div>
              );
            }

            return (
              <p key={pIdx} className="text-[#453F36] leading-relaxed">
                {renderFormattedText(paragraph)}
              </p>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-[#EAE0CE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {article.tags.map((tag, tIdx) => (
              <span key={tIdx} className="text-xs font-mono px-2 py-0.5 rounded bg-[#EDE3D0] text-[#544D42]">
                #{tag}
              </span>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#2D2823] hover:bg-[#3D3630] text-[#FAF6EE] text-xs font-medium transition-colors cursor-pointer shrink-0 text-center"
          >
            Done Reading
          </button>
        </div>

      </div>
    </div>
  );
};
