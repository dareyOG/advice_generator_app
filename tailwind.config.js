/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['manrope', 'sans-serif'],
    },
    fontWeight: {
      normal: '400',
    },
    colors: {
      'primary-light': 'hsl(193, 38%, 86%)',
      primary: 'hsl(150, 100%, 66%)',
      neutral: 'hsl(217, 19%, 38%)',
      'neutral-dark': 'hsl(217, 19%, 24%)',
      'neutral-darker': 'hsl(218, 23%, 16%)',
    },
    extend: {
      boxShadow: {
        shadow: '0px 00px 10px 2.5px hsl(150, 100%, 66%)',
      },
    },
  },
  plugins: [],
};
