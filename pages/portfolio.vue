<template>
  <div id="scroller" class="h-screen w-screen fixed top-0 inset-0 overflow-y-auto">
    <div class="w-full h-full flex flex-col items-center justify-center relative z-50 mix-blend-overlay">
      <h1 class="sr-only">
        Portfolio lavori
      </h1>
      <h2 @mouseenter="togglePreview('revasos', true)" @mouseleave="togglePreview('revasos', false)" class="font-display text-white text-2xl md:text-4xl lg:text-7xl mb-8 cursor-pointer">
        I. RevasOS
      </h2>
      <h2 @mouseenter="togglePreview('voxel', true)" @mouseleave="togglePreview('voxel', true)" class="font-display text-white text-2xl md:text-4xl lg:text-7xl mb-8 cursor-pointer">
        II. Voxel
      </h2>
      <h2 @mouseenter="togglePreview('holydavid', true)" @mouseleave="togglePreview('holydavid', true)" class="font-display text-white text-2xl md:text-4xl lg:text-7xl mb-8 cursor-pointer">
        III. Holy David
      </h2>
      <h2 @mouseenter="togglePreview('simulacrum', true)" @mouseleave="togglePreview('simulacrum', true)" class="font-display text-white text-2xl md:text-4xl lg:text-7xl mb-8 cursor-pointer">
        IV. Simulacrum
      </h2>
      <h2 @mouseenter="togglePreview('revas', true)" @mouseleave="togglePreview('revas', true)" class="font-display text-white text-2xl md:text-4xl lg:text-7xl mb-8 cursor-pointer">
        V. Revas
      </h2>
      <h2 @mouseenter="togglePreview('davide', true)" @mouseleave="togglePreview('davide', false)" class="font-display text-white text-2xl md:text-4xl lg:text-7xl mb-8 cursor-pointer">
        VI. Davide
      </h2>
    </div>
    <div id="preview" class="bg-arancione fixed left-0 top-0 w-1/3 h-3/4 bg-black overflow-hidden" style="opacity: 1 !important; border-radius: 100%;">
      <img class="w-full h-full object-cover" :src="`/website/images/homepage/projects/${work}.png`" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import metadata from '@/utils/metadata'

export default Vue.extend({
  layout: 'simple',
  data(): any {
    return {
      isShowingPreview: false,
      window: {},
      work: ''
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
    this.window = window
    this.previewMove()

    this.$gsap.set('#preview', {
      scale: 0,
      y: -20
    })

    new Image().src = '/website/images/homepage/projects/revas.png'
    new Image().src = '/website/images/homepage/projects/revasos.png'
    new Image().src = '/website/images/homepage/projects/holydavid.png'
    new Image().src = '/website/images/homepage/projects/voxel.png'
    new Image().src = '/website/images/homepage/projects/simulacrum.png'
    new Image().src = '/website/images/homepage/projects/davide.png'
  },
  computed: {},
  methods: {
    previewMove () {
      const gsap = this.$gsap
      gsap.set("#preview", {xPercent: -50, yPercent: -50, opacity: 1})

      const pos = { x: this.window.innerWidth / 2, y: this.window.innerHeight / 2 }
      const mouse = { x: pos.x, y: pos.y };
      const speed = 0.05;

      const xSet = gsap.quickSetter('#preview', "x", "px")
      const opacity = gsap.quickSetter('#preview', 'opacity', '%')
      const ySet = gsap.quickSetter('#preview', "y", "px")
      const setScaleX = gsap.quickSetter('#preview2', "scaleX")

      this.window.addEventListener("mousemove", (e: any) => {    
        mouse.x = e.x;
        mouse.y = e.y;  
      });

      gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        
        const x = pos.x += (mouse.x - pos.x) * dt;
        const y = pos.y += (mouse.y - pos.y) * dt;
        xSet(x);
        ySet(y);
        opacity(100)
        setScaleX(1.1)
      });
    },
    togglePreview (workPreview: string, toggle: boolean) {
      this.work = workPreview
      this.isShowingPreview = toggle
      if (this.isShowingPreview) {
        this.$gsap.to(
          '#preview', {
            scale: 1,
            y: 0
          }
        )
      } else {
        this.$gsap.to(
          '#preview', {
            scale: 0
          }
        )
      }
    },
    backgroundImage (imagePath: string) {
      return `background-image: url(${imagePath}); background-position: center center; background-size: cover; background-repet: no-repeat;`
    }
  }
})
</script>