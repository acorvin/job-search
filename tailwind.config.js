const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'brand-grey': '#dadce0',
        'brand-blue': '#1967d2',
        'brand-green': '#137333',
      },
      boxShadow: {
        blue: '0 0 2px 2px #4285f4',
      },
    },
  },
  plugins: [],
};
