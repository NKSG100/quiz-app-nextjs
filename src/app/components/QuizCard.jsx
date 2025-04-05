'use client';

import { motion } from 'framer-motion';

const QuizCard = ({
  subject,
  timeLeft,
  currentQuestion,
  currentQuestionIndex,
  selectedAnswer,
  showFeedback,
  handleAnswer,
  shuffledOptions, // ✅ passed from parent
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl bg-black/20 backdrop-blur-lg rounded-xl border border-white/10 p-8"
    >
      <h2 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-400">
        Subject: {subject}
      </h2>
      <div className="bg-gray-700/50 p-2 rounded-md text-lg font-bold mb-6 inline-block">
        Time Left: {timeLeft}s
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-100">
        Q{currentQuestionIndex + 1}. {currentQuestion.question}
      </h3>
      <ul className="space-y-3">
        {shuffledOptions.map((answer, idx) => (
          <motion.li
            key={idx}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`cursor-pointer py-2 px-4 rounded-lg text-base font-medium transition-all duration-300 ${
              showFeedback
                ? answer === currentQuestion.correct_answer
                  ? 'bg-green-500/20 border-2 border-green-500'
                  : answer === selectedAnswer
                  ? 'bg-red-500/20 border-2 border-red-500'
                  : 'bg-gray-700/50'
                : 'bg-gray-700/50 hover:bg-gray-700/70 hover:shadow-sm'
            }`}
            onClick={() => !showFeedback && handleAnswer(answer)}
          >
            {answer}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default QuizCard;