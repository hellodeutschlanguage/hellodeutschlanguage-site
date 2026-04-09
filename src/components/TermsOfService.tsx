import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export function TermsOfService() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">Terms of Service</h1>
          <div className="text-gray-500 mb-10 space-y-1">
            <p>Effective Date: October 10, 2025</p>
            <p>Business Name: Hello Deutsch Language Training Center</p>
            <p>Website: www.hellodeutschlanguage.com</p>
          </div>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              By accessing or using this website, enrolling in our courses, or purchasing any of our services, you agree to be bound by these Terms of Service (“Terms”). If you do not agree, please do not use our website or services.
            </p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">1. About Our Services</h2>
            <p className="text-gray-700 mb-8">Hello Deutsch Language Training Center provides language training services, assessments, consultations, course enrollment support, and related educational materials. Our services may include in-person classes, online classes, recorded lessons, placement tests, study materials, webinars, and student support.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">2. Eligibility</h2>
            <p className="text-gray-700 mb-8">You must be at least 18 years old to enroll independently. Minors may only enroll with the consent and supervision of a parent or legal guardian. By using our services, you represent that the information you provide is true, complete, and accurate.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">3. Enrollment and Course Registration</h2>
            <p className="text-gray-700 mb-4">Enrollment is only confirmed once we receive the required registration details and, where applicable, payment. We reserve the right to refuse or cancel enrollment if:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>information provided is false or incomplete,</li>
              <li>the student does not meet course requirements,</li>
              <li>payment is not completed on time, or</li>
              <li>there is misuse of our platform or services.</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">4. Fees and Payment</h2>
            <p className="text-gray-700 mb-8">Course fees, installment terms, and any other charges will be communicated before enrollment. Unless otherwise stated, all fees must be paid in the manner and timeline we specify. Third-party payment processor fees, bank charges, or transfer fees may be shouldered by the student.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">5. Refunds, Transfers, and Cancellations</h2>
            <p className="text-gray-700 mb-4">Refunds, if available, will depend on the course type and the timing of the cancellation. Unless a separate written policy states otherwise:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Downpayment is non-refundable,</li>
              <li>missed classes are generally not refundable,</li>
              <li>course transfers may be allowed subject to approval, and</li>
              <li>we may cancel or reschedule classes due to low enrollment, instructor unavailability, technical issues, or force majeure.</li>
            </ul>
            <p className="text-gray-700 mb-8">Any approved refund will be processed according to our internal policy and applicable law.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">6. Attendance, Participation, and Student Conduct</h2>
            <p className="text-gray-700 mb-4">Students are expected to attend classes regularly, join on time, and participate respectfully. We may suspend or terminate access to classes if a student:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>engages in harassment, abuse, discrimination, or disruptive behavior,</li>
              <li>records or shares class content without permission,</li>
              <li>shares offensive, illegal, or inappropriate material, or</li>
              <li>violates these Terms or any school rule.</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">7. Class Materials and Intellectual Property</h2>
            <p className="text-gray-700 mb-8">All lessons, slides, worksheets, recordings, branding, logos, texts, graphics, and other materials provided by us are owned by Hello Deutsch Language Training Center or our licensors, unless otherwise stated. Students may use materials only for personal learning purposes. Copying, reselling, distributing, uploading, or publicly sharing our materials without written consent is prohibited.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">8. Online Classes and Technical Issues</h2>
            <p className="text-gray-700 mb-4">For online classes, students are responsible for:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>a stable internet connection,</li>
              <li>a working device with audio/video capability,</li>
              <li>a quiet and appropriate environment,</li>
              <li>keeping login details confidential.</li>
            </ul>
            <p className="text-gray-700 mb-8">We are not responsible for delays, interruptions, or missed classes caused by the student’s internet, device, or platform issues outside our control.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">9. Assessments and Certificates</h2>
            <p className="text-gray-700 mb-8">Placement tests, quizzes, and assessments are used for educational purposes and course placement only. Certificates, if issued, will be based on our internal completion requirements. A certificate of completion does not guarantee employment, visa approval, admission to an institution, or acceptance by any third party.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">10. No Guarantee of Results</h2>
            <p className="text-gray-700 mb-8">We provide training and support, but we do not guarantee specific outcomes such as passing an exam, obtaining a visa, securing employment, or reaching fluency within a certain period. Learning outcomes depend on the student’s effort, attendance, practice, and other factors outside our control.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">11. Privacy and Data Protection</h2>
            <p className="text-gray-700 mb-4">Your use of our services is also governed by our Privacy Policy. We handle personal data in accordance with applicable privacy laws, including the Philippines Data Privacy Act of 2012 (RA 10173) and, where applicable, the EU GDPR. The NPC states that data subjects have rights under the Data Privacy Act, and the GDPR is the EU’s regulation governing the protection of personal data.</p>
            <p className="text-gray-700 mb-4">By using our services, you consent to the collection and processing of personal data as described in our Privacy Policy and as necessary to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>register and manage your enrollment,</li>
              <li>conduct assessments and class administration,</li>
              <li>communicate with you about classes and services,</li>
              <li>comply with legal obligations, and</li>
              <li>improve our services.</li>
            </ul>
            <p className="text-gray-700 mb-8">Where required, we will seek your consent before sending marketing messages or sharing your data with third parties.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">12. Third-Party Services</h2>
            <p className="text-gray-700 mb-8">Our website or classes may rely on third-party services such as payment processors, video-conferencing tools, CRM systems, analytics tools, or email services. We are not responsible for the acts, errors, policies, or outages of those third parties.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">13. User Content</h2>
            <p className="text-gray-700 mb-8">If you submit comments, messages, testimonials, forms, images, or other content to us, you grant us a non-exclusive, worldwide, royalty-free license to use, display, reproduce, and store that content for business, administrative, and promotional purposes, subject to applicable law and any consent requirements in our Privacy Policy.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">14. Prohibited Use</h2>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>misuse the website or attempt unauthorized access,</li>
              <li>copy or scrape our content,</li>
              <li>upload harmful code, spam, or fraudulent content,</li>
              <li>impersonate another person or organization,</li>
              <li>use our services for unlawful purposes.</li>
            </ul>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">15. Disclaimer</h2>
            <p className="text-gray-700 mb-8">Our services are provided on an “as is” and “as available” basis. To the fullest extent permitted by law, we disclaim warranties of any kind, express or implied, including fitness for a particular purpose, uninterrupted availability, or error-free operation.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">16. Limitation of Liability</h2>
            <p className="text-gray-700 mb-8">To the fullest extent permitted by law, Hello Deutsch Language Training Center, its owners, employees, instructors, and partners shall not be liable for indirect, incidental, special, or consequential damages arising from your use of our website or services. Our total liability for any claim related to the services shall not exceed the amount you paid us for the specific course or service giving rise to the claim, unless otherwise required by law.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">17. Termination</h2>
            <p className="text-gray-700 mb-8">We may suspend or terminate your access to our website or services at any time if we reasonably believe you have violated these Terms, abused our services, or engaged in conduct harmful to the school, our staff, or other students.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">18. Changes to These Terms</h2>
            <p className="text-gray-700 mb-8">We may update these Terms from time to time. The revised version will be posted on this page with a new effective date. Continued use of our website or services after changes are posted means you accept the updated Terms.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">19. Governing Law</h2>
            <p className="text-gray-700 mb-8">These Terms are governed by the laws of the Republic of the Philippines. If you are using our services from outside the Philippines, you remain responsible for complying with the laws that apply in your location, including any GDPR obligations that may apply to you or to our handling of your personal data.</p>

            <h2 className="text-xl font-bold text-brand-black mt-8 mb-4">20. Contact Us</h2>
            <p className="text-gray-700 mb-4">For questions about these Terms, contact us at:</p>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-gray-700 space-y-2">
              <p className="font-bold text-brand-black">Hello Deutsch Language Training Center</p>
              <p><strong>Email:</strong> <a href="mailto:info@hellodeutschlanguage.com" className="text-brand-red hover:underline">info@hellodeutschlanguage.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+639175443582" className="text-brand-red hover:underline">+63 917 544 3582</a></p>
              <p><strong>Address:</strong> 3F E-Park Building, Miñoza St., Talamban, Cebu City, Philippines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
