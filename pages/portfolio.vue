<template>
  <div id="scroller" class="h-screen w-screen fixed top-0 inset-0 overflow-y-auto">
    <nuxt-link :to="localePath('/')" id="backButton" class="block overflow-hidden fixed top-0 left-0 bg-black text-white w-32 flex items-center justify-center h-12 border border-white bg-black m-8 z-50" style="border-radius: 100%;">
      <span class="relative z-10">Back</span>
      <div id="bg" class="absolute top-0 left-0 w-full h-full bg-arancione block" style="border-radius: 100%;" />
    </nuxt-link>
    <div class="w-full h-full flex flex-col items-center justify-center relative z-10">
      <h1 class="sr-only">
        Portfolio lavori
      </h1>
      <div :id="project.id" v-for="project in projects" :key="project.id" class="mb-8 w-2/3 flex items-center justify-center">
        <a :href="project.href" target="_blank" rel="noopener">
          <h2 @mouseenter="togglePreview(project.id, true)" @mouseleave="togglePreview('', false)" class="font-display text-2xl md:text-4xl lg:text-7xl cursor-pointer text-transparent text-outline inline-block">
            {{ project.name }}
          </h2>
        </a>
      </div>
    </div>
    <div v-if="work !== ''" class="fixed flex items-center justify-center left-0 top-0 w-full h-full p-8" style="opacity: 1 !important;">
      <img class="w-full h-4/5 object-cover overflow-hidden" :src="`/website/images/homepage/projects/${work}.png`" alt="" style="border-radius: 100%;">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import metadata from '@/utils/metadata'
import magneticButton from '@/utils/magneticButton'

export default Vue.extend({
  layout: 'simple',
  data(): any {
    return {
      isShowingPreview: false,
      window: {},
      work: '',
      projects: [
        { id: 'revasos', name: 'I. RevasOS', href: 'https://revas.app'},
        { id: 'voxel', name: 'II. Voxel', href: 'https://voxel.community'},
        { id: 'holydavid', name: 'III. Holy David', href: 'https://holydavid.art'},
        { id: 'simulacrum', name: 'IV. Simulacrum', href: 'https://simulacrum.holydavid.art'},
        { id: 'revas', name: 'V. Revas', href: 'https://revas.io'},
        { id: 'davide', name: 'VI. Davide', href: 'https://davidegiovanni.com'}
      ],
    }
  },
  head (): any {
    return {
      title: 'Lavori',
      meta: metadata({
        title: 'Portfolio lavori',
        description: 'Guarda la magia dei brand del futuro',
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
    new magneticButton(document.getElementById('backButton'))
    new magneticButton(document.getElementById('revasos'))
    new magneticButton(document.getElementById('voxel'))
    new magneticButton(document.getElementById('revas'))
    new magneticButton(document.getElementById('holydavid'))
    new magneticButton(document.getElementById('simulacrum'))
    new magneticButton(document.getElementById('revas'))
    new magneticButton(document.getElementById('davide'))
    this.window = window
    this.togglebg()

    new Image().src = '/website/images/homepage/projects/revas.png'
    new Image().src = '/website/images/homepage/projects/revasos.png'
    new Image().src = '/website/images/homepage/projects/holydavid.png'
    new Image().src = '/website/images/homepage/projects/voxel.png'
    new Image().src = '/website/images/homepage/projects/simulacrum.png'
    new Image().src = '/website/images/homepage/projects/davide.png'
  },
  computed: {},
  methods: {
    togglePreview (workPreview: string) {
      this.work = workPreview
    },
    togglebg() {
      this.$gsap.set('#bg', {
        yPercent: 100
      })
      const backButton = document.getElementById('backButton')
      const tl = this.$gsap.timeline({ speed: 2, toggleActions: "play pause reverse none" })
      function play () {
        tl.play()
        console.log('play')
      }
      function reverse () {
        tl.reverse()
        console.log('reverse')
      }
      tl.pause()
      tl.to('#bg', {
        yPercent: 0,
        ease: 'Power2.easeInOut'
      })
      backButton?.addEventListener('mouseenter', play)
      backButton?.addEventListener('mouseleave', reverse)
    },
    backgroundImage (imagePath: string) {
      return `background-image: url(${imagePath}); background-position: center center; background-size: cover; background-repet: no-repeat;`
    }
  }
})
</script>

<style scoped>
.text-outline {
  -webkit-text-stroke: 1px white;
}

.text-outline:hover {
  color: white;
}
</style>