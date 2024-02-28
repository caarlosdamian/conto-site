/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        conto: {
          primary: '#2454B0',
          secondary: '#fffc82',
          third: '#4F9CF9',
          gray: '#E8E8E8',
          skyBlue: '#4F9CF9',
          black: '#212529'
        },
      },
    },
  },
  plugins: [],
};
