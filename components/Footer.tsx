import React from 'react';

const Footer: React.FC = () => {
  const BRAND_LOGO = "https://i.pinimg.com/736x/8c/6c/db/8c6cdbd18862893b595c2f93f2731efd.jpg";

  return (
    <footer className="glass border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg overflow-hidden mr-3 border-2 border-indigo-500/30 shadow-lg">
                  <img 
                    src={BRAND_LOGO} 
                    alt="MhiuStore Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white">MhiuStore</span>
                  <img 
                    src={BRAND_LOGO} 
                    alt="Badge" 
                    className="w-5 h-5 rounded-full object-cover border border-white/10"
                  />
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-sm">
                Platform top up game tercepat dan terpercaya di Indonesia. Kami menyediakan berbagai voucher game dengan harga kompetitif dan proses instan otomatis.
              </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Bantuan</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Cara Order</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Metode Pembayaran</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Kontak</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                ifadhilah290@gmail.com
              </li>
              <li className="flex items-center gap-3">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                 081932133505
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © 2024 MhiuStore. All rights reserved. Game logos are trademarks of their respective owners.
          </p>
          <div className="flex gap-6">
             <a href="#" className="text-gray-500 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
             <a href="#" className="text-gray-500 hover:text-white transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;