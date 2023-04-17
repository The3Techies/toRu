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
        '47rem': '47rem',
      },
      backgroundImage: {
        'WhyRussia-hero': "url('./assets/imgWhyRussia/hero.png')",
        'WhyRussia-heroSS': "url('./assets/imgWhyRussia/heroSS.png')"
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
    },
  
  }
  
}
