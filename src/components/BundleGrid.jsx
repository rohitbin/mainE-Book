import React from 'react';
import { historyModules } from '../data/products';
import { BookOpen } from 'lucide-react';

const BundleGrid = () => {
  return (
    <section id="modules" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-primary/15 border border-brand-primary/30 text-navy-900 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-4">
            <BookOpen size={14} className="text-brand-primary" /> Comprehensive Syllabus Coverage
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-900 mb-4 tracking-tight">
            What's Inside The 3,000+ PYQ Book
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Organized topic-wise and chronologically to give you complete mastery over Ancient, Medieval, Modern, Post-Independence, and Art & Culture.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {historyModules.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-blue-50 text-brand-primary rounded-xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-navy-900 transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2.5 leading-snug">{item.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-400">
                  <span>{item.category}</span>
                  <span className="text-brand-primary group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BundleGrid;
