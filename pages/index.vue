<template>
  <div id="viewport">
    <div id="content" class="bg-black">
      <div class="h-500 md:h-600 lg:h-screen w-full px-4 pt-8 mb-32 lg:mb-64 relative border-b-2 border-white" style="max-height: 900px;">
        <div id="finestra" class="max-w-screen-sm mx-auto w-8/12 md:w-1/2 lg:w-full overflow-hidden rounded-t-full h-full relative" style="webkit-mask-image: -webkit-radial-gradient(white, black); clip-path: content-box; -webkit-clip-path: content-box;">
          <div id="stella" class="absolute top-0 inset-x-0 w-full flex items-center justify-center mt-8 lg:mt-16 z-20">
            <div class="w-20 lg:w-32 h-20 lg:h-32">
              <svg-switcher file="star" />
            </div>
          </div>
          <img id="cielo" class="absolute inset-0 w-full h-full object-cover" src="/website/images/homepage/sky-gradient.webp" alt="Gradiente di un cielo azzurro pacifico con nuvole rosa">
        </div>
        <div class="absolute inset-0 max-w-screen-lg mx-auto w-10/12 md:w-8/12 lg:w-full h-auto lg:h-full flex items-center justify-center mix-blend-lighten z-10 pointer-events-none">
          <logo id="logo" />
        </div>
        <div class="absolute inset-0 w-full h-full max-w-screen-lg mx-auto w-10/12 md:w-8/12 lg:w-full h-auto lg:h-full flex items-center justify-center mix-blend-overlay z-20 pointer-events-none">
          <logo id="logo2" />
        </div>
        <div id="scroll" class="absolute bottom-0 inset-x-0 flex flex-col items-center justify-center transform translate-y-20">
          <div class="mb-8 text-white font-medium uppercase">
            Scroll
          </div>
          <div class="w-1/2 lg:w-1/5 mx-auto" style="max-width: 200px;">
            <svg-switcher file="ellipse" />
          </div>
        </div>
      </div>
      <section class="px-4 pb-16 md:pb-24 lg:pb-32">
        <div class="max-w-screen-xl mx-auto py-8 border-t border-b border-white relative">
          <h2 class="uppercase uppercase text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-white introText text-white introText">
            Brand costruiti con un metodo <span class="font-display text-rosa">unico</span>. Siti web pronti per <span class="font-display text-viola">conquistare</span> di tutto. Brand squisiti di <span class="font-display text-ghiaccio">altissima qualità</span>. <span class="font-display text-porpora">Davide</span> è il tuo biglietto per uno spettacolo di <span class="font-display text-cielo">brand</span>
          </h2>
          <div class="inline-block absolute bottom-0 right-0 z-10 transform translate-y-4">
            <p class="uppercase px-4 bg-black text-white">
              WOW!
            </p>
          </div>
        </div>
      </section>
      <section id="stripSection" class="overflow-hidden pb-16 md:pb-24 lg:pb-32">
        <div id="horizontalStrip" class="text-white lg:flex items-center w-screen justify-start max-w-screen-xl mx-auto">
          <div class="flex-none w-full lg:w-1/3 max-w-screen-sm p-8">
            <h2>
              {{ sections[0].title }}
            </h2>
          </div>
          <div style="width: clamp(600px, 100vw, 2500px); webkit-mask-image: -webkit-radial-gradient(white, black);" class="flex-none h-40 lg:h-72 transform translate-x-1/3 lg:translate-x-0 overflow-hidden rounded-full shrink-0 relative px-8">
            <span class="absolute top-0 left-0 w-32 lg:w-64 h-32 lg:h-64 border border-white z-10 rounded-full m-4" />
            <img class="absolute top-0 left-0 inset-0 w-full h-full object-cover" :src="sections[0].image" :alt="sections[0].title">
            <div class="w-full h-full flex items-center justify-center absolute inset-0 z-10">
              <div class="w-24 lg:w-32 h-24 lg:h-32">
                <svg-switcher file="star" />
              </div>
            </div>
            <span class="absolute top-0 right-0 w-32 lg:w-64 h-32 lg:h-64 border border-white z-10 rounded-full m-4" />
          </div>
          <div class="flex-none w-screen transform translate-x-full lg:translate-x-0 lg:w-1/3 lg:max-w-screen-sm p-8">
            <p>
              {{ sections[0].description }}
            </p>
          </div>
          <div class="flex-none w-0 lg:w-1/3 max-w-screen-sm p-8" />
        </div>
      </section>
      <section class="px-4">
        <div class="border-white border-2 rounded-3xl md:rounded-huge p-8 max-w-screen-2xl mx-auto flex items-center justify-center relative" style="height: clamp(500px, 100vh, 1200px);">
          <div class="relative z-10 max-w-screen-lg px-4">
            <h2 class="text-white font-display text-center" :style="`${fluidType(32, 96, 300, 2400, 1.5)}`">
              {{ sections[1].title }}
            </h2>
          </div>
          <div class="absolute w-full h-full inset-0 flex items-center justify-center">
            <div v-for="n in 4" :key="n" :class="`${n === 1 || n === 2 ? 'top-0' : 'bottom-0'} ${n === 1 || n === 4 ? 'left-0' : 'right-0'}`" class="w-16 md:w-32 h-16 md:h-32 absolute m-4 md:m-16">
              <svg-switcher file="rays" />
            </div>
            <div class="rounded-t-full rounded-b-full h-4/5 w-8/12 md:w-1/2 lg:w-1/3 max-w-screen-sm p-4 bg-cover bg-no-repeat bg-center relative" :style="`background-image: url('${sections[1].image}')`">
              <div class="w-20 lg:w-32 h-20 lg:h-32 absolute top-0 right-0 transform translate-y-48 translate-x-10 lg:translate-x-16">
                <svg-switcher file="star" />
              </div>
              <div class="h-1/3 rounded-t-full border-2 border-black flex flex-col items-center justify-end">
                <p class="uppercase">
                  {{ sections[1].primaryLink.title }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-screen-lg mx-auto mb-8 md:mb-16 lg:mb-32">
          <div class="text-white uppercase text-center font-medium my-8 md:my-16 lg:my-32" :style="`${fluidType(16, 40, 300, 2400, 1.5)}`">
            {{ sections[1].description }}
          </div>
          <div class="mx-auto w-20 lg:w-32 h-20 lg:h-32">
            <svg-switcher file="star" />
          </div>
        </div>
      </section>
      <div class="h-500 lg:h-screen p-4 md:p-8" style="max-height: 900px;">
        <div id="contactbox" class="overflow-hidden relative max-w-screen-2xl mx-auto w-full h-full flex items-center justify-center rounded-3xl md:rounded-huge" style="webkit-mask-image: -webkit-radial-gradient(white, black); clip-path: content-box; -webkit-clip-path: content-box;">
          <a id="contactme" @mouseenter="toggleButton(true)" @mouseleave="toggleButton(false)" href="https://form.typeform.com/to/BR9qD3pl" target="_blank" rel="noopener" class="oval block w-11/12 mx-auto py-16 lg:py-32 border-4 border-black relative z-20 text-center text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-medium uppercase">
            Contattami
          </a>
          <img id="drape" class="absolute inset-0 object-cover w-full h-full z-10" src="/website/images/homepage/drape.webp" alt="Un drappo color ocra illuminato da una luce morbida">
        </div>
      </div>
      <div id="credits" class="w-screen text-white px-4 mt-2 mt-12 lg:mt-24 mb-12">
        <credits />
      </div>
      <div id="logodefault" class="w-full text-white px-4 h-16 md:h-24 lg:h-64">
        <div class="w-full h-full transform translate-y-4 lg:translate-y-24 flex items-center justify-center">
          <logo id="logo3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import metadata from '@/utils/metadata'
import magneticButton from '@/utils/magneticButton'
import { getters } from '~/store'
import { gsap } from "gsap"
import { smoothScroll, fluidType } from '@/utils/utils'
import { ScrollTrigger } from "gsap/ScrollTrigger"

import logo from '@/components/shared/TheLogo.vue'
import credits from '@/components/shared/Credits.vue'
import SvgSwitcher from '@/components/shared/SvgSwitcher.vue'

export default Vue.extend({
  data (): any {
    return {
      window: {},
      isMobile: false,
      isTablet: false,
      isSmallDesktop: false,
      isDesktop: false,
      isBigDesktop: false,
      isHugeDesktop: false
    }
  },
  head (): any {
    return {
      title: this.meta.title,
      meta: metadata({
        title: this.meta.title,
        description: this.meta.description,
        url: process.env.BASE_URL + this.$route.path,
        image: this.meta.image,
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
    // pinned animations

    this.window = window
    smoothScroll('#content', '#viewport', 2)
    this.scrollStrip()
    this.contactsAnimation()
    this.showLogo()

    this.setViewportType()
    if (!this.isMobile && !this.isTablet && !this.isSmallDesktop) {
      new magneticButton(document.getElementById('logo'))
      new magneticButton(document.getElementById('logo2'))
    }
    // animations
    this.headerAnimations()
  },
  components: {
    logo,
    credits,
    SvgSwitcher
  },
  computed: {
    index (): any {
      return this.$store.getters['indexPage'] as ReturnType<typeof getters.indexPage>
    },
    webErr (): any {
      return this.$store.getters['webErr'] as ReturnType<typeof getters.webErr>
    },
    meta(): any {
      const title = this.index.title !== '' ? this.index.title : this.$t('index.meta.title')
      const description = this.index.description !== '' ? this.index.description : this.$t('index.meta.description')
      const image = this.index.image !== '' ? this.index.image : `${process.env.BASE_URL}/website/images/shared/og-image.png`

      const errorTitle = this.$t('shared.errors.notfoundpage.title')
      const errorDescription = this.$t('shared.errors.notfoundpage.title')
      const errorImage = `${process.env.BASE_URL}/website/images/shared/og-image.png`
      return this.webErr ? { errorTitle, errorDescription, errorImage } : { title, description, image }
    },
    sections(): any {
      return this.index.sections
    }
  },
  methods: {
    setViewportType () {
      const windowWidth = window.innerWidth
      if (windowWidth <= 640) {
        this.isMobile = true
        this.isTablet = false
        this.isSmallDesktop = false
        this.isDesktop = false
        this.isBigDesktop = false
        this.isHugeDesktop = false
      } else if (windowWidth <= 768 && windowWidth > 640) {
        this.isMobile = false
        this.isTablet = true
        this.isSmallDesktop = false
        this.isDesktop = false
        this.isBigDesktop = false
        this.isHugeDesktop = false
      } else if (windowWidth <= 1024 && windowWidth > 768) {
        this.isMobile = false
        this.isTablet = false
        this.isSmallDesktop = true
        this.isDesktop = false
        this.isBigDesktop = false
        this.isHugeDesktop = false
      } else if (windowWidth <= 1280 && windowWidth > 1024) {
        this.isMobile = false
        this.isTablet = false
        this.isSmallDesktop = false
        this.isDesktop = true
        this.isBigDesktop = false
        this.isHugeDesktop = false
      } else if (windowWidth <= 1536 && windowWidth > 1280) {
        this.isMobile = false
        this.isTablet = false
        this.isSmallDesktop = false
        this.isDesktop = false
        this.isBigDesktop = true
        this.isHugeDesktop = false
      } else {
        this.isMobile = false
        this.isTablet = false
        this.isSmallDesktop = false
        this.isDesktop = false
        this.isBigDesktop = false
        this.isHugeDesktop = true
      }
    },
    headerAnimations () {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#content',
          start: "top -10%",
          end: 'bottom bottom',
          anticipatePin: 1,
          scrub: true
        }
      })
      tl.to('#cielo', {
        scale: 1.25,
        y: 500
      }, '<')
      //stella
      tl.to('#stella', {
        rotate: 360
      }, '<')
      // scroll
      tl.to('#scroll', {
        yPercent: -100
      }, '<')
      // loghi
      tl.to('#logo', {
        y: -2000
      }, '<')
      tl.to('#logo2', {
        y: -2000
      }, '<')
    },
    toggleButton(toggled: boolean) {
      gsap.to('#contactme', {
        backgroundColor: toggled ? 'white' : 'transparent',
        duration: 2
      })
    },
    showLogo () {
      gsap.from('#logodefault', {
        opacity: 0,
        y: 100,
        scale: 0.75,
        duration: 2,
        delay: 0.5,
        scrollTrigger: {
          trigger: '#credits',
          start: 'bottom bottom-=5%',
          toggleActions: "play none none reverse",
          markers: true
        }
      })
    },
    contactsAnimation () {
      const scrollTriggerObj = {
        trigger: '#contactbox',
        start: "top bottom",
        end: 'center center',
        scrub: true,
        markers: true
      }
      gsap.from('#contactbox', {
        scale: 0.85,
        duration: 2,
        scrollTrigger: scrollTriggerObj
      })
      gsap.from('#contactme', {
        opacity: 0,
        duration: 2,
        scrollTrigger: scrollTriggerObj
      })
      // drape
      gsap.from('#drape', {
        scale: 1.20,
        opacity: 0.80,
        duration: 2,
        scrollTrigger: scrollTriggerObj
      })
    },
    scrollStrip() {
      let strip = document.getElementById('horizontalStrip') as any
      gsap.utils.toArray("#horizontalStrip").forEach(strip => {
        ScrollTrigger.create({
          trigger: strip as gsap.DOMTarget,
          pin: true,
          start: "center center",
          end: () => "+=" + (strip as any).offsetWidth
        })
      })
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: strip,
          start: "center center",
          end: () => "+=" + strip.offsetWidth,
          anticipatePin: 1,
          scrub: true
        }
      })
      tl.to(strip, {
        x: -`${strip.offsetWidth + (strip.offsetWidth / 4)}`,
        duration: 2
      })
    },
    fluidType(min: number, max: number, screenMin: number, screenMax: number, line: number) {
      return fluidType(min, max, screenMin, screenMax, line)
    }
  }
})
</script>

<style scoped>
.oval {
  border-radius: 100%
}
.horizontal-perfect-circle:after {
  content: "";
  display: block;
  padding-left: 100%;
}

</style>