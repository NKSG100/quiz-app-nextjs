'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-10 bg-black/20 backdrop-blur-md py-4 px-6 border-b border-white/10"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-400">
          Quiz App
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-pink-400 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/selectSubject" className="hover:text-pink-400 transition-colors duration-300">
                Subjects
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-pink-400 transition-colors duration-300">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;