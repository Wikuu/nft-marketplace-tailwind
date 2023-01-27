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
        'auction-purple': '#8613a5',
        'art-purple': '#3D2942',
        'art-linear-1': '#8613A5',
        'art-linear-2': '#FAFAFA',
        'bid-button-border': '#BCB39A',
        'bid-button-bg': 'rgba(233, 215, 167, 0.1);',
        'purple-stroke': '#794187',
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        oxanium: ['Oxanium', 'cursive'],
      },
      height: {
        'nft-art-height': '300px',
      },
      backgroundImage: {
        'art-linear-effect':
          'linear-gradient(125.33deg, #8613A5 18.61%, rgba(250, 250, 250, 0.65) 137.4%);',
      },
    },
  },
  plugins: [],
};
