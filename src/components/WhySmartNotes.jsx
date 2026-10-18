import React from 'react';
import { Target, ArrowRight, Brain, Zap, CheckCircle2 } from 'lucide-react';
import { usePrice } from '../context/PriceContext';

const WhySmartNotes = () => {
  const { currentPrice, purchaseUrl } = usePrice();

  const reasons = [
    {
      icon: "🎯",
      title: "Master High-Yield Exam Themes",
      desc: "UPSC rarely repeats questions verbatim, but consistently repeats underlying themes — Ashokan edicts, Delhi Sultanate taxes, Mughal land tenures, and Gandhian resolutions."
    },
    {
      icon: "⚡",
      title: "Option Elimination Technique",
      desc: "Knowing the correct fact isn't always enough. This book shows you how to spot trap words, extreme quantifiers, and distractors to systematically eliminate wrong options."
    },
    {
      icon: "🧠",
      title: "Active Recall Beats Passive Reading",
      desc: "Rereading heavy 800-page history books gives an illusion of competence. Testing yourself through 3,000+ targeted MCQs builds lasting memory retention."
    }
  ];

  return (
    <section id="why-pyqs" className="py-24 bg-navy-900 text-white text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex justify-center mb-6">
          <div className="bg-white/10 p-3.5 rounded-2xl text-brand-primary shadow-inner">
            <Target size={36} />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Why Solve 3,000+ History Questions?
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
          Indian History constitutes 15–20% of UPSC Prelims Paper 1. Traditional rote memorization leads to confusion. A structured question-bank approach gives you clarity and precision.
        </p>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          {reasons.map((r, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/10 transition-colors">
              <div className="text-4xl mb-4">{r.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{r.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
        
        {/* The 3-Step Flow */}
        <div className="inline-flex flex-wrap justify-center items-center gap-3 sm:gap-6 bg-white/5 border border-white/10 rounded-full px-6 py-4 md:px-10 md:py-5 shadow-xl">
          <span className="text-sm sm:text-xl font-black text-white tracking-wide">PRACTICE TOPIC-WISE</span>
          <ArrowRight className="text-brand-primary" size={20} />
          <span className="text-sm sm:text-xl font-black text-white tracking-wide">STUDY EXPLANATIONS</span>
          <ArrowRight className="text-brand-primary" size={20} />
          <span className="text-sm sm:text-xl font-black text-white tracking-wide">SECURE PRELIMS</span>
        </div>
      </div>
    </section>
  );
};

export default WhySmartNotes;
