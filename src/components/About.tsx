import { CheckCircle2, MapPin, Mail, Phone } from "lucide-react";

export function About() {
  const features = [
    "Employment in Germany, Austria, and Switzerland",
    "Professional and workplace communication",
    "German language exams and integration",
    "Ausbildung Professions (Nursing, Hospitality, IT, Logistics, Trade)",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              About Hello Deutsch
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Hello Deutsch Language Training Center is a professional German language school based in Cebu, Philippines. We are dedicated to providing high-quality language education that opens doors to international opportunities.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              All our programs strictly follow International CEFR standards from A1 to B2. We officially use Schubert Verlag’s Spektrum Deutsch series for all levels to ensure authentic and effective learning.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Students are trained for:</h3>
              <ul className="space-y-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-red shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-gray p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="text-brand-red" size={20} />
                <span>3F E-Park Building, Miñoza St., Talamban, Cebu City</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="text-brand-red" size={20} />
                <a href="mailto:info@hellodeutschlanguage.com" className="hover:text-brand-red transition-colors">
                  info@hellodeutschlanguage.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="text-brand-red" size={20} />
                <a href="tel:+639175443582" className="hover:text-brand-red transition-colors">
                  +63 917 544 3582
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 relative">
              <img 
                src="/images/668807320_122128345509044470_1455579841364472389_n.jpg" 
                alt="Students learning" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-brand-black">A1</span>
                </div>
                <div className="w-12 h-12 bg-brand-red/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-brand-black">B2</span>
                </div>
              </div>
              <p className="font-semibold text-brand-black">CEFR Compliant</p>
              <p className="text-sm text-gray-500">International standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
