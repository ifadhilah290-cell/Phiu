import React, { useState } from 'react';
import { Game, GamePackage, PaymentMethod } from '../types';
import { PAYMENT_METHODS } from '../constants';

interface OrderFormProps {
  game: Game;
}

const OrderForm: React.FC<OrderFormProps> = ({ game }) => {
  const [userId, setUserId] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedPackage, setSelectedPackage] = useState<GamePackage | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleOrder = () => {
    if (!userId || !selectedPackage || !selectedPayment || (game.regions && !selectedRegion)) {
      alert('Tolong lengkapi data pesanan Anda!');
      return;
    }
    
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="max-w-2xl mx-auto glass p-10 rounded-3xl text-center">
        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Pesanan Berhasil!</h2>
        <p className="text-gray-400 mb-8">
          Diamond akan segera dikirim ke ID {userId} {selectedRegion ? `(${selectedRegion})` : ''} ({game.title}) setelah pembayaran terverifikasi.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg"
        >
          Kembali Top Up
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Step 1: User Data */}
      <div className="lg:col-span-2 space-y-8">
        <section className="glass p-8 rounded-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-white">1</div>
            <h2 className="text-xl font-bold text-white">Lengkapi Data User</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">User ID</label>
              <input 
                type="text" 
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder={game.idPlaceholder}
                className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              />
            </div>
            {game.id === 'mlbb' && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Zone ID</label>
                <input 
                  type="text" 
                  value={zoneId}
                  onChange={(e) => setZoneId(e.target.value)}
                  placeholder="Zone ID"
                  className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                />
              </div>
            )}
          </div>
        </section>

        {/* Optional Region Selection */}
        {game.regions && (
          <section className="glass p-8 rounded-3xl animate-in fade-in slide-in-from-top duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-white">2</div>
              <h2 className="text-xl font-bold text-white">Pilih Region</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {game.regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`p-3 rounded-xl border-2 font-semibold transition-all ${
                    selectedRegion === region
                      ? 'border-indigo-500 bg-indigo-500/20 text-white'
                      : 'border-slate-700 bg-slate-800/30 text-gray-400 hover:border-slate-500'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Step 2/3: Choose Package */}
        <section className="glass p-8 rounded-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-white">{game.regions ? '3' : '2'}</div>
            <h2 className="text-xl font-bold text-white">Pilih Nominal</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {game.packages.length > 0 ? (
              game.packages.map((pkg) => (
                <div 
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg)}
                  className={`cursor-pointer p-3 rounded-2xl border-2 transition-all flex flex-col justify-between min-h-[140px] relative overflow-hidden group ${
                    selectedPackage?.id === pkg.id 
                      ? 'border-indigo-500 bg-indigo-500/10' 
                      : 'border-slate-700 bg-slate-800/30 hover:border-slate-500'
                  }`}
                >
                  {pkg.image && (
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-30 group-hover:opacity-50 transition-opacity overflow-hidden pointer-events-none">
                      <img src={pkg.image} alt="" className="w-full h-full object-cover rounded-bl-3xl" />
                    </div>
                  )}
                  <div className="z-10 relative">
                    {pkg.image && (
                      <img src={pkg.image} className="w-10 h-10 rounded-lg object-cover mb-2 border border-slate-600" alt={pkg.name} />
                    )}
                    <div className={`text-white font-bold leading-tight ${pkg.image ? 'text-sm' : 'text-base'}`}>{pkg.name}</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Proses Instan</div>
                  </div>
                  <div className="text-indigo-400 font-extrabold mt-4 z-10">{formatPrice(pkg.price)}</div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-gray-500 font-medium italic">
                Paket belum tersedia untuk region ini.
              </div>
            )}
          </div>
        </section>

        {/* Step 3/4: Payment Method */}
        <section className="glass p-8 rounded-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-bold text-white">{game.regions ? '4' : '3'}</div>
            <h2 className="text-xl font-bold text-white">Pilih Pembayaran</h2>
          </div>
          <div className="space-y-4">
             {PAYMENT_METHODS.map((payment) => (
               <div 
                key={payment.id}
                onClick={() => setSelectedPayment(payment)}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${
                  selectedPayment?.id === payment.id 
                    ? 'border-indigo-500 bg-indigo-500/10' 
                    : 'border-slate-700 bg-slate-800/30 hover:border-slate-600'
                }`}
               >
                 <div className="flex items-center gap-4">
                    <img src={payment.image} alt={payment.name} className="w-12 h-8 object-contain rounded bg-white p-1" />
                    <span className="text-white font-medium">{payment.name}</span>
                 </div>
                 {selectedPayment?.id === payment.id && (
                    <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                 )}
               </div>
             ))}
          </div>
        </section>
      </div>

      {/* Sidebar: Summary & Checkout */}
      <div className="lg:col-span-1">
        <div className="glass p-8 rounded-3xl sticky top-24">
          <h2 className="text-xl font-bold text-white mb-6">Ringkasan Pesanan</h2>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Game:</span>
              <span className="text-white font-semibold">{game.title}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">User ID:</span>
              <span className="text-white font-semibold">{userId || '-'}</span>
            </div>
            {game.regions && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Region:</span>
                <span className="text-white font-semibold">{selectedRegion || '-'}</span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Item:</span>
              <div className="text-right">
                <span className="text-white font-semibold block">{selectedPackage?.name || '-'}</span>
              </div>
            </div>
            <div className="flex justify-between text-sm border-t border-slate-700 pt-4">
              <span className="text-gray-400">Metode:</span>
              <span className="text-white font-semibold">{selectedPayment?.name || '-'}</span>
            </div>
            <div className="flex justify-between text-lg pt-2">
              <span className="text-white font-bold">Total:</span>
              <span className="text-indigo-400 font-bold">{selectedPackage ? formatPrice(selectedPackage.price) : 'Rp 0'}</span>
            </div>
          </div>
          
          <button 
            disabled={!userId || !selectedPackage || !selectedPayment || (game.regions && !selectedRegion) || isProcessing}
            onClick={handleOrder}
            className={`w-full py-4 rounded-2xl font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-3 ${
              !userId || !selectedPackage || !selectedPayment || (game.regions && !selectedRegion)
                ? 'bg-slate-700 text-gray-500 cursor-not-allowed' 
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20'
            }`}
          >
            {isProcessing ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Memproses...
              </>
            ) : 'Konfirmasi Top Up'}
          </button>
          
          <p className="mt-4 text-[10px] text-gray-500 text-center leading-relaxed">
            Dengan mengklik Konfirmasi, Anda menyetujui syarat dan ketentuan MhiuStore. Layanan kami diproses secara otomatis 24 jam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;