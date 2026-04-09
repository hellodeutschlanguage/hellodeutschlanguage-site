import { Award, Globe2, Users } from "lucide-react";

export function Teachers() {
  return (
    <section className="py-20 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Meet Our Teachers
          </h2>
          <p className="text-gray-600 text-lg">
            Learn from a diverse team of highly qualified educators dedicated to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Filipino Teachers */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">🇵🇭</div>
              <h3 className="text-2xl font-bold">Filipino Teachers</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Award className="text-brand-red shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Official B2-certified German speakers</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="text-brand-red shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Highly trained and experienced in teaching Filipino learners</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe2 className="text-brand-red shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Clear explanations suited for the local learning context</span>
              </li>
            </ul>
          </div>

          {/* German Lead Teacher */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-full -z-10"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">🇩🇪</div>
              <h3 className="text-2xl font-bold">German Native Lead</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Award className="text-brand-red shrink-0 mt-1" size={20} />
                <span className="text-gray-700">EUROLTA-certified language instructor</span>
              </li>
              <li className="flex items-start gap-3">
                <GraduationCapIcon className="text-brand-red shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Bachelor’s degree in German as a Foreign Language</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe2 className="text-brand-red shrink-0 mt-1" size={20} />
                <span className="text-gray-700">Extensive teaching experience in Germany and Switzerland</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
          <h4 className="text-xl font-semibold mb-6">The Hello Deutsch Advantage</h4>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <p className="font-medium text-brand-black mb-2">Relatable Instruction</p>
              <p className="text-sm text-gray-500">Clear explanations tailored specifically for Filipino learners.</p>
            </div>
            <div>
              <p className="font-medium text-brand-black mb-2">Authentic Usage</p>
              <p className="text-sm text-gray-500">Perfect your pronunciation with real-life German context.</p>
            </div>
            <div>
              <p className="font-medium text-brand-black mb-2">European Standards</p>
              <p className="text-sm text-gray-500">High-quality instruction strictly aligned with CEFR.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GraduationCapIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.42 10.922a2 2 0 0 1-.01 3.016l-7.13 7.14a2 2 0 0 1-2.81 0l-7.13-7.14a2 2 0 0 1-.01-3.016l7.13-7.14a2 2 0 0 1 2.81 0l7.13 7.14z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}
