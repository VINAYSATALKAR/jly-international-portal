// src/components/HeroSection.jsx
import { useState, useRef } from "react"; // <-- Import useState and useRef
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa"; // <-- Import icons

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
  // State to track whether the video is muted
  const [isMuted, setIsMuted] = useState(true);
  // Ref to get direct access to the video element
  const videoRef = useRef(null);

  // Function to toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      // Toggle the muted property of the video element
      videoRef.current.muted = !videoRef.current.muted;
      // Update the state to reflect the change
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center px-6 py-20 overflow-hidden"
    >
      {/* Background Video & Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          ref={videoRef} // <-- Attach the ref to the video element
          src="/hero-video3.mp4"
          autoPlay
          loop
          muted // <-- Start muted is REQUIRED for autoplay
          playsInline
          className="w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Animated Content (remains the same) */}
      <motion.div
        className="relative z-10 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ... your h1, p, and Link components are here ... */}
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

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-5 right-5 z-20 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-colors"
        aria-label="Toggle sound"
      >
        {isMuted ? (
          <FaVolumeMute size={20} />
        ) : (
          <FaVolumeUp size={20} />
        )}
      </button>
    </section>
  );
};

export default HeroSection;