/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      0: '0',
      45: '45deg',
      15: '15deg',
      90: '90deg',
      135: '135deg',
      180: '180deg',
      270: '270deg',
    },
    extend: {},
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
};
