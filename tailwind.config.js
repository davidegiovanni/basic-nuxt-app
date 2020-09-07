module.exports = {
  theme: {
    fontFamily: {
      sans: ['Urbane', 'sans-serif']
    },
    extend: {
      width: {
        'cookie-banner': '300px'
      },
      height: {
        '500': '600px'
      }
    }
  },
  variants: {
    display: ['responsive'],
    padding: ['responsive', 'hover', 'focus', 'last'],
    animation: ['responsive', 'hover', 'focus']
  },
  plugins: []
}
