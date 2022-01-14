<template>
  <div id="body" class="bg-black overflow-hidden">
    <div class="h-600 lg:h-screen w-full px-4 pt-8 mb-32 lg:mb-64 relative border-b-2 border-white" style="max-height: 900px;">
      <div id="finestra" class="max-w-screen-sm mx-auto w-full overflow-hidden rounded-t-full h-full relative">
        <div id="stella" class="absolute top-0 inset-x-0 w-full flex items-center justify-center mt-16 z-20">
          <div class="w-24 lg:w-32 h-24 lg:h-32">
            <svg-switcher file="star" />
          </div>
        </div>
        <img id="cielo" class="absolute inset-0 w-full h-full object-cover" src="/website/images/homepage/sky-gradient.webp" alt="Gradiente di un cielo azzurro pacifico con nuvole rosa">
      </div>
      <div class="absolute inset-0 max-w-screen-lg mx-auto w-full h-full flex items-center justify-center mix-blend-lighten z-10 pointer-events-none">
        <logo id="logo" />
      </div>
      <div class="absolute inset-0 w-full h-full max-w-screen-lg mx-auto flex items-center justify-center mix-blend-overlay z-20 pointer-events-none">
        <logo id="logo2" />
      </div>
      <div id="scroll" class="absolute bottom-0 inset-x-0 flex flex-col items-center justify-center transform translate-y-20 lg:translate-y-32">
        <div class="mb-8 text-white font-medium uppercase">
          Scroll
        </div>
        <div class="w-1/2 lg:w-1/5 mx-auto">
          <svg-switcher file="ellipse" />
        </div>
      </div>
    </div>
    <div class="h-500 lg:h-screen p-4 md:p-8" style="max-height: 900px;">
      <div id="contactbox" class="overflow-hidden relative max-w-screen-2xl mx-auto w-full h-full flex items-center justify-center rounded-3xl md:rounded-huge">
        <a id="contactme" @mouseenter="toggleButton(true)" @mouseleave="toggleButton(false)" href="https://form.typeform.com/to/BR9qD3pl" target="_blank" rel="noopener" class="oval block w-11/12 mx-auto py-16 lg:py-32 border-4 border-black relative z-10 text-center text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-medium uppercase">
          Contattami
        </a>
        <img id="drape" class="absolute inset-0 object-cover w-full h-full" src="/website/images/homepage/drape.webp" alt="Un drappo color ocra illuminato da una luce morbida">
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
  data (): any {
    return {}
  },
  head (): any {
    return {
      title: this.$t('index.meta.title'),
      meta: metadata({
        title: this.$t('index.meta.title'),
        description: this.$t('index.meta.description'),
        url: process.env.BASE_URL + this.$route.path,
        image: process.env.BASE_URL + '/website/images/shared/og-image.png',
        robots: 'index, follow'
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
  mounted () {
    new magneticButton(document.getElementById('logo'))
    new magneticButton(document.getElementById('logo2'))
    // animations

    this.contactsAnimation()
    this.headerAnimations()
  },
  components: {
    logo,
    SvgSwitcher
  },
  computed: {},
  methods: {
    headerAnimations () {
      this.$gsap.to('#cielo', {
        scale: 1.25,
        y: 100,
        duration: 2,
        scrollTrigger: {
          trigger: '#cielo',
          start: 'top top',
          toggleActions: "play none none reverse"
        }
      })
      //stella
      this.$gsap.to('#stella', {
        rotate: 360,
        duration: 2,
        scrollTrigger: {
          trigger: '#scrolling',
          start: 'top top',
          toggleActions: "play none none reverse"
        }
      })
      // scroll
      this.$gsap.to('#scroll', {
        yPercent: -20,
        duration: 2,
        scrollTrigger: {
          trigger: '#scrolling',
          start: 'top -25%',
          toggleActions: "play none none reverse"
        }
      })
      // loghi
      this.$gsap.to('#logo', {
        y: -100,
        duration: 2,
        scrollTrigger: {
          trigger: '#scrolling',
          start: 'top top',
          toggleActions: "play none none reverse"
        }
      })
      this.$gsap.to('#logo2', {
        y: -100,
        duration: 2,
        scrollTrigger: {
          trigger: '#scrolling',
          start: 'top top',
          toggleActions: "play none none reverse"
        }
      })
    },
    toggleButton(toggled: boolean) {
      this.$gsap.to('#contactme', {
        backgroundColor: toggled ? 'white' : 'transparent',
        duration: 2
      })
    },
    contactsAnimation () {
      this.$gsap.from('#contactbox', {
        scale: 0.95,
        duration: 2,
        scrollTrigger: {
          trigger: '#contactbox',
          start: 'top 50%',
          toggleActions: "play none none reverse"
        }
      })
      // drape
      this.$gsap.from('#drape', {
        scale: 1.10,
        duration: 2,
        scrollTrigger: {
          trigger: '#drape',
          start: 'top 50%',
          toggleActions: "play none none reverse"
        }
      })
    }
  }
})
</script>

<style scoped>
.oval {
  border-radius: 100%
}
</style>