import React from 'react';
import { usePrice } from '../context/PriceContext';
import { ArrowRight, ShieldCheck, Download, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  const { currentPrice, purchaseUrl } = usePrice();

  return (
    <section className="py-24 bg-navy-900 text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-brand-primary opacity-15 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-brand-primary font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-6">
          <Sparkles size={14} /> Instant Access via MintLink
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
          <span className="text-white block mb-2">Master Indian History.</span>
          <span className="text-brand-primary block">Maximize Your Prelims Score.</span>
        </h2>
        
        <p className="text-base sm:text-xl text-gray-300 font-medium mb-10 max-w-2xl mx-auto">
          Get 3,000+ topic-wise UPSC previous year questions and practice MCQs with detailed explanations for only ₹{currentPrice}.
        </p>
        
        <a 
          href={purchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-brand-primary hover:bg-brand-secondary text-navy-900 font-black text-lg sm:text-xl py-5 px-10 rounded-2xl shadow-[0_8px_25px_rgba(245,165,20,0.35)] hover:shadow-[0_10px_30px_rgba(245,165,20,0.5)] hover:-translate-y-1 transition-all duration-300"
        >
          <span>🚀 GET THE COMPLETE BOOK NOW — ₹{currentPrice}</span>
          <ArrowRight size={22} />
        </a>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <Download size={14} className="text-brand-primary" /> Instant 17.5 MB PDF Download
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-green-400" /> Secure MintLink UPI Checkout
          </span>
          <span>•</span>
          <span>Lifetime Offline Access</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
