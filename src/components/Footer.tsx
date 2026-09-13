import React from 'react';
import { Terminal, FileDown, ArrowUp } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile.ts';

export const Footer: React.FC<{ onNavigate: (sectionId: string) => void }> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Left brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-sm text-white">{PROFILE_DATA.name}</div>
              <div className="text-[11px] text-slate-400">Frontend Technical Lead • Kuala Lumpur, Malaysia</div>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300">
            <button onClick={() => onNavigate('profile')} className="hover:text-white transition-colors">
              Profile
            </button>
            <button onClick={() => onNavigate('experience')} className="hover:text-white transition-colors">
              Experience
            </button>
            <button onClick={() => onNavigate('malaysia')} className="hover:text-white transition-colors">
              Living in Malaysia
            </button>
            <button onClick={() => onNavigate('daily-tools')} className="hover:text-white transition-colors">
              Daily Web Tools
            </button>
            <button onClick={() => onNavigate('dev-arsenal')} className="hover:text-white transition-colors">
              Dev Arsenal
            </button>
            <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors">
              Blog
            </button>
          </div>

          {/* Back to top & CV download */}
          <div className="flex items-center gap-3">
            <a
              href="/Albert_Jonathan_CV.pdf"
              download="Albert_Jonathan_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & tech details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400">
          <div>
            © {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Built with React 19, TypeScript, Tailwind CSS, Vite & verified with Oxlint.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
