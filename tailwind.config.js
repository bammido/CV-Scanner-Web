/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b71ca',
        danger: '#DC4C64',
        glass: 'rgba(0,0,0,0.3)'
      }
    },
  },
  plugins: [],
  darkMode: 'selector'
}