import React from "react";
import { FileDown, Wrench, Moon, Sun, Globe } from "lucide-react";
import { Language, TRANSLATIONS } from "../i18n/translations.ts";

interface HeaderProps {
  currentPage: "home" | "tools";
  onNavigate: (page: "home" | "tools") => void;
  isDark: boolean;
  onToggleTheme: () => void;
  language: Language;
  onToggleLanguage: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  isDark,
  onToggleTheme,
  language,
  onToggleLanguage,
}) => {
  const t = TRANSLATIONS[language].nav;

  return (
    <header className='sticky top-0 z-40 backdrop-blur-md bg-[var(--bg-page)]/90 border-b border-[var(--border-subtle)] transition-colors duration-200'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between'>
        {/* Brand */}
        <div
          onClick={() => onNavigate("home")}
          className='cursor-pointer group flex items-center gap-2.5'
        >
          <span className='font-bold tracking-tight text-lg text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors'>
            Albert Jonathan
          </span>
          <span className='hidden sm:inline-block text-xs font-mono text-[var(--text-secondary)] px-2.5 py-0.5 rounded-md bg-[var(--bg-surface-subtle)] border border-[var(--border-subtle)]'>
            {t.role}
          </span>
        </div>

        {/* Navigation Actions */}
        <div className='flex items-center gap-2 sm:gap-2.5'>
          {/* Language Switcher */}
          <button
            type='button'
            onClick={onToggleLanguage}
            aria-label={
              language === "id"
                ? "Switch to English"
                : "Ganti ke Bahasa Indonesia"
            }
            title={
              language === "id"
                ? "Switch to English"
                : "Ganti ke Bahasa Indonesia"
            }
            className='inline-flex items-center gap-1.5 px-2.5 h-9 rounded-lg bg-[var(--bg-surface-subtle)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] border border-[var(--border-subtle)] text-xs font-semibold transition-colors cursor-pointer'
          >
            <Globe className='w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0' />
            <span
              className={
                language === "id"
                  ? "text-[var(--accent-primary)] font-bold"
                  : "hidden md:inline opacity-60"
              }
            >
              ID
            </span>
            <span className='opacity-40 text-[10px] hidden md:inline'>/</span>
            <span
              className={
                language === "en"
                  ? "text-[var(--accent-primary)] font-bold"
                  : "hidden md:inline opacity-60"
              }
            >
              EN
            </span>
          </button>

          {/* Theme Switcher */}
          <button
            type='button'
            onClick={onToggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className='inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--bg-surface-subtle)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] border border-[var(--border-subtle)] transition-colors cursor-pointer'
          >
            {isDark ? (
              <Sun className='w-4 h-4 text-amber-400' />
            ) : (
              <Moon className='w-4 h-4' />
            )}
          </button>

          {/* Curated Tools / Profile Navigation */}
          <button
            onClick={() =>
              onNavigate(currentPage === "tools" ? "home" : "tools")
            }
            className={`inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
              currentPage === "tools"
                ? "bg-[var(--accent-subtle)] text-[var(--accent-text)] border-[var(--accent-border)]"
                : "bg-[var(--bg-surface-subtle)] hover:bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] border-[var(--border-subtle)]"
            }`}
          >
            <Wrench className='w-3.5 h-3.5 text-[var(--accent-primary)]' />
            <span className='hidden sm:inline'>
              {currentPage === "tools" ? t.profile : t.tools}
            </span>
            <span className='sm:hidden'>
              {currentPage === "tools" ? t.profile : "Tools"}
            </span>
          </button>

          {/* Download CV */}
          <a
            href='/Albert_Jonathan_CV.pdf'
            download='Albert_Jonathan_CV.pdf'
            className='hidden md:inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] text-[var(--btn-primary-text)] text-xs font-medium transition-colors shadow-sm'
          >
            <FileDown className='w-3.5 h-3.5' />
            <span className='hidden sm:inline'>{t.downloadCV}</span>
            <span className='sm:hidden'>{t.cvShort}</span>
          </a>
        </div>
      </div>
    </header>
  );
};
