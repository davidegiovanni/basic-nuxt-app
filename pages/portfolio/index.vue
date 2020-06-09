<template>
  <div class="bg-black">
    <section v-for="(work, index) in $t(`portfolio.works`)" :key="work.key" class="pt-16">
      <div :class="containerClass">
        <h1 v-if="index === 0" class="text-3xl md:text-5xl pb-16 text-white">
          {{ $t(`portfolio.title`) }}
        </h1>
        <div class="bg-gray-900 flex flex-row flex-wrap grid grid-cols-3">
          <div class="text-white p-8 sm:p-16 col-span-3 lg:col-span-1">
            <h2 class="text-2xl">
              {{ work.title }} <span v-if="index === 0" class="opacity-50">{{ $t(`home.sections.lastproject.lastproject`) }}</span>
            </h2>
            <p class="text-white mb-16 mt-8 leading-loose hidden md:inline-block">
              {{ work.description }}
              <ul class="list-disc list-inside mt-8">
                <li v-for="point in work.points" :key="point.key" class="mt-4">
                  {{ point.title }}
                </li>
              </ul>
            </p>
            <a v-if="work.link" class="inline-block mt-4 py-2 px-4 text-white bg-gray-800 hover:bg-gray-700 focus:bg-gray-800 shadow-lg text-white hover:shadow-xl focus:shadow-md rounded-lg" :href="work.link" :title="work.action">
              {{ work.action }}
            </a>
          </div>
          <div :class="'text-white col-span-3 lg:col-span-2 bg-' + work.background">
            <figure class="w-full h-full">
              <img class="w-full h-full object-cover" :src="work.image" :alt="work.title" :title="work.title" loading="lazy">
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section class="py-24" />
    <section class="pb-16 pt-32 bg-white">
      <div :class="containerClass">
        <div class="flex flex-col sm:flex-row">
          <div class="sm:mr-8">
            <div class="bg-white h-full border-b-2 sm:border-b-0 sm:border-r-2 sm:px-10 pb-8">
              <div class="flex flex-row sm:flex-col justify-between">
                <div v-for="number in $t(`home.sections.skills.numbers`)" :key="number.key" class="pr-8 md:pr-0 md:mb-12">
                  <p class="text-5xl -mb-4">
                    {{ number.number }}
                  </p>
                  <p class="text-md text-gray-700">
                    {{ number.title }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1 sm:px-16 pt-16 sm:ml-2 sm:pt-0">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-12">
              <div v-for="activity in $t(`home.sections.skills.activities`)" :key="activity.key">
                <p class="text-2xl mb-6">
                  {{ activity.title }}
                </p>
                <p v-for="point in activity.points" :key="point.key" class="hidden lg:inline-block mb-4">
                  {{ point }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white pb-16 pt-12">
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
  head () {
    return {
      title: this.$t('portfolio.meta.title'),
      meta: metadata({
        title: this.$t('portfolio.meta.title'),
        description: this.$t('portfolio.meta.description'),
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
