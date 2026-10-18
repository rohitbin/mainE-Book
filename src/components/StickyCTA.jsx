import React, { useState, useEffect } from 'react';
import { usePrice } from '../context/PriceContext';
import { ShoppingCart } from 'lucide-react';

const StickyCTA = () => {
  const { currentPrice, purchaseUrl } = usePrice();
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
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3.5 px-4 shadow-[0_-4px_15px_rgba(0,0,0,0.08)] z-40 flex justify-between items-center animate-fade-in-up">
        <div>
          <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Indian History PYQs</p>
          <p className="text-xl font-black text-navy-900 leading-none">₹{currentPrice}</p>
        </div>
        <a 
          href={purchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-primary text-navy-900 font-black text-sm py-2.5 px-5 rounded-xl shadow-md flex items-center gap-1.5"
        >
          <ShoppingCart size={16} />
          <span>BUY NOW</span>
        </a>
      </div>

      {/* Desktop Sticky CTA */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 animate-fade-in-up">
        <a 
          href={purchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-navy-900 hover:bg-navy-800 text-white font-extrabold py-3.5 px-6 rounded-full shadow-2xl border-2 border-brand-primary flex items-center gap-3 transition-transform hover:scale-105 group"
        >
          <span className="text-sm">Indian History PYQ Book</span>
          <span className="bg-brand-primary text-navy-900 px-3 py-1 rounded-full text-xs font-black group-hover:scale-105 transition-transform">
            ₹{currentPrice}
          </span>
        </a>
      </div>
    </>
  );
};

export default StickyCTA;
