import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobeAmericas, FaShieldAlt, FaChartLine, FaHandshake } from "react-icons/fa";
import ServiceCard from './ServiceCard';

const services = [
  {
    id: 1,
    icon: <FaHandshake size={32} className="text-orange-400" />,
    title: "Strategic Partnerships",
    description: "Forge impactful partnerships to expand market reach and achieve mutual growth.",
    imageUrl: "/images/partnership.png" // <-- Path to your first image
  },
  {
    id: 2,
    icon: <FaChartLine size={32} className="text-orange-400" />,
    title: "Funding & Investment",
    description: "Access capital through our network of accredited investors and licensed lenders.",
    imageUrl: "/images/funding.png" // <-- Path to your second image
  },
  {
    id: 3,
    icon: <FaGlobeAmericas size={32} className="text-orange-400" />,
    title: "Family Office Services",
    description: "Connect with exclusive, high-value opportunities in key sectors like tech and renewable energy.",
    imageUrl: "/images/family.png" // <-- Path to your third image
  },
  {
    id: 4,
    icon: <FaShieldAlt size={32} className="text-orange-400" />,
    title: "C3Shield Crypto Recovery",
    description: "Reclaim lost crypto assets with advanced blockchain analysis and expertise.",
    imageUrl: "/images/shield.png" // <-- Path to your fourth image
  },
];

const ServicesSection = () => {
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);

  const activeService = services.find(s => s.id === activeServiceId) || services[0];

  return (
    <section className="py-24 bg-black" id="services">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left Side (Sticky) */}
        <div className="lg:sticky top-24 ml-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white font-montserrat mb-6 ">
              A Partnership Designed for Growth
            </h2>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-orange-400 mb-3">{activeService.title}</h3>
                <p className="text-lg text-white/70 min-h-[100px]">
                  {activeService.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right Side (Scrolling Cards) */}
        <div className="flex flex-col gap-16">
          {services.map((service) => (
            <motion.div
              key={service.id}
              onViewportEnter={() => setActiveServiceId(service.id)}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                isActive={activeServiceId === service.id}
                imageUrl={service.imageUrl}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;


