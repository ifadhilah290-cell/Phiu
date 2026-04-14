
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">
      {/* Decorative background elements - Lowered opacity for better blending with pattern */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-15">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[128px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative z-10">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl drop-shadow-2xl">
            <span className="block">Top Up Diamond Game</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
              Paling Cepat & Murah
            </span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl drop-shadow-md">
            Layanan pengisian voucher game favorit Anda. Berbagai metode pembayaran tersedia mulai dari E-Wallet, QRIS, hingga Transfer Bank.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#games" className="px-8 py-4 border border-transparent text-base font-bold rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg transition-all shadow-2xl shadow-indigo-600/40 hover:-translate-y-1">
              Top Up Sekarang
            </a>
            <button className="px-8 py-4 border border-white/10 text-base font-bold rounded-2xl text-gray-200 bg-white/5 backdrop-blur-md hover:bg-white/10 md:text-lg transition-all">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;