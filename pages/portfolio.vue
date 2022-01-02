<template>
  <div id="scroller" class="h-screen w-screen fixed top-0 inset-0 overflow-y-auto">
    <nuxt-link :to="localePath('/')" id="backButton" class="block fixed top-0 left-0 bg-black text-white w-32 flex items-center justify-center h-12 bg-black m-8 z-50" style="border-radius: 100%;">
      <span id="backText" class="relative z-10">Back</span>
      <div id="bg" class="absolute top-0 left-0 w-full h-full bg-black border-2 border-white" style="border-radius: 100%;" />
    </nuxt-link>
    <div class="w-full h-full flex flex-col items-center justify-center relative z-10">
      <h1 class="sr-only">
        Portfolio lavori
      </h1>
      <div id="portfolio" class="w-2/3 h-4/5 flex flex-col items-center justify-center">
        <div :id="project.id" v-for="project in projects" :key="project.id" class="mb-4 w-2/3 flex items-center justify-center">
          <a :href="project.href" target="_blank" rel="noopener">
            <h2 @mouseenter="setProject(project.id)" @mouseleave="setProject(project.id)" :id="project.href" class="font-display text-2xl md:text-4xl lg:text-7xl cursor-pointer text-transparent text-outline block">
              {{ project.name }}
            </h2>
          </a>
        </div>
      </div>
    </div>
    <div class="fixed flex items-center justify-center left-0 top-0 w-full h-full p-8" style="opacity: 1 !important;">
      <img id="bgImage" class="w-full h-4/5 object-cover overflow-hidden" :src="`/website/images/homepage/projects/${work}.png`" alt="" style="border-radius: 100%;">
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
      isToggled: false,
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
    new magneticButton(document.getElementById('portfolio'))
    new magneticButton(document.getElementById('backText'))
    
    this.window = window
    this.togglebg()
    this.togglePreview()

    new Image().src = '/website/images/homepage/projects/revas.png'
    new Image().src = '/website/images/homepage/projects/revasos.png'
    new Image().src = '/website/images/homepage/projects/holydavid.png'
    new Image().src = '/website/images/homepage/projects/voxel.png'
    new Image().src = '/website/images/homepage/projects/simulacrum.png'
    new Image().src = '/website/images/homepage/projects/davide.png'
  },
  computed: {},
  methods: {
    setProject (workPreview: string) {
      setTimeout(() => {
        this.work = workPreview
      }, 1000)
    },
    togglePreview () {
      this.$gsap.set('#bgImage', { opacity: 0 })
      // timelines
      const tl = this.$gsap.timeline({
        speed: 0.2,
        toggleActions: "play pause reverse restart"
      })
      const tl1 = this.$gsap.timeline({
        speed: 0.2,
        toggleActions: "play pause reverse restart"
      })
      const tl2 = this.$gsap.timeline({ 
        speed: 0.2,
        toggleActions: "play pause reverse restart"
      })

      tl.to('#bgImage', { opacity: 1 })

      tl1.to('#bgImage', { opacity: 0, duration: 1 })
      tl1.to('#bgImage', { opacity: 1, duration: 1 }, '>+=0.5')

      tl2.to('#bgImage', { opacity: 1 })
      tl2.to('#bgImage', { opacity: 0 })
      
      tl.pause()
      tl1.pause()
      tl2.pause()

      let isToggled = false

      // play and pause
      function play () {
        if (!isToggled) {
          tl.play()
          isToggled = true
        } else {
          tl1.restart()
          tl1.play()
        }
      }

      function stop () {
        tl2.play()
        isToggled = false
      }

      // for cycle for every project 
      for (let i = 0; i < this.projects.length; i++) {
        const project = this.projects[i];
        const text = document.getElementById(project.href)
        text?.addEventListener('mouseenter', play)
      }
    },
    togglebg() {
      this.$gsap.set('#bg', {
        yPercent: 100,
        opacity: 0
      })
      const backButton = document.getElementById('backButton')
      const tl = this.$gsap.timeline({ speed: 2, toggleActions: "play pause reverse none" })
      function play () {
        tl.play()
      }
      function reverse () {
        tl.reverse()
      }
      tl.pause()
      tl.to('#bg', {
        opacity: 1,
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