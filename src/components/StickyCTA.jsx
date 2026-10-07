import React, { useState, useEffect } from 'react';
import { PURCHASE_URL } from '../data/constants';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero section
      if (window.scrollY > 600) {
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
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-40 flex justify-between items-center animate-fade-in-up">
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">UPSC IAS 2027</p>
          <p className="text-xl font-extrabold text-navy-900 leading-none">₹75</p>
        </div>
        <a 
          href={PURCHASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-primary text-navy-900 font-bold py-3 px-6 rounded-xl shadow-md"
        >
          BUY NOW
        </a>
      </div>

      {/* Desktop Sticky CTA */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 animate-fade-in-up">
        <a 
          href={PURCHASE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-navy-900 hover:bg-navy-800 text-white font-bold py-3 px-6 rounded-full shadow-2xl border-2 border-brand-primary flex items-center gap-3 transition-transform hover:scale-105"
        >
          <span>Complete Smart Notes</span>
          <span className="bg-brand-primary text-navy-900 px-3 py-1 rounded-full text-sm">₹75</span>
        </a>
      </div>
    </>
  );
};

export default StickyCTA;
