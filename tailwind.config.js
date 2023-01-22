/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        yellow: '#ffce4e',
        purple: '#1c121f',
        'trans-white': 'rgba(255, 255, 255, 0.01)',
        'slightly-trans-white': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        oxanium: ['Oxanium', 'cursive'],
      },
    },
  },
  plugins: [],
};
