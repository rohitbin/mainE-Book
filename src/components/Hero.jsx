import React, { useState, useEffect } from 'react';
import { Download, RefreshCw, Infinity, BookOpen, Newspaper, Send, Clock } from 'lucide-react';
import { PURCHASE_URL } from '../data/constants';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(35 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
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
          
          <p className="text-xl md:text-2xl font-extrabold mb-4 bg-gradient-to-r from-yellow-300 via-brand-primary to-yellow-300 text-transparent bg-clip-text inline-block px-6 py-3 rounded-full border border-brand-primary/50 bg-white/5 shadow-[0_0_25px_rgba(245,165,20,0.3)] hover:shadow-[0_0_40px_rgba(245,165,20,0.6)] hover:-translate-y-1 transition-all duration-300 animate-pulse">
            ✨ 300+ Books UPSC, And Other Government Exam ✨
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
            You need a clear structure for learning and revision. Master the concepts. Organize your preparation. Revise smarter.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-navy-900 object-cover bg-blue-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4" alt="Customer character" />
              <img className="w-10 h-10 rounded-full border-2 border-navy-900 object-cover bg-orange-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka&backgroundColor=ffdfbf" alt="Customer character" />
              <img className="w-10 h-10 rounded-full border-2 border-navy-900 object-cover bg-purple-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Raj&backgroundColor=c0aede" alt="Customer character" />
              <img className="w-10 h-10 rounded-full border-2 border-navy-900 object-cover bg-green-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&backgroundColor=d1d4f9" alt="Customer character" />
              <div className="w-10 h-10 rounded-full border-2 border-navy-900 bg-brand-primary flex items-center justify-center text-navy-900 font-bold text-xs z-10">
                +7.5k
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-yellow-400 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-sm font-medium">
                Trusted by <span className="text-white font-bold">7,500+</span> happy customers
              </p>
            </div>
          </div>

          <div className="mt-8 mb-8 lg:mb-0">
            <img 
              src="/hero-banner.png" 
              alt="300+ Books PDF Bundle" 
              className="w-full max-w-lg mx-auto lg:mx-0 rounded-2xl shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-300"
            />
          </div>
          
        </div>

        <div className="flex-1 w-full max-w-md">
          <div className="bg-white rounded-3xl p-8 shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white font-bold px-4 py-1 rounded-full text-sm whitespace-nowrap shadow-lg">
              LIMITED TIME PRICING
            </div>
            
            <div className="text-center mt-4 mb-4">
              <div className="flex justify-center items-center gap-3">
                <span className="text-5xl font-extrabold text-navy-900">₹75</span>
                <span className="text-2xl text-gray-400 line-through font-semibold">₹2,999</span>
              </div>
              <p className="text-gray-600 font-medium mt-2">Complete 300+ Book PDF Smart Notes Bundle</p>
              <p className="text-sm text-gray-400 mt-1">One-time payment</p>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-3 mb-6 text-center shadow-sm">
              <p className="text-red-600 font-bold text-md flex items-center justify-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <Clock size={18} />
                Offer Ends In: {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="bg-green-100 p-2 rounded-full text-green-600"><Download size={20} /></div>
                <span className="font-medium">Instant PDF Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600"><BookOpen size={20} /></div>
                <span className="font-medium">300+ Book PDFs</span>
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
              🚀 GET THE COMPLETE SMART NOTES BUNDLE — ₹75
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
