<template>
  <div>
    <section :class="{ 'bg-black text-white': darkMode}" class="py-4">
      <div :class="containerClass">
        <div class="w-full">
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-row items-center">
              <nuxt-link :to="localePath('index')" @click.native="menuOpen = false">
                <figure>
                  <img class="w-12 h-12 rounded-full pulsing" src="/images/shared/favicon.png" :alt="$t('shared.header.image.alt')" :title="$t('shared.header.image.title')" loading="lazy">
                </figure>
              </nuxt-link>
              <nuxt-link :to="localePath({ name: 'brand', query: { from: 'navbar-desktop'}})">
                <p class="ml-8 hover:text-indigo-500 hidden lg:inline-block">
                  Immagine di brand
                </p>
              </nuxt-link>
              <nuxt-link :to="localePath({ name: 'communication', query: { from: 'navbar-desktop'}})">
                <p class="ml-8 hover:text-indigo-500 hidden lg:inline-block">
                  Comunicazione di brand
                </p>
              </nuxt-link>
            </div>
            <div class="flex flex-row items-center justify-between">
              <nuxt-link :to="localePath({ name: 'me', query: { from: 'navbar-desktop'}})">
                <p class="mr-8 hover:text-indigo-500 hidden lg:inline-block">
                  {{ $t('shared.header.about') }}
                </p>
              </nuxt-link>
              <a href="https://medium.com/@davidegiovanni96" target="_blank" rel="noopener" class="mr-8 hover:text-indigo-500 hidden lg:inline-block">
                Blog
              </a>
              <a href="mailto:davidegiovanni96@gmail.com" :title="$t('shared.header.action')">
                <button :class="{ 'bg-indigo-700': darkMode, 'bg-black': !darkMode }" class="hidden lg:inline-block py-2 px-4 hover:bg-gray-700 focus:bg-gray-800 text-white shadow-lg hover:shadow-xl focus:shadow-md rounded-lg mr-4 md:mr-0 hoverable">
                  {{ $t('shared.header.action') }}
                </button>
              </a>
              <a :class="{'bg-gray-800 hover:bg-gray-800 focus:bg-gray-800 text-white': darkMode }" class="cursor-pointer inline-block lg:hidden py-2 px-2 bg-gray-200 hover:bg-gray-300 focus:bg-gray-400 rounded-full" @click="toggleMenu">
                <transition mode="out-in">
                  <svg
                    v-if="menuOpen === false"
                    class="w-6 h-6 stroke-current"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                  <svg
                    v-if="menuOpen === true"
                    class="w-6 h-6 stroke-current"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </transition>
              </a>
            </div>
          </div>
        </div>
        <transition name="slideDown" mode="out-in">
          <div v-if="menuOpen" :class="{ 'bg-black text-white': darkMode, 'bg-white': !darkMode}" class="origin-top w-screen shadow-lg absolute left-0 p-8 overflow-hidden z-20">
            <transition name="fade" mode="out-in" appear>
              <div class="origin-top">
                <p class="text-xl text-gray-600">
                  Servizi
                </p>
                <nuxt-link :to="localePath({name: 'brand', query: { from: 'navbar-mobile'}})" @click.native="menuOpen = false">
                  <div class="mb-4 flex items-center justify-between border-b-2 border-gray-light">
                    <p class="text-2xl">
                      Immagine di brand
                    </p>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="arrow-right w-6 h-6 ml-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </nuxt-link>
                <nuxt-link :to="localePath({name: 'communication', query: { from: 'navbar-mobile'}})" @click.native="menuOpen = false">
                  <div class="mb-4 pb-4 flex justify-between items-center border-b-2 border-gray-light" >
                    <p class="text-2xl" style="line-height: 1;">
                      Comunicazione di brand
                    </p>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="arrow-right w-6 h-6 ml-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </nuxt-link>
                <p class="text-xl text-gray-600">
                  Altro
                </p>
                <nuxt-link :to="localePath({name: 'me', query: { from: 'navbar-mobile'}})" @click.native="menuOpen = false">
                  <div class="mb-4 flex items-center justify-between border-b-2 border-gray-light">
                    <p class="text-2xl">
                      Chi sono
                    </p>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="arrow-right w-6 h-6 ml-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </nuxt-link>
                <a href="https://medium.com/@davidegiovanni96">
                  <div class="mb-8 pb-4 flex justify-between items-center border-b-2 border-gray-light" >
                    <p class="text-2xl" style="line-height: 1;">
                      Blog
                    </p>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="arrow-right w-6 h-6 ml-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </a>
                <button :class="{ 'bg-indigo-700': darkMode, 'bg-black': !darkMode }" class="py-4 px-4 w-full text-lg text-white shadow-lg hover:shadow-xl focus:shadow-md rounded-lg hoverable">
                  {{ $t('shared.header.action') }}
                </button>
              </div>
            </transition>
          </div>
        </transition>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      menuOpen: false
    }
  },
  computed: {
    sectionClass () {
      return 'py-4'
    },
    containerClass () {
      return 'max-w-screen-xl m-auto px-8'
    },
    h1Class () {
      return 'text-3xl '
    },
    darkMode () {
      if (this.$route.name === null) {
        return false
      }
      return this.$route.name.startsWith('portfolio')
    }
  },
  methods: {
    toggleMenu () {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.slideDown-enter-active, .slideDown-leave-active {
  transition: height 1s cubic-bezier(0,.54,.58,.91), padding 1s;
}

.slideDown-enter-to, .slideDown-leave {
  height: 480px;
  padding: 2rem;
}

.slideDown-enter, .slideDown-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 0;
  padding: 0 2rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.3s cubic-bezier(0,.54,.58,.91);
}

.fade-enter-to, .fade-leave {
  opacity: 100;
  transform: translateY(0px);
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-200px);
}

.pulsing {
  -moz-animation: pulse 2s infinite;
  -webkit-animation: pulse 2s infinite;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
      box-shadow: 0 0 0 0 rgba(88, 120, 243, 0.4);
  }
  70% {
      box-shadow: 0 0 0 10px rgba(88, 120, 243, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(88, 120, 243, 0);
  }
}

.hoverable:hover {
  transition: all 0.5s ease;
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
}

</style>
