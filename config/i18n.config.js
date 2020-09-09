export default {
  baseUrl: process.env.BASE_URL,
  seo: false,
  strategy: 'prefix',
  parsePages: false,
  pages: {
    'about/index': {
      en: '/about-me',
      it: '/chi-sono'
    },
    'brand/index': {
      en: '/design-winning-brand-image',
      it: '/immagine-di-brand-vincente'
    }
  },
  locales: [
    {
      code: 'it',
      iso: 'it-IT',
      file: 'it-IT.js'
    },
    {
      code: 'en',
      iso: 'en-EN',
      file: 'en-EN.js'
    }
  ],
  lazy: true,
  langDir: 'locales/',
  defaultLocale: 'it',
  rootRedirect: 'it'
}
