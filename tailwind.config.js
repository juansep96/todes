/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pride-red': '#E74C3C',
        'pride-orange': '#E67E22',
        'pride-yellow': '#F1C40F',
        'pride-green': '#2ECC71',
        'pride-blue': '#3498DB',
        'pride-purple': '#9B59B6',
        'dark': '#121212',
        'dark-light': '#1E1E1E',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-pride': 'linear-gradient(to right, #E74C3C, #E67E22, #F1C40F, #2ECC71, #3498DB, #9B59B6)',
      },
    },
  },
  plugins: [],
};