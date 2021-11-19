<template>
  <div class="overflow-x-hidden">
    <div class="flex items-start w-screen justify-center fixed top-0 inset-x-0 z-50">
      <img id="curtainLeft" :style="`width: ${(windowWidth - curtainWidth) / 2}px`" class="flex-1" src="/website/images/shared/curtain-left.svg" alt="">
      <div id="logoWrapper" :style="`width: ${curtainWidth}px; flex: 0 0 ${curtainWidth}px;`" class="relative flex-grow h-24 bg-arancione border-b-2 border-l-2 border-r-2 rounded-b-full border-white overflow-hidden">
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
      <img id="curtainRight" :style="`width: ${(windowWidth - curtainWidth) / 2}px`" class="flex-1" src="/website/images/shared/curtain-right.svg" alt="">
    </div>
    <div id="curtainWrapper" class="flex justify-center items-start z-20 overflow-hidden">
      <div :style="`width: ${(windowWidth - curtainWidth) / 2}px; flex: 0 0 ${(windowWidth - curtainWidth) / 2}px;`" class="flex items-start justify-end">
        <div id="curtain1" :style="`width: ${curtainWidth}px; flex: 0 0 ${curtainWidth}px;`" class="h-screen border-2 border-white bg-black flex-grow rounded-b-full text-white flex items-center justify-center" v-for="(curtain, index) in halfCurtains" :key="index" />
      </div>
      <div :style="`width: ${curtainWidth}px; flex: 0 0 ${curtainWidth}px;`" class="w-screen opacity-0" />
      <div :style="`width: ${(windowWidth - curtainWidth) / 2}px; flex: 0 0 ${(windowWidth - curtainWidth) / 2}px;`" class="flex flex-row-reverse items-start justify-end">
        <div id="curtain2" :style="`width: ${curtainWidth}px; flex: 0 0 ${curtainWidth}px;`" class="h-screen border-2 border-white bg-black flex-grow rounded-b-full text-white flex items-center justify-center" v-for="(curtain, index) in halfCurtains" :key="index" />
      </div>
    </div>
    <section id="headerSection" class="text-white h-screen overflow-hidden z-30">
      <div class="max-w-screen-xl mx-auto h-full flex flex-col items-center justify-between text-center">
        <div class="w-full h-16" />
        <div class="overflow-hidden pb-8 px-4 md:px-0">
          <h2 id="headerTagline" class="text-white text-5xl md:text-6xl font-thin w-10/12 md:max-w-screen-sm mx-auto">
            Il tuo biglietto per un brand mai visto prima 
          </h2>
        </div>
        <h3 class="font-display text-9xl mb-8 w-72 md:w-10/12 lg:w-full mx-auto flex flex-wrap justify-center items-baseline transform scale-110 lg:scale-150">
          <span id="logoLetter" class="block transform scale-110 md:scale-150 mb-0 md:mb-8" :class="[{ 'w-16': index === 3}, { 'w-24 md:w-32': index !== 3}]" v-for="(letter, index) in arrayFromString('davide')" :key="index">
            {{ letter }}
          </span>
        </h3>
      </div>
    </section>
    <section id="conquerSection" class="h-screen px-4 flex items-center justify-center relative">
      <div id="conquerInner" class="flex flex-wrap items-baseline justify-center max-w-screen-xl mx-auto mt-32 relative z-20">
        <div class="pr-6 hidden lg:block ">
          <h2 id="conquerTitle" class="text-white font-display opacity-50 text-6xl">
            Vai alla conquista
          </h2>
        </div>
        <div id="conquerListWrapper">
          <h2 id="conquerTitle" class="block lg:hidden text-white font-display opacity-50 text-6xl pb-8">
            Vai alla conquista
          </h2>
          <h2 id="conquerText1" class="text-white font-display text-2xl lg:text-6xl mb-2">
            del tuo pubblico
          </h2>
          <h2 id="conquerText2" class="text-white font-display text-3xl lg:text-6xl mb-2">
            dei competitors
          </h2>
          <h2 id="conquerText3" class="text-white font-display text-4xl mb-2">
            del web
          </h2>
          <h2 class="relative bottom-0 right-0 text-white font-display text-5xl mb-2 inline-flex">
            <span id="conquerText4">del mond</span><span id="o" class="inline-block">o</span>
          </h2>
        </div>
      </div>
      <div id="brandBeauty" class="relative z-30 font-display text-4xl">
        <h2 id="beautiful" class="font-display flex flex-col md:flex-row items-center justify-center text-white">
          <span id="with" class="block lg:mr-3">Con un brand</span> <span class="block" id="outside">bellissimo fuori</span>
        </h2>
        <h2 id="inside" class="text-white text-center">
          E fantastico dentro
        </h2>
      </div>
      <img id="earth" class="fixed top-0 inset-0 w-full h-full transform scale-600 lg:scale-200 z-20 object-contain" src="/website/images/homepage/earth.png" alt="">
      <img id="core" class="fixed opacity-0 top-0 inset-0 w-full h-full transform scale-660 lg:scale-200 z-10 object-contain" src="/website/images/homepage/core.png" alt="">
    </section>
    <section id="methodSection" class="h-full w-screen flex flex-col items-center justify-center">
      <div id="orangeCircle" class="relative bg-arancione w-11/12 md:w-1/2 mx-auto rounded-full pb-full md:pb-half">
        <div class="absolute top-0 inset-0 flex items-center justify-between text-center p-4">
          <div id="decorations" class="w-full h-full border-2 border-white rounded-full absolute top-0 inset-0" style="transform: scale(0.92);"/>
          <img id="decorations" class="absolute left-0 lg:ml-3 mx-auto w-8 lg:w-10" src="/website/images/shared/davide-logo.svg" alt="">
          <h2 id="processTitle" class="font-display w-full w-2/3 mx-auto text-2xl lg:text-5xl">
            Un processo di branding mai visto prima
          </h2>
          <img id="decorations" class="absolute right-0 lg:mr-3 mx-auto w-8 lg:w-10" src="/website/images/shared/davide-logo.svg" alt="">
        </div>
      </div>
      <div id="whiteCircles" class="h-full absolute top-0 w-full flex items-center justify-start" :style="`transform: translateX(${windowWidth + 32}px)`">
        <div id="whiteCircle" class="relative bg-white w-11/12 md:w-1/2 flex-none mx-auto rounded-full pb-full md:pb-half">
          <div class="absolute top-0 inset-0 flex items-center justify-between text-center p-4">
            <div id="decorations" class="w-full h-full border-2 border-black rounded-full absolute top-0 inset-0" style="transform: scale(0.92);"/>
            <img id="decorations" class="absolute left-0 lg:ml-3 mx-auto w-8 lg:w-10" src="/website/images/shared/davide-logo-black.svg" alt="">
            <h2 class="font-display w-full w-2/3 mx-auto text-2xl lg:text-5xl">
              Super pieno di scienza
            </h2>
            <img id="decorations" class="absolute right-0 lg:mr-3 mx-auto w-8 lg:w-10" src="/website/images/shared/davide-logo-black.svg" alt="">
          </div>
        </div>
        <div id="whiteCircle" class="relative bg-white w-11/12 md:w-1/2 flex-none mx-auto rounded-full pb-full md:pb-half">
          <div class="absolute top-0 inset-0 flex items-center justify-between text-center p-4">
            <div id="decorations" class="w-full h-full border-2 border-black rounded-full absolute top-0 inset-0" style="transform: scale(0.92);"/>
            <img id="decorations" class="absolute left-0 lg:ml-3 mx-auto w-8 lg:w-10" src="/website/images/shared/davide-logo-black.svg" alt="">
            <h2 class="font-display w-full w-2/3 mx-auto text-2xl lg:text-5xl">
              Ispirato al Design Sprint di Google
            </h2>
            <img id="decorations" class="absolute right-0 lg:mr-3 mx-auto w-8 lg:w-10" src="/website/images/shared/davide-logo-black.svg" alt="">
          </div>
        </div>
        <div id="whiteCircle" class="relative bg-white w-11/12 md:w-1/2 flex-none mx-auto rounded-full pb-full md:pb-half">
          <div class="absolute top-0 inset-0 flex items-center justify-between text-center p-4">
            <div id="decorations" class="w-full h-full border-2 border-black rounded-full absolute top-0 inset-0" style="transform: scale(0.92);"/>
            <img id="decorations" class="absolute left-0 lg:ml-3 mx-auto w-8 lg:w-10" src="/website/images/shared/davide-logo-black.svg" alt="">
            <h2 class="font-display w-full w-2/3 mx-auto text-2xl lg:text-5xl">
              Per brand che funzionano
            </h2>
            <img id="decorations" class="absolute right-0 lg:mr-3 mx-auto w-8 lg:w-10" src="/website/images/shared/davide-logo-black.svg" alt="">
          </div>
        </div>
        <div id="whiteCircle" class="relative bg-white w-11/12 md:w-1/2 flex-none mx-auto rounded-full pb-full md:pb-half">
          <div class="absolute top-0 inset-0 flex items-center justify-between text-center p-4">
            <div id="decorations" class="w-full h-full border-2 border-black rounded-full absolute top-0 inset-0" style="transform: scale(0.92);"/>
            <img id="decorations" class="absolute left-0 lg:ml-3 mx-auto w-8 lg:w-10" src="/website/images/shared/davide-logo-black.svg" alt="">
            <h2 class="font-display w-full w-2/3 mx-auto text-2xl lg:text-5xl">
              E basta.
            </h2>
            <img id="decorations" class="absolute right-0 lg:mr-3 mx-auto w-8 lg:w-10" src="/website/images/shared/davide-logo-black.svg" alt="">
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
      <div id="websiteBox" class="w-full h-full mx-auto border border-white p-4 md:p-8 lg:p-16 overflow-hidden">
        <div id="boxScroller">
          <h3 id="websiteText" class="text-2xl md:text-4xl lg:text-6xl text-white w-full lg:w-2/3 mx-auto mb-64 lg:mb-72">
            Sviluppa il tuo brand e poi portalo alla conquista del web con un sito web degno della sua bellezza. E con delle performance stellari su ogni tipo di dispositivo.
          </h3>
          <div id="oval" class="border border-white py-16 md:py-32 w-full md:w-2/3 lg:w-1/2 mx-auto flex items-center justify-center" style="border-radius: 100%;">
            <p class="text-white font-display text-2xl lg:text-4xl flex flex-col items-center justify-center">
              Performance <span id="ovalText">Stellari</span>
            </p>
          </div>
          <div id="oval" class="border border-white py-16 md:py-32 w-full md:w-2/3 lg:w-1/2 mx-auto flex items-center justify-center" style="border-radius: 100%;">
            <p class="text-white font-display text-2xl lg:text-4xl flex flex-col items-center justify-center">
              SEO <span id="ovalText">Impeccabile</span>
            </p>
          </div>
          <div id="oval" class="border border-white py-16 md:py-32 w-full md:w-2/3 lg:w-1/2 mx-auto flex items-center justify-center" style="border-radius: 100%;">
            <p class="text-white font-display text-2xl lg:text-4xl flex flex-col items-center justify-center">
              Animazioni <span id="ovalText">Brillanti</span>
            </p>
          </div>
          <div id="oval" class="border border-white py-16 md:py-32 w-full md:w-2/3 lg:w-1/2 mx-auto flex items-center justify-center" style="border-radius: 100%;">
            <p class="text-white font-display text-2xl lg:text-4xl flex flex-col items-center justify-center">
              Design <span id="ovalText">Unico</span>
            </p>
          </div>
          <h3 id="extensionText" class="font-display text-center text-4xl lg:text-6xl text-white w-full md:w-2/3 lg:w-1/2 mx-auto pt-32 pb-64 md:py-64">
            La naturale estensione online del tuo brand
          </h3>
          <p id="likeThisText" class="font-display text-center text-white w-full md:w-2/3 lg:w-1/2 mx-auto pb-64 lg:pb-96">
            (come questo sito web qui)
          </p>
          <div id="popUp1" class="relative border border-white p-8 md:p-16 xl:p-32 lg:ml-16 w-11/12 md:w-6/12 overflow-hidden">
            <p id="popUp1Text" class="text-4xl lg:text-6xl text-white pr-16 relative z-10">
              E non solo è bellissimo da vedere
            </p>
            <img id="popUp1Text" class="absolute top-0 inset-0 object-cover w-full h-full" src="https://media0.giphy.com/media/l0HeaNsyouA7XetWw/giphy.gif?cid=ecf05e475khgv862sq653rb0n102or2ml4qlzcc0ji8x6qia&rid=giphy.gif&ct=g" alt="">
          </div>
          <div class="flex flex-row-reverse transform -translate-y-8">
            <div id="popUp2" class="relative border border-white p-8 md:p-16 xl:p-32 lg:mr-16 w-11/12 md:w-8/12 h-full bg-purple-500 overflow-hidden">
              <h2 id="popUp2Text" class="font-display text-2xl md:text-4xl lg:text-6xl text-white relative z-10">
                Ma è pure una meraviglia da gestire. Anche senza esperienza tecnica
              </h2>
              <img id="popUp1Text" class="absolute top-0 inset-0 w-full h-full object-cover" src="/website/images/homepage/revas.png" alt="">
            </div>
          </div>
          <p id="revas" class="font-display text-center text-white w-full mx-auto pt-64">
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
      halfCurtains: 16,
      curtainWidth: 95,
      curtains: 11,
      world: '',
      worldHeight: 0,
      worldWidth: 0,
      whiteCirclesSection: '',
      www: 0,
      websiteBox: '',
      wwwTextPlaceholder: '',
      boxScroller: '',
      isMobile: false,
      isTablet: false,
      isSmallDesktop: false,
      isDesktop: false,
      isBigDesktop: false,
      isHugeDesktop: false
    }
  },
  head (): any {},
  mounted (): any {
    this.windowWidth = window.innerWidth
    this.windowHeight = window.innerHeight
    this.world = document.getElementById('o')
    this.worldWidth = document.getElementById('conquerText4')?.offsetWidth
    this.worldHeight = document.getElementById('conquerText4')?.offsetHeight
    this.whiteCirclesSection = document.getElementById('whiteCircles')
    this.www = document.getElementById('www')
    this.websiteBox = document.getElementById('websiteBox')
    this.wwwTextPlaceholder = document.getElementById('wwwTextPlaceholder')
    this.boxScroller =  document.getElementById('boxScroller')
    this.setViewportType()
    this.scrollCurtains()
    this.showLogo()
    this.scrollConquer()
    this.scrollMethod()
    this.showWeb(),
    this.scrollWebPage()
  },
  computed: {},
  methods: {
    setViewportType () {
      if (this.windowWidth <= 640) {
        this.isMobile = true
        this.isTablet = false
        this.isSmallDesktop = false
        this.isDesktop = false
        this.isBigDesktop = false
        this.isHugeDesktop = false
      } else if (this.windowWidth <= 768 && this.windowWidth > 640) {
        this.isMobile = false
        this.isTablet = true
        this.isSmallDesktop = false
        this.isDesktop = false
        this.isBigDesktop = false
        this.isHugeDesktop = false
      } else if (this.windowWidth <= 1024 && this.windowWidth > 768) {
        this.isMobile = false
        this.isTablet = false
        this.isSmallDesktop = true
        this.isDesktop = false
        this.isBigDesktop = false
        this.isHugeDesktop = false
      } else if (this.windowWidth <= 1280 && this.windowWidth > 1024) {
        this.isMobile = false
        this.isTablet = false
        this.isSmallDesktop = false
        this.isDesktop = true
        this.isBigDesktop = false
        this.isHugeDesktop = false
      } else if (this.windowWidth <= 1536 && this.windowWidth > 1280) {
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
    scrollCurtains () {
      const curtains0 = this.$gsap.utils.toArray(".curtain0")
      this.$gsap.timeline(
        {
          scrollTrigger: {
            markers: {startColor: "green", endColor: "red", fontSize: "12px"},
            trigger: '#curtainWrapper',
            start: 'bottom bottom',
            pin: true,
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
        { top: 0, yPercent: -100, duration: 5, stagger: -1 }, '<'
      )
      .to('#curtain2', 
        { top: 0, yPercent: -100, duration: 5, stagger: -1 }, '<'
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
      const worldLeft = this.world.getBoundingClientRect().left
      const worldWidth = this.world.getBoundingClientRect().width
      const scrollX = (this.windowWidth - worldLeft)

      console.log(scrollX)

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
      .from('#o', { opacity: 0 }, '<')

      .to('#conquerTitle', { opacity: 0 }, '<')
      .to('#conquerText1', { opacity: 0 }, '<+=0.1')
      .to('#conquerText2', { opacity: 0 }, '<+=0.2')
      .to('#conquerText3', { opacity: 0 }, '<+=0.3')
      .to('#conquerText4', { opacity: 0 }, '<+=0.4')

      .to('#o', { x: -scrollX, scale: 300, force3D: false, duration: 6 }, '<+=0.5')
      .from('#earth', { y: 200, opacity: 0, duration: 5 }, '<')
      .to('#o', { opacity: 0 }, '>-=2')
      .to('#conquerInner', { display:"none" })
      .to('#brandBeauty', { display: 'block'})

      .from('#with', { y: 50, opacity: 0, duration: 2}, '<')
      .from('#outside', { y: 50, opacity: 0, duration: 2}, '>')
      .to('#beautiful', { y: -100, opacity: 0, display: 'none', duration: 2 }, '>+=1')

      .to('#earth', { scale: () => { return this.windowWidth <= 640 ? 3.50 : 1 }, duration: 5 }, '>-=0.2')
      .to('#core', { scale: () => { return this.windowWidth <= 640 ? 3.50 : 1 }, duration: 5 }, '<')
      .from('#inside', { y: 50, opacity: 0, duration: 2 }, '>')
      .to('#inside', { y: -200, opacity: 0, duration: 2 }, '>+=3')
      .to('#core', { opacity: 100, duration: 5 }, '>')
      .to('#earth', { opacity: 0, duration: 1 }, '<')
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
            end: `bottom+=${horizontalScrollLength * 3}px top`,
            scrub: 1
          }
        }
      )
      .from( '#orangeCircle', { y: 800, scale: 3, duration: 3 })
      .from( '#processTitle', { opacity: 0, scale: 1.2 }, '>+=1')
      .to( '#whiteCircles', { x: -(horizontalScrollLength * 3), duration: 20 }, '>+=2')
      .to( '#orangeCircle', { x: -outWidth, rotate: -180, duration: 3 }, '<+=0.7')
      .from('#whiteCircle', { rotation: 90, stagger: 1, duration: 3 }, '<-=0.5')
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
      const startingY = this.windowWidth <= 480 ?  this.websiteBox.getBoundingClientRect().height / 4 : this.websiteBox.getBoundingClientRect().height / 12
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
      .to( '#boxScroller', { y: startingY, duration: 1 }, '>+=1')
      .from('#websiteText', { y: 50, opacity: 0, duration: 1 }, '>')
      .to( '#boxScroller', { y: -this.boxScroller.offsetHeight, duration: 20 }, '>+=1')
      .from('#oval', { y: 100, opacity: 0, duration: 0.5, stagger: 1 }, '<')
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