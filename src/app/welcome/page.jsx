'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const WelcomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl bg-black/20 backdrop-blur-lg rounded-xl border border-white/10 p-8 text-center"
    >
      <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-400">
        Welcome to the Quiz App
      </h1>
      <p className="text-lg mb-6 text-gray-200">
        Test your knowledge on various subjects and have fun while learning!
      </p>
      <Link href="/selectSubject">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
        >
          Start Quiz
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default WelcomePage;