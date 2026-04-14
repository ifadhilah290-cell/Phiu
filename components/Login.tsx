import React, { useState } from 'react';

interface LoginProps {
  onBack: () => void;
}

type AuthMode = 'login' | 'register' | 'social-loading';

const Login: React.FC<LoginProps> = ({ onBack }) => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [socialProvider, setSocialProvider] = useState<string>('');
  const BRAND_LOGO = "https://i.pinimg.com/736x/8c/6c/db/8c6cdbd18862893b595c2f93f2731efd.jpg";
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi proses autentikasi
    setTimeout(() => {
      setIsSubmitting(false);
      alert(mode === 'login' ? 'Berhasil Masuk! (Simulasi)' : 'Pendaftaran Berhasil! Silakan login.');
      if (mode === 'register') setMode('login');
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    setSocialProvider(provider);
    setMode('social-loading');
    
    // Simulasi popup OAuth
    setTimeout(() => {
      alert(`Berhasil terhubung dengan ${provider}! (Simulasi)`);
      setMode('login');
    }, 2500);
  };

  if (mode === 'social-loading') {
    return (
      <div className="max-w-md mx-auto py-12 px-4 animate-in fade-in duration-500">
        <div className="glass p-12 rounded-[40px] shadow-2xl text-center flex flex-col items-center">
          <div className="relative mb-8">
            <div className="w-20 h-20 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               {socialProvider === 'Google' ? (
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.9 3.14-2 4.14-1.28 1.28-3.3 2.62-7.3 2.62-6.38 0-11.4-5.16-11.4-11.54s5.02-11.54 11.4-11.54c3.48 0 6.02 1.38 7.82 3.1l2.2-2.2C18.42 1.54 15.62 0 12.02 0 5.4 0 0 5.38 0 12s5.4 12 12.02 12c3.58 0 6.3-1.18 8.4-3.38 2.14-2.14 2.82-5.16 2.82-7.7 0-.54-.04-1.06-.12-1.54h-10.66z"/></svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.052-.102.001-.226-.112-.27a12.44 12.44 0 0 1-1.875-.892.077.077 0 0 1-.007-.128c.126-.093.252-.19.372-.289a.075.075 0 0 1 .077-.009c3.928 1.799 8.18 1.799 12.061 0a.073.073 0 0 1 .077.009c.12.098.245.195.372.289a.073.073 0 0 1 .077.009c.12.098.245.195.372.289a.077.077 0 0 1-.006.128c-.594.464-1.202.762-1.875.892-.113.044-.164.168-.112.27.352.699.764 1.365 1.226 1.994a.078.078 0 0 0 .084.028 19.83 19.83 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
               )}
            </div>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Menghubungkan ke {socialProvider}</h2>
          <p className="text-gray-400 text-sm">Mohon tunggu sebentar, kami sedang memproses otorisasi akun Anda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto py-12 px-4 animate-in slide-in-from-bottom duration-500">
      <div className="glass p-8 md:p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full -ml-16 -mb-16"></div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl overflow-hidden border-2 border-indigo-500/30 shadow-xl shadow-indigo-500/20">
              <img 
                src={BRAND_LOGO} 
                alt="MhiuStore" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-black text-white mb-1">
              {mode === 'login' ? 'Selamat Datang' : 'Buat Akun Baru'}
            </h2>
            <p className="text-gray-400 text-sm">
              {mode === 'login' ? 'Masuk untuk pengalaman top up yang lebih baik' : 'Daftar sekarang dan nikmati promo eksklusif'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div className="space-y-1.5 animate-in fade-in slide-in-from-top duration-300">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Username</label>
                <input 
                  name="username"
                  type="text" 
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Contoh: sakib_gamer"
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-gray-600"
                />
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email</label>
              <input 
                name="email"
                type="email" 
                value={formData.email}
                onChange={handleInputChange}
                placeholder="nama@email.com"
                required
                className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-gray-600"
              />
            </div>

            {mode === 'register' && (
              <div className="space-y-1.5 animate-in fade-in slide-in-from-top duration-300">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">No. WhatsApp</label>
                <input 
                  name="phone"
                  type="tel" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="0812xxxx"
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-gray-600"
                />
              </div>
            )}

            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Kata Sandi</label>
                {mode === 'login' && (
                  <button type="button" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-semibold">Lupa Sandi?</button>
                )}
              </div>
              <input 
                name="password"
                type="password" 
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                required
                className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-gray-600"
              />
            </div>

            {mode === 'register' && (
              <div className="space-y-1.5 animate-in fade-in slide-in-from-top duration-300">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Konfirmasi Sandi</label>
                <input 
                  name="confirmPassword"
                  type="password" 
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-gray-600"
                />
              </div>
            )}

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3 mt-4"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : mode === 'login' ? 'Masuk Akun' : 'Daftar Sekarang'}
            </button>
          </form>

          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-[#1e293b]/80 rounded-full text-gray-500 uppercase font-bold tracking-widest">Atau Gunakan</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button 
              onClick={() => handleSocialLogin('Google')}
              className="group flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-slate-700 rounded-xl hover:bg-white/10 hover:border-indigo-500/50 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-indigo-400 transition-colors"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.9 3.14-2 4.14-1.28 1.28-3.3 2.62-7.3 2.62-6.38 0-11.4-5.16-11.4-11.54s5.02-11.54 11.4-11.54c3.48 0 6.02 1.38 7.82 3.1l2.2-2.2C18.42 1.54 15.62 0 12.02 0 5.4 0 0 5.38 0 12s5.4 12 12.02 12c3.58 0 6.3-1.18 8.4-3.38 2.14-2.14 2.82-5.16 2.82-7.7 0-.54-.04-1.06-.12-1.54h-10.66z"/></svg>
              <span className="text-sm font-semibold text-gray-300">Google</span>
            </button>
            <button 
              onClick={() => handleSocialLogin('Discord')}
              className="group flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-slate-700 rounded-xl hover:bg-white/10 hover:border-indigo-500/50 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-indigo-400 transition-colors"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.052-.102.001-.226-.112-.27a12.44 12.44 0 0 1-1.875-.892.077.077 0 0 1-.007-.128c.126-.093.252-.19.372-.289a.075.075 0 0 1 .077-.009c3.928 1.799 8.18 1.799 12.061 0a.073.073 0 0 1 .077.009c.12.098.245.195.372.289a.073.073 0 0 1 .077.009c.12.098.245.195.372.289a.077.077 0 0 1-.006.128c-.594.464-1.202.762-1.875.892-.113.044-.164.168-.112.27.352.699.764 1.365 1.226 1.994a.078.078 0 0 0 .084.028 19.83 19.83 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
               <span className="text-sm font-semibold text-gray-300">Discord</span>
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              {mode === 'login' ? (
                <>Belum punya akun? <button onClick={() => setMode('register')} className="text-indigo-400 hover:text-indigo-300 transition-colors font-bold">Daftar Sekarang</button></>
              ) : (
                <>Sudah punya akun? <button onClick={() => setMode('login')} className="text-indigo-400 hover:text-indigo-300 transition-colors font-bold">Masuk Sekarang</button></>
              )}
            </p>
          </div>
        </div>
      </div>
      
      <button 
        onClick={onBack}
        className="mt-8 flex items-center justify-center gap-2 mx-auto text-gray-500 hover:text-indigo-400 transition-colors font-semibold"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Kembali ke Beranda
      </button>
    </div>
  );
};

export default Login;