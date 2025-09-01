// src/components/CTASection.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="bg-blue-800">
      <div className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white font-montserrat mb-4">
            Ready to Bridge the Gap?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            From funding and strategic alliances to navigating complex markets, JLY International is your partner in turning ambition into achievement. Let's build the future together.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/membership"
                className="block w-full sm:w-auto bg-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-colors duration-300"
              >
                Explore Membership
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="block w-full sm:w-auto border-2 border-white/50 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-white hover:text-blue-800 transition-colors duration-300"
              >
                Schedule a Consultation
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;