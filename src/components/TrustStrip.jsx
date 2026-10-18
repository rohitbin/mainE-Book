import React from 'react';

const TrustStrip = () => {
  const benefits = [
    { icon: "📚", text: "UPSC, SSC & Government Exam Books" },
    { icon: "📝", text: "Previous Year Questions (PYQs)" },
    { icon: "🎯", text: "MCQs & Practice Question Banks" },
    { icon: "📖", text: "NCERT-Based Study Materials" },
    { icon: "🔍", text: "Chapter-Wise Topic Organization" },
    { icon: "⚡", text: "Point-Wise Notes for Quick Learning" },
    { icon: "🔄", text: "Prelims & Mains Preparation" },
    { icon: "✅", text: "Revision-Ready Study Materials" }
  ];

  return (
    <div className="bg-white border-y border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200/80 rounded-full px-4 py-2 transition-all duration-200 shadow-sm hover:shadow"
            >
              <span className="text-base select-none leading-none">{benefit.icon}</span>
              <span className="text-sm font-semibold text-gray-800">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
