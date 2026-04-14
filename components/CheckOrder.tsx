
import React, { useState } from 'react';

const CheckOrder: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId) return;

    setIsSearching(true);
    setResult(null);

    // Simulasi pencarian database
    setTimeout(() => {
      setIsSearching(false);
      // Mock result
      setResult({
        id: orderId.toUpperCase(),
        game: 'Mobile Legends',
        item: '840 Diamonds',
        status: 'Success',
        date: new Date().toLocaleDateString('id-ID'),
        payment: 'QRIS'
      });
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 animate-in slide-in-from-bottom duration-500">
      <div className="glass p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
        {/* Dekorasi Background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-3">Lacak Pesanan</h2>
            <p className="text-gray-400">Masukkan ID Pesanan Anda untuk melihat status transaksi secara real-time.</p>
          </div>

          <form onSubmit={handleCheck} className="space-y-6">
            <div className="relative">
              <input 
                type="text" 
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Masukkan No. Transaksi / ID Pesanan"
                className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-2xl p-5 pl-6 focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-gray-600"
              />
              <button 
                type="submit"
                disabled={isSearching}
                className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2"
              >
                {isSearching ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : 'Cek Sekarang'}
              </button>
            </div>
          </form>

          {result && !isSearching && (
            <div className="mt-12 p-6 rounded-3xl bg-slate-900/50 border border-indigo-500/20 animate-in fade-in zoom-in duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">No. Pesanan</p>
                  <p className="text-white font-mono text-lg">#{result.id}</p>
                </div>
                <div className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${
                  result.status === 'Success' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  ● {result.status}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Nama Game</p>
                  <p className="text-white font-semibold">{result.game}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Item</p>
                  <p className="text-white font-semibold">{result.item}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Tanggal</p>
                  <p className="text-white font-semibold">{result.date}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Pembayaran</p>
                  <p className="text-white font-semibold">{result.payment}</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-10 p-5 bg-indigo-500/5 rounded-2xl border border-indigo-500/10">
             <p className="text-xs text-gray-400 leading-relaxed">
               <span className="text-indigo-400 font-bold">Butuh Bantuan?</span> Jika pesanan Anda belum masuk dalam 10 menit setelah pembayaran, silakan hubungi WhatsApp Support kami dengan melampirkan bukti pembayaran.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOrder;
