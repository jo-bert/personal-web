import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Header } from './components/Header.tsx';
import { HomeView } from './components/HomeView.tsx';
import { Article } from './data/articles.ts';

const ToolsPage = lazy(() => import('./components/ToolsPage.tsx').then((m) => ({ default: m.ToolsPage })));

const ArticleModal = lazy(() => import('./components/ArticleModal.tsx').then((m) => ({ default: m.ArticleModal })));

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'tools'>('home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Sync hash with page
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();

      if (hash === '#tools') {
        setCurrentPage('tools');
      } else {
        setCurrentPage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);

    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page: 'home' | 'tools') => {
    setCurrentPage(page);
    window.location.hash = page === 'tools' ? '#tools' : '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F4EC] text-[#2D2A26] flex flex-col font-sans selection:bg-[#E8D6BD] selection:text-[#382D1B]">
      
      {/* Top Header */}
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main View */}
      <main className="flex-1">
        {currentPage === 'home' ? (
          <HomeView
            onOpenTools={() => navigateTo('tools')}
            onOpenArticle={(article) => setSelectedArticle(article)}
          />
        ) : (
          <Suspense fallback={null}>
            <ToolsPage onBack={() => navigateTo('home')} />
          </Suspense>
        )}
      </main>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <Suspense fallback={null}>
          <ArticleModal
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
          />
        </Suspense>
      )}

    </div>
  );
};

export default App;
