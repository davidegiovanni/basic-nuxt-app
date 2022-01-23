<template>
  <div class="bg-black">
    <div id="cursor" class="hidden lg:block fixed left-0 top-0 shadow w-2 h-2 bg-white rounded-full pointer-events-none select-none" style="z-index: 10000; opacity: 1 !important;"/>
    <div id="cursor2" class="hidden lg:block fixed shadow left-0 top-0 w-2 h-2 border border-white rounded-full pointer-events-none select-none" style="z-index: 10000; opacity: 1 !important;"/>
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { smoothScroll } from '@/utils/utils'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import logo from '@/components/shared/TheLogo.vue'
import credits from '@/components/shared/Credits.vue'

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
  mounted () {
    smoothScroll('#content', '#viewport', 2)
    this.scrollStrip()
    this.contactsAnimation()

    this.window = window
    this.setViewportType()
    if (!this.isMobile && !this.isTablet && !this.isSmallDesktop && !this.isDesktop) {
      this.mouseMove()
    }
    this.showLogo()
    console.log("%cI'm a designer with creative development skills - you found me! Nice to meet you, I shake you warmly by the hand. Wanna get in touch? Just email me at davidegiovanni96@gmail.com","font-size: 15px")
  },
  head (): any {
    return {
      titleTemplate: '%s | Davide G. Steccanella',
      script: [
        {
          json: {
            '@context': 'https://schema.org',
            '@type': 'Person',
            'name': 'Davide Giovanni Steccanella',
            'jobTitle': 'Designer'
          },
          type: 'application/ld+json'
        }
      ]
    }
  },
  components: {
    logo,
    credits
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
    mouseMove () {
      gsap.set("#cursor", {xPercent: -50, yPercent: -50, opacity: 1})
      gsap.set("#cursor2", {xPercent: -50, yPercent: -50, opacity: 1})

      const pos = { x: this.window.innerWidth / 2, y: this.window.innerHeight / 2 }
      const mouse = { x: pos.x, y: pos.y };
      const speed = 0.2;
      const speed2 = 0.2;

      const xSet = gsap.quickSetter('#cursor', "x", "px")
      const xSet2 = gsap.quickSetter('#cursor2', "x", "px")
      const opacity = gsap.quickSetter('#cursor', 'opacity', '%')
      const ySet = gsap.quickSetter('#cursor', "y", "px")
      const ySet2 = gsap.quickSetter('#cursor2', "y", "px")

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
      });
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
          toggleActions: "play none none reverse"
        }
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
        x: -`${strip.offsetWidth}`,
        duration: 2
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
    }
  },
  computed: {
    mainWrapperClass () {
      return 'fixed inset-0 h-screen w-screen overflow-hidden bg-black'
    },
    routeClass () {
      return ''
    },
    currentYear () {
      return new Date().getFullYear()
    }
  }
})
</script>

<style>
*::-webkit-scrollbar {
  display: none !important;
}

* {
  scrollbar-width: none;
}

@font-face {
  font-family: 'Pilowlava-Regular';
  src: local('Pilowlava-Regular'), url('@/static/website/fonts/Pilowlava-Regular.woff') format('woff');
}

#viewport {
  overflow: hidden;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
}

#content {
  overflow: visible;
  width: 100%;
  background-color: black;
}

body {
  height: 400vh;
}

</style>
