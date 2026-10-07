import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PURCHASE_URL } from '../data/constants';

const Navbar = () => {
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-navy-900' : 'text-white'}`}>
              StudySphere<span className="text-brand-primary">.</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className={`font-medium hover:text-brand-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`}>Home</a>
            <a href="#bundle" className={`font-medium hover:text-brand-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`}>What's Inside</a>
            <a href="#why-smart-notes" className={`font-medium hover:text-brand-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`}>Why Smart Notes</a>
            <a href="#faq" className={`font-medium hover:text-brand-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-200'}`}>FAQ</a>
          </div>

          <div className="hidden md:flex items-center">
            <a 
              href={PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary hover:bg-brand-secondary text-navy-900 font-bold py-2 px-6 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              BUY NOW ₹99
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${isScrolled ? 'text-navy-900' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full flex flex-col py-4 px-6 space-y-4">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 font-medium">Home</a>
          <a href="#bundle" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 font-medium">What's Inside</a>
          <a href="#why-smart-notes" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 font-medium">Why Smart Notes</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-gray-800 font-medium">FAQ</a>
          <a 
            href={PURCHASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-brand-primary text-navy-900 font-bold py-3 px-6 rounded-full text-center mt-4"
          >
            BUY NOW ₹99
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
