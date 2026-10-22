import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-navy-900/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <a href="#" className="text-2xl font-black tracking-tighter flex items-center gap-1.5 text-white">
              <span>StudySphereIAS</span>
              <span className="text-brand-primary">Book</span>
            </a>
            <span className="hidden sm:inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-white/20 bg-white/10 text-brand-primary">
              History &amp; Geography PYQs
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-5 lg:space-x-7">
            <a href="#" className="text-sm font-semibold text-gray-200 hover:text-brand-primary transition-colors">Home</a>
            <a href="#books" className="text-sm font-semibold text-gray-200 hover:text-brand-primary transition-colors">Books</a>
            <a href="#modules" className="text-sm font-semibold text-gray-200 hover:text-brand-primary transition-colors">What's Inside</a>
            <a href="#preview" className="text-sm font-semibold text-gray-200 hover:text-brand-primary transition-colors">Sample Preview</a>
            <a href="#why-pyqs" className="text-sm font-semibold text-gray-200 hover:text-brand-primary transition-colors">Why PYQs</a>
            <a href="#faq" className="text-sm font-semibold text-gray-200 hover:text-brand-primary transition-colors">FAQ</a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-1 hover:text-brand-primary transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-900/98 backdrop-blur-lg border-b border-white/15 absolute top-full left-0 w-full flex flex-col py-5 px-6 space-y-4 shadow-2xl">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-white font-bold hover:text-brand-primary transition-colors">Home</a>
          <a href="#books" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 font-semibold hover:text-brand-primary transition-colors">Books</a>
          <a href="#modules" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 font-semibold hover:text-brand-primary transition-colors">What's Inside</a>
          <a href="#preview" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 font-semibold hover:text-brand-primary transition-colors">Sample Preview</a>
          <a href="#why-pyqs" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 font-semibold hover:text-brand-primary transition-colors">Why Solve PYQs</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 font-semibold hover:text-brand-primary transition-colors">FAQ</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
