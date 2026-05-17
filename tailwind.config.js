/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C50B0C',
          'red-dark': '#A00909',
          'red-light': '#FFF0F0',
          charcoal: '#3D4243',
          'charcoal-dark': '#2A2E2F',
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
