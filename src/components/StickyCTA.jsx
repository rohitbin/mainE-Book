import React, { useState, useEffect } from 'react';
import { usePrice } from '../context/PriceContext';
import { ShoppingCart } from 'lucide-react';

const StickyCTA = () => {
  const { 
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
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-2.5 px-3 shadow-[0_-4px_15px_rgba(0,0,0,0.08)] z-40 flex items-center justify-between gap-2 animate-fade-in-up">
        <a 
          href={purchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-navy-900 text-white font-extrabold text-xs py-2 px-2.5 rounded-xl shadow text-center flex items-center justify-center gap-1"
        >
          <ShoppingCart size={13} className="text-brand-primary" />
          <span>History ₹{currentPrice}</span>
        </a>
        <a 
          href={geographyPurchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-brand-primary text-navy-900 font-extrabold text-xs py-2 px-2.5 rounded-xl shadow text-center flex items-center justify-center gap-1"
        >
          <ShoppingCart size={13} />
          <span>Geography ₹{geographyPrice}</span>
        </a>
      </div>

      {/* Desktop Sticky CTA */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 gap-3 animate-fade-in-up">
        <a 
          href={purchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-navy-900 hover:bg-navy-800 text-white font-extrabold py-3 px-5 rounded-full shadow-2xl border-2 border-brand-primary/80 flex items-center gap-2.5 transition-transform hover:scale-105 group"
        >
          <span className="text-xs sm:text-sm">History PYQ</span>
          <span className="bg-brand-primary text-navy-900 px-2.5 py-0.5 rounded-full text-xs font-black">
            ₹{currentPrice}
          </span>
        </a>

        <a 
          href={geographyPurchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-primary hover:bg-brand-secondary text-navy-900 font-extrabold py-3 px-5 rounded-full shadow-2xl border-2 border-white/60 flex items-center gap-2.5 transition-transform hover:scale-105 group"
        >
          <span className="text-xs sm:text-sm">Geography PYQ</span>
          <span className="bg-navy-900 text-white px-2.5 py-0.5 rounded-full text-xs font-black">
            ₹{geographyPrice}
          </span>
        </a>
      </div>
    </>
  );
};

export default StickyCTA;
