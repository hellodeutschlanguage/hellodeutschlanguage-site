import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-brand-red hover:text-red-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </a>
        
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Privacy Policy</h1>
          <p className="text-gray-500 mb-10">Effective Date: October 10, 2025</p>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              Hello Deutsch Language Training Center is committed to protecting your personal data in accordance with the Philippines Data Privacy Act of 2012 (RA 10173) and the General Data Protection Regulation (GDPR) of the European Union. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website or enroll in our language programs.
            </p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">We may collect the following personal information:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Country and city of residence</li>
              <li>Educational background (if relevant to course placement)</li>
              <li>Language level assessment responses</li>
              <li>Passport information (only if required for visa guidance)</li>
              <li>Messages sent via contact forms</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Technical data such as IP address, browser type, and device information</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We process your personal data for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>To respond to inquiries about language courses</li>
              <li>To process enrollment and manage student records</li>
              <li>To assess language level and recommend appropriate courses</li>
              <li>To provide training, schedules, and course updates</li>
              <li>To send marketing communications (only with consent)</li>
              <li>To assist with visa or overseas training preparation (if requested)</li>
              <li>To improve our website and services</li>
              <li>To comply with legal and regulatory requirements</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">3. Legal Basis for Processing (GDPR)</h2>
            <p className="text-gray-700 mb-4">For users in the European Union, we rely on the following legal bases:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Consent</strong> – when you submit inquiries or subscribe to updates</li>
              <li><strong>Contract</strong> – when processing enrollment and course participation</li>
              <li><strong>Legal obligation</strong> – when required by law</li>
              <li><strong>Legitimate interest</strong> – to improve our services and communication</li>
            </ul>
            <p className="text-gray-700 mb-8">You may withdraw your consent at any time.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">4. Sharing of Personal Data</h2>
            <p className="text-gray-700 mb-4">We do not sell your personal information. We may share data only with:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Internal staff for administrative purposes</li>
              <li>Payment processors for secure transactions</li>
              <li>Visa or placement partners (only with your permission)</li>
              <li>IT and hosting service providers</li>
              <li>Government authorities when legally required</li>
            </ul>
            <p className="text-gray-700 mb-8">All third parties are required to protect your data.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">5. International Data Transfers</h2>
            <p className="text-gray-700 mb-4">Because we support students preparing for opportunities in Germany and other EU countries, your data may be transferred internationally. When this occurs, we ensure:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>GDPR-compliant safeguards</li>
              <li>Secure transfer methods</li>
              <li>Data processing agreements with partners</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 mb-4">We retain your personal information only as long as necessary:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Inquiry data: up to 24 months</li>
              <li>Student records: up to 5 years</li>
              <li>Marketing consent: until withdrawn</li>
            </ul>
            <p className="text-gray-700 mb-8">You may request deletion at any time.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">7. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">Our website may use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Analyze website traffic</li>
              <li>Improve user experience</li>
              <li>Store preferences</li>
            </ul>
            <p className="text-gray-700 mb-8">You may disable cookies through your browser settings.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">8. Your Rights (GDPR & Philippine Data Privacy Act)</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Restrict processing</li>
              <li>Object to processing</li>
              <li>Withdraw consent</li>
              <li>Request data portability (GDPR)</li>
              <li>File a complaint with a supervisory authority</li>
            </ul>
            <p className="text-gray-700 mb-8">Philippines users may also file complaints with the National Privacy Commission.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">9. Data Security</h2>
            <p className="text-gray-700 mb-8">We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, disclosure, or loss. However, no online system is completely secure.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-700 mb-8">Our services are intended for individuals aged 16 and above. We do not knowingly collect personal information from minors without parental consent.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">11. Third-Party Links</h2>
            <p className="text-gray-700 mb-8">Our website may contain links to external websites. We are not responsible for their privacy practices.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">12. Updates to This Privacy Policy</h2>
            <p className="text-gray-700 mb-8">We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">13. Contact Information</h2>
            <p className="text-gray-700 mb-4">For any questions or requests regarding your personal data, contact:</p>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-gray-700 space-y-2">
              <p className="font-bold text-brand-black">Hello Deutsch Language Training Center</p>
              <p><strong>Email:</strong> <a href="mailto:info@hellodeutschlanguage.com" className="text-brand-red hover:underline">info@hellodeutschlanguage.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+639175443582" className="text-brand-red hover:underline">+63 917 544 3582</a></p>
              <p><strong>Address:</strong> 3F E-Park Building, Miñoza St., Talamban, Cebu City, Philippines</p>
            </div>
            <p className="text-gray-700 mt-6">You may also contact your local data protection authority if you believe your data rights have been violated.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
