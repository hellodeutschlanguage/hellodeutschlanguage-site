import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/images/signage.png" alt="Hello Deutsch Logo" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none tracking-tight text-brand-black uppercase">HELLO DEUTSCH</span>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Language Training Center</span>
              </div>
            </div>
            <p className="text-gray-500 max-w-sm mb-6">
              Professional German language school based in Cebu, Philippines, providing high-quality education aligned with CEFR standards.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/HelloDeutschLanguageTrainingCenter/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-red hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/hellodeutschlanguage/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-red hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/hello-deutsch-language-training-center" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-red hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.tiktok.com/@hellodeutschcebu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-red hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.32 6.32 6.32 0 0 0 6.27-6.31V9.85a8.28 8.28 0 0 0 5.4 1.99V8.39a5.1 5.1 0 0 1-3.35-1.7z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-black mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-500 hover:text-brand-red transition-colors">About Us</a></li>
              <li><a href="#pricing" className="text-gray-500 hover:text-brand-red transition-colors">Courses & Pricing</a></li>
              <li><a href="#enroll" className="text-gray-500 hover:text-brand-red transition-colors">Enrollment Process</a></li>
              <li><a href="#partners" className="text-gray-500 hover:text-brand-red transition-colors">For Partners</a></li>
            </ul>
          </div>
          
          <div id="contact">
            <h4 className="font-bold text-brand-black mb-6">Contact Us</h4>
            <ul className="space-y-3 text-gray-500">
              <li>
                <a href="https://maps.app.goo.gl/eKxk86uesA3hLBne8" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">
                  3F E-Park Building, Miñoza St., Talamban, Cebu City, Philippines
                </a>
              </li>
              <li>
                <a href="mailto:info@hellodeutschlanguage.com" className="hover:text-brand-red transition-colors">
                  info@hellodeutschlanguage.com
                </a>
              </li>
              <li>
                <a href="tel:+639175443582" className="hover:text-brand-red transition-colors">
                  +63 917 544 3582
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Hello Deutsch Language Training Center. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-400">
            <a href="#privacy-policy" className="hover:text-brand-black transition-colors">Privacy Policy</a>
            <a href="#terms-of-service" className="hover:text-brand-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
