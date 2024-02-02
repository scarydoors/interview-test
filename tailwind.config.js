/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#54b835',
        },
        red: {
          DEFAULT: '#ec1b24',
          dark: '#ca151d',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
