'use client';

import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import he from 'he'; // Add this line

const QuizPageContent = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const subject = searchParams.get('subject');

  const [timeLeft, setTimeLeft] = useState(20);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (subject && questions.length === 0) {
      fetchQuestions(subject);
    }
  }, [subject]);

  const fetchQuestions = async (subject) => {
    setLoading(true);

    const categoryMap = {
      'Science: Mathematics': 19,
      'Science: Computers': 18,
      'General Knowledge': 9,
    };
    const categoryId = categoryMap[subject];

    if (!categoryId) {
      console.error('Invalid subject');
      return;
    }

    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=medium&type=multiple`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const decodedQuestions = data.results.map((question) => ({
          ...question,
          question: he.decode(question.question),
          correct_answer: he.decode(question.correct_answer),
          incorrect_answers: question.incorrect_answers.map((answer) => he.decode(answer)),
        }));
        setQuestions(decodedQuestions);
        console.log('Questions fetched:', decodedQuestions);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching questions:', error);
      setLoading(false);
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 4);
    }
    if (currentQuestionIndex < 9) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      localStorage.setItem('quizScore', score);
      window.location.href = '/results';
    }
    setTimeLeft(20);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        handleAnswer(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  if (loading) {
    return <div className="text-center text-xl text-gray-800">Loading questions...</div>;
  }

  if (!Array.isArray(questions) || questions.length === 0) {
    return <div className="text-center text-xl text-gray-800">No questions available</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <div className="text-center text-xl text-gray-800">Loading question...</div>;
  }

  return (
    <div className="container mx-auto px-8 py-8 max-w-4xl bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-700 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-green-500 to-blue-500">
          Subject: {subject}
        </h2>
        <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black p-3 rounded-md text-1xl font-bold mb-6 inline-block">
          Time Left: {timeLeft}s
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
          Q{currentQuestionIndex + 1}. {currentQuestion.question}
        </h3>
        <ul className="space-y-4">
          {currentQuestion.incorrect_answers
            .concat(currentQuestion.correct_answer)
            .map((answer, idx) => (
              <li
                key={idx}
                className="cursor-pointer py-2 px-4 rounded-lg bg-blue-100 hover:bg-blue-200 text-gray-800 transition duration-200 text-center font-bold"
                onClick={() => handleAnswer(answer === currentQuestion.correct_answer)}
              >
                {answer}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const QuizPage = () => {
  return (
    <Suspense fallback={<div>Loading Quiz...</div>}>
      <QuizPageContent />
    </Suspense>
  );
};

export default QuizPage;
