/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Cairo: ['"Cairo"']
      },
      fontSize: {
        '14px': '14px',
        '50px':'50px'
      
      },
      height: {
        '500px': '500px',
        '475px' : '475px'
      },
      width: {
        '570px': '570px',
      },
     
    
    },
  },
  plugins: [],
}
