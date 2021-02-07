<template>
  <div>
    <div class="p-4 relative">
      <div :class="sectionClass" class="h-screen bg-black flex items-center justify-start">
        <div class="md:w-3/5 p-6 md:p-12 bg-black rounded-3xl relative z-50">
          <div class="relative">
            <h1 :class="titleClass" :style="'background-image: url(https://68.media.tumblr.com/a952925d1014a0e34fae29a119b3b357/tumblr_orp0u451NY1r8dxfio1_540.gif)'" style="filter: saturate(250%); background-clip: text; background-clip: text; -webkit-background-clip: text; color: rgba(250,250,250,0.45);">
              {{ $t('shared.errors.notfoundpage.title') }}
            </h1>
          </div>
          <h2 class="mt-2 md:mt-6 mb-4 md:mb-8 md:text-xl text-white">
            {{ $t('shared.errors.notfoundpage.description1') }}
            <br>
            <span class="my-2 rounded text-white bg-white bg-opacity-25 px-2 py-1 inline-block">
              {{ $route.path }}
            </span>
            <br>
            {{ $t('shared.errors.notfoundpage.description2') }}
          </h2>
          <nuxt-link :to="localePath('index')" class="bg-white text-black inline-block rounded-full px-8 py-2 text-xl hover:bg-opacity-75">
            {{ $t('shared.errors.notfoundpage.action') }}
          </nuxt-link>
        </div>
        <img class="absolute top-0 left-0 h-full w-full object-cover" src="https://68.media.tumblr.com/a952925d1014a0e34fae29a119b3b357/tumblr_orp0u451NY1r8dxfio1_540.gif" :alt="$t('shared.errors.notfoundpage.title')">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component } from 'nuxt-property-decorator'
import metadata from '@/utils/metadata.ts'

@Component({
})
export default class ErrorPage extends Vue {

  head () {
    return {
      title: this.$t('shared.errors.notfoundpage.title'),
      meta: metadata({
        title: this.$t('shared.errors.notfoundpage.title'),
        description: this.$t('shared.errors.notfoundpage.title'),
        url: process.env.BASE_URL + this.$route.path,
        image: process.env.BASE_URL + '/website/images/shared/og-image.png'
      }),
      link: [
        {
          rel: 'canonical',
          href: process.env.BASE_URL + this.$route.path
        }
      ],
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    }
  }
  
  // ListPublicContents per tutti i post di una directory e GetPublicDirectory dettagli Directory

  get titleClass () {
    return 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight relative z-50'
  }

  get sectionClass () {
    return 'rounded-3xl lg:h-screen p-12 overflow-hidden relative'
  }
}
</script>