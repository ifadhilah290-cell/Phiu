
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import OrderForm from './components/OrderForm';
import CheckOrder from './components/CheckOrder';
import Login from './components/Login';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import LoadingScreen from './components/LoadingScreen';
import { Game } from './types';
import { GAMES } from './constants';

type AppView = 'home' | 'order' | 'check-order' | 'login';

const App: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const navigateToHome = () => {
    setSelectedGame(null);
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToDaftarGame = () => {
    if (currentView !== 'home' || selectedGame) {
      setSelectedGame(null);
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('games');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('games');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToCekPesanan = () => {
    setSelectedGame(null);
    setCurrentView('check-order');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToLogin = () => {
    setSelectedGame(null);
    setCurrentView('login');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectGame = (game: Game) => {
    setSelectedGame(game);
    setCurrentView('order');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (initialLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-500 selection:text-white animate-in fade-in duration-700">
      <Header 
        onHome={navigateToHome} 
        onCekPesanan={navigateToCekPesanan}
        onDaftarGame={navigateToDaftarGame}
        onLogin={navigateToLogin}
      />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero />
            <section id="games" className="py-16 px-4 max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    Pilih Game Favoritmu
                  </h2>
                  <p className="mt-4 text-gray-400">
                    Top up instan, harga kompetitif, dan layanan 24/7.
                  </p>
                </div>
              </div>
              <GameGrid games={GAMES} onSelectGame={handleSelectGame} />
            </section>
          </>
        )}

        {currentView === 'order' && selectedGame && (
          <div className="py-12 px-4 max-w-7xl mx-auto">
            <button 
              onClick={navigateToHome}
              className="mb-8 flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-semibold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              Kembali ke Beranda
            </button>
            <OrderForm game={selectedGame} />
          </div>
        )}

        {currentView === 'check-order' && (
          <CheckOrder />
        )}

        {currentView === 'login' && (
          <Login onBack={navigateToHome} />
        )}
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
