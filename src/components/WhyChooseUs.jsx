// src/components/WhyChooseUs.jsx
import { motion } from 'framer-motion';
import { FaShieldAlt, FaRocket, FaCheckCircle } from 'react-icons/fa';

const values = [
  {
    icon: <FaShieldAlt size={40} className="text-orange-400" />,
    title: "Integrity",
    description: "Prioritizing honesty, transparency, and ethical practices in every connection we make."
  },
  {
    icon: <FaRocket size={40} className="text-orange-400" />,
    title: "Client Success",
    description: "Dedicating ourselves to aligning our services with your unique goals and aspirations for measurable results."
  },
  {
    icon: <FaCheckCircle size={40} className="text-orange-400" />,
    title: "Excellence",
    description: "Striving for the highest quality and impact in everything we do, from introductions to solutions."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white font-montserrat mb-4">
            Why Choose JLY International?
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto">
            Our firm is built on a foundation of integrity, compliance, expertise, and excellence. Every client interaction is professional, tailored, and impactful.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={itemVariants} className="flex flex-col items-center">
              <div className="p-4 bg-gray-800 rounded-full mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-white font-montserrat mb-3">{value.title}</h3>
              <p className="text-white/70">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;