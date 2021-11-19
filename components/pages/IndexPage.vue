<template>
  <div class="overflow-x-hidden">
    <div class="flex items-start w-screen justify-center fixed top-0 inset-x-0 z-50">
      <img id="curtainLeft" :style="`width: ${(windowWidth / 2) - 50}px`" class="flex-1" src="/website/images/shared/curtain-left.svg" alt="">
      <div id="logoWrapper" style="width: 50px; flex: 1 0 50px;" class="relative flex-grow h-24 bg-arancione border-b-2 border-l-2 border-r-2 rounded-b-full border-white overflow-hidden">
        <img class="absolute top-0 inset-x-0 mt-4 mx-auto" src="/website/images/shared/davide-logo.svg" alt="">
        <div id="logoName" class="absolute inset-x-0 mx-auto top-0 inset-y-0 h-full flex items-center justify-center">
          <img class="transform -translate-x-1" src="/website/images/shared/davide.svg" alt="">
        </div>
        <div id="scrollCommand" class="absolute bottom-0 inset-x-0 mx-auto mb-20 py-2 text-center">
          <p class="text-xl mt-5 translate-y-1 font-medium transform rotate-90 text-white bg-arancione relative z-10">
            Scroll
          </p>
          <div class="absolute rounded-full top-0 inset-0 w-0.5 h-32 bg-white mx-auto transform -translate-y-4" />
        </div>
      </div>
      <img id="curtainRight" :style="`width: ${(windowWidth / 2) - 50}px`" class="flex-1" src="/website/images/shared/curtain-right.svg" alt="">
    </div>
    <div id="curtainWrapper" class="flex justify-between items-start z-20 overflow-hidden">
      <div v-for="i in 2" :key="i" :class="[{'flex-row-reverse ml-12': i === 2}, {'mr-12': i === 1}]" class="flex flex-grow w-1-2">
        <div :id="`curtain${n}`" class="h-screen border-2 border-white bg-black w-1/12 flex-grow rounded-b-full" v-for="n in 8" :key="n" />
      </div>
    </div>
    <section id="headerSection" class="text-white h-screen overflow-hidden z-30">
      <div class="max-w-screen-xl mx-auto h-full flex flex-col items-center justify-between text-center">
        <div class="w-full h-16" />
        <div class="overflow-hidden pb-8 px-4 md:px-0">
          <h2 id="headerTagline" class="text-white text-4xl md:text-6xl font-thin max-w-screen-sm mx-auto">
            Il tuo biglietto per un brand mai visto prima 
          </h2>
        </div>
        <h3 class="font-display text-9xl mb-8 w-72 md:w-10/12 lg:w-full mx-auto flex flex-wrap justify-center items-baseline transform scale-110 lg:scale-150">
          <span id="logoLetter" class="block transform scale-110 md:scale-150 mb-0 md:mb-8" :class="[{ 'w-16': index === 3}, { 'w-24 md:w-32': index !== 3}]" v-for="(letter, index) in arrayFromString('davide')" :key="letter">
            {{ letter }}
          </span>
        </h3>
      </div>
    </section>
    <section id="conquerSection" class="h-screen px-4 flex items-center justify-center relative">
      <div id="conquerInner" class="flex flex-wrap items-baseline justify-center max-w-screen-xl mx-auto mt-32 relative z-20">
        <div class="pr-6">
          <h2 id="conquerTitle" class="text-white font-display opacity-50 text-6xl">
            Vai alla conquista
          </h2>
        </div>
        <div id="conquerListWrapper">
          <h2 id="conquerText1" class="text-white font-display text-4xl lg:text-6xl mb-2">
            del tuo pubblico
          </h2>
          <h2 id="conquerText2" class="text-white font-display text-4xl lg:text-6xl mb-2">
            dei competitors
          </h2>
          <h2 id="conquerText3" class="text-white font-display text-4xl lg:text-6xl mb-2">
            del web
          </h2>
          <h2 id="conquerText4" :style="`transform-origin: ${worldWidth + ((windowWidth + worldWidth) / worldWidth)}px ${worldHeight / 2}px;`" class="text-white font-display text-6xl mb-2 inline-block">
            del mondo
          </h2>
        </div>
      </div>
      <div id="brandBeauty" class="relative z-20 font-display text-4xl">
        <h2 id="beautiful" class="font-display flex flex-col md:flex-row items-center justify-center text-white">
          <span id="with" class="block mr-3">Con un brand</span> <span class="block" id="outside">bellissimo fuori</span>
        </h2>
        <h2 id="inside" class="text-white">
          E fantastico dentro
        </h2>
      </div>
      <img id="earth" class="fixed top-0 inset-0 w-full h-full transform scale-400 lg:scale-200 z-10 object-contain" src="/website/images/homepage/earth.png" alt="">
    </section>
    <section id="methodSection" class="h-full w-screen flex flex-col items-center justify-center">
      <div id="orangeCircle" class="relative bg-arancione w-11/12 md:w-1/2 mx-auto rounded-full pb-full lg:pb-half">
        <div class="absolute top-0 inset-0 flex items-center justify-between text-center p-4">
          <div id="decorations" class="w-full h-full border-2 border-white rounded-full absolute top-0 inset-0" style="transform: scale(0.905);"/>
          <img id="decorations" class="absolute left-0 ml-3 mx-auto w-10" src="/website/images/shared/davide-logo.svg" alt="">
          <h2 id="processTitle" class="font-display w-full lg:w-2/3 mx-auto text-2xl lg:text-5xl">
            Un processo di branding mai visto prima
          </h2>
          <img id="decorations" class="absolute right-0 mr-3 mx-auto w-10" src="/website/images/shared/davide-logo.svg" alt="">
        </div>
      </div>
      <div id="whiteCircles" class="h-full absolute top-0 w-full flex items-center justify-start" :style="`transform: translateX(${windowWidth}px)`">
        <div id="whiteCircle" class="relative bg-white w-11/12 md:w-1/2 flex-none mx-auto rounded-full pb-full lg:pb-half">
          <div class="absolute top-0 inset-0 flex items-center justify-between text-center p-4">
            <div id="decorations" class="w-full h-full border-2 border-black rounded-full absolute top-0 inset-0" style="transform: scale(0.905);"/>
            <img id="decorations" class="absolute left-0 ml-3 mx-auto w-10" src="/website/images/shared/davide-logo-black.svg" alt="">
            <h2 class="font-display w-full lg:w-2/3 mx-auto text-2xl lg:text-5xl">
              Super pieno di scienza
            </h2>
            <img id="decorations" class="absolute right-0 mr-3 mx-auto w-10" src="/website/images/shared/davide-logo-black.svg" alt="">
          </div>
        </div>
        <div id="whiteCircle" class="relative bg-white w-11/12 md:w-1/2 flex-none mx-auto rounded-full pb-full lg:pb-half">
          <div class="absolute top-0 inset-0 flex items-center justify-between text-center p-4">
            <div id="decorations" class="w-full h-full border-2 border-black rounded-full absolute top-0 inset-0" style="transform: scale(0.905);"/>
            <img id="decorations" class="absolute left-0 ml-3 mx-auto w-10" src="/website/images/shared/davide-logo-black.svg" alt="">
            <h2 class="font-display w-full lg:w-2/3 mx-auto text-2xl lg:text-5xl">
              Ispirato al Design Sprint di Google
            </h2>
            <img id="decorations" class="absolute right-0 mr-3 mx-auto w-10" src="/website/images/shared/davide-logo-black.svg" alt="">
          </div>
        </div>
        <div id="whiteCircle" class="relative bg-white w-11/12 md:w-1/2 flex-none mx-auto rounded-full pb-full lg:pb-half">
          <div class="absolute top-0 inset-0 flex items-center justify-between text-center p-4">
            <div id="decorations" class="w-full h-full border-2 border-black rounded-full absolute top-0 inset-0" style="transform: scale(0.905);"/>
            <img id="decorations" class="absolute left-0 ml-3 mx-auto w-10" src="/website/images/shared/davide-logo-black.svg" alt="">
            <h2 class="font-display w-full lg:w-2/3 mx-auto text-2xl lg:text-5xl">
              Per brand che funzionano
            </h2>
            <img id="decorations" class="absolute right-0 mr-3 mx-auto w-10" src="/website/images/shared/davide-logo-black.svg" alt="">
          </div>
        </div>
        <div id="whiteCircle" class="relative bg-white w-11/12 md:w-1/2 flex-none mx-auto rounded-full pb-full lg:pb-half">
          <div class="absolute top-0 inset-0 flex items-center justify-between text-center p-4">
            <div id="decorations" class="w-full h-full border-2 border-black rounded-full absolute top-0 inset-0" style="transform: scale(0.905);"/>
            <img id="decorations" class="absolute left-0 ml-3 mx-auto w-10" src="/website/images/shared/davide-logo-black.svg" alt="">
            <h2 class="font-display w-full lg:w-2/3 mx-auto text-2xl lg:text-5xl">
              E basta.
            </h2>
            <img id="decorations" class="absolute right-0 mr-3 mx-auto w-10" src="/website/images/shared/davide-logo-black.svg" alt="">
          </div>
        </div>
      </div>
    </section>
    <section id="websiteSection" class="py-32 w-screen flex flex-col items-center justify-center">
      <div class="w-full px-4">
        <div id="searchBar" class="max-w-screen-lg mx-auto rounded-full border border-white w-full px-8 py-4 relative flex items-center justify-start mb-8" style="transform-origin: center center;">
          <h2 id="www" class="text-white font-display text-4xl lg:text-6xl">
            <span class="hidden">
              World Wide Brands
            </span>
          </h2>
          <div id="cursor" class="w-0.5 h-full flex items-center justify-center rounded-full pulse">
            <div class="w-full h-16 bg-white rounded-full" />
          </div>  
        </div>
      </div>
    </section>
    <section id="websiteBoxSection" class="h-screen w-screen p-8 overflow-hidden">
      <div id="websiteBox" class="w-full h-full mx-auto border border-white p-16 overflow-hidden">
        <div id="boxScroller">
          <h3 id="websiteText" class="text-4xl lg:text-6xl text-white w-2/3 mx-auto mb-32">
            Sviluppa il tuo brand e poi portalo alla conquista del web con un sito web degno della sua bellezza. E con delle performance stellari su ogni tipo di dispositivo.
          </h3>
          <div id="oval" class="border border-white py-32 w-1/2 mx-auto flex items-center justify-center" style="border-radius: 100%;">
            <p class="text-white font-display text-4xl">
              Performance <span id="ovalText">Stellari</span>
            </p>
          </div>
          <div id="oval" class="border border-white py-32 w-1/2 mx-auto flex items-center justify-center" style="border-radius: 100%;">
            <p class="text-white font-display text-4xl">
              SEO <span id="ovalText">Impeccabile</span>
            </p>
          </div>
          <div id="oval" class="border border-white py-32 w-1/2 mx-auto flex items-center justify-center" style="border-radius: 100%;">
            <p class="text-white font-display text-4xl">
              Animazioni <span id="ovalText">Brillanti</span>
            </p>
          </div>
          <div id="oval" class="border border-white py-32 w-1/2 mx-auto flex items-center justify-center" style="border-radius: 100%;">
            <p class="text-white font-display text-4xl">
              Design <span id="ovalText">Unico</span>
            </p>
          </div>
          <h3 id="extensionText" class="font-display text-center text-4xl lg:text-6xl text-white w-2/3 mx-auto py-64">
            La naturale estensione online del tuo brand
          </h3>
          <p id="likeThisText" class="font-display text-center text-white w-2/3 mx-auto pb-64">
            (come questo sito web qui)
          </p>
          <div class="relative w-full pb-half">
            <div id="popUp1" class="border border-white p-8 absolute top-0 left-0 ml-16 w-6/12 overflow:hidden">
              <p id="popUp1Text" class="text-4xl lg:text-6xl text-white pr-16">
                E non solo è bellissimo da vedere
              </p>
            </div>
            <div id="popUp2" class="border border-white p-8 absolute bottom-0 right-0 mr-16 w-6/12 bg-purple-500 overflow:hidden">
              <h2 id="popUp2Text" class="font-display text-4xl lg:text-6xl text-white">
                Ma è pure una meraviglia da gestire. Anche senza esperienza tecnica
              </h2>
            </div>
          </div>
          <p id="revas" class="font-display text-center text-white w-2/3 mx-auto pt-64">
            (grazie RevasOS, il workOS del futuro!)
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import metadata from '@/utils/metadata'

