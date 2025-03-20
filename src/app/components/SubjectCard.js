'use client';

import { motion } from 'framer-motion';

const SubjectCard = ({ subject, selectedSubject, onSelect }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex justify-center items-center p-6 bg-black/20 backdrop-blur-md rounded-xl border border-white/10 cursor-pointer transition-all duration-300 ${
        selectedSubject === subject.value ? 'ring-4 ring-pink-500' : ''
      }`}
      onClick={() => onSelect(subject.value)}
    >
      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-400">
        {subject.name}
      </h3>
    </motion.div>
  );
};

export default SubjectCard;