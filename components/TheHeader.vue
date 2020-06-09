<template>
  <div>
    <section :class="{ 'bg-black text-white': darkMode}" class="py-4">
      <div :class="containerClass">
        <div class="w-full">
          <div class="flex flex-row items-center justify-between">
            <nuxt-link :to="localePath('index')" @click.native="menuOpen = false">
              <figure>
                <img class="w-12 h-12 rounded-full pulsing" src="/images/shared/favicon.png" :alt="$t('shared.header.image.alt')" :title="$t('shared.header.image.title')" loading="lazy">
              </figure>
            </nuxt-link>
            <div class="flex flex-row items-center justify-between">
              <nuxt-link :to="localePath('me')">
                <p class="mr-8 hover:text-indigo-500 hidden sm:inline-block">
                  {{ $t('shared.header.about') }}
                </p>
              </nuxt-link>
              <nuxt-link :to="localePath('portfolio')">
                <p class="mr-8 hover:text-indigo-500 hidden sm:inline-block">
                  {{ $t('shared.header.works') }}
                </p>
              </nuxt-link>
              <a href="https://medium.com/@davidegiovanni96" target="_blank" rel="noopener" class="mr-8 hover:text-indigo-500 hidden sm:inline-block">
                Blog
              </a>
              <a href="mailto:davidegiovanni96@gmail.com" :title="$t('shared.header.action')">
                <button :class="{ 'bg-indigo-700': darkMode, 'bg-black': !darkMode }" class="hidden md:inline-block py-2 px-4 hover:bg-gray-700 focus:bg-gray-800 text-white shadow-lg hover:shadow-xl focus:shadow-md rounded-lg mr-4 md:mr-0 hoverable">
                  {{ $t('shared.header.action') }}
                </button>
              </a>
              <a :class="{'bg-gray-500': darkMode }" class="cursor-pointer inline-block md:hidden py-2 px-2 bg-gray-200 hover:bg-gray-300 focus:bg-gray-400 text-gray-800 rounded-full" @click="toggleMenu">
                <transition mode="out-in">
                  <figure v-if="menuOpen === false">
                    <img src="/icons/menu.svg" alt="Menu Icon" title="menu" style="width: 32px;">
                  </figure>
                  <figure v-if="menuOpen === true">
                    <img src="/icons/menu-close.svg" alt="Close Menu Icon" title="close menu" style="width: 32px;">
                  </figure>
                </transition>
              </a>
            </div>
          </div>
        </div>
        <transition name="slideDown" mode="out-in">
          <div v-if="menuOpen" :class="{ 'bg-black text-white': darkMode, 'bg-white': !darkMode}" class="origin-top w-screen shadow-lg absolute left-0 p-8 overflow-hidden z-20">
            <transition name="fade" mode="out-in" appear>
              <div class="origin-top">
                <div class="bg-black py-4 px-4 mb-8">
                  <p class="text-white text-2xl">
                    {{ $t('shared.header.works') }}
                  </p>
                  <div class="grid grid-cols-2 gap-2">
                    <div class="p-10" style="background-image:url(/images/portfolio/personal-website.png); background-size: cover; background-position: center;" />
                    <div class="p-10" style="background-image:url(https://i.imgur.com/PJgTg7a.png); background-size: cover; background-position: center;" />
                    <div class="p-10" style="background-image:url(/images/portfolio/dogs-app.gif); background-size: cover; background-position: center;" />
                    <div class="flex flex-col items-center justify-center bg-gray-900 col-span-1 text-center">
                      <nuxt-link class="text-white text-md" :to="localePath('portfolio')" @click.native="menuOpen = !menuOpen">
                        Vedi tutti
                      </nuxt-link>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-3 mb-8">
                  <a :class="{ 'bg-gray-900': darkMode, 'bg-gray-200': !darkMode }" class="flex flex-col items-center justify-center px-2 py-4 text-center h-full text-xl underline" href="https://medium.com/@davidegiovanni96" target="_blank" rel="noopener">
                    Blog
                  </a>
                  <nuxt-link :class="{ 'bg-gray-900': darkMode, 'bg-gray-200': !darkMode }" class="flex flex-col items-center justify-center px-2 py-4 text-center h-full text-xl underline" :to="localePath('me')" @click.native="menuOpen = !menuOpen">
                    Chi sono
                  </nuxt-link>
                </div>
                <button :class="{ 'bg-indigo-700': darkMode, 'bg-black': !darkMode }" class="py-4 px-4 w-full text-white shadow-lg hover:shadow-xl focus:shadow-md rounded-lg hoverable">
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
  height: 500px;
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
