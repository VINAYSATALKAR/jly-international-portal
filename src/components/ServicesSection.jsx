import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGlobe, FaShieldAlt, FaBriefcase } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "JLY Global Link",
    description:
      "Connecting businesses across borders with strategic partnerships and funding opportunities.",
    icon: <FaGlobe className="text-4xl text-orange-500 mb-4" aria-hidden="true" />,
  },
  {
    title: "C3Shield",
    description:
      "Protecting crypto assets and recovering lost investments with cutting-edge security solutions.",
    icon: <FaShieldAlt className="text-4xl text-orange-500 mb-4" aria-hidden="true" />,
  },
  {
    title: "Wealth Confluence",
    description:
      "Empowering financial growth through curated investment strategies and expert guidance.",
    icon: <FaBriefcase className="text-4xl text-orange-500 mb-4" aria-hidden="true" />,
  },
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh(); // Ensures animation re-triggers on remount
  }, []);

  return (
    <section className="bg-white py-20 px-6 text-center" id="services">
      <h2
        className="text-3xl md:text-4xl font-bold text-blue-700 font-montserrat mb-12"
        data-aos="fade-down"
      >
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            role="region"
            aria-labelledby={`service-${index}`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {service.icon}
            <h3
              id={`service-${index}`}
              className="text-xl font-semibold font-montserrat text-blue-700 mb-2"
            >
              {service.title}
            </h3>
            <p className="text-gray-700 font-roboto mb-4">{service.description}</p>
            <Link
              to="/services"
              className="text-orange-500 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500 rounded"
              aria-label={`Learn more about ${service.title}`}
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
