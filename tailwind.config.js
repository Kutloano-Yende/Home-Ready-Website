/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bred: '#C50B0C',
        'bred-dark': '#A00909',
        'bred-light': '#FFF0F0',
        charcoal: '#3D4243',
        'charcoal-dark': '#2A2E2F',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
