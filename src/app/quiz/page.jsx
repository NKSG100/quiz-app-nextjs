'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import QuizCard from '../components/QuizCard';
import he from 'he';

// Wrapper component to handle useSearchParams
function QuizPageContent() {
  const searchParams = useSearchParams();
  const subject = searchParams.get('subject');

  const [timeLeft, setTimeLeft] = useState(20);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    if (subject && questions.length === 0) {
      fetchQuestions(subject);
    }
  }, [subject]);

  const fetchQuestions = async (subject) => {
    const categoryMap = {
      'Science: Mathematics': 19,
      'Science: Computers': 18,
      'General Knowledge': 9,
    };
    const categoryId = categoryMap[subject];

    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=medium&type=multiple`
      );
      const data = await response.json();
      if (data.results) {
        const decodedQuestions = data.results.map((question) => ({
          ...question,
          question: he.decode(question.question),
          correct_answer: he.decode(question.correct_answer),
          incorrect_answers: question.incorrect_answers.map((answer) => he.decode(answer)),
        }));
        setQuestions(decodedQuestions);
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  // Shuffle options when currentQuestionIndex changes
  useEffect(() => {
    if (questions.length > 0 && questions[currentQuestionIndex]) {
      const currentQ = questions[currentQuestionIndex];
      const options = [...currentQ.incorrect_answers, currentQ.correct_answer];
      const shuffled = options.sort(() => Math.random() - 0.5);
      setShuffledOptions(shuffled);
    }
  }, [questions, currentQuestionIndex]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);

    if (answer === questions[currentQuestionIndex].correct_answer) {
      setScore(score + 4);
    }

    setTimeout(() => {
      setShowFeedback(false);
      setSelectedAnswer(null);
      if (currentQuestionIndex < 9) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        localStorage.setItem('quizScore', score);
        window.location.href = '/results';
      }
      setTimeLeft(20);
    }, 2000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        handleAnswer(null);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  if (questions.length === 0) {
    return <div className="text-center text-xl text-white">Loading questions...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-35 overflow-hidden">
      <QuizCard
        subject={subject}
        timeLeft={timeLeft}
        currentQuestion={currentQuestion}
        currentQuestionIndex={currentQuestionIndex}
        selectedAnswer={selectedAnswer}
        showFeedback={showFeedback}
        handleAnswer={handleAnswer}
        shuffledOptions={shuffledOptions} // ✅ passing the shuffled options
      />
    </div>
  );
}

// Wrap QuizPageContent in Suspense
export default function QuizPage() {
  return (
    <Suspense fallback={<div className="text-center text-xl text-white">Loading...</div>}>
      <QuizPageContent />
    </Suspense>
  );
}
