<template>
  <div>
    <section :class="sectionClass">
      <div :class="containerClass">
        <div class="w-full">
          <div class="flex flex-row items-center justify-between">
            <nuxt-link :to="localePath('index')" @click.native="menuOpen = false">
              <figure>
                <img class="w-10 h-10 rounded-full" src="/images/shared/favicon.png" :alt="$t('shared.header.image.alt')" :title="$t('shared.header.image.title')" loading="lazy">
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
                <button class="hidden md:inline-block py-2 px-4 bg-black hover:bg-gray-700 focus:bg-gray-800 text-white shadow-lg hover:shadow-xl focus:shadow-md rounded-lg mr-4 md:mr-0">
                  {{ $t('shared.header.action') }}
                </button>
              </a>
              <a class="cursor-pointer inline-block md:hidden py-2 px-2 bg-gray-200 hover:bg-gray-300 focus:bg-gray-400 text-gray-800 rounded-lg" @click="toggleMenu">
                <figure>
                  <img v-if="menuOpen === false" src="/icons/menu.svg" alt="Menu Icon" title="menu" style="width: 32px;">
                  <img v-if="menuOpen === true" src="/icons/menu-close.svg" alt="Close Menu Icon" title="close menu" style="width: 32px;">
                </figure>
              </a>
            </div>
          </div>
        </div>
        <div class="bg-white w-screen shadow-lg absolute left-0 py-8 px-8" :class="[{ 'inline-block:': menuOpen }, { 'hidden': !menuOpen }]">
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
            <a class="flex flex-col items-center justify-center bg-gray-200 px-2 py-4 text-center h-full text-xl underline" href="https://medium.com/@davidegiovanni96" target="_blank" rel="noopener">
              Blog
            </a>
            <a class="flex flex-col items-center justify-center bg-gray-200 px-2 py-4 text-center h-full text-xl underline" href="https://medium.com/@davidegiovanni96" target="_blank" rel="noopener">
              Chi sono
            </a>
          </div>
          <button class="py-4 px-4 bg-black w-full text-white shadow-lg hover:shadow-xl focus:shadow-md rounded-lg">
            {{ $t('shared.header.action') }}
          </button>
        </div>
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
    }
  },
  methods: {
    toggleMenu () {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>
