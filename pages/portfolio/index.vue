<template>
  <div class="bg-black">
    <section v-for="(work, index) in $t(`portfolio.works`)" :key="work.key" class="pt-16">
      <div class="container mx-auto px-4">
        <h1 v-if="index === 0" class="text-2xl md:text-5xl pb-16 text-white">
          {{ $t(`portfolio.title`) }}
        </h1>
        <div class="bg-gray-900 flex flex-row flex-wrap grid grid-cols-3">
          <div class="text-white p-8 sm:p-16 col-span-3 lg:col-span-1">
            <h2 class="text-2xl" style="line-height: 1.5;">
              {{ work.title }} <span v-if="index === 0" class="opacity-50" style="line-height: 1.5;">{{ $t(`portfolio.last`) }}</span>
            </h2>
            <p class="text-white mb-16 mt-8 hidden md:inline-block" style="line-height: 1.6;">
              {{ work.description }}
              <ul class="list-disc list-inside mt-8">
                <li v-for="point in work.points" :key="point.key" class="mt-4" style="line-height: 1.5;">
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
