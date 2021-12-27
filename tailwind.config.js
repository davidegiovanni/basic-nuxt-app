module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      'sans': ['itc-avant-garde-gothic-pro', 'sans-serif'],
      'display': ['tuppence', 'serif'],
      'mono': ['Basteleur-Bold', 'serif']
    },
    scale: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '150': '1.5',
      '200': '2',
      '300': '3',
      '400': '4',
      '500': '5',
      '600': '6',
      '3xl': '300'
    },
    extend: {
      screens: {
        '3xl': '1600px',
      },
      spacing: {
        'half': '48%',
        80: '80%',
        full: '95%'
      },
      height: {
        300: '300px',
        400: '400px',
        500: '500px',
        600: '600px'
      },
      width: {
        '50vw': '50vw',
        '70vw': '70vw',
        '90vw': '90vw'
      },
      opacity: {
        95: '0.95'
      },
      boxShadow: {
        'volume-shadow': '0px 4px 4px rgba(0,0,0,0.08), 0px 0px 2px rgba(0,0,0,0.1),inset 0px -1px 1px rgba(0,0,0,0.15), 0px 4px 4px rgba(0,0,0,0.08),0px 0px 2px rgba(0,0,0,0.1),inset 0px -1px 1px rgba(0,0,0,0.15), inset 0px 2px 2px rgba(255,255,255,0.5), 0px 18px 26px rgba(0,0,0,0.2)',
        'volume-shadow-inset': '0px -0.75px 0.75px rgba(0,0,0,0.25),0px 1px 2px rgba(255,255,255,0.2),inset 0px 1px 4px rgba(0,0,0,0.15), 0px -0.75px 0.75px rgba(0,0,0,0.25),0px 1px 2px rgba(255,255,255,0.18),inset 0px 2px 5px rgba(0,0,0,0.2)'
      },
      colors: {
        'arancione': '#FF7A00',
        'pesca': '#FF8888',
        'viola': '#6700A6',
        'porpora': '#A6001E',
        'ghiaccio': '#BAFFFB',
        'notte': '#003667',
        'muschio': '#007D76'
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
}
