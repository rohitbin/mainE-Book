import React from 'react';

const AudienceSection = () => {
  const audiences = [
    {
      icon: "🌱",
      title: "Beginners",
      desc: "Starting UPSC preparation and looking for an organized foundation."
    },
    {
      icon: "💼",
      title: "Working Professionals",
      desc: "Need a structured resource that fits around limited study time."
    },
    {
      icon: "🎓",
      title: "College Students",
      desc: "Want concise material alongside college studies."
    },
    {
      icon: "📖",
      title: "Self-study Aspirants",
      desc: "Prefer studying independently without constantly switching between resources."
    },
    {
      icon: "🔄",
      title: "Repeat Aspirants",
      desc: "Need a compact resource for revision and conceptual reinforcement."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">🎓 Who Is This For?</h2>
          <p className="text-lg text-gray-600">Designed to meet the needs of every serious aspirant.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {audiences.map((audience, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{audience.icon}</div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">{audience.title}</h3>
              <p className="text-gray-600 leading-relaxed">{audience.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
