import axios from './config/axios.config.ts'
import i18n from './config/i18n.config.ts'
import sitemap from './config/sitemap.config.ts'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: ' %s | Davide Giovanni Steccanella',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/website/images/shared/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet'}
    ],
    script: []
  },
  env: {
    BASE_URL: process.env.BASE_URL  
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
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
  googleAnalytics: {
    id: 'UA-80324273-1'
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'js-yaml-loader'
      })
    }
  }
}
