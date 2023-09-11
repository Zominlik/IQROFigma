/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroImg': "url('../assets/img/Phone_.png')"
      },
      backgroundSize : {
        heroImg: "200px, 100%",
      }
    },
    screens: {
      'xs': {'max': '576px'},
      'sm': {'min': '576px', 'max': '768px'},
      'md': {'min': '768px', 'max': '992px'},
      'lg': {'min': '992px', 'max': '1200px'},
      'xl': {'min': '1200px', 'max': '1400px'},
      'xxl': {'min': '1400px',},
    },
  },
  plugins: [],
}