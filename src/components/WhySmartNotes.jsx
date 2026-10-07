import React from 'react';
import { Target, ArrowRight } from 'lucide-react';

const WhySmartNotes = () => {
  return (
    <section id="why-smart-notes" className="py-24 bg-navy-900 text-white text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="bg-white/10 p-3 rounded-full text-brand-primary">
            <Target size={32} />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">
          Designed for Prelims + Mains
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 font-medium mb-6 leading-relaxed">
          These aren't simply collections of information.
        </p>
        
        <p className="text-lg md:text-xl text-gray-400 mb-16 leading-relaxed">
          The notes are structured around a Prelims + Mains perspective, helping you build conceptual understanding while keeping important exam-oriented information easy to revise.
        </p>
        
        <div className="inline-flex flex-wrap justify-center items-center gap-4 md:gap-6 bg-white/5 border border-white/10 rounded-full px-6 py-4 md:px-12 md:py-6">
          <span className="text-lg md:text-2xl font-bold text-white">LEARN</span>
          <ArrowRight className="text-brand-primary" size={24} />
          <span className="text-lg md:text-2xl font-bold text-white">UNDERSTAND</span>
          <ArrowRight className="text-brand-primary" size={24} />
          <span className="text-lg md:text-2xl font-bold text-white">REVISE</span>
        </div>
      </div>
    </section>
  );
};

export default WhySmartNotes;
