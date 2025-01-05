'use client';

const AboutPage = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 pt-20 pb-10"> {/* Added pt-16 for spacing at the top */}
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-400 mb-8 text-center">
        About the Quiz App
      </h1>
      
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">About the Quiz</h2>
        <p className="text-lg font-bold text-gray-300">
          This is a fun and interactive quiz app that allows users to test their knowledge on various subjects. 
          Whether you're interested in Science, General Knowledge, or other topics, this app is designed to offer engaging questions 
          and a user-friendly interface to enhance your learning experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Subjects</h2>
        <p className="text-lg font-bold text-gray-300">
          The app offers multiple subjects for you to choose from. The subjects include:
        </p>
        <ul className="list-disc font-bold pl-6 text-lg text-gray-300">
          <li>Science: Mathematics</li>
          <li>Science: Computers</li>
          <li>General Knowledge</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Scoring</h2>
        <p className="text-lg font-bold text-gray-300">
          For each correct answer, you will earn 4 points. The quicker you answer, the higher your score! The timer on the top keeps track of how much time you have left to answer each question.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Created By</h2>
        <p className="text-lg font-bold text-gray-300">
          This quiz app was created by <span className="font-bold">Naman Kumar Singh</span>, a software developer passionate about building fun and educational projects.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Technologies Used</h2>
        <p className="text-lg font-bold text-gray-300">
          This project was built using the following technologies:
        </p>
        <ul className="list-disc pl-6  font-bold text-lg text-gray-300">
          <li>Next.js</li>
          <li>Tailwind CSS</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
