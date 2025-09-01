// src/pages/MembershipPage.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Added new icons for the add-ons section
import { FaCheck, FaUserTie, FaChalkboardTeacher, FaFileAlt } from 'react-icons/fa';

const plans = [
  {
    name: "Standard",
    priceMonthly: 99,
    priceSemiAnnually: 499,
    features: [
      "Curated deal flow access",
      "Basic analytics and insights",
      "Monthly market trend reports",
      "Access to knowledge base library",
    ],
    isFeatured: false,
  },
  {
    name: "Premium",
    priceMonthly: 199,
    priceAnnually: 999,
    features: [
      "Exclusive deal previews",
      "Advanced analytics & portfolio tools",
      "VIP event invitations",
      "Quarterly strategy consultations",
      "Priority support",
    ],
    isFeatured: true,
  },
  {
    name: "Elite",
    priceMonthly: 499,
    features: [
      "Fully personalized deal sourcing",
      "Dedicated account manager",
      "First access to high-value opportunities",
      "Free entry to premium summits",
      "Custom market research reports",
    ],
    isFeatured: false,
  },
];

const MembershipPage = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <div className="text-center py-30 bg-white">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-blue-800 font-montserrat"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Membership Plans
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Empower your business with exclusive access to curated partnerships, advanced analytics, and unparalleled market opportunities.
        </motion.p>
      </div>

      {/* Pricing Table Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative p-8 rounded-2xl shadow-lg transition-transform duration-300 ${
                  plan.isFeatured ? 'bg-blue-800 text-white transform lg:scale-110' : 'bg-white text-gray-800'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {plan.isFeatured && (
                  <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl font-bold font-montserrat text-center mb-2">{plan.name}</h3>
                
                <div className="text-center mb-6">
                  <span className={`text-5xl font-extrabold ${plan.isFeatured ? 'text-white' : 'text-blue-800'}`}>
                    ${plan.priceMonthly}
                  </span>
                  <span className={`text-lg ${plan.isFeatured ? 'text-white/70' : 'text-gray-500'}`}>
                    /month
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <FaCheck className={`mr-3 mt-1 flex-shrink-0 ${plan.isFeatured ? 'text-orange-400' : 'text-green-500'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/auth" // This will go to your sign-up/payment page
                  className={`block w-full text-center py-3 rounded-lg font-bold transition-colors duration-300 ${
                    plan.isFeatured
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-blue-800 text-white hover:bg-blue-900'
                  }`}
                >
                  Subscribe Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* === NEW & IMPROVED ADD-ONS SECTION === */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 font-montserrat mb-4">Customize Your Plan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">Enhance your membership with these powerful a la carte services, available to all members.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Add-on Card 1 */}
                <motion.div 
                    className="bg-slate-50 p-8 rounded-lg shadow-md border-t-4 border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <FaUserTie size={40} className="text-blue-800 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-blue-800 mb-2">1-on-1 Coaching</h3>
                    <p className="text-gray-600 mb-4">Get personalized, expert guidance to tackle your specific challenges.</p>
                    <span className="text-2xl font-bold text-gray-800">$99</span>
                    <span className="text-gray-500"> / session</span>
                </motion.div>
                {/* Add-on Card 2 */}
                <motion.div 
                    className="bg-slate-50 p-8 rounded-lg shadow-md border-t-4 border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <FaChalkboardTeacher size={40} className="text-blue-800 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Premium Webinars</h3>
                    <p className="text-gray-600 mb-4">Access exclusive, deep-dive sessions with industry leaders.</p>
                    <span className="text-2xl font-bold text-gray-800">$49</span>
                    <span className="text-gray-500"> / webinar</span>
                </motion.div>
                {/* Add-on Card 3 */}
                <motion.div 
                    className="bg-slate-50 p-8 rounded-lg shadow-md border-t-4 border-slate-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <FaFileAlt size={40} className="text-blue-800 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Personalized Reports</h3>
                    <p className="text-gray-600 mb-4">Receive custom market research tailored to your specific needs.</p>
                    <span className="text-2xl font-bold text-gray-800">$149</span>
                    <span className="text-gray-500"> / report</span>
                </motion.div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;