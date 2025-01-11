/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ensure the content paths are correct
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#9333ea',
        'secondary': '#3b82f6',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        // Define the glowing border effect
        'border-glow': '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)',
      },
    },
  },
  plugins: [],
}
