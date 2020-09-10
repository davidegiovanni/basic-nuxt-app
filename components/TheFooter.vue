<template>
  <div :class="sectionClass">
    <footer :class="containerClass">
      <div class="flex flex-col flex-wrap">
        <div class="mb-8 sm:mb-0 md:w-1/2">
          <p class="text-4xl" >
            Davide Giovanni Steccanella
          </p>
          <p class="text-2xl text-gray-700" style="line-height: 1.5;">
            Costruisco immagini di brand che i tuoi clienti ameranno e non dimenticheranno
            <br>
            ❤️
          </p>
        </div>
        <div class="bg-gray-200 h-1 w-full my-8" />
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <div class="mb-8">
              <p class="flex flex-col my-4 text-2xl">
                Servizi
              </p>
              <nuxt-link :to="localePath({ name: 'brand', query: { from: 'footer'}})">
                <p class="mb-4 last:mb-0 hover:text-red-500">
                  Immagini di Brand
                </p>
              </nuxt-link>
              <nuxt-link :to="localePath({ name: 'communication', query: { from: 'footer'}})">
                <p class="mb-4 last:mb-0 hover:text-red-500">
                  Comunicazione di brand
                </p>
              </nuxt-link>
            </div>
            <div>
              <p class="flex flex-col my-4 text-2xl">
                Altro
              </p>
              <nuxt-link :to="localePath({ name: 'index', query: { from: 'footer'}})">
                <p class="mb-4 last:mb-0 hover:text-red-500">
                  Home
                </p>
              </nuxt-link>
              <nuxt-link :to="localePath({ name: 'me', query: { from: 'footer'}})">
                <p class="mb-4 last:mb-0 hover:text-red-500">
                  {{ $t('shared.header.about') }}
                </p>
              </nuxt-link>
              <nuxt-link :to="localePath({ name: 'portfolio', query: { from: 'footer'}})">
                <p class="mb-4 last:mb-0 hover:text-red-500">
                  {{ $t('shared.header.works') }}
                </p>
              </nuxt-link>
              <a href="https://medium.com/@davidegiovanni96" target="_blank" rel="noopener" class="mb-4 last:mb-0 hover:text-red-500">
                Blog
              </a>
            </div>
          </div>
          <div class="flex flex-col">
            <p class="my-4 text-2xl">
              {{ $t(`shared.footer.socials.title`) }}
            </p>
            <a
              v-for="social in $t(`shared.footer.socials.links`)"
              :key="social.link"
              :href="social.link"
              class="mb-4 last:mb-0 hover:text-indigo-400"
              target="_blank"
              rel="noopener"
            >
              {{ social.title }}
            </a>
          </div>
          <a href="mailto:davidegiovanni96@gmail.com">
            <div class="bg-black py-4 px-6 mt-4 inline-block text-white shadow-lg hover:shadow-xl focus:shadow-md rounded-lg">
              <span class="flex items-center hover:animate-pulse tracking-widest">
                Scrivimi
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="arrow-right w-6 h-6 ml-2"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </div>
          </a>
        </div>
      </div>
      <div>
        <p class="flex flex-col mt-8 mb-2 text-2xl">
          🌍 Scegli la lingua
        </p>
        <div class="flex">
          <nuxt-link :class="[{ 'text-gray-600 bg-gray-200 rounded-lg px-2': this.$i18n.locale === 'it'}, { 'hover:text-gray-500': this.$i18n.locale !== 'it' }]" class="mr-8 hover:text-gray-500" :to="switchLocalePath('it')">Italian</nuxt-link>
          <nuxt-link :class="[{ 'text-gray-600 bg-gray-200 rounded-lg px-2': this.$i18n.locale === 'en'}, { 'hover:text-gray-500': this.$i18n.locale !== 'en' }]" :to="switchLocalePath('en')">English</nuxt-link>
        </div>
      </div>
      <div class="text-sm relative flex items-center justify-between" style="bottom: -100px;">
        <a class="hover:text-purple-600" href="/cookie-policy.pdf">
          Cookie Policy
        </a>
        <p>
          {{ $t(`shared.footer.copyright`) }}
        </p>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  components: {

  },
  computed: {
    sectionClass () {
      return 'pt-12 pb-32'
    },
    containerClass () {
      return 'max-w-screen-xl m-auto px-8'
    },
    h1Class () {
      return 'text-3xl '
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
