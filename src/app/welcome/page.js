'use client';
import Link from "next/link";

const WelcomePage = () => {
  return (
    <div className="w-full max-w-4xl max-h-5xl bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-lg text-center transform scale-118 will-change-transform">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-400 mb-4 antialiased">
        Welcome to the Quiz App
      </h1>
      <p className="text-lg mb-6 antialiased">
        Test your knowledge on various subjects and have fun while learning!
      </p>
      <Link href="/selectSubject">
        <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full text-lg font-medium shadow-md hover:scale-105 transform transition">
          Start Quiz
        </button>
      </Link>
    </div>
  );
};

export default WelcomePage;
