// src/pages/InvestmentOpportunitiesPage.jsx
import { motion } from 'framer-motion';

const InvestmentOpportunitiesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="text-center py-24 bg-slate-50">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-blue-800 font-montserrat"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Investment Opportunities
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          This page will feature a gallery of investment opportunities, project upload functionality, and membership payment options. The outline will be provided shortly.
        </motion.p>
      </div>
       <div className="text-center py-20">
            <p className="text-gray-500">Content coming soon...</p>
       </div>
    </div>
  );
};

export default InvestmentOpportunitiesPage;