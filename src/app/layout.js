import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <title>Quiz App</title>
      <link rel="icon" href="/favicon.ico" />
      <body className="bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-700 text-white min-h-screen">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full z-10 bg-white/10 backdrop-blur-md py-4 px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-400">
              Quiz App
            </h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-pink-400 transition">Home</a></li>
                <li><a href="/selectSubject" className="hover:text-pink-400 transition">Subjects</a></li>
                <li><a href="/about" className="hover:text-pink-400 transition">About</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex justify-center items-center min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="fixed bottom-0 w-full bg-white/10 backdrop-blur-md py-4 text-center">
          <p>&copy; {new Date().getFullYear()} Quiz App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
