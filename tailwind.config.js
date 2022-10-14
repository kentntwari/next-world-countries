/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      body: ['Nunito Sans', 'sans-serif'],
    },

    extend: {
      colors: {
        'dk-blue-300': 'hsl(209, 23%, 22%)',
        'dk-blue-500': 'hsl(207, 26%, 17%)',
        'lt-blue-500': 'hsl(200, 15%, 8%)',
        'dk-gray-100': 'hsl(0, 0%, 98%)',
        'dk-gray-300': 'hsl(0, 0%, 52%)',
      },
    },
  },
  plugins: [],
};
