// src/pages/AboutPage.jsx
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaShieldAlt, FaRocket, FaCheckCircle, FaTimes } from 'react-icons/fa';
import ProfileCard from '../components/ProfileCard';

const teamMembers = [
    { 
      name: "Jocelyn Yambao", 
      title: "Founder & COO", 
      imageUrl: "/images/team-jocelyn-yambao.jpg", 
      bio: "Jocelyn is a highly accomplished executive with a proven track record of success spanning over two decades. Her extensive experience in various business disciplines, including operations, marketing, sales, logistics, manufacturing, distribution, and finance, has established her as a dynamic and forward-thinking business leader. She specializes in driving organizational growth, enhancing profitability, and elevating customer satisfaction through strategic initiatives and process improvements. With a keen eye for detail and a talent for strategic planning, she navigates complex business environments with precision, identifying opportunities for growth and developing tailored strategies for success in today's fast-paced and ever-changing landscape. Her leadership style is marked by a profound commitment to collaboration, innovation, and excellence. Beyond her professional achievements, she is known for her strong ethical values and dedication to corporate social responsibility, actively contributing to initiatives that promote community welfare and sustainable practices." 
    },
    { 
      name: "Bernard Picot", 
      title: "Chief Revenue Officer", // <-- UPDATED
      imageUrl: "/images/team-bernard-picot.jpg", 
      bio: "Bernard brings over 25 years of success leading global sales, marketing, business development, product marketing, design, funding, and operations across diverse high-tech ecosystems. A tactical growth expert and technologist, he has a proven track record of taking new products to market, scaling teams, exceeding quotas, and breaking sales records. He excels in executing go-to-market strategies, driving revenue growth, and fostering cohesive, high-performing teams. Career highlights include generating $300M+ in revenue, launching 15+ breakthrough products globally, and scaling organizations from inception to profitability while doubling annual revenues. Bernard’s deep expertise spans a wide range of industries, including hardware/software components, edge and wireless networking, wearable devices, IoT, AI (NLP/AGI/ML/LLM), SaaS, search engines, life sciences, renewable energy, telemedicine, and medical devices. His experience encompasses both B2B and B2C markets, with a strong focus on direct, OEM, and channel sales at a global scale. He has held key roles at leading companies, including Dell Computers, CompuAdd Computer Corporation, IBM/Ambra, Honeywell, and Proxim Wireless, as well as multiple startups in disruptive technology sectors." 
    },
    {
      name: "Amit Srivastava", // <-- ADDED BACK
      title: "Chief Technology Officer",
      imageUrl: "/images/team-amit-srivastava.jpg",
      bio: "Amit Srivastava holds a Batcheler’s Degree in Electronics & Telecommunication Engineering and a master’s in business administration. He began his career at IBM, where he spent 12 years as an Operation Manager, leading a team of engineers specialized in Networking, Server Management, Cyber Security, Big Data analysis, and Artificial Intelligence. He later worked as a Fiber Optics engineer with UK-based company, TalkTalk overseeing Fiber Optics operations in the Greater London area, covering Essex in the Northeast, Kent in the South, Surrey, and Berkshire."
    },
    { 
      name: "Kelley Brakstad", 
      title: "Director of Organizational Effectiveness", 
      imageUrl: "/images/team-kelley-brakstad.jpg", 
      bio: "Kelley Brakstad is a seasoned Business and Leadership Advisor with 18 years of global corporate HR experience, specializing in helping startups and small businesses scale effectively. With expertise in HR processes, leadership development, and strategic coaching, Kelley equips organizations to build high-performing teams and attract investors for sustainable growth. As a former HR Advisor for a rapidly scaling Asian startup, Kelley refined HR systems and aligned leadership strategies to support organizational expansion. Her global experience provides her with a unique perspective on navigating the complexities of scaling businesses while maintaining a strong company culture. Kelley focuses on creating scalable HR frameworks, strengthening leadership capabilities, and driving business excellence, helping businesses thrive in competitive markets." 
    },
    { 
      name: "Ehmi Leyn Pineda", 
      title: "Social Operations Manager", 
      imageUrl: "/images/team-ehmi-leyn-pineda.jpg", 
      bio: "Ehmi Leyn, is a seasoned graphic and digital content creator specializing in image enhancement, branding, and high-quality visual content for online platforms and corporate communications. Proficient in Adobe Creative Cloud, she excels in crafting logo designs, digital art, interactive presentations, and marketing assets that captivate audiences and elevate brand presence. Committed to innovation, Ehmi Leyn integrates AI and generative technologies like Stable Diffusion and ComfyUI into her creative process, exploring cutting-edge solutions to push the boundaries of design and production. Her blend of technical expertise and artistic vision makes her an invaluable asset for businesses looking to enhance their visual identity and digital strategies." 
    }
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
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]); 

  return (
    <>
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

      <section ref={teamSectionRef} className="relative h-[300vh] bg-gray-900">
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