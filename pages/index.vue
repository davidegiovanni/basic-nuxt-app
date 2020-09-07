<template>
  <div class="overflow-hidden">
    <section class="lg:relative lg:h-500">
      <div class="lg:absolute flex items-center h-full w-full p-8 z-20">
        <div class="container mx-auto">
          <div class="lg:w-1/2">
            <h1 class="text-2xl md:text-5xl mb-4" style="line-height: 1.2;">
              {{ $t(`home.sections.header.title`) }}
            </h1>
            <h2 class="text-lg md:text-2xl" style="line-height: 1.5;">
              {{ $t(`home.sections.header.description`) }}
            </h2>
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="arrow-down mt-8 w-8 h-8 animate-bounce"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </div>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <div v-if="!visibility" key="start" class="lg:absolute h-64 lg:h-full w-full lg:w-1/2 lg:inline-block lg:inset-y-0 lg:right-0 transform lg:translate-x-8 bg-orange-100" />
        <figure v-if="visibility" key="end" class="lg:absolute w-full lg:w-1/2 lg:inline-block lg:inset-y-0 lg:right-0 transform lg:translate-x-8">
          <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1548025991-cb332f419f05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" :alt="$t(`home.sections.header.title`)">
        </figure>
      </transition>
    </section>
    <section class="py-24 bg-gray-200 px-8">
      <div class="container mx-auto">
        <div class="w-full md:w-2/3 text-center mx-auto">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="presentation-chart-line w-10 h-10 mx-auto mb-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
          <h2 class="text-2xl md:text-5xl mb-4" style="line-height: 1.2;">
            {{ $t(`home.sections.jobs.intro`) }}
          </h2>
        </div>
      </div>
    </section>
    <section class="pb-16 pt-12">
      <div :class="containerClass">
        <div class="lg:w-2/3 w-full">
          <p class="font-medium mb-4 border-b-4 border-indigo-600 inline-block h-10 text-md md:text-xl">
            {{ $t(`home.sections.jobs.differentiate.intro`) }}
          </p>
          <h2 class="text-2xl md:text-5xl mb-4" style="line-height: 1.2;">
            {{ $t(`home.sections.jobs.differentiate.title`) }}
          </h2>
          <h3 class="text-lg md:text-2xl" style="line-height: 1.5;">
            {{ $t(`home.sections.jobs.differentiate.description`) }}
          </h3>
          <div class="col-span-3 sm:col-span-1 my-4">
            <div class="flex flex-col justify-center items-start h-full">
              <div v-for="link in $t(`home.sections.jobs.differentiate.jobs`)" :key="link.key" class="text-xl lg:text-2xl text-indigo-600 ml-8">
                <span class="flex items-center" style="line-height: 1.5;">
                  {{ link.title }}
                </span>
                <div class="h-1 w-16 bg-indigo-200 my-4" />
              </div>
            </div>
          </div>
          <button class="py-4 px-6 text-lg text-white shadow-lg hover:shadow-xl focus:shadow-md rounded-lg bg-black">
            <span class="flex items-center hover:animate-pulse">
              {{ $t(`home.sections.jobs.differentiate.action`) }}
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="arrow-right w-6 h-6 ml-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </button>
        </div>
        <transition name="fade" mode="out-in">
          <div v-if="!visibility" key="start" class="grid grid-cols-2 sm:grid-cols-6 gap-3 sm:gap-6 pt-16 animate-pulse">
            <div class="bg-green-100 col-span-1 bg-black py-32 sm:py-64" :title="$t(`home.sections.jobs.differentiate.intro`)" loading="lazy" />
            <div class="bg-pink-100 col-span-1 sm:col-span-2 bg-black py-32 sm:py-64" :title="$t(`home.sections.jobs.differentiate.title`)" loading="lazy" />
            <div class="bg-indigo-100 col-span-2 sm:col-span-3 bg-black py-32 sm:py-64" :title="$$t(`home.sections.jobs.differentiate.description`)" loading="lazy" />
          </div>
          <div v-if="visibility" key="end" class="grid grid-cols-2 sm:grid-cols-6 gap-3 sm:gap-6 pt-16">
            <div class="col-span-1 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.sustainability.title`)" :title="$t(`home.sections.sustainability.title`)" loading="lazy" />
            <div class="col-span-1 sm:col-span-2 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1579047917338-a6a69144fe63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.sustainability.title`)" :title="$t(`home.sections.sustainability.title`)" loading="lazy" />
            <div class="col-span-2 sm:col-span-3 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1573274932200-51fe430f05f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.sustainability.title`)" :title="$t(`home.sections.sustainability.title`)" loading="lazy" />
          </div>
        </transition>
      </div>
    </section>
    <section class="pb-16 pt-12">
      <div :class="containerClass">
        <div class="lg:w-2/3 w-full">
          <p class="font-medium mb-4 border-b-4 border-indigo-600 inline-block h-10 text-md md:text-xl">
            {{ $t(`home.sections.jobs.grow.intro`) }}
          </p>
          <h2 class="text-2xl md:text-5xl mb-4" style="line-height: 1.2;">
            {{ $t(`home.sections.jobs.grow.title`) }}
          </h2>
          <h3 class="text-lg md:text-2xl" style="line-height: 1.5;">
            {{ $t(`home.sections.jobs.grow.description`) }}
          </h3>
          <div class="col-span-3 sm:col-span-1 my-4">
            <div class="flex flex-col justify-center items-start h-full">
              <div v-for="link in $t(`home.sections.jobs.grow.jobs`)" :key="link.key" class="text-xl lg:text-2xl text-purple-600 ml-8">
                <span class="flex items-center" style="line-height: 1.5;">
                  {{ link.title }}
                </span>
                <div class="h-1 w-16 bg-purple-200 my-4" />
              </div>
            </div>
          </div>
          <button :class="{ 'bg-indigo-700': darkMode, 'bg-black': !darkMode }" class="py-4 px-6 text-lg text-white shadow-lg hover:shadow-xl focus:shadow-md rounded-lg">
            <span class="flex items-center hover:animate-pulse">
              {{ $t(`home.sections.jobs.grow.action`) }}
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="arrow-right w-6 h-6 ml-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </button>
        </div>
        <transition name="fade" mode="out-in">
          <div v-if="!visibility" key="start" class="grid grid-cols-2 sm:grid-cols-6 gap-3 sm:gap-6 pt-16 animate-pulse">
            <div class="bg-green-100 col-span-1 bg-black py-32 sm:py-64" :title="$t(`home.sections.jobs.grow.intro`)" loading="lazy" />
            <div class="bg-pink-100 col-span-1 sm:col-span-2 bg-black py-32 sm:py-64" :title="$t(`home.sections.jobs.grow.title`)" loading="lazy" />
            <div class="bg-indigo-100 col-span-2 sm:col-span-3 bg-black py-32 sm:py-64" :title="$t(`home.sections.jobs.grow.description`)" loading="lazy" />
          </div>
          <div v-if="visibility" key="end" class="grid grid-cols-2 sm:grid-cols-6 gap-3 sm:gap-6 pt-16">
            <div class="col-span-1 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1577412827102-fc566d0e7cae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.sustainability.title`)" :title="$t(`home.sections.sustainability.title`)" loading="lazy" />
            <div class="col-span-1 sm:col-span-2 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.sustainability.title`)" :title="$t(`home.sections.sustainability.title`)" loading="lazy" />
            <div class="col-span-2 sm:col-span-3 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.sustainability.title`)" :title="$t(`home.sections.sustainability.title`)" loading="lazy" />
          </div>
        </transition>
      </div>
    </section>
    <section class="px-4 py-48 md:py-64 bg-gray-200 has-background-image" style="background-size: cover; background-position: right bottom; background-repeat: no-repeat;">
      <div class="container mx-auto md:mb-32 lg:mb-0">
        <div class="w-full lg:w-2/3 text-center lg:text-left transform -translate-y-32 md:-translate-y-48 lg:translate-y-0 lg:translate-x-64 mx-auto">
          <h2 class="text-2xl md:text-5xl mb-8" style="line-height: 1.2;">
            {{ $t(`home.sections.switch.title`) }}
          </h2>
          <button class="bg-black py-4 px-6 text-lg text-white shadow-lg hover:shadow-xl focus:shadow-md rounded-lg">
            <span class="flex items-center">
              {{ $t(`home.sections.switch.action`) }}
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="arrow-right w-6 h-6 ml-4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import metadata from '@/utils/metadata'

