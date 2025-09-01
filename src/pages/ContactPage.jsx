// src/pages/ContactPage.jsx
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const ContactPage = () => {
  // NOTE: This is a UI-only form. To make it functional, you'll need
  // to integrate an email service like EmailJS, Formspree, or a custom backend.
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! This is a demo and the form is not yet connected.");
  };

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <div className="text-center py-24 pt-30 bg-white">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-blue-800 font-montserrat"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let’s build the future together. Reach out to explore how we can connect you with high-value opportunities.
        </motion.p>
      </div>

      {/* Main Content Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 bg-white p-8 md:p-12 rounded-lg shadow-lg">
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-blue-800 font-montserrat mb-6">Schedule a Consultation</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input type="text" id="subject" name="subject" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows="5" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-orange-500 text-white px-8 py-3 rounded-lg font-bold shadow-md hover:bg-orange-600 transition-colors duration-300">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Column: Contact Info */}
          <motion.div
            className="bg-blue-800 text-white p-8 rounded-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-montserrat mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <FaMapMarkerAlt size={24} className="mt-1 mr-4 text-orange-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-white/80">1603 Capitol Avenue, Suite 413 - D185, Cheyenne, WY 82001</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope size={24} className="mt-1 mr-4 text-orange-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-white/80">info@jly.international</p>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-white/20">
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                 <a href="#" className="text-white/80 hover:text-orange-400"><FaLinkedin size={28} /></a>
                 <a href="#" className="text-white/80 hover:text-orange-400"><FaFacebook size={28} /></a>
                 <a href="#" className="text-white/80 hover:text-orange-400"><FaInstagram size={28} /></a>
                 <a href="#" className="text-white/80 hover:text-orange-400"><FaTwitter size={28} /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;