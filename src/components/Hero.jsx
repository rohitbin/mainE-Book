import React, { useState, useEffect } from 'react';
import { 
  Download, 
  RefreshCw, 
  BookOpen, 
  Clock, 
  Newspaper, 
  Infinity as InfinityIcon,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { usePrice } from '../context/PriceContext';

const Hero = () => {
  const { currentPrice, originalPrice, purchaseUrl } = usePrice();
  const [timeLeft, setTimeLeft] = useState(35 * 60);

  // Slides configuration
  const slides = [
    {
      id: 1,
      src: '/book-cover.jpg',
      alt: 'Indian History PYQ Book Front Cover',
      label: 'Book Cover'
    },
    {
      id: 2,
      src: '/book-features-slide.jpg',
      alt: 'Indian History PYQ Book Features & Breakdown',
      label: 'Inside Features & Overview'
    },
    {
      id: 3,
      src: '/book-preview.jpg',
      alt: 'Indian History PYQ Book Sample Question Page',
      label: 'Sample Chapter Preview'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Automatic slide rotation (pauses when user hovers)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="bg-navy-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-primary opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Header & Social Proof */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <div className="inline-block bg-white/10 border border-white/20 text-brand-primary font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm text-sm">
            🔥 SPECIAL LAUNCH OFFER
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="text-white block mb-2">Complete Book PDFs</span>
            <span className="text-brand-primary block">That UPSC Toppers Use.</span>
          </h1>

          <p className="text-xl md:text-2xl font-extrabold mb-8 bg-gradient-to-r from-yellow-300 via-brand-primary to-yellow-300 text-transparent bg-clip-text inline-block px-6 py-3 rounded-full border border-brand-primary/50 bg-white/5 shadow-[0_0_25px_rgba(245,165,20,0.3)] hover:shadow-[0_0_40px_rgba(245,165,20,0.6)] hover:-translate-y-1 transition-all duration-300 animate-pulse">
            ✨ Books For UPSC, SSC And Other Government Exam ✨
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-navy-900 object-cover bg-blue-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4" alt="Customer avatar" />
              <img className="w-10 h-10 rounded-full border-2 border-navy-900 object-cover bg-orange-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka&backgroundColor=ffdfbf" alt="Customer avatar" />
              <img className="w-10 h-10 rounded-full border-2 border-navy-900 object-cover bg-purple-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Raj&backgroundColor=c0aede" alt="Customer avatar" />
              <img className="w-10 h-10 rounded-full border-2 border-navy-900 object-cover bg-green-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&backgroundColor=d1d4f9" alt="Customer avatar" />
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
        </div>

        {/* 2-Column Showcase: Symmetrically Balanced Book Box & Price Box */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Interactive Book Slider Column */}
          <div className="flex-1 w-full max-w-md lg:max-w-[460px] flex flex-col items-center">
            <div 
              className="relative w-full h-[470px] sm:h-[490px] overflow-hidden rounded-3xl shadow-2xl border border-white/15 bg-navy-950/60 backdrop-blur-sm group flex items-center justify-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Floating Slide Pill Badge */}
              <div className="absolute top-3.5 left-3.5 z-20 bg-navy-900/90 text-brand-primary text-xs font-bold uppercase px-3 py-1 rounded-full border border-white/15 backdrop-blur-md shadow-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                <span>{slides[currentSlide].label}</span>
                <span className="text-white/60 text-[10px]">({currentSlide + 1}/{slides.length})</span>
              </div>

              {/* Prev & Next Arrow Controls */}
              <button
                onClick={(e) => { e.preventDefault(); prevSlide(); }}
                aria-label="Previous slide"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-navy-900/80 hover:bg-navy-900 text-white border border-white/20 backdrop-blur-md flex items-center justify-center shadow-lg transition-all opacity-85 hover:opacity-100 hover:scale-110 z-20 cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => { e.preventDefault(); nextSlide(); }}
                aria-label="Next slide"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-navy-900/80 hover:bg-navy-900 text-white border border-white/20 backdrop-blur-md flex items-center justify-center shadow-lg transition-all opacity-85 hover:opacity-100 hover:scale-110 z-20 cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>

              {/* Slides Track */}
              <div 
                className="flex w-full h-full transition-transform duration-500 ease-out items-center"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide) => (
                  <div key={slide.id} className="w-full h-full flex-shrink-0 flex items-center justify-center p-2.5">
                    <img 
                      src={slide.src} 
                      alt={slide.alt} 
                      className="w-full h-full object-contain rounded-2xl select-none"
                    />
                  </div>
                ))}
              </div>

              {/* Dot Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-navy-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === i ? 'w-6 bg-brand-primary' : 'w-2 bg-white/40 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Quick Slide Selector Tabs underneath */}
            <div className="flex flex-wrap justify-center gap-2 mt-3 w-full">
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(i)}
                  className={`text-xs px-3 py-1.5 rounded-xl font-bold border transition-all cursor-pointer ${
                    currentSlide === i 
                      ? 'bg-brand-primary text-navy-900 border-brand-primary shadow-sm ring-2 ring-brand-primary/30' 
                      : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {slide.label}
                </button>
              ))}
            </div>
          </div>

          {/* Compact, Perfectly Sized Price Box (Matches Book Box Height) */}
          <div className="flex-1 w-full max-w-md lg:max-w-[460px] flex flex-col">
            <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-2xl relative border border-gray-100 h-[470px] sm:h-[490px] flex flex-col justify-between">
              
              {/* Top Limited Time Badge */}
              <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white font-extrabold px-3.5 py-1 rounded-full text-xs whitespace-nowrap shadow-md uppercase tracking-wider">
                LIMITED TIME PRICING
              </div>
              
              {/* Header: Price & Description */}
              <div className="text-center pt-2">
                <div className="flex justify-center items-baseline gap-2.5">
                  <span className="text-4xl sm:text-5xl font-black text-navy-900 tracking-tight">₹{currentPrice}</span>
                  <span className="text-xl sm:text-2xl text-gray-400 line-through font-bold">₹{originalPrice}</span>
                  <span className="text-xs font-black text-green-700 bg-green-100 px-2 py-0.5 rounded-md">
                    81% OFF
                  </span>
                </div>
                <p className="text-gray-700 font-bold text-sm sm:text-base mt-1">Complete 300+ Book PDF Smart Notes Bundle</p>
                <p className="text-[11px] text-gray-400">One-time payment • Lifetime offline access</p>
              </div>

              {/* Compact Offer Timer */}
              <div className="bg-red-50 border border-red-100 rounded-xl py-2 px-3 text-center shadow-sm">
                <p className="text-red-600 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                  </span>
                  <Clock size={16} />
                  Offer Ends In: {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                </p>
              </div>

              {/* 5 Compact Features List */}
              <div className="space-y-2.5 px-1">
                <div className="flex items-center gap-3 text-gray-700 text-xs sm:text-sm">
                  <div className="bg-green-100 p-1.5 rounded-lg text-green-600 flex-shrink-0"><Download size={16} /></div>
                  <span className="font-semibold">Instant PDF Delivery</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 text-xs sm:text-sm">
                  <div className="bg-blue-100 p-1.5 rounded-lg text-blue-600 flex-shrink-0"><BookOpen size={16} /></div>
                  <span className="font-semibold">300+ Book PDFs</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 text-xs sm:text-sm">
                  <div className="bg-yellow-100 p-1.5 rounded-lg text-yellow-600 flex-shrink-0"><InfinityIcon size={16} /></div>
                  <span className="font-semibold">Lifetime Access</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 text-xs sm:text-sm">
                  <div className="bg-orange-100 p-1.5 rounded-lg text-orange-600 flex-shrink-0"><Newspaper size={16} /></div>
                  <span className="font-semibold">Daily Newspaper</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 text-xs sm:text-sm">
                  <div className="bg-purple-100 p-1.5 rounded-lg text-purple-600 flex-shrink-0"><RefreshCw size={16} /></div>
                  <span className="font-semibold">New Books PDF</span>
                </div>
              </div>

              {/* CTA & Secure Note */}
              <div className="pt-1">
                <a 
                  href={purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-brand-primary hover:bg-brand-secondary text-navy-900 text-center font-black text-sm sm:text-base py-3.5 rounded-xl shadow-[0_4px_14px_0_rgba(245,165,20,0.39)] hover:shadow-[0_6px_20px_rgba(245,165,20,0.23)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Buy Now — ₹{currentPrice}
                </a>
                
                <p className="text-center text-[11px] text-gray-500 mt-2 flex justify-center items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Secure one-time purchase • Instant access
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
