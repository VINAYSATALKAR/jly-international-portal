// src/components/TeamPreview.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: "Steven Lee",
    title: "Chairman",
    imageUrl: "/images/team-steven-lee.jpg"
  },
  {
    name: "Jocelyn Yambao",
    title: "Founder & COO",
    imageUrl: "/images/team-jocelyn-yambao.jpg"
  },
  {
    name: "Bernard Picot",
    title: "Co-Founder & CRO",
    imageUrl: "/images/team-bernard-picot.jpg"
  },
  {
    name: "Amit Srivastava",
    title: "Chief Technology Officer",
    imageUrl: "/images/team-amit-srivastava.jpg"
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

const TeamPreview = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 font-montserrat mb-4">
            Meet Our Leadership
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our team’s deep industry knowledge and expansive network are leveraged to deliver measurable results for both investors and businesses.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {teamMembers.map((member) => (
            <motion.div 
              key={member.name} 
              variants={itemVariants} 
              className="group relative rounded-lg overflow-hidden shadow-lg"
            >
              <img src={member.imageUrl} alt={`Headshot of ${member.name}`} className="w-full h-96 object-cover object-center transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white font-montserrat">{member.name}</h3>
                <p className="text-orange-400 font-semibold">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <Link
            to="/about"
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105"
          >
            View Full Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;