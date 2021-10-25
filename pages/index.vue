<template>
  <div class="mx-auto p-4 max-w-screen-xl relative">
    <div id="trigger1">
      <div :class="sectionClass" class="mb-4">
        <div class="md:w-3/5 mb-2 md:mb-8">
          <h1 class="text-white" :class="titleClass">
          {{ $t('index.bravo.title') }}
          </h1>
        </div>
        <div class="md:w-3/5">
          <h2 class="text-white text-xl md:text-2xl lg:text-4xl opacity-50">
            {{ $t('index.bravo.description') }}
          </h2>
        </div>
      </div>
      <div id="animate1" class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-24 h-full">
        <div :class="sectionClass" class="text-white bg-black border border-white bg-opacity-75 md:col-span-5">
          <div class="relative z-20 text-center md:w-2/3 mx-auto">
            <div class="mb-2 md:mb-8">
              <h2 :class="titleClass" class="text-white">
                {{ $t('index.hiring.title') }}
              </h2>
            </div>
            <div>
              <div class="text-center mt-8">
                <a class="bg-gradient-to-tr from-purple-500 to-red-600 via-pink-500 inline-block mx-auto rounded-full px-8 py-2 text-xl hover:shadow-xl delay-300 transform hover:scale-105 transition duration-300 ease-in-out" href="https://www.revas.io">
                  {{ $t('index.hiring.action') }}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div :class="sectionClass" class="text-white bg-gray-900 bg-opacity-75 md:col-span-3">
          <div class="text-6xl mb-2 md:mb-8">
            🧠 🎓 ✨
          </div>
          <div class="mb-2 md:mb-8">
            <h2 :class="titleClass" class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              {{ $t('index.degree.title') }}
            </h2>
          </div>
          <div class="relative z-30 mb-8">
            <h3 class="text-lg lg:text-xl">
              {{ $t('index.degree.description') }}
            </h3>
          </div>
        </div>
        <div :class="sectionClass" class="bg-gray-900 bg-opacity-75 md:col-span-2">
          <div class="relative z-20">
            <div class="mb-2 md:mb-8">
              <h2 :class="titleClass" class="text-white">
                {{ $t('index.revas.title') }}
              </h2>
            </div>
            <div>
              <h3 class="text-lg lg:text-xl text-white">
                {{ $t('index.revas.description') }}
              </h3>
            </div>
            <div>
              <div class="text-center mt-8">
                <a class="bg-white inline-block mx-auto rounded-full px-8 py-2 text-xl hover:shadow-xl delay-300 transform hover:scale-105 transition duration-300 ease-in-out" href="https://www.revas.io">
                  {{ $t('index.revas.action') }}
                </a>
              </div>
            </div>
          </div>
          <img class="h-full w-full absolute top-0 left-0 object-cover transform hover:scale-150 hover:rotate-12 transition duration-1000 ease-in-out" src="/website/images/shared/first-mesh.png" :alt="$t('index.revas.title')">
        </div>
        <div :class="sectionClass" class="bg-gray-900 md:col-span-2 pt-64 md:pt-0 overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-full opacity-75 rounded-3xl">
            <video class="w-full h-full object-cover rounded-3xl overflow-hidden" loop autoplay muted playsinline preload='auto'>
              <source src="/website/videos/cloud.mp4" type="video/mp4">
            </video>
          </div>
          <div class="relative z-20 h-full flex flex-col justify-end items-end">
            <h2 :class="titleClass" class="text-white mb-4">
              {{ $t('index.light.title') }}
            </h2>
            <h3 class="text-lg lg:text-xl text-white">
              {{ $t('index.light.description') }}
            </h3>
          </div>
        </div>
        <div :class="sectionClass" class="bg-gray-900 bg-opacity-75 md:col-span-3 md:pb-40 lg:pb-64">
          <div>
            <div class="mb-2 md:mb-8">
              <h2 :class="titleClass" class="text-white">
                {{ $t('index.differences.title') }}
              </h2>
            </div>
            <div class="lg:w-4/5 mb-8">
              <h3 class="text-lg lg:text-xl text-white opacity-50">
                {{ $t('index.differences.description') }}
              </h3>
            </div>
          </div>
          <div class="md:absolute bottom-0 right-0 md:w-4/5 transform lg:translate-x-10 md:translate-y-4 lg:translate-y-20 overflow-hidden rounded-2xl shadow-2xl">
            <video class="w-full h-full object-cover" loop autoplay muted playsinline preload='auto'>
              <source src="/website/videos/different.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
      <!-- <div v-if="false" class="bg-black overflow-hidden relative mb-4 skewElem hidden">
        <div class="text-center mx-auto md:w-1/2 lg:w-2/3 py-48">
          <h2 :class="titleClass" class="text-white mb-4">
            {{ $t('index.sum.title') }}
          </h2>
        </div>
      </div>
      <div v-if="false" id="canvas-container" style="height: 4000px;" class="hidden bg-black overflow-hidden relative mb-4">
        <canvas id="hero-lightpass" class="heroLightpass z-10" />
      </div> -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4 h-full">
        <div :class="sectionClass" class="bg-gray-900 bg-opacity-75 md:col-span-3 md:pb-40 lg:pb-64">
          <div class="mb-48">
            <div class="mb-2 md:mb-8">
              <h2 :class="titleClass" class="text-white">
                {{ $t('index.unplugged.title') }}
              </h2>
            </div>
            <div class="lg:w-4/5 mb-8">
              <h3 class="text-lg lg:text-xl text-white opacity-50">
                {{ $t('index.unplugged.description') }}
              </h3>
            </div>
          </div>
          <div class="absolute bottom-0 inset-x-0 mx-auto w-4/5 transform translate-y-16 md:translate-y-0 lg:translate-y-32 overflow-hidden">
            <img class="relative h-full w-full object-cover transform origin-bottom-left hover:rotate-6 transition duration-300 ease-in-out delay-300 z-20" src="/website/images/shared/disconnected.png" :alt="$t('index.philosophy.title')">
            <img class="h-full w-full object-cover absolute top-0 left-0 z-10 transform translate-y-6 animate-pulse" src="/website/images/shared/behind-phones.png" :alt="$t('index.philosophy.title')">
          </div>
        </div>
        <div :class="sectionClass" class="bg-gray-900 bg-opacity-75 md:col-span-2">
          <img class="h-full w-full absolute top-0 left-0 object-cover transform hover:scale-150 hover:-rotate-12 transition duration-1000 ease-in-out" src="/website/images/shared/final-mesh.png" alt="">
          <div class="relative z-20 pointer-events-none">
            <div class="mb-2 md:mb-8">
              <h2 :class="titleClass">
                {{ $t('index.philosophy.title') }}
              </h2>
            </div>
            <div>
              <h3 class="text-lg lg:text-xl">
                {{ $t('index.philosophy.description') }}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="bg-gray-900 bg-opacity-75 rounded-3xl bg-opacity-75 p-6 md:p-12 skewElem">
          <div class="flex items-center justify-center h-full">
            <div class="lg:w-2/3">
              <div class="mx-auto text-center">
                <h2 :class="titleClass" class="bg-clip-text text-transparent bg-gradient-to-tr from-yellow-300 via-green-200 to-green-500">
                  {{ $t('index.contacts.title') }}
                </h2>
              </div>
              <div class="text-center mt-8">
                <a class="bg-white inline-block mx-auto rounded-full px-8 py-2 text-xl hover:shadow-xl delay-300 transform hover:scale-105 transition duration-300 ease-in-out" href="https://form.typeform.com/to/BR9qD3pl">
                  {{ $t('index.contacts.action') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import metadata from '@/utils/metadata'

export default Vue.extend({
  data (): any {
    return {
      windowWidth: 0,
      windowHeight: 0,
      scrollTop: 0,
      scrollHeight: 0,
      scrollProgress: 0,
      div: null,
      animate1: {} as any,
      trigger1: {} as any,
      main: {} as any,
      canvas: {} as any
    }
  },
  computed: {
    titleClass (): string {
      return 'text-4xl lg:text-6xl font-semibold leading-none relative z-30'
    },
    sectionClass (): string {
      return 'rounded-3xl p-6 md:p-8 lg:p-12 overflow-hidden relative flex flex-col items-start justify-center skewElem'
    }
  },
  head (): any {
    return {
      title: this.$t('index.meta.title'),
      meta: metadata({
        title: this.$t('index.meta.title'),
        description: this.$t('index.meta.description'),
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
  mounted (): any {
    this.windowWidth = window.innerWidth
    this.windowHeight = window.innerHeight

    // this.canvas = document.getElementById("hero-lightpass")
    // const canvasContainer = document.getElementById("canvas-container")
    // this.context = this.canvas.getContext("2d")
    // this.canvas.width = canvasContainer?.getBoundingClientRect().width
    // this.canvas.height = canvasContainer?.getBoundingClientRect().height

    window.addEventListener('scroll', this.scrollData)
    this.animate1 = document.getElementById('animate1')
    this.trigger1 = document.getElementById('trigger1')
    this.main = document.getElementById('main')
    this.animateOnScroll()
    this.skewOnScroll()
    // this.animateVideoOnScroll()
  },
  methods: {
    scrollData (event: any) {
      this.scrollTop = event.target.scrollingElement.scrollTop
      this.scrollHeight = event.target.scrollingElement.scrollHeight - window.innerHeight
      this.scrollProgress = (this.scrollTop / this.scrollHeight) * 100
      this.div = event.target.getElementById('hiddenDiv')
      this.isInViewport(this.div)
      this.visibilityPercentage(this.div, window, this.scrollTop)
      console.log('visibilityPercentage', this.visibilityPercentage(this.div, window, this.scrollTop))
    },
    animateOnScroll(): any {
      this.$gsap.timeline(
        {
          scrollTrigger: {
            trigger: this.trigger1,
            start:'top top',
            end:'bottom bottom',
            scrub: 1
          }
        }).fromTo(
          this.animate1,
          { 
            opacity: 0,
            y: 100
          },
          {
            opacity: 100,
            y: 0
          },
          0
        )
    },
    skewOnScroll (): any {
      let proxy = { skew: 0 }
      let skewSetter = this.$gsap.quickSetter(".skewElem", "skewY", "deg")
      let clamp = this.$gsap.utils.clamp(-20, 20)
      this.$gsap.timeline(
        {
          scrollTrigger: {
            onUpdate: (self: any) => {
              let skew = clamp(self.getVelocity() / -300)
              if (Math.abs(skew) > Math.abs(proxy.skew)) {
                proxy.skew = skew;
                this.$gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
              }
            }
          }
        }
      )
      this.$gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});
    },
    // animateVideoOnScroll (): any {
    //   const frameCount = 147;
    //   const currentFrame = (index: number) => (
    //     `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(index + 1).toString().padStart(4, '0')}.jpg`
    //   )
    //   const images: any = []
    //   const airpods: any = {
    //     frame: 0
    //   }
    //   const render = () => {
    //     this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //     this.context.drawImage(images[airpods.frame], 0, 0); 
    //   }
    //   for (let i = 0; i < frameCount; i++) {
    //     const img = new Image();
    //     img.src = currentFrame(i);
    //     images.push(img);
    //   }
    //   this.$gsap.timeline(
    //     {
    //       scrollTrigger: {
    //         markers: {startColor: "green", endColor: "red", fontSize: "12px"},
    //         trigger: '#canvas-container',
    //         start: 'top top',
    //         end: 'bottom bottom',
    //         pin: '#hero-lightpass',
    //       }
    //     }
    //   ).to(airpods, {
    //     frame: frameCount - 1,
    //     snap: "frame",
    //     scrollTrigger: {
    //       scrub: 0.5,
    //     },
    //     onUpdate: render
    //   })
    //   .from("#hero-lightpass", {
    //     scale: 3.3333,
    //     ease: "none",
    //     duration: 2,
    //     delay: 1,
    //   })
    //   images[0].onload = render
    // },
    isInViewport(el: any) {
      const element = el.getBoundingClientRect()
      return (
        element.top >= 0 &&
        element.left >= 0 &&
        element.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        element.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    },
    visibilityPercentage(el: any, win: any, scroll: any) {
      const element = el.getBoundingClientRect()

      const elementTop = element.top
      const screenHeight = win.innerHeight
      const elementHeight = element.height
      const topOut = -(elementTop - screenHeight)
      const spaceVisible = elementHeight - topOut
      let heightInScreen = 0
      let percentage = 0

      if (topOut > 0 && topOut < screenHeight) {
        heightInScreen += spaceVisible
      }

      percentage = 100 - (heightInScreen / screenHeight * 100)
      percentage = percentage >= 100 ? 0 : percentage

      return percentage

      // return Math.min(100, Math.max(0, percentage))
      // const visibilityPercentTop = top > 0 && top < window.innerHeight ? (window.innerHeight - top) / 10 : 0
      // const visibilityPercentBottom = bottom > 0 && bottom < window.innerHeight ? (bottom - window.innerHeight) / 10 : 0
      // const visibility = ((visibilityPercentTop + visibilityPercentBottom))
    }
  }
})
</script>

<style scoped>
img, video {
  pointer-events: none;
  user-select: none;
}

@keyframes zap {
  from {opacity: 0}
  to {opacity: 100% }
}

.zap {
  animation: zap 2s ease,
}
</style>
