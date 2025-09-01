// src/components/HeroSection.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animation variants (these remain the same)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center px-6 py-20 overflow-hidden"
    >
      {/* Background Video & Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {/* The Video Element */}
        <video
          src="/hero-video3.mp4" // <-- Path to your video in the 'public' folder
          autoPlay
          loop
          muted
          playsInline // Important for iOS devices
          className="w-full h-full object-cover"
        ></video>

        {/* Dark overlay for text readability, slightly darker for video */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Animated Content (This part remains the same) */}
      <motion.div
        className="relative z-10 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold font-montserrat mb-4"
          variants={itemVariants}
        >
          Welcome to <span className="text-orange-400">JLY International</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl font-roboto max-w-3xl mx-auto mb-8"
          variants={itemVariants}
        >
          Converting Relationships into Results. Empowering businesses through strategic connections, funding, and innovation.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/auth"
              className="block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition-colors duration-300"
            >
              Get Started
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/services"
              className="block border-2 border-white text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-white hover:text-blue-800 transition-colors duration-300"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;