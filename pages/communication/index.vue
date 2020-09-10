<template>
  <div class="overflow-hidden">
    <section class="lg:relative lg:h-500 bg-purple-500">
      <div class="lg:absolute flex items-center h-full w-full p-8 z-20">
        <div class="container mx-auto">
          <div class="lg:w-1/2">
            <h1 class="text-purple-100 text-2xl md:text-5xl mb-4" style="line-height: 1.2;">
              {{ $t(`communication.sections.header.title`) }}
            </h1>
            <h2 class="text-purple-200 text-lg md:text-2xl" style="line-height: 1.5;">
              {{ $t(`communication.sections.header.description`) }}
            </h2>
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="arrow-down mt-8 w-8 h-8 animate-bounce text-purple-300"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </div>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <div v-if="!visibility" key="start" class="lg:absolute h-64 lg:h-full w-full lg:w-1/2 lg:inline-block lg:inset-y-0 lg:right-0 transform lg:translate-x-8 bg-purple-600" />
        <figure v-if="visibility" key="end" class="lg:absolute w-full lg:w-1/2 lg:inline-block lg:inset-y-0 lg:right-0 transform lg:translate-x-8">
          <img class="object-cover h-full w-full" src="/website/images/communication/header.svg" :alt="$t(`communication.sections.header.title`)">
        </figure>
      </transition>
    </section>
    <section class="py-24 bg-purple-200 px-8">
      <div class="container mx-auto">
        <div class="w-full md:w-2/3 text-center mx-auto">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="presentation-chart-line w-10 h-10 mx-auto mb-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
          <h2 class="text-2xl md:text-5xl mb-4" style="line-height: 1.2;">
            {{ $t(`communication.sections.jobs.intro`) }}
          </h2>
        </div>
      </div>
    </section>
    <section class="lg:relative lg:h-screen">
      <div class="lg:absolute flex items-center h-full w-full mt-8 md:p-8 z-20">
        <div :class="containerClass">
          <div class="lg:w-2/3 w-full">
            <p class="font-medium mb-4 border-b-4 border-purple-600 inline-block h-10 text-md md:text-xl">
              {{ $t(`communication.sections.jobs.brand.intro`) }}
            </p>
            <h2 class="text-2xl md:text-5xl mb-4" style="line-height: 1.2;">
              {{ $t(`communication.sections.jobs.brand.title`) }}
            </h2>
            <h3 class="text-lg md:text-2xl" style="line-height: 1.5;">
              {{ $t(`communication.sections.jobs.brand.description`) }}
            </h3>
            <div class="col-span-3 sm:col-span-1 my-4">
              <div class="flex flex-col justify-center items-start h-full">
                <div v-for="link in $t(`communication.sections.jobs.brand.jobs`)" :key="link.key" class="text-xl lg:text-2xl text-purple-600 ml-8">
                  <span class="flex items-center" style="line-height: 1.5;">
                    {{ link.title }}
                  </span>
                  <div class="h-1 w-16 bg-purple-200 my-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <div v-if="!visibility" key="start" class="lg:absolute h-64 lg:h-full w-full lg:w-1/3 lg:inline-block lg:inset-y-0 lg:right-0 transform lg:translate-x-8 bg-purple-600" />
        <figure v-if="visibility" key="end" class="lg:absolute w-full my-12 lg:w-1/3 lg:inline-block lg:inset-y-0 lg:right-0 transform lg:translate-x-32">
          <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" :alt="$t(`communication.sections.header.title`)">
        </figure>
      </transition>
    </section>
    <section class="lg:relative lg:h-screen">
      <transition name="fade" mode="out-in">
        <div v-if="!visibility" key="start" class="lg:absolute h-64 lg:h-full w-full lg:w-1/3 lg:inline-block lg:inset-y-0 lg:left-0 transform lg:-translate-x-8 bg-purple-600" />
        <figure v-if="visibility" key="end" class="lg:absolute w-full my-12 lg:w-1/3 lg:inline-block lg:inset-y-0 lg:left-0 transform lg:-translate-x-32">
          <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" :alt="$t(`communication.sections.header.title`)">
        </figure>
      </transition>
      <div class="lg:absolute transform lg:translate-x-64 lg:ml-32 flex items-center h-full w-full md:p-8 z-20">
        <div :class="containerClass">
          <div class="lg:w-2/3 w-full">
            <p class="font-medium mb-4 border-b-4 border-purple-600 inline-block h-10 text-md md:text-xl">
              {{ $t(`communication.sections.jobs.target.intro`) }}
            </p>
            <h2 class="text-2xl md:text-5xl mb-4" style="line-height: 1.2;">
              {{ $t(`communication.sections.jobs.target.title`) }}
            </h2>
            <h3 class="text-lg md:text-2xl" style="line-height: 1.5;">
              {{ $t(`communication.sections.jobs.target.description`) }}
            </h3>
            <div class="col-span-3 sm:col-span-1 my-4">
              <div class="flex flex-col justify-center items-start h-full">
                <div v-for="link in $t(`communication.sections.jobs.target.jobs`)" :key="link.key" class="text-xl lg:text-2xl text-purple-600 ml-8">
                  <span class="flex items-center" style="line-height: 1.5;">
                    {{ link.title }}
                  </span>
                  <div class="h-1 w-16 bg-purple-200 my-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="lg:relative lg:h-screen">
      <div class="lg:absolute flex items-center h-full w-full md:p-8 z-20">
        <div :class="containerClass">
          <div class="lg:w-2/3 w-full">
            <p class="font-medium mb-4 border-b-4 border-purple-600 inline-block h-10 text-md md:text-xl">
              {{ $t(`communication.sections.jobs.communication.intro`) }}
            </p>
            <h2 class="text-2xl md:text-5xl mb-4" style="line-height: 1.2;">
              {{ $t(`communication.sections.jobs.communication.title`) }}
            </h2>
            <h3 class="text-lg md:text-2xl" style="line-height: 1.5;">
              {{ $t(`communication.sections.jobs.communication.description`) }}
            </h3>
            <div class="col-span-3 sm:col-span-1 my-4">
              <div class="flex flex-col justify-center items-start h-full">
                <div v-for="link in $t(`communication.sections.jobs.communication.jobs`)" :key="link.key" class="text-xl lg:text-2xl text-purple-600 ml-8">
                  <span class="flex items-center" style="line-height: 1.5;">
                    {{ link.title }}
                  </span>
                  <div class="h-1 w-16 bg-purple-200 my-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <div v-if="!visibility" key="start" class="lg:absolute h-64 lg:h-full w-full lg:w-1/3 lg:inline-block lg:inset-y-0 lg:right-0 transform lg:translate-x-8 bg-purple-600" />
        <figure v-if="visibility" key="end" class="lg:absolute w-full my-12 lg:w-1/3 lg:inline-block lg:inset-y-0 lg:right-0 transform lg:translate-x-32">
          <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1525129498994-580709352e20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" :alt="$t(`communication.sections.header.title`)">
        </figure>
      </transition>
    </section>
    <section class="py-12 md:py-24 bg-gray-200 px-8">
      <div class="container mx-auto">
        <div class="w-full mx-auto flex flex-col text-center mx-auto">
          <p class="text-5xl">
            👋
          </p>
          <h2 class="text-2xl md:text-5xl mb-8" style="line-height: 1.2;">
            {{ $t('communication.sections.goodbye.title') }}
          </h2>
          <div class="md:w-2/3 mx-auto md:grid md:grid-cols-3 md:gap-4">
            <p v-for="point in $t('communication.sections.goodbye.points')" :key="point.key" class="bg-white p-4 text-xl md:text-2xl mb-8 md:mb-16 border-b-4 shadow-lg border-purple-600" style="line-height: 1.2;">
              {{ point }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="px-4 py-48 md:py-64 bg-gray-200 has-background-image" style="background-size: cover; background-position: right bottom; background-repeat: no-repeat;">
      <div class="container mx-auto md:mb-32 lg:mb-0">
        <div class="w-full lg:w-2/3 text-center lg:text-left transform -translate-y-32 md:-translate-y-48 lg:translate-y-0 lg:translate-x-64 mx-auto">
          <h2 class="text-2xl md:text-5xl mb-8" style="line-height: 1.2;">
            {{ $t(`communication.sections.switch.title`) }}
          </h2>
          <a href="https://form.typeform.com/to/BR9qD3pl">
            <div class="bg-black py-4 px-6 text-lg inline-block text-white shadow-lg hover:shadow-xl focus:shadow-md rounded-lg">
              <span class="flex items-center hover:animate-pulse tracking-widest">
                {{ $t(`communication.sections.switch.action`) }}
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="arrow-right w-6 h-6 ml-2"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </div>
          </a>
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
      title: this.$t('communication.meta.title'),
      meta: metadata({
        title: this.$t('communication.meta.title'),
        description: this.$t('communication.meta.description'),
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
  transition: opacity 0.9s;
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
    background-image: url('/website/images/communication/switch-mobile.png');
  }

@screen lg {
  .has-background-image {
    background-image: url('/website/images/communication/switch.png');
  }
}
</style>
