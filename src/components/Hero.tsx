import { ArrowRight, Globe } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-gray">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand-red opacity-20 blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 mb-8">
            <Globe size={16} className="text-brand-red" />
            <span>Based in Cebu, Philippines</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-black mb-6">
            German Language Mastery for <span className="text-brand-red">Global Opportunities</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            CEFR A1–B2 compliance • Official Schubert Verlag’s Spektrum Deutsch • Career and exam readiness
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#enroll"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-brand-black text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-brand-red transition-colors"
            >
              Enroll Now
              <ArrowRight size={18} />
            </a>
            <a
              href="#partners"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-brand-black border border-gray-200 px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-50 transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
