import axios from './config/axios.config.ts'
import i18n from './config/i18n.config.ts'
import sitemap from './config/sitemap.config.ts'

export default {
  head: {
    titleTemplate: ' %s | Davide Giovanni Steccanella',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#000000' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/website/images/shared/favicon.png' },
      { rel: 'apple-touch-icon', href: '/website/images/shared/apple-touch-icon.png' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/gnu4oxz.css'}
    ],
    script: []
  },
  env: {
    BASE_URL: process.env.BASE_URL  
  },
  css: [],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module'
  ],
  modules: [
    '@nuxtjs/axios',
    'nuxt-i18n',
    '@nuxtjs/sitemap'
  ],
  i18n,
  axios,
  sitemap,
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
      text: true
    }
  },
  fontLoader: {
    url: 'https://use.typekit.net/gnu4oxz.css',
    prefetch: true,
    preconnect: true
  },
  googleAnalytics: {
    id: 'UA-80324273-1'
  },
  build: {
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'js-yaml-loader'
      })
    }
  }
}
