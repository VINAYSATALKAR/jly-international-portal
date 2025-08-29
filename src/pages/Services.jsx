import { useEffect } from "react";
import { FaGlobe, FaShieldAlt, FaBriefcase } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "JLY Global Link",
    icon: <FaGlobe className="text-4xl text-orange-500 mb-4" aria-hidden="true" />,
    description: [
      "Facilitates cross-border business partnerships and strategic alliances.",
      "Connects startups and enterprises with global funding sources.",
      "Offers matchmaking services for investors, incubators, and accelerators.",
    ],
  },
  {
    title: "C3Shield",
    icon: <FaShieldAlt className="text-4xl text-orange-500 mb-4" aria-hidden="true" />,
    description: [
      "Specializes in crypto asset protection and recovery.",
      "Utilizes blockchain forensics and smart contract audits.",
      "Supports victims of scams and lost investments with legal and technical guidance.",
    ],
  },
  {
    title: "Wealth Confluence",
    icon: <FaBriefcase className="text-4xl text-orange-500 mb-4" aria-hidden="true" />,
    description: [
      "Provides curated investment strategies tailored to business goals.",
      "Combines financial literacy with actionable portfolio planning.",
      "Partners with advisors to deliver growth-focused wealth solutions.",
    ],
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="bg-white py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 font-montserrat mb-12">
        Explore Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-left"
            data-aos="fade-up"
            role="region"
            aria-labelledby={`service-${index}`}
          >
            {service.icon}
            <h3
              id={`service-${index}`}
              className="text-xl font-semibold font-montserrat text-blue-700 mb-4"
            >
              {service.title}
            </h3>
            <ul className="list-disc list-inside text-gray-700 font-roboto space-y-2">
              {service.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
