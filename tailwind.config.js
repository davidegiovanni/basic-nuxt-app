module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      'sans': ['Karla', 'sans-serif'],
      'display': ['Domine', 'serif']
    },
    extend: {
      screens: {
        '3xl': '1600px',
      },
      spacing: {
        'half': '50%',
        80: '80%',
        full: '100%'
      },
      height: {
        300: '300px',
        400: '400px',
        500: '500px'
      },
      opacity: {
        95: '0.95'
      },
      boxShadow: {
        'volume-shadow': '0px 4px 4px rgba(0,0,0,0.08), 0px 0px 2px rgba(0,0,0,0.1),inset 0px -1px 1px rgba(0,0,0,0.15), 0px 4px 4px rgba(0,0,0,0.08),0px 0px 2px rgba(0,0,0,0.1),inset 0px -1px 1px rgba(0,0,0,0.15), inset 0px 2px 2px rgba(255,255,255,0.5), 0px 18px 26px rgba(0,0,0,0.2)',
        'volume-shadow-inset': '0px -0.75px 0.75px rgba(0,0,0,0.25),0px 1px 2px rgba(255,255,255,0.2),inset 0px 1px 4px rgba(0,0,0,0.15), 0px -0.75px 0.75px rgba(0,0,0,0.25),0px 1px 2px rgba(255,255,255,0.18),inset 0px 2px 5px rgba(0,0,0,0.2)'
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
}
