import React, { useState, useEffect } from 'react';
import { usePrice } from '../context/PriceContext';
import { Flame } from 'lucide-react';

const StickyCTA = () => {
  const { 
    bundlePrice,
    bundlePurchaseUrl,
    currentPrice, 
    purchaseUrl,
    geographyPrice,
    geographyPurchaseUrl
  } = usePrice();
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero section
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-navy-950/95 backdrop-blur-md border-t border-white/15 p-2 px-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] z-40 flex items-center justify-between gap-1.5 animate-fade-in-up">
        <a 
          href={bundlePurchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.5] bg-brand-primary hover:bg-brand-secondary text-navy-950 font-black text-xs py-2 px-2 rounded-xl shadow-md text-center flex items-center justify-center gap-1 border border-white/40"
        >
          <Flame size={13} className="fill-current text-navy-950 flex-shrink-0" />
          <span className="truncate">500+ Books ₹{bundlePrice}</span>
        </a>

        <a 
          href={purchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold text-[11px] py-2 px-1.5 rounded-xl border border-white/15 text-center flex items-center justify-center gap-1"
        >
          <span className="truncate">History ₹{currentPrice}</span>
        </a>

        <a 
          href={geographyPurchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold text-[11px] py-2 px-1.5 rounded-xl border border-white/15 text-center flex items-center justify-center gap-1"
        >
          <span className="truncate">Geography ₹{geographyPrice}</span>
        </a>
      </div>

      {/* Desktop Sticky CTA */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 gap-2.5 animate-fade-in-up items-center">
        <a 
          href={bundlePurchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-primary hover:bg-brand-secondary text-navy-950 font-black py-3 px-5 rounded-full shadow-[0_6px_25px_rgba(245,165,20,0.6)] border-2 border-white flex items-center gap-2.5 transition-transform hover:scale-105 group"
        >
          <Flame size={16} className="fill-current" />
          <span className="text-sm font-black">500+ Books Mega Bundle</span>
          <span className="bg-navy-950 text-white px-2.5 py-0.5 rounded-full text-xs font-black">
            ₹{bundlePrice}
          </span>
        </a>

        <a 
          href={purchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-navy-900 hover:bg-navy-800 text-white font-extrabold py-3 px-4 rounded-full shadow-xl border border-white/20 flex items-center gap-2 transition-transform hover:scale-105 group"
        >
          <span className="text-xs">History</span>
          <span className="bg-brand-primary text-navy-900 px-2 py-0.5 rounded-full text-[11px] font-black">
            ₹{currentPrice}
          </span>
        </a>

        <a 
          href={geographyPurchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-navy-900 hover:bg-navy-800 text-white font-extrabold py-3 px-4 rounded-full shadow-xl border border-white/20 flex items-center gap-2 transition-transform hover:scale-105 group"
        >
          <span className="text-xs">Geography</span>
          <span className="bg-brand-primary text-navy-900 px-2 py-0.5 rounded-full text-[11px] font-black">
            ₹{geographyPrice}
          </span>
        </a>
      </div>
    </>
  );
};

export default StickyCTA;