 /** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./index.html",
     "./src/**/*",
    "./src/**/*.{html, js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':"#5f6FFF",
        'red' :"#dc143c",
        'yellow':"#60B5FF"
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
}