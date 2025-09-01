// src/pages/ServicesPage.jsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// A reusable component for sections with parallax backgrounds
const ParallaxSection = ({ imageUrl, children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '10%']);

  return (
    <section ref={ref} className="relative py-24 px-6 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y,
        }}
      />
      <div className="absolute inset-0 z-10 bg-black/70" />
      <div className="relative z-20 container mx-auto">{children}</div>
    </section>
  );
};

const ServicesPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="text-center py-24 bg-black">
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold text-white font-montserrat"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h1>
        <motion.p 
          className="mt-6 text-lg text-white/70 max-w-3xl mx-auto px-4"
           initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Comprehensive solutions to connect investors, lenders, and industry leaders with vetted businesses and impactful opportunities.
        </motion.p>
      </div>

      {/* JLY Global Link Section */}
      <ParallaxSection imageUrl="/images/global.png">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold font-montserrat text-orange-400 mb-4">JLY Global Link</h2>
            <p className="text-lg text-white/80 mb-4">
              Bridging the gap by connecting accredited investors to hand-picked, high-potential deals across multiple industries. We streamline the process and offer seamless access to vetted investment opportunities.
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>Streamlined access to curated deals</li>
                <li>Integrated network of expert service providers</li>
                <li>Economical, transparent, and professional process</li>
            </ul>
          </div>
        </div>
      </ParallaxSection>

      {/* Wealth Confluence Section */}
      <ParallaxSection imageUrl="/images/wealth.png">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:col-start-2">
            <h2 className="text-4xl font-bold font-montserrat text-orange-400 mb-4">Wealth Confluence</h2>
            <h3 className="text-2xl font-semibold mb-4">Your Family Office Platform</h3>
            <p className="text-lg text-white/80 mb-4">
              A trusted partner for family offices, providing seamless access to meticulously curated investment deals across sectors such as private equity, real estate, and venture capital.
            </p>
             <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>Access to exclusive, high-quality deals</li>
                <li>Focus on quality and strategic alignment</li>
                <li>Comprehensive and cost-effective solutions</li>
            </ul>
          </div>
        </div>
      </ParallaxSection>

      {/* C3Shield Section */}
      <ParallaxSection imageUrl="/images/crypto.png">
         <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold font-montserrat text-orange-400 mb-4">C3Shield</h2>
            <h3 className="text-2xl font-semibold mb-4">Cryptocurrency Fund Recovery</h3>
            <p className="text-lg text-white/80 mb-6">
             In a landscape where crypto fraud is rising, we offer specialized fund recovery services to help victims reclaim stolen assets. Our deep understanding of blockchain provides the best chance to recover what's yours.
            </p>
            <Link
                to="/contact" // Update this link to your contact or form page
                className="inline-flex items-center bg-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105"
            >
                Initiate a Recovery Case <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default ServicesPage;