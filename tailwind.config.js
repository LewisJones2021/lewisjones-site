/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
 content: [
  './app/**/*.{js,ts,jsx,tsx}',
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',

  // Or if using `src` directory:
  './src/**/*.{js,ts,jsx,tsx}',
 ],
 theme: {
  fontFamily: {
   sans: ['Sans-sarif'],
  },
  extend: {
   fontFamily: {
    header: ['raleway', 'sans-serif'],
    cardHeading: ['Rajdhani', 'sans-serif'],
    cardContent: ['Assistant', 'sans-serif'],
    button: ['Shadows Into Light', 'cursive'],
   },
  },
 },
 plugins: [require('daisyui')],
};
