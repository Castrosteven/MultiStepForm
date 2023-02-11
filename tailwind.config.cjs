/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-header': "url('../assets/bg-sidebar-mobile.svg')",
        'desktop-header': "url('../assets/bg-sidebar-desktop.svg')",

      }, fontFamily: {
        sans: ['Ubuntu', 'sans-serif']
      },colors:{
        primaryBlue:'#032a58',
        secondaryGray:'#adadb7',
        lightBlue:'#f8f9fe'
      }
    },
  },
  plugins: [],
}
