'use client';

import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import he from 'he';

const QuizPageContent = () => {
  const searchParams = useSearchParams();
  const subject = searchParams.get('subject');

  const [timeLeft, setTimeLeft] = useState(20);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

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
        const decodedQuestions = data.results.map((question) => {
          const allAnswers = [
            ...question.incorrect_answers.map((answer) => he.decode(answer)),
            he.decode(question.correct_answer),
          ];
          // Shuffle once and store the order
          return {
            ...question,
            question: he.decode(question.question),
            correct_answer: he.decode(question.correct_answer),
            answers: allAnswers.sort(() => Math.random() - 0.5), // Shuffle once
          };
        });
        setQuestions(decodedQuestions);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching questions:', error);
      setLoading(false);
    }
  };

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);

    const isCorrect = answer === questions[currentQuestionIndex].correct_answer;
    if (isCorrect) {
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
    }, 2000); // 2-second delay
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        handleAnswer(null); // Move to the next question on timeout
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  if (loading) {
    return <div className="text-center text-xl text-white">Loading questions...</div>;
  }

  if (!Array.isArray(questions) || questions.length === 0) {
    return <div className="text-center text-xl text-white">No questions available</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <div className="text-center text-xl text-white">Loading question...</div>;
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
          {currentQuestion.answers.map((answer, idx) => (
            <li
              key={idx}
              className={`cursor-pointer py-2 px-4 rounded-lg text-gray-800 transition duration-200 text-center font-bold ${
                showFeedback
                  ? answer === currentQuestion.correct_answer
                    ? 'bg-green-500'
                    : answer === selectedAnswer
                    ? 'bg-red-500'
                    : 'bg-blue-100'
                  : 'bg-blue-100 hover:bg-blue-200'
              }`}
              onClick={() => !showFeedback && handleAnswer(answer)}
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
