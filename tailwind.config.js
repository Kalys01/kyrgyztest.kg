const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // content: [
  //   "./index.html",
  //   "./src/**/*.{vue,js,ts,jsx,tsx}"
  // ],
  theme: {
    screens: {
      '2xl': '1536px',
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      'sm': '640px',
      'xs': '475px'
    },
    
    extend: {
      colors: {
        mainColor: '#673AB7',
        hoverColor: '#794ac9',
        darkColor: colors.gray,
        errorColor: colors.red,
      },
    },
    
  },
  plugins: [],
}