export default {
  components: {

  },
  data () {
    return {
      visibility: false,
      visibilityLate: false
    }
  },
  computed: {
    sectionClass () {
      return 'py-16'
    },
    containerClass () {
      return 'max-w-screen-xl m-auto px-8'
    },
    h1Class () {
      return 'text-2xl md:text-5xl'
    }
  },
  mounted () {
    this.showDiv()
    this.showDivLate()
  },
  methods: {
    makeVisible () {
      this.visibility = true
    },
    makeVisibleLate () {
      this.visibilityLate = true
    },
    showDiv () {
      setTimeout(function () { this.makeVisible() }.bind(this), 800)
    },
    showDivLate () {
      setTimeout(function () { this.makeVisibleLate() }.bind(this), 1000)
    }
  },
  head () {
    return {
      title: this.$t('home.meta.title'),
      meta: metadata({
        title: this.$t('home.meta.title'),
        description: this.$t('home.meta.description'),
        url: process.env.BASE_URL + this.$route.path,
        image: process.env.BASE_URL + '/images/shared/og-image.png'
      }),
      link: [
        {
          rel: 'canonical',
          href: process.env.BASE_URL + this.$route.path
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.hoverable:hover {
  transition: all 0.5s ease;
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
}

.has-background-image {
    background-image: url('/website/images/index/more-than-a-logo-mobile.png');
  }

@screen lg {
  .has-background-image {
    background-image: url('/website/images/index/more-than-a-logo.png');
  }
}
</style>