export default Vue.extend({
  data: function (): any {
    return {
      windowWidth: 0,
      windowHeight: 0,
      world: '',
      worldHeight: 0,
      worldWidth: 0,
      whiteCirclesSection: '',
      www: 0,
      wwwTextPlaceholder: '',
      boxScroller: ''
    }
  },
  head (): any {},
  mounted (): any {
    this.windowWidth = window.innerWidth
    this.windowHeight = window.innerHeight
    this.world = document.getElementById('conquerText4')
    this.worldWidth = document.getElementById('conquerText4')?.offsetWidth
    this.worldHeight = document.getElementById('conquerText4')?.offsetHeight
    this.whiteCirclesSection = document.getElementById('whiteCircles')
    this.www = document.getElementById('www')
    this.wwwTextPlaceholder = document.getElementById('wwwTextPlaceholder')
    this.boxScroller =  document.getElementById('boxScroller')
    this.scrollCurtains()
    this.showLogo()
    this.scrollConquer()
    this.scrollMethod()
    this.showWeb(),
    this.scrollWebPage()
  },
  computed: {},
  methods: {
    scrollCurtains () {
      this.$gsap.timeline(
        {
          scrollTrigger: {
            markers: {startColor: "green", endColor: "red", fontSize: "12px"},
            trigger: '#curtainWrapper',
            start: 'bottom bottom',
            pin: '#curtainWrapper',
            anticipatePin: 1,
            end: 'bottom top',
            scrub: 3
          }
        }
      )
      .from('#logoWrapper', 
        { height: '100vh', duration: 5 }, 0
      )
      .to('#curtainLeft', 
        { top: 0, yPercent: -45, duration: 5 }, 0
      )
      .to('#curtainRight', 
        { top: 0, yPercent: -45, duration: 5 }, 0
      )
      .to('#logoName', 
        { bottom: 0, yPercent: 160, duration: 5 }, 0
      )
      .to('#scrollCommand', 
        { opacity: 0 }, 0
      )
      .to('#curtain1', 
        { top: 0, yPercent: -100, duration: 5 }, 4
      )
      .to('#curtain2', 
        { top: 0, yPercent: -100, duration: 5 }, 3.5
      )
      .to('#curtain3', 
        { top: 0, yPercent: -100, duration: 5 }, 3
      )
      .to('#curtain4', 
        { top: 0, yPercent: -100, duration: 5 }, 2.5
      )
      .to('#curtain5', 
        { top: 0, yPercent: -100, duration: 5 }, 2
      )
      .to('#curtain6', 
        { top: 0, yPercent: -100, duration: 5 }, 1.5
      )
      .to('#curtain7', 
        { top: 0, yPercent: -100, duration: 5 }, 1
      )
      .to('#curtain8', 
        { top: 0, yPercent: -100, duration: 5 }, 0.5
      )
    },
    arrayFromString (name: string) {
      return Array.from(name)
    },
    showLogo () {
      this.$gsap.timeline(
        {
          scrollTrigger: {
            markers: {startColor: "blue", endColor: "orange", fontSize: "12px"},
            trigger: '#headerSection',
            start: '50% 50%',
            anticipatePin: 1,
            end: "bottom+=120% top",
            pin: '#headerSection',
            scrub: 2
          }
        }
      )
      .from('#logoLetter', 
        { opacity: 0, bottom: 0, yPercent: 200, duration: 3, stagger: 1 }, 0
      )
      .from('#headerTagline', 
        { opacity: 0, bottom: 0, yPercent: 100, duration: 6 }, '<+=7'
      )
    },
    scrollConquer () {
      const worldPosition = this.world.getBoundingClientRect().left
      const worldLetterScrollAmount = this.windowWidth - worldPosition

      console.log(worldLetterScrollAmount)

      this.$gsap.timeline(
        {
          scrollTrigger: {
            markers: {startColor: "purple", endColor: "pink", fontSize: "12px"},
            trigger: '#conquerSection',
            start: '50% 50%',
            pin: true,
            anticipatePin: 1,
            end: 'bottom+=2000% top',
            scrub: true
          }
        }
      )
      .set('#brandBeauty', { display: 'none'})
      .from('#conquerTitle', { opacity: 0, yPercent: 100 }, 0)

      .from('#conquerText1', { opacity: 0 }, '>')
      
      .to('#conquerListWrapper', { yPercent: -25}, '>')
      .from('#conquerText2', { opacity: 0 }, '<')

      .to('#conquerListWrapper', { yPercent: -50}, '>')
      .from('#conquerText3', { opacity: 0 }, '<')

      .to('#conquerListWrapper', { yPercent: -75}, '>')
      .from('#conquerText4', { opacity: 0 }, '<')

      .to('#conquerTitle', { opacity: 0 }, '<')
      .to('#conquerText1', { opacity: 0 }, '<+=0.1')
      .to('#conquerText2', { opacity: 0 }, '<+=0.2')
      .to('#conquerText3', { opacity: 0 }, '<+=0.3')

      .to('#conquerText4', { scale: 0.95 }, '<')

      .to('#conquerText4', { scale: 200, duration: 5, x: worldLetterScrollAmount * 3.5 }, '>')
      .from('#earth', { y: 200, opacity: 0, duration: 5 }, '<')
      .to('#conquerInner', { display:"none" })
      .to('#brandBeauty', { display: 'block'})
      .to('#conquerText4', { opacity: 0 }, '>')

      .from('#with', { y: 50, opacity: 0, duration: 2}, '<')
      .from('#outside', { y: 50, opacity: 0, duration: 2}, '>')
      .to('#beautiful', { y: -100, opacity: 0, display: 'none', duration: 2 }, '>+=1')

      .to('#earth', { scale: 0.65, duration: 5 }, '>-=0.2')
      .from('#inside', { y: 50, opacity: 0, duration: 1 }, '>+=2')
    },
    scrollMethod () {
      const horizontalScrollLength = this.whiteCirclesSection.getBoundingClientRect().width
      const outWidth = this.windowWidth
      this.$gsap.timeline(
        {
          scrollTrigger: {
            markers: {startColor: "gray", endColor: "white", fontSize: "12px"},
            trigger: '#methodSection',
            start: '50% 50%',
            pin: true,
            anticipatePin: 1,
            end: `bottom+=${horizontalScrollLength * 4}px top`,
            scrub: 3
          }
        }
      )
      .from( '#orangeCircle', { y: 800, scale: 3, duration: 3 })
      .from( '#processTitle', { opacity: 0, scale: 1.2 }, '>+=1')
      .to( '#whiteCircles', { x: -(horizontalScrollLength + (horizontalScrollLength / 4)), duration: 20 }, '>+=2')
      .to( '#orangeCircle', { x: -outWidth, rotate: -180, duration: 3 }, '<+=1.2')
      .from('#whiteCircle', { rotation: 90, stagger: 3, duration: 3 }, '<')
    },
    showWeb () {
      this.$gsap.timeline(
        { 
          scrollTrigger: {
            markers: {startColor: "gray", endColor: "white", fontSize: "12px"},
            trigger: '#websiteSection',
            start: '50% 50%',
            pin: true,
            anticipatePin: 1,
            end: `bottom+=200% top`,
            scrub: 1
          }
        }
      )
      .from('#searchBar', { width: 0, padding: 0, opacity: 0 })
      .from('#cursor', { opacity: 0, duration: 0.2})
      .to('#www', {
        duration: 4,
        text: {
            value: "World Wide Brands"
        },
        ease: "power2"
      }, 1)
      .to('#searchBar', { y: -500, duration: 3 })
    },
    scrollWebPage () {
      this.$gsap.timeline(
        { 
          scrollTrigger: {
            markers: {startColor: "gray", endColor: "purple", fontSize: "12px"},
            trigger: '#websiteBoxSection',
            start: '50% 50%',
            pin: true,
            anticipatePin: 1,
            end: `bottom+=${this.boxScroller.offsetHeight}px top`,
            scrub: 1
          }
        }
      )
      .from('#websiteBox', { scale: 0.9, opacity: 0, duration: 1 })
      .from( '#boxScroller', { y: 200, duration: 1 }, '>+=1')
      .from('#websiteText', { y: 50, opacity: 0, duration: 1 }, '<')
      .to( '#boxScroller', { y: -this.boxScroller.offsetHeight, duration: 20 }, '>')
      .from('#oval', { y: 20, opacity: 0, duration: 0.5, stagger: 1 }, '<')
      .from('#ovalText', { y: 10, opacity: 0, duration: 1, stagger: 1 }, '<+=1')
      .from('#extensionText', { opacity: 0, y: 20, duration: 2, }, '>')
      .from('#likeThisText', { opacity: 0, y: 20, duration: 2, }, '>-=1')
      .from('#popUp1', { height: 0, width: 0, padding: 0, opacity: 0, duration: 2, }, '>-=1')
      .from('#popUp1Text', { opacity: 0 }, '>')
      .from('#popUp2', { height: 0, width: 0, padding: 0, opacity: 0, duration: 2, }, '>-=1')
      .from('#popUp2Text', { opacity: 0 }, '>-=0.5')
      .from('#revas', { opacity: 0, y: 20, duration: 2, }, '>+=0.5')
      .to('#websiteBox', { height: 0, y: -100, duration: 4, padding: 0 })
      .to('#websiteBox', { opacity: 0 })
    }
  }
})
</script>

<style scoped>
.pulse {
  animation: pulsing 2s ease infinite;
}

@keyframes pulsing {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 100%;
  }
  100% {
    opacity: 0%;
  }
}
</style>