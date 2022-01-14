<template>
  <div id="layout" :class="mainWrapperClass">
    <div id="cursor" class="hidden lg:block fixed left-0 top-0 shadow w-2 h-2 bg-white rounded-full pointer-events-none select-none" style="z-index: 10000; opacity: 1 !important;"/>
    <div id="cursor2" class="hidden lg:block fixed shadow left-0 top-0 w-2 h-2 border border-white rounded-full pointer-events-none select-none" style="z-index: 10000; opacity: 1 !important;"/>
    <div id="scrolling" :class="routeWrapperClass">
      <nuxt :class="routeClass" />
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
  components: {
    logo,
    credits
  },
  mounted () {
    this.window = window
    this.setViewportType()
    if (!this.isMobile && !this.isTablet && !this.isSmallDesktop) {
      this.mouseMove()
    }
    this.scrollPage()
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
      const gsap = this.$gsap
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
    scrollPage () {
      const scroller = document.getElementById('scrolling') as HTMLElement
      const height = scroller.clientHeight as number
      document.body.style.height = height + "px"
      this.$gsap.to(scroller, {
        y: () => -(height - document.documentElement.clientHeight),
        ease: "none",
        scrollTrigger: {
          trigger: "",
          start: 'start start',
          end: 'bottom bottom',
          scrub: 2,
          invalidateOnRefresh: true
        }
      })
    },
    showLogo () {
      this.$gsap.from('#logodefault', {
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
    }
  },
  computed: {
    mainWrapperClass () {
      return 'fixed inset-0 w-full h-full overflow-hidden bg-black'
    },
    routeWrapperClass () {
      return 'min-h-screen flex flex-col overflow-hidden'
    },
    routeClass () {
      return 'flex-1 overflow-hidden'
    },
    currentYear () {
      return new Date().getFullYear()
    }
  }
})
</script>

<style scoped>
*::-webkit-scrollbar {
  display: none !important;
}

* {
  scrollbar-width: none;
}
</style>
