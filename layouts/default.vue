<template>
  <div id="layout" :class="mainWrapperClass">
    <div id="cursor" class="fixed left-0 top-0 shadow w-2 h-2 bg-white rounded-full pointer-events-none user-select-none" style="z-index: 10000; opacity: 1 !important;"/>
    <div id="cursor2" class="fixed shadow left-0 top-0 w-8 h-8 border border-white rounded-full pointer-events-none user-select-none" style="z-index: 10000; opacity: 1 !important;"/>
    <div id="showBox" class="fixed pointer-events-none user-select-none top-0 inset-0 w-screen h-screen flex flex-col items-center justify-center text-white" style="z-index: 1000;">
      <div class="overflow-hidden mb-8" style="z-index: 1001;">
        <div id="loader" class="font-display text-6xl xl:text-9xl" style="z-index: 1001;">
          {{ loadAmount }}
        </div>
      </div>
      <div class="overflow-hidden" style="z-index: 1001;">
        <div id="show" class="text-white font-display opacity-75" style="z-index: 1001;">
          Lo spettacolo sta per iniziare
        </div>
      </div>
      <div id="box1" class="w-1/2 h-1/2 absolute top-0 left-0 bg-black" style="z-index: 1000;" />
      <div id="box2" class="w-1/2 h-1/2 absolute top-0 right-0 bg-black" style="z-index: 1000;" />
      <div id="box3" class="w-1/2 h-1/2 absolute bottom-0 left-0 bg-black" style="z-index: 1000;" />
      <div id="box4" class="w-1/2 h-1/2 absolute bottom-0 right-0 bg-black" style="z-index: 1000;" />
    </div>
    <div v-if="!hideNuxt" :class="routeWrapperClass">
      <nuxt :class="routeClass" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data (): any {
    return {
      hideNuxt: true,
      loadAmount: 0,
      loadTl: (() => {}),
      window: {}
    }
  },
  mounted () {
    this.window = window
    const width: any = window.innerWidth
    window.addEventListener('resize', () => {
      if (window.innerWidth !== width) {
        this.hideNuxt = true
        setTimeout(() => {
          document.location.reload()
        }, 500)
        setTimeout(() => {
          this.hideNuxt = false
        }, 3000)
      }
    });
    setTimeout(() => {
      this.hideNuxt = false
    }, 1500)
    this.loader()
    this.loadWebsite()
    this.mouseMove()
  },
  methods: {
    reload () {
      this.hideNuxt = true
      setTimeout(() => {
        document.location.reload()
      }, 500)
      setTimeout(() => {
        this.hideNuxt = false
      }, 3000)
    },
    loader () {
      const gsap = this.$gsap
      this.loadTl = gsap.timeline({ speed: 2, paused: true })
      .to('#show', { y: 100, duration: 1, delay: 0.5, ease: "power2.inOut" })
      .to('#loader', { y: 200, duration: 2, ease: "power2.inOut" }, '<+=0.2')
      .to('#box1', 
        { borderRadius: '0% 0% 50% 0%', duration: 2, ease: "none" }, '>'
      )
      .to('#box2', 
        { borderRadius: '0% 0% 0% 50%', duration: 2, ease: "none" }, '<'
      )
      .to('#box3', 
        { borderRadius: '0% 50% 0% 0%', duration: 2, ease: "none" }, '<'
      )
      .to('#box4', 
        { borderRadius: '50% 0% 0% 0%', duration: 2, ease: "none" }, '<'
      )
      .to('#showBox', 
        { scale: 10, duration: 4, ease: "none" }, '>-=1'
      )
      .to('#showBox', 
        { display: "none" }
      )
    },
    loadWebsite () {
      let intervalId: any = null
      const load =  () => {
        if (this.loadAmount < 100) {
          this.loadAmount < 50 ? this.loadAmount += 1 : this.loadAmount += 5 
        } else {
          clearInterval(intervalId)
          this.loadTl.paused(!this.loadTl.paused())
        }
      }
      intervalId = setInterval(load, 50)
    },
    mouseMove () {
      const gsap = this.$gsap
      gsap.set("#cursor", {xPercent: -50, yPercent: -50, opacity: 1})
      gsap.set("#cursor2", {xPercent: -50, yPercent: -50, opacity: 1, delay: 0.5})

      const pos = { x: this.window.innerWidth / 2, y: this.window.innerHeight / 2 }
      const mouse = { x: pos.x, y: pos.y };
      const speed = 0.35;
      const speed2 = 0.9;

      const xSet = gsap.quickSetter('#cursor', "x", "px")
      const xSet2 = gsap.quickSetter('#cursor2', "x", "px")
      const opacity = gsap.quickSetter('#cursor', 'opacity', '%')
      const ySet = gsap.quickSetter('#cursor', "y", "px")
      const ySet2 = gsap.quickSetter('#cursor2', "y", "px")
      const setScaleX = gsap.quickSetter('#cursor2', "scaleX")

      this.window.addEventListener("mousemove", (e: any) => {    
        mouse.x = e.x;
        mouse.y = e.y;  
      });

      gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        const dt2 = 1.0 - Math.pow(1.0 - speed2, gsap.ticker.deltaRatio()); 
        
        const x = pos.x += (mouse.x - pos.x) * dt;
        const y = pos.y += (mouse.y - pos.y) * dt;
        const x2 = pos.x += (mouse.x - pos.x) * dt2;
        const y2 = pos.y += (mouse.y - pos.y) * dt2;
        xSet(x);
        xSet2(x2);
        ySet(y);
        ySet2(y2);
        opacity(100)
        setScaleX(1.1)
      });
    }
  },
  computed: {
    mainWrapperClass () {
      return 'min-h-screen bg-black'
    },
    routeWrapperClass () {
      return 'min-h-screen flex flex-col'
    },
    routeClass () {
      return 'flex-1'
    },
    currentYear () {
      return new Date().getFullYear()
    }
  }
})
</script>

<style scoped>
@font-face {
  font-family: 'Basteleur-Bold';
  src: local('Basteleur-Bold'), url('@/static/website/fonts/Basteleur-Bold.woff') format('woff2');
}

html::-webkit-scrollbar {
  display: none;
}
html {
  scrollbar-width: none;
}
</style>
