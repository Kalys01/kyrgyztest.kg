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
    
    extend: {},
  },
  plugins: [],
}
