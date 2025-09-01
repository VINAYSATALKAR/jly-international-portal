// src/components/ProfileCard.jsx
import { motion } from 'framer-motion';

const ProfileCard = ({ member, onCardClick }) => {
  return (
    <motion.div
      className="group relative flex-shrink-0 w-80 h-[450px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
      onClick={() => onCardClick(member)}
      whileHover={{ scale: 1.02 }}
    >
      <img src={member.imageUrl} alt={`Headshot of ${member.name}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-2xl font-bold text-white font-montserrat">{member.name}</h3>
        <p className="text-orange-400 font-semibold">{member.title}</p>
      </div>
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white font-bold border-2 border-white rounded-full px-4 py-2">Read Bio</span>
      </div>
    </motion.div>
  );
};

export default ProfileCard;