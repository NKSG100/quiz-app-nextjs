'use client';

import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';

const QuizPageContent = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const subject = searchParams.get('subject');

  const [timeLeft, setTimeLeft] = useState(20);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);  // Always initialize questions as an empty array
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  // Fetch questions when subject is available
  useEffect(() => {
    if (subject && questions.length === 0) {  // Only fetch if subject is selected and questions are empty
      fetchQuestions(subject);
    }
  }, [subject]);

  const fetchQuestions = async (subject) => {
    setLoading(true);  // Set loading to true before fetching data

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
        setQuestions(data.results);  // Store the fetched questions
        console.log('Questions fetched:', data.results);
      }
      setLoading(false);  // Set loading to false once the data is fetched
    } catch (error) {
      console.error('Error fetching questions:', error);
      setLoading(false);  // Set loading to false if an error occurs
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 4);  // Award 4 points for correct answers
    }
    if (currentQuestionIndex < 9) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);  // Move to the next question
    } else {
      // Store the score in localStorage before redirecting to results page
      localStorage.setItem('quizScore', score);
      window.location.href = '/results';  // Redirect to the results page when quiz ends
    }
    setTimeLeft(20);  // Reset the timer to 20 seconds after each question
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);  // Decrease the timer by 1 second
      } else {
        handleAnswer(false);  // Automatically move to next question if time runs out
      }
    }, 1000);

    return () => clearInterval(timer);  // Clean up the timer when component unmounts
  }, [timeLeft]);

  // Check if questions are available and loading state is handled
  if (loading) {
    return <div className="text-center text-xl text-gray-800">Loading questions...</div>;  // Show loading message until data is fetched
  }

  // Defensive check to ensure questions is always an array before accessing length
  if (!Array.isArray(questions) || questions.length === 0) {
    return <div className="text-center text-xl text-gray-800">No questions available</div>;  // Show message if questions are not available
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
