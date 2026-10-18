import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { usePrice } from '../context/PriceContext';

const Navbar = () => {
  const { currentPrice, purchaseUrl } = usePrice();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2.5' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <a href="#" className={`text-2xl font-black tracking-tighter flex items-center gap-1.5 ${isScrolled ? 'text-navy-900' : 'text-white'}`}>
              <span>StudySphere</span>
              <span className="text-brand-primary">.</span>
            </a>
            <span className={`hidden sm:inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
              isScrolled ? 'border-amber-300 bg-amber-50 text-amber-900' : 'border-white/20 bg-white/10 text-brand-primary'
            }`}>
              History PYQs
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-7">
            <a href="#" className={`text-sm font-semibold hover:text-brand-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`}>Home</a>
            <a href="#modules" className={`text-sm font-semibold hover:text-brand-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`}>What's Inside</a>
            <a href="#preview" className={`text-sm font-semibold hover:text-brand-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`}>Sample Preview</a>
            <a href="#why-pyqs" className={`text-sm font-semibold hover:text-brand-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`}>Why PYQs</a>
            <a href="#faq" className={`text-sm font-semibold hover:text-brand-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`}>FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a 
              href={purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary hover:bg-brand-secondary text-navy-900 font-extrabold text-sm py-2.5 px-6 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-1.5"
            >
              <ShoppingCart size={15} />
              <span>BUY NOW ₹{currentPrice}</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${isScrolled ? 'text-navy-900' : 'text-white'} p-1`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-2xl border-b border-gray-100 absolute top-full left-0 w-full flex flex-col py-5 px-6 space-y-4">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 font-bold">Home</a>
          <a href="#modules" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 font-semibold">What's Inside</a>
          <a href="#preview" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 font-semibold">Sample Preview</a>
          <a href="#why-pyqs" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 font-semibold">Why Solve PYQs</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 font-semibold">FAQ</a>
          
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <a 
              href={purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-brand-primary text-navy-900 font-black py-3 px-6 rounded-xl text-center shadow-md flex items-center justify-center gap-2"
            >
              <ShoppingCart size={16} />
              <span>BUY NOW ₹{currentPrice}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
