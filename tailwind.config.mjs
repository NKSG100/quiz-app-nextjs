/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Make sure this is set to your file structure
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
        'lg-custom': '0 8px 15px rgba(0, 0, 0, 0.2)',
        // Add custom glow effect
        'glow': '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)',
      },
    },
  },
  plugins: [],
}
