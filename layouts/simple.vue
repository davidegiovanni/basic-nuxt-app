<template>
  <div class="bg-black min-h-screen flex flex-col">
    <div id="cursor" class="hidden lg:block fixed left-0 top-0 shadow w-2 h-2 bg-white rounded-full pointer-events-none select-none" style="z-index: 10000; opacity: 1 !important;"/>
    <div id="cursor2" class="hidden lg:block fixed shadow left-0 top-0 w-8 h-8 border border-white rounded-full pointer-events-none select-none" style="z-index: 10000; opacity: 1 !important;"/>
    <nuxt class="flex-1" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data (): any {
    return {
      window: {}
    }
  },
  mounted () {
    this.window = window
    this.mouseMove()
  },
  methods: {
    mouseMove () {
      const gsap = this.$gsap
      gsap.set("#cursor", {xPercent: -50, yPercent: -50, opacity: 1})
      gsap.set("#cursor2", {xPercent: -50, yPercent: -50, opacity: 1, delay: 0.5})

      const pos = { x: this.window.innerWidth / 2, y: this.window.innerHeight / 2 }
      const mouse = { x: pos.x, y: pos.y };
      const speed = 0.35;
      const speed2 = 0.01;

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
        
        const x = pos.x += (mouse.x - pos.x);
        const y = pos.y += (mouse.y - pos.y);
        const x2 = pos.x += (mouse.x - pos.x) * dt2;
        const y2 = pos.y += (mouse.y - pos.y) * dt2;
        xSet(x);
        xSet2(x2);
        ySet(y);
        ySet2(y2);
        opacity(100)
        setScaleX(1.1)
      });
    },
  }
})
</script>