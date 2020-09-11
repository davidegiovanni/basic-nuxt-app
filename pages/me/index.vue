<template>
  <div>
    <section class="pt-12 pb-16 px-4">
      <div class="container mx-auto">
        <div class="md:w-2/3 w-full">
          <h1 :class="h1Class" class="leading-normal mb-6">
            {{ $t(`about.header.title`) }}
          </h1>
          <h2 class="text-lg md:text-2xl" style="line-height: 1.5;">
            {{ $t(`about.header.description`) }}
          </h2>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-6 gap-3 sm:gap-6 pt-16">
          <div class="col-span-1 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`about.header.title`)" :title="$t(`about.header.title`)" loading="lazy" />
          <div class="col-span-1 sm:col-span-2 bg-black py-32 sm:py-64" style="background-image: url('/images/shared/davide-steccanella.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`about.header.title`)" :title="$t(`about.header.title`)" loading="lazy" />
          <div class="col-span-2 sm:col-span-3 bg-black py-32 sm:py-64" style="background-image: url('/images/portfolio/dogs-app.gif'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`about.header.title`)" :title="$t(`about.header.title`)" loading="lazy" />
        </div>
      </div>
    </section>
    <section class="py-12 md:py-24 bg-gray-200 px-8">
      <div class="container mx-auto">
        <div class="w-full mx-auto flex flex-col text-center mx-auto">
          <div class="md:w-2/3 mx-auto md:grid md:grid-cols-3 md:gap-4">
            <div v-for="number in $t('about.sections.numbers')" :key="number.key" class="bg-white p-4 mb-8 md:mb-16 border-b-4 shadow-lg border-black" style="line-height: 1.2;">
              <h3 class="text-6xl">
                {{ number.number }}
              </h3>
              <h4 class="text-xl" style="line-height: 1.5;">
                {{ number.title }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="lg:relative lg:h-screen">
      <div class="lg:absolute flex items-center h-full w-full mt-8 md:p-8 z-20">
        <div class="container mx-auto px-4">
          <div class="lg:w-2/3 w-full">
            <p class="text-2xl md:text-5xl" style="line-height: 1.2;">
              📐
            </p>
            <h2 class="text-2xl md:text-5xl mb-4" style="line-height: 1.2;">
              {{ $t(`about.sections.freelancing.title`) }}
            </h2>
            <h3 class="text-lg md:text-2xl" style="line-height: 1.5;">
              {{ $t(`about.sections.freelancing.description`) }}
            </h3>
          </div>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <div v-if="!visibility" key="start" class="lg:absolute h-64 lg:h-full w-full lg:w-1/3 lg:inline-block lg:inset-y-0 lg:right-0 transform lg:translate-x-8 bg-gray-600" />
        <figure v-if="visibility" key="end" class="lg:absolute w-full my-12 lg:w-1/3 lg:inline-block lg:inset-y-0 lg:right-0 transform lg:translate-x-32">
          <img class="object-cover h-full w-full" src="https://www.ufficiostampa.provincia.tn.it/var/002/storage/images/media/immagini-comunicati-stampa/uxchallenge_20171202-image/1174652-1-ita-IT/UXChallenge_20171202_imagefullwide.jpg" :alt="$t(`about.sections.freelancing.title`)">
        </figure>
      </transition>
    </section>
    <section class="lg:relative lg:h-screen mb-8 lg:mb-0">
      <transition name="fade" mode="out-in">
        <div v-if="!visibility" key="start" class="lg:absolute h-64 lg:h-full w-full lg:w-1/3 lg:inline-block lg:inset-y-0 lg:left-0 transform lg:-translate-x-8 bg-gray-600" />
        <figure v-if="visibility" key="end" class="lg:absolute w-full my-12 lg:w-1/3 lg:inline-block lg:inset-y-0 lg:left-0 transform lg:-translate-x-32">
          <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1557409518-691ebcd96038?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" :alt="$t(`about.sections.japan.title`)">
        </figure>
      </transition>
      <div class="lg:absolute transform lg:translate-x-64 lg:ml-32 flex items-center h-full w-full md:p-8 z-20">
        <div class="container mx-auto px-4">
          <div class="lg:w-2/3 w-full">
            <p class="text-2xl md:text-5xl" style="line-height: 1.2;">
              🌸
            </p>
            <h2 class="text-2xl md:text-5xl mb-4" style="line-height: 1.2;">
              {{ $t(`about.sections.japan.title`) }}
            </h2>
            <h3 class="text-lg md:text-2xl" style="line-height: 1.5;">
              {{ $t(`about.sections.japan.description`) }}
            </h3>
          </div>
        </div>
      </div>
    </section>
    <section class="py-24 mb-24 bg-black text-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-3 gap-8">
          <div class="col-span-3 sm:col-span-2">
            <h2 class="text-2xl md:text-5xl mb-4" style="line-height: 1.2;">
              {{ $t(`about.sections.startup.title`) }}
            </h2>
            <h3 class="text-lg md:text-2xl" style="line-height: 1.5;">
              {{ $t(`about.sections.startup.description`) }}
            </h3>
          </div>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-6 gap-3 sm:gap-6 pt-16">
          <div class="col-span-1 sm:col-span-4 bg-black py-32 sm:py-64" style="background-image: url('/images/shared/dsteccanella.png'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`about.sections.startup.title`)" :title="$t(`about.sections.startup.title`)" loading="lazy" />
          <div class="col-span-1 sm:col-span-2 bg-black py-32 sm:py-64" style="background-image: url('/images/shared/davide-steccanella.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`about.sections.startup.title`)" :title="$t(`about.sections.startup.title`)" loading="lazy" />
        </div>
      </div>
    </section>
    <section class="lg:relative lg:h-screen">
      <div class="lg:absolute flex items-center h-full w-full mt-8 md:p-8 z-20">
        <div class="container mx-auto px-4">
          <div class="lg:w-2/3 w-full">
            <p class="text-2xl md:text-5xl" style="line-height: 1.2;">
              🏳️‍🌈
            </p>
            <h2 class="text-2xl md:text-5xl mb-4" style="line-height: 1.2;">
              {{ $t(`about.sections.lgbt.title`) }}
            </h2>
            <h3 class="text-lg md:text-2xl" style="line-height: 1.5;">
              {{ $t(`about.sections.lgbt.description`) }}
            </h3>
          </div>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <div v-if="!visibility" key="start" class="lg:absolute h-64 lg:h-full w-full lg:w-1/3 lg:inline-block lg:inset-y-0 lg:right-0 transform lg:translate-x-8 bg-gray-600" />
        <figure v-if="visibility" key="end" class="lg:absolute w-full my-12 lg:w-1/3 lg:inline-block lg:inset-y-0 lg:right-0 transform lg:translate-x-32">
          <img class="object-cover h-full w-full" src="/images/shared/pride.jpg" :alt="$t(`about.sections.lgbt.title`)">
        </figure>
      </transition>
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
      return 'text-3xl md:text-5xl'
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
      title: this.$t('about.meta.title'),
      meta: metadata({
        title: this.$t('about.meta.title'),
        description: this.$t('about.meta.description'),
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
