'use client';

import { useState } from 'react';
import Link from 'next/link';

const SelectSubject = () => {
  const [selectedSubject, setSelectedSubject] = useState('');

  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent px-4 py-16">
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-500">
        Select a Subject
      </h1>

      {/* Subject Buttons Container (Horizontal) */}
      <div className="w-full max-w-4xl flex justify-between gap-6 mb-12">
        {/* Subject Buttons */}
        <button
          className={`px-6 py-4 bg-white/10 rounded-lg shadow-md text-lg font-medium backdrop-blur-md hover:scale-105 transition-all duration-300 ${
            selectedSubject === 'Science: Mathematics' ? 'ring-4 ring-pink-500' : ''
          }`}
          onClick={() => handleSubjectChange('Science: Mathematics')}
        >
          Science: Mathematics
        </button>

        <button
          className={`px-6 py-4 bg-white/10 rounded-lg shadow-md text-lg font-medium backdrop-blur-md hover:scale-105 transition-all duration-300 ${
            selectedSubject === 'Science: Computers' ? 'ring-4 ring-pink-500' : ''
          }`}
          onClick={() => handleSubjectChange('Science: Computers')}
        >
          Science: Computers
        </button>

        <button
          className={`px-6 py-4 bg-white/10 rounded-lg shadow-md text-lg font-medium backdrop-blur-md hover:scale-105 transition-all duration-300 ${
            selectedSubject === 'General Knowledge' ? 'ring-4 ring-pink-500' : ''
          }`}
          onClick={() => handleSubjectChange('General Knowledge')}
        >
          General Knowledge
        </button>
      </div>

      {/* "Start Quiz" Button */}
      {selectedSubject && (
        <div className="flex justify-center mt-8">
          <Link href={`/quiz?subject=${selectedSubject}`}>
            <button className="px-10 py-5 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg text-lg font-medium shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-500 relative overflow-hidden group border-2 border-transparent group-hover:shadow-glow">
              <span className="relative z-10 text-white">
                Start Quiz
              </span>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SelectSubject;
