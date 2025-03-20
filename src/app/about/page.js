const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-40 overflow-hidden">
      <h1 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient">
        About Quiz App
      </h1>
      <p className="font-bold text-lg text-gray-200 max-w-2xl text-center bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:border-pink-500/50 hover:shadow-[0_0_20px_5px_rgba(236,72,153,0.3)] transition-all duration-300">
        Quiz App is a fun and interactive way to test your knowledge on various subjects. Whether you're a math whiz, a computer science enthusiast, or just love general knowledge, we've got something for you!
      </p>
      <p className="font-bold text-lg text-gray-200 max-w-2xl text-center mt-4 bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.3)] transition-all duration-300">
        Made with ❤️ using <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">Next.js</span>, <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">Tailwind CSS</span>, and <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">Open Trivia Database</span>.
      </p>
      <p className="text-lg text-gray-200 max-w-2xl text-center mt-4 bg-black/20 backdrop-blur-md rounded-lg p-6 border border-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_20px_5px_rgba(99,102,241,0.3)] transition-all duration-300">
        Contact: <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">nksnamannks@gmail.com</span>
      </p>
    </div>
  );
};

export default AboutPage;