const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'chakra-petch': [ '"Chakra Petch"', "cursive"],
        montserrat: [ "Montserrat", "sans-serif"],
      },
      colors: {
        white: '#EBECF0',
        black: '#030305',
        neutral: {
          100: '#D0D1D6',
          200: '#A8ABB3',
          300: '#878A94',
          400: '#555861',
          500: '#363840',
          600: '#2B2E36',
          700: '#1F2128',
          800: '#13151C',
          900: '#0B0D13',
        },
        greenish: {
          100: '#DDF6EB',
          200: '#BAEED7',
          300: '#75D9AD',
          400: '#47C48E',
          500: '#29A46F',
          600: '#22875B',
          700: '#1B6B49',
          800: '#145136',
          900: '#0E3725',
          1000: '#082015',
        }
      },
      backgroundImage: {
        'project-info': 'linear-gradient(270deg, rgba(168, 196, 239, 0.1) 39.58%, rgba(10, 242, 173, 0.1) 100%);',
        'project-info-border': 'linear-gradient(270deg, rgba(168, 196, 239, 0.1) 39.58%, rgba(10, 242, 173, 0.1) 100%);',
        'mint': 'linear-gradient(166.49deg, #13151C 32.69%, rgba(0, 0, 0, 0) 170.72%), linear-gradient(270deg, rgba(168, 196, 239, 0.4) 23.44%, rgba(10, 242, 173, 0.4) 48.44%);',
      },
      backgroundColor: {
        'dark-40': 'rgba(11, 13, 19, 0.4);'
      },
      animation: {
        'bounce-1': 'bounce 1s linear infinite',
        'bounce-2': 'bounce 1s linear infinite',
        'bounce-3': 'bounce 1s linear infinite'
      }
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
}