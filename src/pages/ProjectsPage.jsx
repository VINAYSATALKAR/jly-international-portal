// src/pages/ProjectsPage.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// Placeholder data - you can easily replace this with your actual projects later
const projects = [
  {
    category: "Renewable Energy",
    title: "Solar Farm Expansion",
    description: "Seeking strategic partners for a major solar energy initiative aimed at increasing clean energy output by 40%.",
    imageUrl: "/images/saas.png",
  },
  {
    category: "Technology",
    title: "AI-Powered SaaS Platform",
    description: "A high-growth startup is seeking Series A funding to scale their innovative AI-driven analytics platform for enterprise clients.",
    imageUrl: "/images/saas.png",
  },
  {
    category: "Healthcare",
    title: "Biotech Research Funding",
    description: "Connecting a pioneering biotech firm with accredited investors to fund the next phase of their groundbreaking medical research.",
    imageUrl: "/images/solar.png",
  },
    {
    category: "Merger & Acquisition",
    title: "Logistics Firm Acquisition",
    description: "Facilitating a strategic acquisition opportunity within the logistics sector to create a dominant market player.",
    imageUrl: "/images/solar2.png", // You can find or generate an image for this
  },
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


const ProjectsPage = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <div className="text-center py-24 bg-white">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-blue-800 font-montserrat mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Deals & Projects
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore high-impact opportunities. We connect businesses with the right resources to turn potential into performance.
        </motion.p>
      </div>

      {/* Projects Grid Section */}
      <section className="py-20 px-6">
        <motion.div 
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.title}
              variants={itemVariants}
              className="group bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-56">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/30" />
                 <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold font-montserrat text-blue-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 font-roboto mb-4">{project.description}</p>
                 <Link to="/contact" className="font-semibold text-blue-800 group-hover:text-orange-500 transition-colors duration-300 inline-flex items-center">
                  Inquire Now <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
       <section className="py-20 bg-blue-800">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white font-montserrat mb-4">Have a Project?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">If you are seeking funding or strategic partners for your venture, we want to hear from you. Let's connect and explore the possibilities together.</p>
            <Link to="/contact" className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105">
                Submit Your Project
            </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;