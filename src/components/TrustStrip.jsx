import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const TrustStrip = () => {
  const benefits = [
    "Instant PDF Delivery",
    "300+ Book PDFs",
    "Lifetime Access",
    "Daily Newspaper",
    "New Books PDF",
    "Prelims + Mains Perspective",
    "Chapter-wise Organization",
    "Point-wise Concepts",
    "Revision-ready Format"
  ];

  return (
    <div className="bg-white border-y border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-2">
              <CheckCircle2 size={18} className="text-green-500" />
              <span className="text-sm font-medium text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
