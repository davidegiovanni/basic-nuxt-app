<template>
  <div class="mx-auto p-4 max-w-screen-xl">
    <div :class="sectionClass" class="mb-4">
      <div class="md:w-3/5 mb-2 md:mb-8">
        <h1 class="text-white" :class="titleClass">
         {{ $t('index.bravo.title') }}
        </h1>
      </div>
      <div class="md:w-3/5">
        <h2 class="text-white text-xl md:text-2xl lg:text-4xl opacity-50">
          {{ $t('index.bravo.description') }}
        </h2>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
      <div :class="sectionClass" class="text-white bg-black border border-white bg-opacity-75 md:col-span-5">
        <div class="relative z-20 text-center md:w-2/3 mx-auto">
          <div class="mb-2 md:mb-8">
            <h2 :class="titleClass" class="text-white">
              {{ $t('index.hiring.title') }}
            </h2>
          </div>
          <div>
            <div class="text-center mt-8">
              <a class="bg-gradient-to-tr from-purple-500 to-red-600 via-pink-500 inline-block mx-auto rounded-full px-8 py-2 text-xl hover:shadow-xl delay-300 transform hover:scale-105 transition duration-300 ease-in-out" href="https://www.revas.io">
                {{ $t('index.hiring.action') }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div :class="sectionClass" class="text-white bg-gray-900 bg-opacity-75 md:col-span-3">
        <div class="text-6xl mb-2 md:mb-8">
           🧠 🎓 ✨
        </div>
        <div class="mb-2 md:mb-8">
          <h2 :class="titleClass" class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            {{ $t('index.degree.title') }}
          </h2>
        </div>
        <div class="relative z-30 mb-8">
          <h3 class="text-lg lg:text-xl">
            {{ $t('index.degree.description') }}
          </h3>
        </div>
      </div>
      <div :class="sectionClass" class="bg-gray-900 bg-opacity-75 md:col-span-2">
        <div class="relative z-20">
          <div class="mb-2 md:mb-8">
            <h2 :class="titleClass" class="text-white">
              {{ $t('index.revas.title') }}
            </h2>
          </div>
          <div>
            <h3 class="text-lg lg:text-xl text-white">
              {{ $t('index.revas.description') }}
            </h3>
          </div>
          <div>
            <div class="text-center mt-8">
              <a class="bg-white inline-block mx-auto rounded-full px-8 py-2 text-xl hover:shadow-xl delay-300 transform hover:scale-105 transition duration-300 ease-in-out" href="https://www.revas.io">
                {{ $t('index.revas.action') }}
              </a>
            </div>
          </div>
        </div>
        <img class="h-full w-full absolute top-0 left-0 object-cover transform hover:scale-150 hover:rotate-12 transition duration-1000 ease-in-out" src="/website/images/shared/first-mesh.png" :alt="$t('index.revas.title')">
      </div>
      <div :class="sectionClass" class="bg-gray-900 md:col-span-2 pt-64 md:pt-0 overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full opacity-75 rounded-3xl">
          <video class="w-full h-full object-cover rounded-3xl overflow-hidden" loop autoplay muted playsinline preload='auto'>
            <source src="/website/videos/cloud.mp4" type="video/mp4">
          </video>
        </div>
        <div class="relative z-20 h-full flex flex-col justify-end items-end">
          <h2 :class="titleClass" class="text-white mb-4">
            {{ $t('index.light.title') }}
          </h2>
          <h3 class="text-lg lg:text-xl text-white">
            {{ $t('index.light.description') }}
          </h3>
        </div>
      </div>
      <div :class="sectionClass" class="bg-gray-900 bg-opacity-75 md:col-span-3 md:pb-40 lg:pb-64">
        <div>
          <div class="mb-2 md:mb-8">
            <h2 :class="titleClass" class="text-white">
              {{ $t('index.differences.title') }}
            </h2>
          </div>
          <div class="lg:w-4/5 mb-8">
            <h3 class="text-lg lg:text-xl text-white opacity-50">
              {{ $t('index.differences.description') }}
            </h3>
          </div>
        </div>
        <div class="md:absolute bottom-0 right-0 md:w-4/5 transform lg:translate-x-10 md:translate-y-4 lg:translate-y-20 overflow-hidden rounded-2xl shadow-2xl">
          <video class="w-full h-full object-cover" loop autoplay muted playsinline preload='auto'>
            <source src="/website/videos/different.mp4" type="video/mp4">
          </video>
        </div>
      </div>
      <div :class="sectionClass" class="bg-gray-900 md:col-span-5 overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full opacity-75 rounded-3xl overflow-hidden">
          <video class="w-full h-full object-cover rounded-3xl" loop autoplay muted playsinline preload='auto'>
            <source src="/website/videos/purpose.mp4" type="video/mp4">
          </video>
        </div>
        <div class="relative z-20 text-center mx-auto md:w-1/2 lg:w-2/3 py-48">
          <h2 :class="titleClass" class="text-white mb-4">
            {{ $t('index.sum.title') }}
          </h2>
        </div>
      </div>
      <div :class="sectionClass" class="bg-gray-900 bg-opacity-75 md:col-span-3 md:pb-40 lg:pb-64">
        <div class="mb-48">
          <div class="mb-2 md:mb-8">
            <h2 :class="titleClass" class="text-white">
              {{ $t('index.unplugged.title') }}
            </h2>
          </div>
          <div class="lg:w-4/5 mb-8">
            <h3 class="text-lg lg:text-xl text-white opacity-50">
              {{ $t('index.unplugged.description') }}
            </h3>
          </div>
        </div>
        <div class="absolute bottom-0 inset-x-0 mx-auto w-4/5 transform translate-y-16 md:translate-y-0 lg:translate-y-32 overflow-hidden">
          <img class="relative h-full w-full object-cover transform origin-bottom-left hover:rotate-6 transition duration-300 ease-in-out delay-300 z-20" src="/website/images/shared/disconnected.png" :alt="$t('index.philosophy.title')">
          <img class="h-full w-full object-cover absolute top-0 left-0 z-10 transform translate-y-6 animate-pulse" src="/website/images/shared/behind-phones.png" :alt="$t('index.philosophy.title')">
        </div>
      </div>
      <div :class="sectionClass" class="bg-gray-900 bg-opacity-75 md:col-span-2">
        <img class="h-full w-full absolute top-0 left-0 object-cover transform hover:scale-150 hover:-rotate-12 transition duration-1000 ease-in-out" src="/website/images/shared/final-mesh.png" alt="">
        <div class="relative z-20 pointer-events-none">
          <div class="mb-2 md:mb-8">
            <h2 :class="titleClass">
              {{ $t('index.philosophy.title') }}
            </h2>
          </div>
          <div>
            <h3 class="text-lg lg:text-xl">
              {{ $t('index.philosophy.description') }}
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="bg-gray-900 bg-opacity-75 rounded-3xl bg-opacity-75 p-6 md:p-12">
        <div class="flex items-center justify-center h-full">
          <div class="lg:w-2/3">
            <div class="mx-auto text-center">
              <h2 :class="titleClass" class="bg-clip-text text-transparent bg-gradient-to-tr from-yellow-300 via-green-200 to-green-500">
                {{ $t('index.contacts.title') }}
              </h2>
            </div>
            <div class="text-center mt-8">
              <a class="bg-white inline-block mx-auto rounded-full px-8 py-2 text-xl hover:shadow-xl delay-300 transform hover:scale-105 transition duration-300 ease-in-out" href="https://form.typeform.com/to/BR9qD3pl">
                {{ $t('index.contacts.action') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Prop, Component } from 'nuxt-property-decorator'
import metadata from '@/utils/metadata'

@Component({
})
export default class Index extends Vue {

  head () {
    return {
      title: this.$t('index.meta.title'),
      meta: metadata({
        title: this.$t('index.meta.title'),
        description: this.$t('index.meta.description'),
        url: process.env.BASE_URL + this.$route.path,
        image: process.env.BASE_URL + '/website/images/shared/first-mesh.png'
      }),
      link: [
        {
          rel: 'canonical',
          href: process.env.BASE_URL + this.$route.path
        }
      ],
      htmlAttrs: {
        lang: this.$i18n.locale
      }
    }
  }
  
  // ListPublicContents per tutti i post di una directory e GetPublicDirectory dettagli Directory

  get titleClass () {
    return 'text-4xl lg:text-6xl font-semibold leading-none relative z-30'
  }

  get sectionClass () {
    return 'rounded-3xl p-6 md:p-8 lg:p-12 overflow-hidden relative flex flex-col items-start justify-center'
  }
}
</script>

<style scoped>
img, video {
  pointer-events: none;
  user-select: none;
}
</style>
