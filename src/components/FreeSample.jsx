import React from 'react';
import { BookOpen } from 'lucide-react';
import { FREE_SAMPLE_URL } from '../data/constants';

const FreeSample = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
          📚 Want to See the Quality First?
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
          Download a Free Sample PDF
        </h3>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          See the actual chapter-wise format, point-wise presentation and design before purchasing.
        </p>
        
        <a 
          href={FREE_SAMPLE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold py-4 px-10 rounded-xl shadow-lg transition-transform hover:-translate-y-1"
        >
          <BookOpen size={20} />
          DOWNLOAD FREE SAMPLE
        </a>
      </div>
    </section>
  );
};

export default FreeSample;
