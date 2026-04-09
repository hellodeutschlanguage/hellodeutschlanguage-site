import { ArrowRight, Book, CreditCard, FileText, ShieldCheck } from "lucide-react";

export function Enrollment() {
  return (
    <section id="enroll" className="py-20 bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to start your journey?
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Follow these simple steps to secure your slot in our upcoming classes.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center shrink-0 font-bold text-xl">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Complete the Enrollment Form</h3>
                  <p className="text-gray-400 mb-4">Fill out your details and select your desired course level.</p>
                  <a 
                    href="https://forms.gle/YXiM73gAPxqY5iTeA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-red hover:text-white transition-colors font-medium"
                  >
                    Open Enrollment Form <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-bold text-xl">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pay the Downpayment</h3>
                  <p className="text-gray-400">A non-refundable downpayment of Php 5,000 is required to secure your slot.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-bold text-xl">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Send Proof of Payment</h3>
                  <p className="text-gray-400">Send your receipt via Messenger, WhatsApp, or Email to confirm your enrollment.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-brand-black rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-8">Payment & Policies</h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="text-brand-red" />
                  <h4 className="text-lg font-semibold">Payment Options</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl space-y-3">
                  <p><strong>GCash / Maya:</strong> 0917 771 3421</p>
                  <p><strong>Cash:</strong> Payment accepted at the school</p>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-600">Send proof of payment to:</p>
                    <p className="text-sm font-medium">info@hellodeutschlanguage.com</p>
                    <p className="text-sm text-gray-500">Subject: Downpayment Information</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Book className="text-brand-red" />
                  <h4 className="text-lg font-semibold">Book Delivery</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Textbooks and workbooks are included. Nationwide delivery is available for students outside Cebu. Delivery is processed after enrollment and downpayment confirmation.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="text-brand-red" />
                  <h4 className="text-lg font-semibold">Refund Policy</h4>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
                  <li>Downpayment is non-refundable.</li>
                  <li>Up to 50% refund on payments beyond downpayment (prorated).</li>
                  <li>Missed classes without notice are counted.</li>
                  <li>Refunds processed within 24–48 hours after approval.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
