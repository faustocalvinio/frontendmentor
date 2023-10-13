/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'bodyBg': {
        DEFAULT: '#FAFAFA',
        light:'cyan',
        dark: 'red'
      },
      'todoBg':{
        DEFAULT: '#FAFAFA',
        light: '#fff',
        dark: '#000'
      },
      'todoText':{
        DEFAULT: '#FAFAFA',
        light: '#000',
        dark: '#fff'
      },
      'textLineThrough':{
        DEFAULT: '#FAFAFA',
        light: '#000',
        dark: '#fff'
      },
      'white': '#fff',
      'black': '#000',
      'todoBorder':{
        DEFAULT: '#FAFAFA',
        light: '#000',
        dark: '#fff'
      },
    },
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

