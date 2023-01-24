/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        yellow: '#ffce4e',
        purple: '#1c121f',
        'trans-white': 'rgba(255, 255, 255, 0.01)',
        'slightly-trans-white': 'rgba(255, 255, 255, 0.55)',
        'box-shadow-trans-white': 'rgba(0 0 0 / 10%)',
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        oxanium: ['Oxanium', 'cursive'],
      },
      height: {
        'nft-art-height': '300px',
      },
    },
  },
  plugins: [],
};
