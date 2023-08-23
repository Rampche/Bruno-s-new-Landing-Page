/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['Gothic', 'sans-serif'],
        worksans: ['WorkSans', 'sans-serif'],
      },
      fontWeight: {},
    },
  },
  plugins: [],
};
