/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        lightBg: '#fbf7ed',
        shopifyGreen100: '#f3fcf4',
        shopifyGreen300: '#a5e3b9',
        shopifyGreen400: '#008060',
        shopifyGreen500: '#004c3f',
        shopifyGreen600: '#002e25',
      },
    },
  },
  plugins: [],
};
