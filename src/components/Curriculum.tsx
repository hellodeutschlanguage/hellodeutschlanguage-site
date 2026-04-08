import { BookOpen, GraduationCap, LineChart, MessageSquare } from "lucide-react";

export function Curriculum() {
  const features = [
    {
      icon: <GraduationCap size={24} />,
      title: "CEFR-Aligned Instruction",
      description: "Structured levels from A1 to B2 following the Common European Framework of Reference for Languages."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Spektrum Deutsch",
      description: "Official use of Schubert Verlag’s Spektrum Deutsch for comprehensive grammar and vocabulary."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Complete Skill Set",
      description: "Balanced focus on reading, listening, speaking, and writing for real-world fluency."
    },
    {
      icon: <LineChart size={24} />,
      title: "Measurable Outcomes",
      description: "Structured progression with regular assessments to ensure you're ready for exams and employment."
    }
  ];

  return (
    <section className="py-20 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Curriculum & Teaching Standards
          </h2>
          <p className="text-gray-400 text-lg">
            We maintain the highest European standards of language education, ensuring our students are fully prepared for life and work in German-speaking countries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-brand-red/20 text-brand-red rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand-red rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">All Materials Included</h3>
            <p className="text-white/90 text-lg">
              Textbooks and workbooks are included in all our regular courses.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-red font-bold rounded-full">
              Schubert Verlag
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
