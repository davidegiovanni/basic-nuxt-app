<template>
  <div  class="bg-black overflow-hidden">
      <div class="h-600 lg:h-screen w-full px-4 pt-8 mb-32 lg:mb-64 relative border-b-2 border-white" style="max-height: 900px;">
      <div id="finestra" class="max-w-screen-sm mx-auto w-full overflow-hidden rounded-t-full h-full relative">
        <div id="stella" class="absolute top-0 inset-x-0 w-full flex items-center justify-center mt-16 z-20">
          <div class="w-24 lg:w-32 h-24 lg:h-32">
            <svg-switcher file="star" />
          </div>
        </div>
        <img id="cielo" class="absolute inset-0 w-full h-full object-cover" src="/website/images/homepage/landscape.webp" alt="Una foto mossa di un campo di fiori con una donna in vestito rosso che balla dandoci le spalle">
      </div>
      <div class="absolute inset-0 max-w-screen-lg mx-auto w-full text-center h-full flex items-center justify-center mix-blend-lighten z-10 pointer-events-none">
        <h2 class="text-4xl xl:text-9xl text-white font-display">
          Questa pagina non esiste
        </h2>
      </div>
      <div class="absolute bottom-0 inset-x-0 flex flex-col items-center justify-center transform translate-y-20 lg:translate-y-32">
        <nuxt-link id="backhome" :to="localePath('/')" class="block mb-8 text-white font-medium uppercase underline">
          Torna alla home
        </nuxt-link>
        <div id="backhome" class="w-1/2 lg:w-1/5 mx-auto" style="max-width: 200px;">
          <svg-switcher file="ellipse" />
        </div>
      </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import metadata from '@/utils/metadata'
import magneticButton from '@/utils/magneticButton'

import logo from '@/components/shared/TheLogo.vue'
import SvgSwitcher from '@/components/shared/SvgSwitcher.vue'

export default Vue.extend({
  head (): any {
    return {
      title: this.$t('shared.errors.notfoundpage.title'),
      meta: metadata({
        title: this.$t('shared.errors.notfoundpage.title'),
        description: this.$t('shared.errors.notfoundpage.title'),
        url: process.env.BASE_URL + this.$route.path,
        image: process.env.BASE_URL + '/website/images/shared/first-mesh.png'
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
  },
  components: {
    logo,
    SvgSwitcher
  },
  mounted () {
    new magneticButton(document.getElementById('backhome'))
  }
})
</script>