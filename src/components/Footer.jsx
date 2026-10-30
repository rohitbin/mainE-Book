import React from 'react';
import { ExternalLink } from 'lucide-react';
import { usePrice } from '../context/PriceContext';

const Footer = () => {
  const { purchaseUrl } = usePrice();

  return (
    <footer className="bg-navy-900 border-t border-white/10 pt-16 pb-8 px-4 sm:px-6 lg:px-8 text-center md:text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
        <div className="md:max-w-sm">
          <div className="text-2xl font-black tracking-tighter text-white mb-3">
            StudySphereIAS <span className="text-brand-primary">Book.</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            500+ Books PDFs Complete Library with 30,000+ UPSC &amp; Govt. Exam Previous Year Questions, NCERTs (Class 6-12), topic-wise classification, and comprehensive explanations.
          </p>
          <a
            href={purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-brand-primary hover:underline font-bold"
          >
            <span>Official Storefront • Verified Checkout</span>
            <ExternalLink size={12} />
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#modules" className="text-gray-400 hover:text-white transition-colors">What's Inside</a></li>
              <li><a href="#preview" className="text-gray-400 hover:text-white transition-colors">Sample Question</a></li>
              <li><a href="#why-pyqs" className="text-gray-400 hover:text-white transition-colors">Why Solve PYQs</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Exams Covered</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>UPSC Civil Services (CSE Prelims)</li>
              <li>State PCS (UPPSC, BPSC, MPPSC)</li>
              <li>RAS, WBPSC, MPSC, TNPSC</li>
              <li>CDS, NDA & CAPF</li>
              <li>SSC CGL & Tier-1 Exams</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Help & Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">Instant Download Help</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">Payment FAQ</a></li>
              <li><span className="text-gray-500 text-xs">Powered by 256-Bit Secure Payments</span></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2026 StudySphereIAS Book. All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          <p>Indian History PYQ Book (3,000+ Questions)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
