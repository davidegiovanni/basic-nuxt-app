export default {
  baseUrl: process.env.BASE_URL,
  seo: false,
  strategy: 'prefix',
  parsePages: false,
  pages: {
    'me/index': {
      en: '/not-just-a-brand-designer',
      it: '/non-solo-un-brand-designer'
    },
    'brand/index': {
      en: '/design-winning-brand-image',
      it: '/immagine-di-brand-vincente'
    },
    'communication/index': {
      en: '/strong-brand-communication',
      it: '/comunicazione-di-brand-efficace'
    },
    'portfolio/index': {
      en: '/brand-design-works-and-projects',
      it: '/lavori-e-progetti-di-brand-design'
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
