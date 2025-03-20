'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SubjectCard from '../components/SubjectCard';

const SelectSubject = () => {
  const [selectedSubject, setSelectedSubject] = useState('');

  const subjects = [
    { name: 'Mathematics', value: 'Science: Mathematics' },
    { name: 'Computer Science', value: 'Science: Computers' },
    { name: 'General Knowledge', value: 'General Knowledge' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-45 overflow-hidden">
      <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-400">
        Select a Subject
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl px-4">
        {subjects.map((subject, idx) => (
          <SubjectCard
            key={idx}
            subject={subject}
            selectedSubject={selectedSubject}
            onSelect={setSelectedSubject}
          />
        ))}
      </div>
      {selectedSubject && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <Link href={`/quiz?subject=${selectedSubject}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition-all"
            >
              Start Quiz
            </motion.button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default SelectSubject;