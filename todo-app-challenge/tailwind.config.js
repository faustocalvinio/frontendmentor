/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      wider:'16px'
    },
    extend: {
      fontFamily: {
        sans: ['"Josefin Sans"']
      }
    },
  },
  plugins: [],
}

