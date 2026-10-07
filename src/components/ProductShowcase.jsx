import React from 'react';
import { categories } from '../data/products';
import { PURCHASE_URL } from '../data/constants';

const ShowcaseSection = ({ title, topics, description, reverse, bgClass, imagePlaceholder, ctaText }) => (
  <div className={`py-16 md:py-24 ${bgClass}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`flex flex-col gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        <div className="flex-1 w-full text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-6">{title}</h2>
          {description && (
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              {description}
            </p>
          )}
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
            {topics.map((topic, i) => (
              <span key={i} className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                {topic}
              </span>
            ))}
          </div>
          
          <a 
            href={PURCHASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-primary hover:bg-brand-secondary text-navy-900 font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            {ctaText}
          </a>
        </div>
        
        <div className="flex-1 w-full">
          <div className="bg-white rounded-2xl shadow-xl aspect-video w-full flex items-center justify-center border-4 border-white overflow-hidden relative group">
            {/* Replace this with actual image tag later */}
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center flex-col">
              <span className="text-gray-400 font-medium tracking-widest uppercase mb-2">Product Preview</span>
              <span className="text-white text-xl font-bold">{imagePlaceholder}</span>
            </div>
            
            {/* Optional glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProductShowcase = () => {
  return (
    <section id="subjects">
      <ShowcaseSection 
        title="History, Art & Culture"
        topics={categories['History']}
        description="Comprehensive coverage of Indian history from ancient to modern times, including a detailed exploration of art and architecture."
        bgClass="bg-white"
        imagePlaceholder="history-art-culture.png"
        ctaText="GET HISTORY SMART NOTES"
        reverse={false}
      />
      
      <ShowcaseSection 
        title="Complete Geography Coverage"
        topics={categories['Geography']}
        description="Build strong conceptual understanding of geography through concise, point-wise Smart Notes."
        bgClass="bg-gray-50"
        imagePlaceholder="geography.png"
        ctaText="GET GEOGRAPHY SMART NOTES"
        reverse={true}
      />
      
      <ShowcaseSection 
        title="Master Environment"
        topics={['Ecology', 'Ecosystems', 'Biodiversity', 'Climate Change', 'Pollution', 'Environmental Conventions', 'Renewable Energy', 'Conservation']}
        description="A complete guide to environmental concepts specifically tailored for UPSC requirements."
        bgClass="bg-green-50/50"
        imagePlaceholder="environment.png"
        ctaText="GET ENVIRONMENT SMART NOTES"
        reverse={false}
      />
      
      <ShowcaseSection 
        title="Economy & Development"
        topics={['Economic Development', 'Inflation', 'Banking', 'Monetary Policy', 'Fiscal Policy', 'Government Schemes', 'Budget-related Concepts']}
        description="Demystify complex economic concepts with structured, easy-to-understand notes."
        bgClass="bg-amber-50/50"
        imagePlaceholder="economy-disaster.png"
        ctaText="GET ECONOMY SMART NOTES"
        reverse={true}
      />
    </section>
  );
};

export default ProductShowcase;
