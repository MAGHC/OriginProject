/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,jsx}'],
  theme: {
    extend: {
      colors: {
        main: '#C4C4C4',
        bright: '#E4E4E4',
        darker: '#626262',
      },
    },
    fontFamily: {
      title: ['Poppins'],
      body: ['Roboto'],
      kor: ['Gowun Dodum'],
    },
  },
  plugins: [],
};
