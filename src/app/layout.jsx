'use client';

import { motion } from 'framer-motion';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <title>Quiz App</title>
      <link rel="icon" href="/favicon.ico" />
      <body className="bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-700 text-white min-h-screen overflow-hidden">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center min-h-screen pt-20 pb-24"
        >
          {children}
        </motion.main>
        <Footer />
      </body>
    </html>
  );
}