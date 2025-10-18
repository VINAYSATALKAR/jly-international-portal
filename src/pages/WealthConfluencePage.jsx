// src/pages/WealthConfluencePage.jsx
import { motion } from 'framer-motion';

const WealthConfluencePage = () => {
  return (
    <div className="bg-white min-h-screen">
       <div className="text-center py-24 bg-slate-50">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-blue-800 font-montserrat"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Wealth Confluence
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          This will be a private, members-only platform featuring a calendar of events and offices. The outline will be provided shortly.
        </motion.p>
      </div>
       <div className="text-center py-20">
            <p className="text-gray-500">Content coming soon...</p>
       </div>
    </div>
  );
};

export default WealthConfluencePage;