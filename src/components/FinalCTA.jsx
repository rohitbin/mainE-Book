import React from 'react';
import { PURCHASE_URL } from '../data/constants';

const FinalCTA = () => {
  return (
    <section className="py-24 bg-navy-900 text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-brand-primary opacity-10 blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          <span className="text-white block">Stop Collecting PDFs.</span>
          <span className="text-brand-primary block">Start Following a Study System.</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 font-medium mb-12">
          Study smarter. Revise faster. Build a stronger UPSC foundation.
        </p>
        
        <a 
          href={PURCHASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-primary hover:bg-brand-secondary text-navy-900 font-extrabold text-xl py-5 px-10 rounded-2xl shadow-[0_8px_20px_rgba(245,165,20,0.3)] hover:shadow-[0_10px_25px_rgba(245,165,20,0.4)] hover:-translate-y-1 transition-all duration-300"
        >
          🚀 GET COMPLETE SMART NOTES — ₹75
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
