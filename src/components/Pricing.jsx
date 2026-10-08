import React from 'react';
import { Download, RefreshCw, Infinity, BookOpen, Newspaper } from 'lucide-react';
import { PURCHASE_URL } from '../data/constants';

const Pricing = () => {
  return (
    <section className="py-24 bg-navy-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          Master Complete UPSC IAS 2027<br/>Prelims & Mains
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
          Chapter-wise Pointwise Smart Notes to Study Smarter, Revise Faster & Build a Strong UPSC Foundation
        </p>
        
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl max-w-2xl mx-auto relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary opacity-10 rounded-bl-full"></div>
          
          <div className="inline-block bg-red-100 text-red-600 font-bold px-4 py-1.5 rounded-full mb-8 text-sm tracking-wide">
            SPECIAL LAUNCH OFFER
          </div>
          
          <div className="flex justify-center items-end gap-3 mb-4">
            <span className="text-7xl font-extrabold text-navy-900 leading-none">₹75</span>
            <span className="text-3xl text-gray-400 line-through font-bold mb-1">₹2,999</span>
          </div>
          
          <p className="text-xl font-bold text-gray-800 mb-2">Complete 300+ Book PDF Smart Notes Bundle</p>
          <p className="text-gray-500 font-medium mb-10">One-time payment</p>
          
          <div className="space-y-5 mb-10 max-w-sm mx-auto text-left">
            <div className="flex items-center gap-4 text-gray-700">
              <div className="bg-green-100 p-2 rounded-full text-green-600"><Download size={24} /></div>
              <span className="font-semibold text-lg">Instant PDF Delivery</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600"><BookOpen size={24} /></div>
              <span className="font-semibold text-lg">300+ Book PDFs</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <div className="bg-yellow-100 p-2 rounded-full text-yellow-600"><Infinity size={24} /></div>
              <span className="font-semibold text-lg">Lifetime Access</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <div className="bg-orange-100 p-2 rounded-full text-orange-600"><Newspaper size={24} /></div>
              <span className="font-semibold text-lg">Daily Newspaper</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <div className="bg-purple-100 p-2 rounded-full text-purple-600"><RefreshCw size={24} /></div>
              <span className="font-semibold text-lg">New Books PDF</span>
            </div>
          </div>
          
          <a 
            href={PURCHASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-brand-primary hover:bg-brand-secondary text-navy-900 text-center font-extrabold text-xl py-5 rounded-2xl shadow-[0_8px_20px_rgba(245,165,20,0.3)] hover:shadow-[0_10px_25px_rgba(245,165,20,0.4)] hover:-translate-y-1 transition-all duration-300"
          >
            🚀 GET THE COMPLETE SMART NOTES BUNDLE — ₹75
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
