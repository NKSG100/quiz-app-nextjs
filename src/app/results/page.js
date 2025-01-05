'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const ResultsPage = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Retrieve the score from localStorage when the page loads
    const storedScore = localStorage.getItem('quizScore');
    if (storedScore) {
      setScore(storedScore);  // Set the score from localStorage
    }
  }, []);

  return (
    <div className="results-container h-screen flex justify-center items-center">
      <div className="text-center p-8 max-w-lg w-full bg-transparent">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mb-4">
          Quiz Results
        </h1>
        <p className="text-3xl font-semibold text-white mb-6">
          Your score is: <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{score}</span>
        </p>

        <Link href="/selectSubject">
          <button className="px-6 py-3 bg-gradient-to-r from-green-400 via-yellow-500 to-pink-500 text-white font-bold text-lg rounded-lg shadow-md hover:bg-gradient-to-l transition-all duration-300">
            Play Again
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResultsPage;
