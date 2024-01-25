/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily:{
        arial:'Arial',
        exo2:'Exo2',
        lato:'Lato',
        nunito: 'Nunito',
        sofiaSans:'Sofia Sans',
        poppins:'Poppins',
      },
  },
  plugins: [],
}