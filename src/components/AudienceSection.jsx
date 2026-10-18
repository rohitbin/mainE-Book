import React from 'react';

const AudienceSection = () => {
  const audiences = [
    {
      icon: "🏛️",
      title: "UPSC CSE Aspirants",
      desc: "Targeting Civil Services Prelims 2025/2026/2027 and requiring 100% conceptual mastery of Indian History questions."
    },
    {
      icon: "🎯",
      title: "State PCS Aspirants",
      desc: "Preparing for UPPSC, BPSC, MPPSC, RAS, WBPSC, MPSC, and other state administrative examinations where static history carries huge weightage."
    },
    {
      icon: "🛡️",
      title: "SSC & Defence Aspirants",
      desc: "Appearing for SSC CGL, CHSL, CDS, NDA, or CAPF who need high-yield previous year history practice with quick explanations."
    },
    {
      icon: "💼",
      title: "Working Professionals",
      desc: "Have limited 2–3 hours a day for study and need a structured question bank rather than reading bulky standard references from scratch."
    },
    {
      icon: "🌱",
      title: "Beginners to History",
      desc: "Struggling to remember complex dynasties, dates, and historical terms, who want to learn systematically through questions."
    },
    {
      icon: "🔄",
      title: "Repeat Aspirants",
      desc: "Stuck at 85–95 marks in Prelims due to negative marking in History and seeking to master option elimination traps."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100/70 border border-blue-200 text-blue-800 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-3">
            Target Audience
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            🎓 Who Is This History PYQ Book For?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Engineered to help every serious competitive exam candidate gain total command over Indian History.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="text-3xl mb-4">{audience.icon}</div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">{audience.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{audience.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
