import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Layers,
  BookOpen,
  MapPin
} from 'lucide-react';
import { usePrice } from '../context/PriceContext';

const Hero = () => {
  const { 
    currentPrice, 
    originalPrice, 
    purchaseUrl, 
    geographyPrice,
    geographyOriginalPrice,
    geographyPurchaseUrl
  } = usePrice();

  // History Slides configuration
  const historySlides = [
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
      label: 'Inside Features'
    },
    {
      id: 3,
      src: '/book-preview.jpg',
      alt: 'Indian History PYQ Book Sample Question Page',
      label: 'Sample Preview'
    }
  ];

  // Geography Slides configuration
  const geographySlides = [
    {
      id: 1,
      src: '/geography-book-cover.jpg',
      alt: 'Geography PYQ Book Front Cover',
      label: 'Book Cover'
    },
    {
      id: 2,
      src: '/geography-features-slide.jpg',
      alt: 'Geography Book What is Inside and Features Breakdown',
      label: 'Inside Features'
    },
    {
      id: 3,
      src: '/geography-preview.jpg',
      alt: 'Geography Book 56 Chapters Table of Contents',
      label: '56 Chapters Preview'
    }
  ];

  const [currentHistorySlide, setCurrentHistorySlide] = useState(0);
  const [currentGeographySlide, setCurrentGeographySlide] = useState(0);

  // Continuous automatic slide scrolling for History book (every 3.0s)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHistorySlide((prev) => (prev + 1) % historySlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [historySlides.length]);

  // Continuous automatic slide scrolling for Geography book (every 4.2s with staggered start)
  useEffect(() => {
    // Initial 1.6s offset so the two books never slide at the exact same moment
    const initialTimeout = setTimeout(() => {
      setCurrentGeographySlide((prev) => (prev + 1) % geographySlides.length);
    }, 1600);

    const interval = setInterval(() => {
      setCurrentGeographySlide((prev) => (prev + 1) % geographySlides.length);
    }, 4200);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [geographySlides.length]);

  // Automatically scroll to book section starting when viewers open the website
  useEffect(() => {
    if (!window.location.hash) {
      const scrollTimer = setTimeout(() => {
        const bookSection = document.getElementById('books');
        if (bookSection) {
          bookSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 700);

      return () => clearTimeout(scrollTimer);
    }
  }, []);

  const nextHistorySlide = () => setCurrentHistorySlide((prev) => (prev + 1) % historySlides.length);
  const prevHistorySlide = () => setCurrentHistorySlide((prev) => (prev - 1 + historySlides.length) % historySlides.length);

  const nextGeographySlide = () => setCurrentGeographySlide((prev) => (prev + 1) % geographySlides.length);
  const prevGeographySlide = () => setCurrentGeographySlide((prev) => (prev - 1 + geographySlides.length) % geographySlides.length);

  return (
    <section className="bg-navy-900 pt-36 sm:pt-40 lg:pt-44 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-primary opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Header & Social Proof */}
        <div className="text-center max-w-4xl mx-auto mb-12">
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
                Trusted by <span className="text-white font-bold">7,500+</span> happy aspirants
              </p>
            </div>
          </div>
        </div>

        {/* 2 BOOKS WITH ONLY BUY BUTTON & PRICE */}
        <div id="books" className="scroll-mt-24 sm:scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          
          {/* ======================================================== */}
          {/* BOOK 1: INDIAN HISTORY PYQ BOOK                          */}
          {/* ======================================================== */}
          <div className="flex flex-col bg-navy-950/50 rounded-3xl p-5 sm:p-6 border border-white/10 backdrop-blur-md shadow-2xl">
            
            {/* BOOK VISUAL CONTAINER */}
            <div className="relative w-full h-[460px] sm:h-[490px] group">
              {/* Inner Clipped Box */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl border border-white/15 bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-3">
                {/* Floating Slide Pill Badge */}
                <div className="absolute top-3.5 left-3.5 z-20 bg-navy-900/90 text-brand-primary text-xs font-bold uppercase px-3 py-1 rounded-full border border-white/15 backdrop-blur-md shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                  <span>{historySlides[currentHistorySlide].label}</span>
                  <span className="text-white/60 text-[10px]">({currentHistorySlide + 1}/{historySlides.length})</span>
                </div>

                {/* Prev & Next Arrow Controls */}
                <button
                  onClick={(e) => { e.preventDefault(); prevHistorySlide(); }}
                  aria-label="Previous slide"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-navy-900/80 hover:bg-navy-900 text-white border border-white/20 backdrop-blur-md flex items-center justify-center shadow-lg transition-all opacity-85 hover:opacity-100 hover:scale-110 z-20 cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={(e) => { e.preventDefault(); nextHistorySlide(); }}
                  aria-label="Next slide"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-navy-900/80 hover:bg-navy-900 text-white border border-white/20 backdrop-blur-md flex items-center justify-center shadow-lg transition-all opacity-85 hover:opacity-100 hover:scale-110 z-20 cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>

                {/* Slides Track */}
                <div 
                  className="flex w-full h-full transition-transform duration-700 ease-in-out items-center"
                  style={{ transform: `translateX(-${currentHistorySlide * 100}%)` }}
                >
                  {historySlides.map((slide) => (
                    <div key={slide.id} className="w-full h-full flex-shrink-0 flex items-center justify-center p-3">
                      <img 
                        src={slide.src} 
                        alt={slide.alt} 
                        className="w-full h-full object-contain rounded-xl select-none"
                      />
                    </div>
                  ))}
                </div>

                {/* Dot Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-navy-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  {historySlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentHistorySlide(i)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentHistorySlide === i ? 'w-6 bg-brand-primary' : 'w-2 bg-white/40 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* OUTSIDE BADGES: Blinking Badges */}
              <div className="absolute top-0 right-4 sm:right-6 -translate-y-1/2 z-30">
                <div className="animate-badge-blink-dark bg-navy-900 text-white text-xs sm:text-sm font-black uppercase px-3.5 py-1.5 rounded-full border-2 border-brand-primary shadow-[0_4px_20px_rgba(245,165,20,0.55)] flex items-center gap-2 backdrop-blur-md select-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-90"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                  </span>
                  <Layers size={14} className="text-brand-primary" />
                  <span>57 Chapters</span>
                </div>
              </div>

              <div className="absolute bottom-0 right-4 sm:right-6 translate-y-1/2 z-30">
                <div className="animate-badge-blink bg-brand-primary text-navy-950 text-xs sm:text-sm font-black uppercase px-3.5 py-1.5 rounded-full border-2 border-white/80 shadow-[0_4px_25px_rgba(245,165,20,0.65)] flex items-center gap-2 select-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-navy-900 opacity-90"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-navy-900"></span>
                  </span>
                  <BookOpen size={14} className="text-navy-950" />
                  <span>800 Pages</span>
                </div>
              </div>
            </div>

            {/* Quick Slide Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-1.5 mt-5 mb-3 w-full">
              {historySlides.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentHistorySlide(i)}
                  className={`text-xs px-2.5 py-1 rounded-lg font-bold border transition-all cursor-pointer ${
                    currentHistorySlide === i 
                      ? 'bg-brand-primary text-navy-900 border-brand-primary shadow-sm' 
                      : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {slide.label}
                </button>
              ))}
            </div>

            {/* ONLY BUY BUTTON WITH PRICE */}
            <a 
              href={purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full bg-brand-primary hover:bg-brand-secondary text-navy-950 font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-[0_6px_25px_rgba(245,165,20,0.45)] hover:shadow-[0_10px_35px_rgba(245,165,20,0.7)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <ShoppingCart size={22} className="text-navy-950 group-hover:scale-110 transition-transform" />
                <span>Buy History Book</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-navy-950/60 line-through font-bold">₹{originalPrice}</span>
                <span className="bg-navy-950 text-white px-3.5 py-1 rounded-xl text-base font-black shadow-sm">
                  ₹{currentPrice}
                </span>
              </div>
            </a>
          </div>

          {/* ======================================================== */}
          {/* BOOK 2: INDIAN GEOGRAPHY PYQ BOOK                        */}
          {/* ======================================================== */}
          <div className="flex flex-col bg-navy-950/50 rounded-3xl p-5 sm:p-6 border border-white/10 backdrop-blur-md shadow-2xl">
            
            {/* BOOK VISUAL CONTAINER */}
            <div className="relative w-full h-[460px] sm:h-[490px] group">
              {/* Inner Clipped Box */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl border border-white/15 bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-3">
                {/* Floating Slide Pill Badge */}
                <div className="absolute top-3.5 left-3.5 z-20 bg-navy-900/90 text-brand-primary text-xs font-bold uppercase px-3 py-1 rounded-full border border-white/15 backdrop-blur-md shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                  <span>{geographySlides[currentGeographySlide].label}</span>
                  <span className="text-white/60 text-[10px]">({currentGeographySlide + 1}/{geographySlides.length})</span>
                </div>

                {/* Prev & Next Arrow Controls */}
                <button
                  onClick={(e) => { e.preventDefault(); prevGeographySlide(); }}
                  aria-label="Previous slide"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-navy-900/80 hover:bg-navy-900 text-white border border-white/20 backdrop-blur-md flex items-center justify-center shadow-lg transition-all opacity-85 hover:opacity-100 hover:scale-110 z-20 cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={(e) => { e.preventDefault(); nextGeographySlide(); }}
                  aria-label="Next slide"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-navy-900/80 hover:bg-navy-900 text-white border border-white/20 backdrop-blur-md flex items-center justify-center shadow-lg transition-all opacity-85 hover:opacity-100 hover:scale-110 z-20 cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>

                {/* Slides Track */}
                <div 
                  className="flex w-full h-full transition-transform duration-700 ease-in-out items-center"
                  style={{ transform: `translateX(-${currentGeographySlide * 100}%)` }}
                >
                  {geographySlides.map((slide) => (
                    <div key={slide.id} className="w-full h-full flex-shrink-0 flex items-center justify-center p-3">
                      <img 
                        src={slide.src} 
                        alt={slide.alt} 
                        className="w-full h-full object-contain rounded-xl select-none"
                      />
                    </div>
                  ))}
                </div>

                {/* Dot Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-navy-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  {geographySlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentGeographySlide(i)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentGeographySlide === i ? 'w-6 bg-brand-primary' : 'w-2 bg-white/40 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* OUTSIDE BADGES: Blinking Badges */}
              <div className="absolute top-0 right-4 sm:right-6 -translate-y-1/2 z-30">
                <div className="animate-badge-blink-dark bg-navy-900 text-white text-xs sm:text-sm font-black uppercase px-3.5 py-1.5 rounded-full border-2 border-brand-primary shadow-[0_4px_20px_rgba(245,165,20,0.55)] flex items-center gap-2 backdrop-blur-md select-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-90"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                  </span>
                  <Layers size={14} className="text-brand-primary" />
                  <span>56 Chapters</span>
                </div>
              </div>

              <div className="absolute bottom-0 right-4 sm:right-6 translate-y-1/2 z-30">
                <div className="animate-badge-blink bg-brand-primary text-navy-950 text-xs sm:text-sm font-black uppercase px-3.5 py-1.5 rounded-full border-2 border-white/80 shadow-[0_4px_25px_rgba(245,165,20,0.65)] flex items-center gap-2 select-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-navy-900 opacity-90"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-navy-900"></span>
                  </span>
                  <MapPin size={14} className="text-navy-950" />
                  <span>3,000+ PYQs</span>
                </div>
              </div>
            </div>

            {/* Quick Slide Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-1.5 mt-5 mb-3 w-full">
              {geographySlides.map((slide, i) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentGeographySlide(i)}
                  className={`text-xs px-2.5 py-1 rounded-lg font-bold border transition-all cursor-pointer ${
                    currentGeographySlide === i 
                      ? 'bg-brand-primary text-navy-900 border-brand-primary shadow-sm' 
                      : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {slide.label}
                </button>
              ))}
            </div>

            {/* ONLY BUY BUTTON WITH PRICE */}
            <a 
              href={geographyPurchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full bg-brand-primary hover:bg-brand-secondary text-navy-950 font-black text-base sm:text-lg py-4 px-6 rounded-2xl shadow-[0_6px_25px_rgba(245,165,20,0.45)] hover:shadow-[0_10px_35px_rgba(245,165,20,0.7)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <ShoppingCart size={22} className="text-navy-950 group-hover:scale-110 transition-transform" />
                <span>Buy Geography Book</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-navy-950/60 line-through font-bold">₹{geographyOriginalPrice}</span>
                <span className="bg-navy-950 text-white px-3.5 py-1 rounded-xl text-base font-black shadow-sm">
                  ₹{geographyPrice}
                </span>
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
