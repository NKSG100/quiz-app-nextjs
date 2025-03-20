'use client';

import { motion } from 'framer-motion';

const ResultsCard = ({ score }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl bg-black/20 backdrop-blur-lg rounded-xl border border-white/10 p-8 text-center"
    >
      <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-400">
        Quiz Results
      </h1>
      <p className="text-lg mb-6 text-gray-200">
        Your score: <span className="font-bold text-pink-500">{score}</span>
      </p>
      <p className="text-lg text-gray-200">
        Thanks for playing! Try another subject to improve your score.
      </p>
    </motion.div>
  );
};

export default ResultsCard;