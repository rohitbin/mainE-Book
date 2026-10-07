import React from 'react';
import { Download, RefreshCw, Infinity, BookOpen, Newspaper, Send } from 'lucide-react';
import { PURCHASE_URL } from '../data/constants';

const Hero = () => {
  return (
    <section className="bg-navy-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-primary opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block bg-white/10 border border-white/20 text-brand-primary font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            🔥 SPECIAL LAUNCH OFFER
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            <span className="text-white block mb-2">Stop Collecting.</span>
            <span className="text-brand-primary block">Start Studying.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white font-semibold mb-4 bg-brand-primary/20 inline-block px-4 py-2 rounded-lg border border-brand-primary/30">
            200+ Books UPSC, And Other Government Exam
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
            You need a clear structure for learning and revision. Master the concepts. Organize your preparation. Revise smarter.
          </p>

          <div className="mt-8 mb-8 lg:mb-0">
            <img 
              src="/hero-banner.jpg" 
              alt="200+ Books PDF Bundle" 
              className="w-full max-w-lg mx-auto lg:mx-0 rounded-2xl shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-300"
            />
          </div>
          
        </div>

        <div className="flex-1 w-full max-w-md">
          <div className="bg-white rounded-3xl p-8 shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white font-bold px-4 py-1 rounded-full text-sm whitespace-nowrap shadow-lg">
              LIMITED TIME PRICING
            </div>
            
            <div className="text-center mt-4 mb-6">
              <div className="flex justify-center items-center gap-3">
                <span className="text-5xl font-extrabold text-navy-900">₹99</span>
                <span className="text-2xl text-gray-400 line-through font-semibold">₹2,999</span>
              </div>
              <p className="text-gray-600 font-medium mt-2">Complete 200+ Book PDF Smart Notes Bundle</p>
              <p className="text-sm text-gray-400 mt-1">One-time payment</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="bg-green-100 p-2 rounded-full text-green-600"><Download size={20} /></div>
                <span className="font-medium">Instant PDF Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600"><BookOpen size={20} /></div>
                <span className="font-medium">200+ Book PDFs</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="bg-yellow-100 p-2 rounded-full text-yellow-600"><Infinity size={20} /></div>
                <span className="font-medium">Lifetime Access</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="bg-orange-100 p-2 rounded-full text-orange-600"><Newspaper size={20} /></div>
                <span className="font-medium">Daily Newspaper</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="bg-purple-100 p-2 rounded-full text-purple-600"><RefreshCw size={20} /></div>
                <span className="font-medium">New Books PDF</span>
              </div>
            </div>

            <a 
              href={PURCHASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-brand-primary hover:bg-brand-secondary text-navy-900 text-center font-bold text-lg py-4 rounded-xl shadow-[0_4px_14px_0_rgba(245,165,20,0.39)] hover:shadow-[0_6px_20px_rgba(245,165,20,0.23)] hover:-translate-y-1 transition-all duration-200"
            >
              🚀 GET THE COMPLETE SMART NOTES BUNDLE — ₹99
            </a>
            
            <p className="text-center text-sm text-gray-500 mt-4 flex justify-center items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Secure one-time purchase • Instant access
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
