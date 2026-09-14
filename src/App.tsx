import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Header } from './components/Header.tsx';
import { HomeView } from './components/HomeView.tsx';
import { Article } from './data/articles.ts';
import { Language, getInitialLanguage, setStoredLanguage } from './i18n/translations.ts';

const ToolsPage = lazy(() => import('./components/ToolsPage.tsx').then((m) => ({ default: m.ToolsPage })));

const ArticleModal = lazy(() => import('./components/ArticleModal.tsx').then((m) => ({ default: m.ArticleModal })));

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'tools'>('home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isDark, setIsDark] = useState(() => window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false);
  const [language, setLanguage] = useState<Language>(() => getInitialLanguage());

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

  const handleToggleLanguage = () => {
    const nextLang: Language = language === 'en' ? 'id' : 'en';
    setLanguage(nextLang);
    setStoredLanguage(nextLang);
  };

  return (
    <div className={`min-h-screen text-[var(--text-primary)] flex flex-col font-sans selection:bg-blue-200 dark:selection:bg-blue-900 ${isDark ? 'dark-mode' : ''}`}>
      
      {/* Top Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        isDark={isDark}
        onToggleTheme={() => setIsDark((dark) => !dark)}
        language={language}
        onToggleLanguage={handleToggleLanguage}
      />

      {/* Main View */}
      <main className="flex-1">
        {currentPage === 'home' ? (
          <HomeView
            language={language}
            onOpenTools={() => navigateTo('tools')}
            onOpenArticle={(article) => setSelectedArticle(article)}
          />
        ) : (
          <Suspense fallback={null}>
            <ToolsPage
              language={language}
              onBack={() => navigateTo('home')}
            />
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
