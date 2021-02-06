export default {
  baseUrl: process.env.BASE_URL,
  seo: false,
  vuex: false,
  strategy: 'prefix',
  parsePages: false,
  pages: {},
  locales: [
    {
      code: 'it',
      iso: 'it-IT',
      file: 'it-IT.ts'
    }
  ],
  lazy: true,
  langDir: 'locales/',
  defaultLocale: 'it',
  rootRedirect: 'it'
}