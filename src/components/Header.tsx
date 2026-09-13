import React from 'react';
import { FileDown, Wrench, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  currentPage: 'home' | 'tools';
  onNavigate: (page: 'home' | 'tools') => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, isDark, onToggleTheme }) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[#F8F4EC]/90 border-b border-[#E8DFC9]/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div 
          onClick={() => onNavigate('home')}
          className="cursor-pointer group flex items-center gap-2.5"
        >
          <span className="font-bold tracking-tight text-lg text-[#25221E] group-hover:text-[#8C5248] transition-colors">
            Albert Jonathan
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-[#544E42] px-2 py-0.5 rounded bg-[#EDE3D0]">
            Full-Stack Engineer
          </span>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#FAF5EA] hover:bg-[#EFE7D8] text-[#423C33] border border-[#DDD2BD] transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => onNavigate(currentPage === 'tools' ? 'home' : 'tools')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
              currentPage === 'tools'
                ? 'bg-[#E8DFC9] text-[#29241E] border-[#D4C5AC]'
                : 'bg-[#FAF5EA] hover:bg-[#EFE7D8] text-[#423C33] border-[#DDD2BD]'
            }`}
          >
            <Wrench className="w-3.5 h-3.5 text-[#8C5248]" />
            <span>{currentPage === 'tools' ? 'Profile' : 'Curated Tools'}</span>
          </button>

          <a
            href="/Albert_Jonathan_CV.pdf"
            download="Albert_Jonathan_CV.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#2D2823] hover:bg-[#3D3630] text-[#FAF6EE] text-xs font-medium transition-colors"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Download</span>
            <span>CV</span>
          </a>
        </div>

      </div>
    </header>
  );
};
