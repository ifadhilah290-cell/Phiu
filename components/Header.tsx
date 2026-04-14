import React, { useState } from 'react';

interface HeaderProps {
  onHome: () => void;
  onCekPesanan: () => void;
  onDaftarGame: () => void;
  onLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHome, onCekPesanan, onDaftarGame, onLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (fn: () => void) => {
    fn();
    setIsMenuOpen(false);
  };

  const BRAND_LOGO = "https://i.pinimg.com/736x/8c/6c/db/8c6cdbd18862893b595c2f93f2731efd.jpg";

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick(onHome)}>
            <div className="w-10 h-10 rounded-lg overflow-hidden mr-3 border-2 border-indigo-500/30 shadow-lg shadow-indigo-500/20">
              <img 
                src={BRAND_LOGO} 
                alt="MhiuStore Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                MhiuStore
              </span>
              <img 
                src={BRAND_LOGO} 
                alt="Badge" 
                className="w-5 h-5 rounded-full object-cover border border-white/10 shadow-sm"
              />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={onHome} className="text-gray-300 hover:text-white transition-colors font-medium">Home</button>
            <button onClick={onDaftarGame} className="text-gray-300 hover:text-white transition-colors font-medium">Daftar Game</button>
            <button onClick={onCekPesanan} className="text-gray-300 hover:text-white transition-colors font-medium">Cek Pesanan</button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={onLogin}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20"
            >
              Masuk
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-[#0f172a] animate-in slide-in-from-right duration-300 overflow-y-auto pb-20">
          {/* Navigation Items */}
          <div className="px-6 py-6 space-y-4">
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button 
                onClick={() => handleNavClick(onHome)}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 text-gray-200 font-bold hover:bg-white/10 transition-all gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                Beranda
              </button>
              <button 
                onClick={() => handleNavClick(onCekPesanan)}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/5 text-gray-200 font-bold hover:bg-white/10 transition-all gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </div>
                Cek Pesanan
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Kategori Utama</p>
              
              {/* Mobile Games Link with Requested Image */}
              <button 
                onClick={() => handleNavClick(onDaftarGame)}
                className="relative w-full h-32 rounded-2xl overflow-hidden group border border-indigo-500/30 shadow-xl"
              >
                <img 
                  src="https://i.pinimg.com/736x/cc/50/6b/cc506b6acd1b9dc215494c474f41c46a.jpg" 
                  alt="Mobile Menu Promo" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-center items-start">
                   <h3 className="text-white font-black text-2xl tracking-tighter">Mobile Games</h3>
                   <p className="text-indigo-400 text-[10px] font-bold uppercase tracking-widest mt-1">Top Up Diamond Instan</p>
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </button>

              <button 
                onClick={() => handleNavClick(onDaftarGame)}
                className="w-full text-left p-4 rounded-2xl bg-white/5 border border-white/5 text-gray-200 font-bold hover:bg-white/10 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01"/><path d="M18 12h.01"/></svg>
                  </div>
                  PC & Console Games
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
            
            <div className="pt-8">
              <button 
                onClick={() => handleNavClick(onLogin)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-600/20"
              >
                Masuk ke Akun
              </button>
            </div>
          </div>
          
          <div className="mt-8 px-6 text-center">
             <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 mb-6">
                <p className="text-gray-400 text-[10px] leading-relaxed">
                  Buka 24 Jam Non-stop. Customer service siap membantu kendala top up Anda melalui live chat assistant.
                </p>
             </div>
            <p className="text-gray-600 text-[10px] uppercase font-bold tracking-widest">MhiuStore v2.0 • Top Up Terpercaya</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;