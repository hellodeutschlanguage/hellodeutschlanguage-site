import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Programs", href: "#programs" },
    { name: "Pricing", href: "#pricing" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/images/signage.png" alt="Hello Deutsch Logo" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none tracking-tight text-brand-black uppercase">HELLO DEUTSCH</span>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">Language Training Center</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-brand-black transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#enroll"
              className="bg-brand-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-red transition-colors"
            >
              Enroll Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-black"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-brand-black hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#enroll"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-brand-red hover:bg-gray-50 rounded-md"
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
