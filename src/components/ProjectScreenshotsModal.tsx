import React, { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  GitBranch,
  Images,
} from "lucide-react";
import { ProjectItem } from "../data/profile.ts";
import { Language, TRANSLATIONS } from "../i18n/translations.ts";

interface ProjectScreenshotsModalProps {
  project: ProjectItem;
  onClose: () => void;
  language: Language;
}

export const ProjectScreenshotsModal: React.FC<
  ProjectScreenshotsModalProps
> = ({ project, onClose, language }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const t = TRANSLATIONS[language];
  const screenshots = project.screenshots || [];

  // Lock body scroll
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev > 0 ? prev - 1 : screenshots.length - 1,
        );
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev < screenshots.length - 1 ? prev + 1 : 0,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [screenshots.length, onClose]);

  if (screenshots.length === 0) return null;

  const current = screenshots[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
  };

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-fadeIn'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
      aria-label={t.projects.screensModalTitle}
    >
      <div
        className='relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl shadow-2xl overflow-hidden animate-scaleUp'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className='flex items-center justify-between gap-3 px-5 py-3.5 border-b border-[var(--border-subtle)] bg-[var(--bg-surface-subtle)] shrink-0'>
          <div className='min-w-0'>
            <div className='flex items-center gap-2 mb-0.5'>
              <span className='px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]'>
                {project.status}
              </span>
              <span className='text-xs font-mono text-[var(--text-muted)] flex items-center gap-1'>
                <Images className='w-3.5 h-3.5 text-[var(--accent-primary)]' />
                <span>
                  {activeIndex + 1} / {screenshots.length}
                </span>
              </span>
            </div>
            <h3 className='text-base sm:text-lg font-bold text-[var(--text-primary)] truncate'>
              {project.title}
            </h3>
          </div>

          <div className='flex items-center gap-2 shrink-0'>
            <button
              onClick={onClose}
              className='p-1.5 rounded-xl hover:bg-[var(--bg-surface-hover)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer'
              aria-label='Close modal'
            >
              <X className='w-5 h-5' />
            </button>
          </div>
        </div>

        {/* Screen Switcher Pills */}
        <div className='flex items-center gap-1.5 px-4 py-2 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-x-auto shrink-0'>
          {screenshots.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveIndex(idx)}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeIndex === idx
                  ? "bg-[var(--accent-primary)] text-white shadow-sm font-semibold"
                  : "bg-[var(--bg-surface-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]"
              }`}
            >
              <span>{s.title}</span>
            </button>
          ))}
        </div>

        {/* Main Screenshot Stage */}
        <div className='relative flex-1 min-h-[300px] sm:min-h-[420px] bg-slate-950/60 flex items-center justify-center p-3 sm:p-6 overflow-hidden select-none'>
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            className='max-h-[52vh] sm:max-h-[58vh] w-auto max-w-full object-contain rounded-xl shadow-lg border border-slate-800/80 transition-opacity duration-200'
          />

          {/* Prev/Next Navigation Controls */}
          <button
            onClick={handlePrev}
            className='absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700/80 shadow-md backdrop-blur-sm transition-transform active:scale-95 cursor-pointer'
            aria-label='Previous screenshot'
          >
            <ChevronLeft className='w-5 h-5' />
          </button>

          <button
            onClick={handleNext}
            className='absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700/80 shadow-md backdrop-blur-sm transition-transform active:scale-95 cursor-pointer'
            aria-label='Next screenshot'
          >
            <ChevronRight className='w-5 h-5' />
          </button>
        </div>

        {/* Caption & Thumbnail Footer */}
        <div className='p-4 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] shrink-0 space-y-3'>
          <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2'>
            <div>
              <h4 className='text-sm font-bold text-[var(--text-primary)]'>
                {current.title}
              </h4>
              <p className='text-xs text-[var(--text-secondary)] mt-0.5'>
                {current.subtitle}
              </p>
            </div>

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] text-xs font-semibold text-[var(--text-primary)] border border-[var(--border-subtle)] transition-colors shadow-sm cursor-pointer'
                title='View GitHub Repository'
              >
                <GitBranch className='w-3.5 h-3.5 text-[var(--accent-primary)]' />
                <span className='inline'>{t.projects.viewRepo}</span>
                <ExternalLink className='w-3 h-3 text-[var(--text-muted)]' />
              </a>
            )}
          </div>

          {/* Thumbnail strip */}
          <div className='flex gap-2 overflow-x-auto pt-1 pb-0.5'>
            {screenshots.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                  activeIndex === idx
                    ? "border-[var(--accent-primary)] ring-2 ring-[var(--accent-primary)]/20 scale-102"
                    : "border-[var(--border-subtle)] opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  className='w-16 h-11 object-cover object-top'
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
