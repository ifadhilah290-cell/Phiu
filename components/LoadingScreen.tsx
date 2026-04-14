import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const BRAND_LOGO = "https://i.pinimg.com/736x/8c/6c/db/8c6cdbd18862893b595c2f93f2731efd.jpg";

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden bg-[#0f172a]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/ad/c7/11/adc711b97feb0f4ca70970004926f0cf.jpg')" }}
      ></div>
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#0f172a]/90 via-[#0f172a]/70 to-[#0f172a]/90"></div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse z-2"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Main Image from User */}
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20 border-2 border-indigo-500/30 mb-8 animate-bounce-slow">
          <img 
            src={BRAND_LOGO} 
            alt="MhiuStore Loading" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center gap-3 mb-8">
           <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-indigo-500/40 shadow-xl shadow-indigo-500/20">
              <img 
                src={BRAND_LOGO} 
                alt="Mini Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-black text-white tracking-tighter">
                Mhiu<span className="text-indigo-500">Store</span>
              </h1>
              <img 
                src={BRAND_LOGO} 
                alt="Badge" 
                className="w-7 h-7 rounded-full object-cover border-2 border-indigo-500/30 shadow-lg"
              />
            </div>
        </div>

        {/* Progress Bar Area */}
        <div className="w-64 bg-slate-800/50 backdrop-blur-sm h-1.5 rounded-full overflow-hidden mb-3 border border-white/5">
          <div 
            className="bg-indigo-500 h-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] drop-shadow-lg">
          {progress < 100 ? 'Memuat Sistem...' : 'Siap Bermain!'}
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

export default LoadingScreen;