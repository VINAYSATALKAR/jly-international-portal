import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ServiceCard = ({ icon, title, description, isActive, imageUrl }) => {
  const ref = useRef(null);

  // Track scroll progress of this specific card
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // Track from when the card enters the bottom to when it leaves the top
  });

  // Create a parallax effect by transforming the scroll progress
  // The image will move from -15% to 15% on the Y-axis as the card scrolls
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div
      ref={ref}
      className="relative p-8 rounded-2xl overflow-hidden shadow-lg"
      style={{ height: '400px' }}
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y // Apply the parallax effect here
        }}
      />

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 to-black/10" />

      {/* Content */}
      <div className={`relative z-20 flex flex-col h-full transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
        <div className="mb-6">{icon}</div>
        <div className="mt-auto">
          <h3 className="text-3xl font-bold font-montserrat text-white mb-3">
            {title}
          </h3>
          <p className="text-white/80 font-roboto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;