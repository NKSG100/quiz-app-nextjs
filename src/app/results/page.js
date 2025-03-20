'use client';

import { useEffect, useState } from 'react';
import ResultsCard from '../components/ResultsCard';

const ResultsPage = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedScore = localStorage.getItem('quizScore');
    if (savedScore) {
      setScore(parseInt(savedScore));
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  pb-40 overflow-hidden">
      <ResultsCard score={score} />
    </div>
  );
};

export default ResultsPage;