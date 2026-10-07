import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 border-t border-white/10 pt-16 pb-8 px-4 sm:px-6 lg:px-8 text-center md:text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
        <div className="md:max-w-xs">
          <div className="text-2xl font-bold tracking-tighter text-white mb-4">
            StudySphere<span className="text-brand-primary">.</span>
          </div>
          <p className="text-gray-400">
            Structured Smart Notes for UPSC Aspirants. Built to help you study smarter and revise faster.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Support & Info</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About & Contact</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© 2026 StudySphere. All Rights Reserved.</p>
        <p>Designed for UPSC IAS 2027</p>
      </div>
    </footer>
  );
};

export default Footer;
