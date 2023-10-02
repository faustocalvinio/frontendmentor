/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      wider:'16px'
    },
    extend: {
      darkMode:'class'
    },
  },
  plugins: [],
}

