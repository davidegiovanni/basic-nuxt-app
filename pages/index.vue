<template>
  <div>
    <section :class="sectionClass">
      <div :class="containerClass">
        <div class="md:w-2/3 w-full">
          <h1 :class="h1Class">
            {{ $t(`home.sections.header.title`) }}
          </h1>
        </div>
      </div>
    </section>
    <section class="pb-16">
      <div :class="containerClass">
        <div class="md:w-2/3 w-full">
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-8">
            <div v-for="activity in $t(`home.sections.header.activities`)" :key="activity.key">
              <p class="text-2xl">
                {{ activity.title }}
              </p>
              <p v-for="point in activity.points" :key="point.key" class="hidden lg:inline-block">
                {{ point }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pb-16 pt-12">
      <div :class="containerClass">
        <div class="bg-black flex flex-row flex-wrap grid grid-cols-3">
          <div class="text-white p-8 sm:p-16 col-span-3 lg:col-span-1">
            <h2 class="text-2xl">
              {{ $t(`home.sections.lastproject.title`) }} <span class="opacity-50">{{ $t(`home.sections.lastproject.lastproject`) }}</span>
            </h2>
            <p class="text-white mb-16 mt-8 leading-loose hidden md:inline-block">
              {{ $t(`home.sections.lastproject.description`) }}
              <ul class="list-disc list-inside mt-8">
                <li v-for="point in $t(`home.sections.lastproject.points`)" :key="point.point" class="mt-4">
                  {{ point }}
                </li>
              </ul>
            </p>
            <a href="mailto:davidegiovanni96@gmail.com" :title="$t(`home.sections.lastproject.action`)">
              <button class="hidden md:inline-block py-2 px-4 bg-gray-800 hover:bg-gray-700 focus:bg-gray-800 shadow-lg text-white hover:shadow-xl focus:shadow-md rounded-lg">
                <span class="opacity-100 text-white">
                  {{ $t(`home.sections.lastproject.action`) }}
                </span>
              </button>
            </a>
          </div>
          <div :class="'text-white p-8 sm:p-16 col-span-3 lg:col-span-2 bg-' + $t(`home.sections.lastproject.background`)">
            <transition name="fade">
              <figure v-if="visibility" class="w-full h-full">
                <img class="w-full h-full object-cover" src="/images/portfolio/dogs-app.gif" :alt="$t(`home.sections.lastproject.title`)" :title="$t(`home.sections.lastproject.title`)" loading="lazy">
              </figure>
            </transition>
          </div>
        </div>
      </div>
    </section>
    <section class="pb-16 pt-12">
      <div :class="containerClass">
        <div class="md:w-2/3 w-full">
          <h2 :class="h1Class">
            {{ $t(`home.sections.sustainability.title`) }}
          </h2>
          <p>
            {{ $t(`home.sections.sustainability.description`) }}
          </p>
        </div>
        <transition name="fade">
          <div v-if="visibilityLate" class="grid grid-cols-2 sm:grid-cols-6 gap-3 sm:gap-6 pt-16">
            <div class="col-span-1 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1534364432722-54585249d766?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.sustainability.title`)" :title="$t(`home.sections.sustainability.title`)" loading="lazy" />
            <div class="col-span-1 sm:col-span-2 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.sustainability.title`)" :title="$t(`home.sections.sustainability.title`)" loading="lazy" />
            <div class="col-span-2 sm:col-span-3 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.sustainability.title`)" :title="$t(`home.sections.sustainability.title`)" loading="lazy" />
          </div>
        </transition>
      </div>
    </section>
    <section class="pb-16 pt-12">
      <div :class="containerClass">
        <div class="grid grid-cols-3 gap-6">
          <div class="col-span-3 sm:col-span-2">
            <h2 :class="h1Class">
              {{ $t(`home.sections.centraltruth.title`) }}
            </h2>
            <p>
              S{{ $t(`home.sections.centraltruth.description`) }}
            </p>
          </div>
          <div class="col-span-3 sm:col-span-1">
            <div class="flex flex-col justify-center items-start h-full">
              <p v-for="link in $t(`home.sections.centraltruth.links`)" :key="link.key" class="underline text-2xl hover:text-teal-500">
                {{ link.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pb-16 pt-12">
      <div :class="containerClass">
        <div class="grid grid-cols-5 gap-8">
          <div class="col-span-5 sm:col-span-2 py-8">
            <h2 :class="h1Class" class="leading-normal mb-6">
              {{ $t(`home.sections.businessvalue.title`) }}
            </h2>
            <p class=" mb-6">
              {{ $t(`home.sections.businessvalue.description`) }}
            </p>
            <p v-for="link in $t(`home.sections.businessvalue.links`)" :key="link.key" class="underline text-2xl hover:text-teal-500">
              {{ link.title }}
            </p>
          </div>
          <transition name="fade">
            <div
              v-if="visibilityLate"
              class="col-span-5 sm:col-span-3 py-32"
              style="background-image: url('https://images.unsplash.com/photo-1470110385011-8c66cb46f0e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-size: cover; background-position: center; background-repeat: no-repeat;"
              :alt="$t(`home.sections.businessvalue.title`)"
              :title="$t(`home.sections.businessvalue.title`)"
              loading="lazy"
            />
          </transition>
        </div>
      </div>
    </section>
    <section class="pb-16 pt-12">
      <div :class="containerClass">
        <hr class="border-t-2">
      </div>
    </section>
    <section class="pb-16 pt-12">
      <div :class="containerClass">
        <div class="grid grid-cols-3 gap-8">
          <div class="col-span-3 sm:col-span-2">
            <h2 :class="h1Class">
              {{ $t(`home.sections.ethics.title`) }}
            </h2>
            <p>
              {{ $t(`home.sections.ethics.description`) }}
            </p>
          </div>
          <div class="col-span-3 sm:col-span-1">
            <div class="flex flex-col justify-center items-start h-full">
              <p v-for="link in $t(`home.sections.ethics.links`)" :key="link.key" class="underline text-2xl hover:text-teal-500">
                {{ link.title }}
              </p>
            </div>
          </div>
        </div>
        <transition name="fade">
          <div v-if="visibilityLatest" class="grid grid-cols-2 sm:grid-cols-6 gap-3 sm:gap-6 pt-16">
            <div class="col-span-1 sm:col-span-4 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1522543558187-768b6df7c25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.ethics.title`)" :title="$t(`home.sections.ethics.title`)" loading="lazy" />
            <div class="col-span-1 sm:col-span-2 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.ethics.title`)" :title="$t(`home.sections.ethics.title`)" loading="lazy" />
          </div>
        </transition>
      </div>
    </section>
    <transition name="fade">
      <section v-show="visibilityLatest" class="bg-black pb-24 pt-16">
        <div :class="containerClass">
          <h1 class="text-3xl md:text-5xl pb-8 text-white">
            {{ $t(`portfolio.title`) }}
          </h1>
          <div class="grid grid-cols-2 gap-2 md:gap-8">
            <div v-for="(work) in $t(`portfolio.works`)" :key="work.key" class="col-span-1 p-16 md:p-32 lg:p-48" :style="'background-image:url(' + work.image +'); background-size: cover; background-position: center;'" />
            <div class="flex flex-col items-center justify-center bg-gray-900 col-span-1 p-8 md:p-16 lg:p-24 text-center">
              <nuxt-link class="text-white hover:underline text-lg m-auto" :to="localePath('portfolio')">
                Vedi tutti
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
    </transition>
    <section class="pb-16 pt-24">
      <div :class="containerClass">
        <div class="flex flex-col sm:flex-row">
          <div class="flex-initial sm:mr-8">
            <div class="bg-white h-full border-b-2 sm:border-b-0 sm:border-r-2 sm:px-10 py-8">
              <div class="flex flex-row sm:flex-col justify-between">
                <div v-for="number in $t(`home.sections.skills.numbers`)" :key="number.key">
                  <p class="text-5xl -mb-4">
                    {{ number.number }}
                  </p>
                  <p class="text-xs text-gray-700">
                    {{ number.title }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1 sm:px-16 pt-16 sm:ml-2 sm:pt-0">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-2 sm:gap-20">
              <div v-for="activity in $t(`home.sections.skills.activities`)" :key="activity.key">
                <p class="text-2xl">
                  {{ activity.title }}
                </p>
                <p v-for="point in activity.points" :key="point.key" class="hidden lg:inline-block">
                  {{ point }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pb-16 pt-12">
      <div :class="containerClass">
        <hr class="border-t-2">
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
      visibilityLate: false,
      visibilityLatest: false
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
    this.showDivLatest()
  },
  methods: {
    makeVisible () {
      this.visibility = true
    },
    makeVisibleLate () {
      this.visibilityLate = true
    },
    makeVisibleLatest () {
      this.visibilityLatest = true
    },
    showDiv () {
      setTimeout(function () { this.makeVisible() }.bind(this), 1000)
    },
    showDivLate () {
      setTimeout(function () { this.makeVisibleLate() }.bind(this), 4000)
    },
    showDivLatest () {
      setTimeout(function () { this.makeVisibleLatest() }.bind(this), 6000)
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
  transition: opacity 4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
