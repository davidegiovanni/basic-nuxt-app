<template>
  <div class="container mx-auto p-4">
    <div :class="sectionClass" class="bg-gray-900 bg-opacity-75 mb-4">
      <div class="md:w-3/5 mb-8">
        <h1 class="text-white" :class="titleClass">
         {{ $t('index.bravo.title') }}
        </h1>
      </div>
      <div class="md:w-3/5">
        <h2 class="text-white lg:text-2xl opacity-50">
          {{ $t('index.bravo.description') }}
        </h2>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
      <div :class="sectionClass" class="text-white bg-gray-900 bg-opacity-75 md:col-span-3">
        <div class="mb-8">
          <h2 :class="titleClass" style="background: #fc00ff;   background: -webkit-linear-gradient(to right, #00dbde, #fc00ff);background: linear-gradient(to right, #00dbde, #fc00ff); background-clip: text; background-clip: text; -webkit-background-clip: text; color: transparent; background-clip: text; background-clip: text; ">
            {{ $t('index.colours.title') }}
          </h2>
        </div>
        <div class="relative z-50">
          <h3 class="lg:text-xl">
            {{ $t('index.colours.description') }}
          </h3>
        </div>
        <div class="text-6xl">
           🧠 🎓 ✨
        </div>
      </div>
      <div :class="sectionClass" class="bg-gray-900 bg-opacity-75 md:col-span-2">
        <img class="h-full w-full absolute top-0 left-0 object-cover" src="/website/images/shared/first-mesh.png" alt="">
        <div class="relative z-20">
          <div class="mb-8">
            <h2 :class="titleClass" class="text-white">
              {{ $t('index.brand.title') }}
            </h2>
          </div>
          <div>
            <h3 class="lg:text-xl text-white">
              {{ $t('index.brand.description') }}
            </h3>
          </div>
        </div>
      </div>
      <div :class="sectionClass" class="bg-gray-900 md:col-span-2">
        <div class="absolute top-0 left-0 w-full h-full opacity-75">
          <video class="w-full h-full object-cover" loop autoplay muted playsinline>
            <source src="/website/videos/cloud.mp4" type="video/mp4">
          </video>
        </div>
        <div class="relative z-20">
          <div class="mb-8">
            <h2 :class="titleClass" class="text-white">
              {{ $t('index.italian.title') }}
            </h2>
          </div>
          <div>
            <h3 class="lg:text-xl text-white">
              {{ $t('index.italian.description') }}
            </h3>
          </div>
        </div>
      </div>
      <div :class="sectionClass" class="bg-gray-900 bg-opacity-75 md:col-span-3 pb-32 lg:pb-64">
        <div>
          <div class="mb-8">
            <h2 :class="titleClass" class="text-white">
              {{ $t('index.differences.title') }}
            </h2>
          </div>
          <div class="lg:w-4/5">
            <h3 class="lg:text-xl text-white opacity-50">
              {{ $t('index.differences.description') }}
            </h3>
          </div>
        </div>
        <div class="absolute bottom-0 right-0 w-4/5 transform translate-x-4 lg:translate-x-10 translate-y-16 md:translate-y-4 lg:translate-y-20 overflow-hidden rounded-2xl shadow-2xl">
          <video class="w-full h-full object-cover" loop autoplay muted playsinline>
            <source src="/website/videos/different.mp4" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
    <div>
      <div class="bg-gray-900 bg-opacity-75 rounded-3xl bg-gray-900 bg-opacity-75 p-6 md:p-12">
        <div class="flex items-center justify-center h-full">
          <div class="lg:w-2/3">
            <div class="mx-auto text-center">
              <h2 :class="titleClass" style="background: #FF512F; background: -webkit-linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%);  background: linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%); background-clip: text; background-clip: text; -webkit-background-clip: text; color: transparent;">
                {{ $t('index.contacts.title') }}
              </h2>
            </div>
            <div class="text-center mt-8">
              <a class="bg-white inline-block mx-auto rounded-full px-8 py-2 text-xl hover:bg-opacity-75" href="https://form.typeform.com/to/BR9qD3pl">
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
import metadata from '@/utils/metadata.ts'

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
        image: process.env.BASE_URL + '/website/images/shared/og-image.png'
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
    return 'text-3xl md:text-4xl lg:text-6xl font-bold leading-none relative z-50'
  }

  get sectionClass () {
    return 'rounded-3xl p-12 overflow-hidden relative flex flex-col items-start justify-center'
  }
}
</script>
