// src/pages/EventsPage.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

// Placeholder data for upcoming events
// You can easily update this array with your real event details
const upcomingEvents = [
  {
    date: "TBA",
    month: "SOON",
    title: "Business Growth Roundtable",
    description: "An exclusive, invite-only roundtable to discuss strategies for scaling your portfolio through strategic partnerships.",
  },
  {
    date: "TBA",
    month: "SOON",
    title: "Funding Opportunities Forum",
    description: "Discover the latest investment trends, meet high-growth businesses, and connect with accredited investors.",
  },
  {
    date: "TBA",
    month: "SOON",
    title: "Strategic Alliance Summit",
    description: "A premier summit focused on building impactful alliances in emerging markets and high-growth sectors.",
  },
];

const EventsPage = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/Events.png')" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Calendar & Events
          </motion.h1>
          <motion.p
            className="mt-6 text-lg max-w-3xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expand your network and explore growth opportunities at JLY’s curated events. Access diverse networking opportunities with industry leaders and investors.
          </motion.p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-16">Upcoming Events</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                className="bg-white rounded-lg shadow-lg flex items-center overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-orange-500 text-white text-center p-6 w-28 flex-shrink-0">
                  <p className="text-4xl font-extrabold">{event.date}</p>
                  <p className="font-semibold">{event.month}</p>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-montserrat text-blue-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="font-semibold text-blue-800 hover:text-orange-500 transition-colors duration-300 inline-flex items-center disabled:text-gray-400 disabled:hover:text-gray-400" disabled>
                    Registration Coming Soon
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Partnership CTA Section */}
       <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl font-bold text-blue-800 font-montserrat mb-4">Partner With Us</h2>
            <p className="text-gray-600 text-lg mx-auto mb-8">
              Host or participate in events to showcase your expertise to a curated audience of industry leaders and investors. Let's collaborate to create impactful opportunities.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105">
                Become a Partner <FaArrowRight className="ml-2" />
            </Link>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;