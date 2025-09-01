// src/pages/AboutPage.jsx
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaShieldAlt, FaRocket, FaCheckCircle, FaTimes } from 'react-icons/fa';
import ProfileCard from '../components/ProfileCard';

const teamMembers = [
    { name: "Steven Lee", title: "Chairman", imageUrl: "/images/team-steven-lee.jpg", bio: "Steven Lee is a highly respected figure..." },
    { name: "Jocelyn Yambao", title: "Founder & COO", imageUrl: "/images/team-jocelyn-yambao.jpg", bio: "Jocelyn is a highly accomplished executive..." },
    { name: "Bernard Picot", title: "Co-Founder & CRO", imageUrl: "/images/team-bernard-picot.jpg", bio: "Bernard brings over 25 years of success..." },
    { name: "Kelley Brakstad", title: "Director of Organizational Effectiveness", imageUrl: "/images/team-kelley-brakstad.jpg", bio: "Kelley Brakstad is a seasoned Business and Leadership Advisor..." },
    { name: "Ehmi Leyn Pineda", title: "Social Operations Manager", imageUrl: "/images/team-ehmi-leyn-pineda.jpg", bio: "Ehmi Leyn, is a seasoned graphic and digital content creator..." }
];
const values = [
  { icon: <FaShieldAlt size={32} />, title: "Integrity", description: "Prioritizing honesty, transparency, and ethical practices." },
  { icon: <FaRocket size={32} />, title: "Client Success", description: "Aligning our services with your goals for measurable results." },
  { icon: <FaCheckCircle size={32} />, title: "Excellence", description: "Striving for the highest quality and impact in all we do." }
];


const AboutPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: teamSectionRef, 
    offset: ["start start", "end end"] 
  });
  
  // Adjusted percentage for better end-positioning
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]); 

  return (
    <>
      {/* Slide 1: Introduction */}
      <motion.section 
        className="relative h-screen w-full flex items-center justify-center text-white"
        style={{ backgroundImage: 'url(/images/who.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-7xl font-extrabold font-montserrat">Who We Are</h1>
            <p className="mt-6 text-lg max-w-3xl mx-auto">Founded to bridge the gap between ambition and opportunity, we leverage deep industry knowledge to deliver measurable results.</p>
        </div>
      </motion.section>

      {/* Slide 2: Mission & Vision */}
      <section 
        className="relative h-screen w-full flex items-center justify-center text-white"
        style={{ backgroundImage: 'url(/images/mission.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container mx-auto grid md:grid-cols-2 gap-12 px-6">
            <div>
                <h2 className="text-4xl font-bold font-montserrat text-orange-400 mb-4">Our Mission</h2>
                <p className="text-xl text-white/80">To empower businesses by fostering meaningful connections and delivering tailored consulting solutions that drive measurable results.</p>
            </div>
            <div>
                <h2 className="text-4xl font-bold font-montserrat text-orange-400 mb-4">Our Vision</h2>
                <p className="text-xl text-white/80">To create a thriving business ecosystem where companies seamlessly access partnerships, funding, and strategies for long-term growth.</p>
            </div>
        </div>
      </section>

      {/* Slide 3: Core Values */}
       <section 
        className="relative h-screen w-full flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: 'url(/images/values.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat mb-16">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-12">
                {values.map((value) => (
                    <div key={value.title} className="flex flex-col items-center">
                        <div className="text-orange-400 mb-4">{value.icon}</div>
                        <h3 className="text-2xl font-bold font-montserrat mb-2">{value.title}</h3>
                        <p className="text-white/70 max-w-xs">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Slide 4: Horizontal Scrolling Team Section */}
      <section ref={teamSectionRef} className="relative h-[300vh] bg-gray-900">
        {/* === FIX IS HERE: removed "items-center" === */}
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
            <div className="text-center px-6 mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white font-montserrat">Meet the Team</h2>
            </div>
            <motion.div style={{ x }} className="flex gap-8 px-8">
                {teamMembers.map((member) => (
                    <ProfileCard key={member.name} member={member} onCardClick={setSelectedMember} />
                ))}
            </motion.div>
        </div>
      </section>

      {/* Bio Modal (remember to fill this in) */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div 
              className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-bold text-blue-800">{selectedMember.name}</h3>
                    <p className="text-orange-500 font-semibold">{selectedMember.title}</p>
                  </div>
                  <button onClick={() => setSelectedMember(null)} className="text-gray-500 hover:text-gray-800">
                      <FaTimes size={24} />
                  </button>
              </div>
              <p className="text-gray-600 whitespace-pre-line">
                {selectedMember.bio}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AboutPage;