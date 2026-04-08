import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    "International CEFR-compliant curriculum",
    "Official Schubert Verlag teaching materials",
    "Textbooks and workbooks included",
    "Small-group, guided instruction",
    "Exam and job preparation tracks",
    "European-standard training approach",
    "Ideal for healthcare workers, professionals, and career shifters"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gray-100">
                  <img 
                    src="/images/615283117_122119765809044470_7304000990653100510_n.jpg" 
                    alt="Students studying together" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
                  <img 
                    src="/images/617228065_122120446797044470_3391903824800628055_n.jpg" 
                    alt="Classroom environment" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100">
                  <img 
                    src="/images/622792044_122121488709044470_7635041360625934554_n.jpg" 
                    alt="Group discussion" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden bg-brand-red flex items-center justify-center p-8 text-white text-center">
                  <div>
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <div className="font-medium">Committed to your success</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              Why Choose Hello Deutsch
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We provide more than just language classes. We offer a complete pathway to your international career with European-standard training and dedicated support.
            </p>
            
            <ul className="space-y-4">
              {reasons.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="text-brand-red" size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
