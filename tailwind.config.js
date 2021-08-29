module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light: '#f4f1ea',
        dark: '#34312c'
      }
  },
  variants: {
    extend: {}
    }
  },
  plugins: []
};
