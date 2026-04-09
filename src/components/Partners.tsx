import { Briefcase, Building2, HeartPulse, Wrench } from "lucide-react";

export function Partners() {
  return (
    <section id="partners" className="py-20 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              For German Agencies & Employers
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We partner with agencies and employers in Germany, Austria, and Switzerland to provide a reliable pipeline of highly trained, language-proficient talent.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                  <Building2 className="text-brand-red" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-black">CEFR-Aligned Training</h4>
                  <p className="text-gray-600 text-sm">Official Spektrum Deutsch–based curriculum ensuring standardized proficiency.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                  <Briefcase className="text-brand-red" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-black">Job-Ready Candidates</h4>
                  <p className="text-gray-600 text-sm">Our students are exam-ready and prepared for professional workplace communication.</p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold text-brand-black mb-4">Ideal for pipelines in:</h4>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200">
                <HeartPulse size={16} className="text-brand-red" /> Healthcare
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200">
                <Wrench size={16} className="text-brand-red" /> Skilled Workers
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200">
                IT & Logistics
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-200">
                Hospitality
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Partner With Us</h3>
            <p className="text-gray-600 mb-8">
              Interested in collaborating? Fill out the form below and our partnership team will get in touch with you.
            </p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company / Agency Name</label>
                <input type="text" className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all resize-none"></textarea>
              </div>
              
              <button className="w-full bg-brand-black text-white py-3 rounded-xl font-semibold hover:bg-brand-red transition-colors mt-2">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
