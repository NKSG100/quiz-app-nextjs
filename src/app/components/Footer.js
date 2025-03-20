'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-0 w-full bg-black/20 backdrop-blur-md py-4 text-center border-t border-white/10"
    >
      <p>&copy; {new Date().getFullYear()} Quiz App. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;