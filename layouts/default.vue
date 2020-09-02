<template>
  <div>
    <the-header />
    <nuxt />
    <the-footer />
    <the-cookie-banner class="fixed left-0 bottom-0 w-full md:w-cookie-banner md:m-4" />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
import TheCookieBanner from '@/components/TheCookieBanner'

export default {
  jsonld () {
    return {
      '@context': 'http://schema.org',
      '@type': 'Service',
      name: this.$t('schema.service.name'),
      category: 'design',
      serviceType: ['Brand design', 'Logo design', 'Design systems', 'Sviluppo marchio e immagine coordinata', 'Content strategy'],
      url: process.env.BASE_URL,
      areaServed: {
        '@type': 'State',
        name: 'Italia'
      },
      provider: {
        '@type': 'Person',
        name: 'Davide Giovanni Steccanella',
        email: 'davidegiovanni96@gmail.com',
        jobTitle: ['brand designer', 'visual designer', 'UI designer', 'Augmented Reality designer', 'SparkAR Creator'],
        knowsLanguage: [
          {
            '@type': 'Language',
            name: 'Italiano',
            alternateName: 'it'
          },
          {
            '@type': 'Language',
            name: 'English',
            alternateName: 'en'
          }
        ]
      },
      sameAs: [
        'https://dribbble.com/davidegiovanni',
        'https://github.com/davidegiovanni',
        'https://www.behance.net/dvgs',
        'https://www.linkedin.com/in/davidegiovanni96/',
        'https://medium.com/@davidegiovanni96'
      ]
    }
  },
  components: {
    TheHeader,
    TheFooter,
    TheCookieBanner
  },
  head () {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      htmlAttrs: {
        ...i18nSeo.htmlAttrs
      },
      meta: [
        ...i18nSeo.meta
      ],
      link: [
        ...i18nSeo.link
      ]
    }
  }
}
</script>
