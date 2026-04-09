import { Check } from "lucide-react";

export function Pricing() {
  const courses = [
    {
      level: "A1",
      title: "German A1",
      regularPrice: "28,000",
      earlyBirdPrice: "23,000",
      duration: "~1.5 months or 135 hours",
      popular: false,
    },
    {
      level: "A2",
      title: "German A2",
      regularPrice: "28,000",
      earlyBirdPrice: "23,000",
      duration: "~1.5 months or 135 hours",
      popular: false,
    },
    {
      level: "B1",
      title: "German B1",
      regularPrice: "36,000",
      earlyBirdPrice: "28,000",
      duration: "~2.5 months or 225 hours",
      popular: true,
    },
    {
      level: "B2",
      title: "German B2",
      regularPrice: "36,000",
      earlyBirdPrice: "28,000",
      duration: "~2.5 months or 225 hours",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Course Offerings & Prices
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Transparent pricing with all materials included.
          </p>
          <div className="inline-block bg-brand-gold/20 text-brand-black px-4 py-2 rounded-full text-sm font-semibold">
            Early Bird Promo: Save when enrolling 2-3 weeks before class start date!
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-3xl border ${course.popular ? 'border-brand-red shadow-lg' : 'border-gray-200'} p-8 flex flex-col`}
            >
              {course.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-brand-black mb-2">{course.title}</h3>
                <p className="text-gray-500 text-sm">{course.duration}</p>
              </div>
              
              <div className="mb-8 flex-grow">
                <div className="mb-2">
                  <span className="text-sm text-gray-500 line-through">Php {course.regularPrice}</span>
                  <span className="text-sm text-gray-500 ml-2">Regular</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-brand-black">Php {course.earlyBirdPrice}</span>
                </div>
                <p className="text-sm text-brand-red font-medium mt-1">Early Bird Price</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="text-brand-red shrink-0 mt-0.5" size={18} />
                  <span className="text-sm text-gray-700">CEFR-aligned curriculum</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-brand-red shrink-0 mt-0.5" size={18} />
                  <span className="text-sm text-gray-700">Spektrum Deutsch books included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-brand-red shrink-0 mt-0.5" size={18} />
                  <span className="text-sm text-gray-700">Small-group instruction</span>
                </li>
              </ul>
              
              <a
                href="#enroll"
                className={`w-full text-center py-3 rounded-xl font-semibold transition-colors ${
                  course.popular 
                    ? 'bg-brand-red text-white hover:bg-red-700' 
                    : 'bg-gray-100 text-brand-black hover:bg-gray-200'
                }`}
              >
                Select {course.level}
              </a>
            </div>
          ))}
        </div>

        {/* Specialized Training */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">Specialized Training</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-brand-gray rounded-2xl p-8 flex flex-col">
              <h4 className="text-xl font-bold mb-2">Exam Preparation Classes</h4>
              <p className="text-gray-600 mb-6">Targeted exam-focused instruction for A1, A2, B1 or B2.</p>
              
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="h-8 px-3 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
                  <span className="font-bold text-[#00847E] text-sm tracking-wider">telc</span>
                </div>
                <div className="h-8 px-3 bg-[#95C11F] rounded flex items-center justify-center shadow-sm">
                  <span className="font-bold text-white text-xs tracking-wide">GOETHE-INSTITUT</span>
                </div>
                <div className="h-8 px-3 bg-[#E3000F] rounded flex items-center justify-center shadow-sm">
                  <span className="font-bold text-white text-sm tracking-widest">ÖSD</span>
                </div>
              </div>

              <div className="mt-auto flex justify-between items-end">
                <div>
                  <p className="text-2xl font-bold">Php 10,000</p>
                  <p className="text-sm text-gray-500">Duration: ≈20 hours</p>
                </div>
                <a href="#enroll" className="text-brand-red font-semibold hover:underline">Book Now</a>
              </div>
            </div>
            
            <div className="bg-brand-gray rounded-2xl p-8 flex flex-col">
              <h4 className="text-xl font-bold mb-2">Job Preparation Training</h4>
              <p className="text-gray-600 mb-6">Interview preparation, CV guidance, and workplace German basics.</p>
              <div className="mt-auto flex justify-between items-end">
                <div>
                  <p className="text-2xl font-bold">Php 5,000</p>
                  <p className="text-sm text-gray-500">Duration: 2–3 days</p>
                </div>
                <a href="#enroll" className="text-brand-red font-semibold hover:underline">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
