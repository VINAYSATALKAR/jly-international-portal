// src/pages/TermsPage.jsx
import { motion } from 'framer-motion';

const TermsPage = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="text-center py-24 pt-30 bg-slate-50">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-blue-800 font-montserrat"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Terms & Conditions
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Last updated: September 1, 2025. Please read these terms carefully.
        </motion.p>
      </div>

      {/* Main Content */}
      <section className="py-20 px-6">
        <motion.div 
          className="container mx-auto max-w-4xl text-gray-700 text-lg space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-2xl font-bold text-blue-800 font-montserrat mb-3">1. Introduction</h2>
            <p>These Terms & Conditions (“Terms”) govern your use of JLY International’s website, services, and any affiliated platforms, including C3Shield. By accessing or using our services, you agree to these Terms.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-800 font-montserrat mb-3">2. Eligibility</h2>
            <p>Users must be at least 18 years old. By engaging with our services, you confirm that all provided information is accurate and lawful.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-800 font-montserrat mb-3">3. Services Offered</h2>
            <p>JLY International provides business consultancy and investment connection services. C3Shield offers crypto scam prevention and recovery services. Service details, pricing, and outcomes are subject to agreements signed before engagement.</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-blue-800 font-montserrat mb-3">4. Payment Terms</h2>
            <p>Membership fees are billed according to the selected plan. Success fees for C3Shield services are outlined in individual contracts. Refunds are available only under specific circumstances outlined in signed agreements.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-800 font-montserrat mb-3">5. Confidentiality</h2>
            <p>JLY International ensures the confidentiality of your information. Data shared with us will not be disclosed to third parties without prior consent, except as required by law.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-800 font-montserrat mb-3">6. Liability Disclaimer</h2>
            <p>JLY International and C3Shield are not liable for losses arising from external market conditions, regulatory changes, or user negligence. C3Shield does not guarantee full recovery of funds but strives to maximize the chances of success.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-800 font-montserrat mb-3">7. User Responsibilities</h2>
            <p>You agree to provide accurate and complete information, abide by applicable laws, avoid engaging in fraudulent activities, and use our services ethically and responsibly.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-800 font-montserrat mb-3">8. Prohibited Activities</h2>
            <p>Misuse of JLY International’s platforms or resources, sharing false or misleading information, or engaging in illegal activities through our platforms is strictly prohibited.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-800 font-montserrat mb-3">9. Termination</h2>
            <p>JLY International reserves the right to terminate services without notice for breaches of these Terms or unethical behavior.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-800 font-montserrat mb-3">10. Changes to Terms</h2>
            <p>These Terms may be updated periodically. Continued use of our services indicates acceptance of any revised Terms.</p>
          </div>
          
           <div>
            <h2 className="text-2xl font-bold text-blue-800 font-montserrat mb-3">11. Contact Information</h2>
            <p>For inquiries regarding these Terms or our services, please contact us at info@jly.international.</p>
          </div>

        </motion.div>
      </section>
    </div>
  );
};

export default TermsPage;