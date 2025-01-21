/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#34d399', // Exemplo de cor primária
        secondary: '#3b82f6',
        accent: '#9333ea',
      },
    },
  },
  plugins: [],
};
