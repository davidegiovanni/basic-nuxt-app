import axios from './config/axios.config'
import i18n from './config/i18n.config'
import sitemap from './config/sitemap.config'

export default {
  mode: 'universal',
  env: {
    BASE_URL: 'https://davidegiovanni.com/'
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: ' %s - Davide Giovanni Steccanella',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/shared/favicon.png' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/style/index.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/jsonld'
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-80324273-1'
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    'nuxt-i18n',
    '@nuxtjs/sitemap',
    ['storyblok-nuxt', {
      accessToken: 'gYHLHlzSVBKFkmc2FvxqQwtt',
      cacheProvider: 'memory'
    }]
  ],
  axios,
  i18n,
  robots: {
    UserAgent: '*',
    Disallow: '',
    Allow: '/',
    Sitemap: (process.env.BASE_URL || 'http://localhost:3000') + '/sitemap.xml'
  },
  sitemap,
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
