/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      md: '768px',
      lg: '1024px'
    },
    colors:{
      blue: '#A1EAFB',
      'blue-light': '#D8F8FF',
      'blue-lighter': '#EFFCFF',
      gray: '#FDFDFD',
    },
    extend: {},
  },
  plugins: [],
}

