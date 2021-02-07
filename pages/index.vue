<template>
  <div id="myDiv" class="container mx-auto p-4">
    <div :class="sectionClass" class="bg-black mb-4">
      <div class="md:w-3/5 mb-8">
        <h1 class="text-white" :class="titleClass" style="background: #4776E6;  background: -webkit-linear-gradient(to right, #8E54E9, #4776E6); background: linear-gradient(to right, #8E54E9, #4776E6); background-clip: text; background-clip: text; -webkit-background-clip: text; color: transparent;">
         {{ $t('index.bravo.title') }}
        </h1>
      </div>
      <div class="md:w-3/5">
        <h2 class="text-white lg:text-3xl">
          {{ $t('index.bravo.description') }}
        </h2>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div :class="sectionClass" class="text-white bg-black">
        <div class="mb-8">
          <h2 :class="titleClass" class="bg-gradient-to-r from-pink-500 via-blue-500 to-green-500" style="background-clip: text; background-clip: text; -webkit-background-clip: text; color: transparent;">
            {{ $t('index.colours.title') }}
          </h2>
        </div>
        <div class="relative z-50">
          <h3 class="lg:text-2xl">
            {{ $t('index.colours.description') }}
          </h3>
        </div>
      </div>
      <div :class="sectionClass" class="bg-black">
        <div class="mb-8">
          <h2 :class="titleClass" style="background: #f7ff00; background: -webkit-linear-gradient(to right, #db36a4, #f7ff00); background: linear-gradient(to right, #db36a4, #f7ff00); background-clip: text; background-clip: text; -webkit-background-clip: text; color: transparent;">
            {{ $t('index.brand.title') }}
          </h2>
        </div>
        <div class="relative z-50">
          <h3 class="lg:text-2xl text-white">
            {{ $t('index.brand.description') }}
          </h3>
        </div>
      </div>
      <div :class="sectionClass" class="bg-black">
        <div class="mb-8">
          <h2 :class="titleClass" style="background: #00d2ff;  background: -webkit-linear-gradient(to right, #3a7bd5, #00d2ff); background: linear-gradient(to right, #3a7bd5, #00d2ff); background-clip: text; background-clip: text; -webkit-background-clip: text; color: transparent;">
            {{ $t('index.italian.title') }}
          </h2>
        </div>
        <div class="relative z-50">
          <h3 class="lg:text-2xl text-white">
            {{ $t('index.italian.description') }}
          </h3>
        </div>
      </div>
      <div :class="sectionClass" class="bg-black">
        <div class="mb-8">
          <h2 :class="titleClass" style="background: #fc00ff;   background: -webkit-linear-gradient(to right, #00dbde, #fc00ff);background: linear-gradient(to right, #00dbde, #fc00ff); background-clip: text; background-clip: text; -webkit-background-clip: text; color: transparent; background-clip: text; background-clip: text; ">
            {{ $t('index.differences.title') }}
          </h2>
        </div>
        <div class="relative z-50">
          <h3 class="lg:text-2xl text-white">
            {{ $t('index.differences.description') }}
          </h3>
        </div>
      </div>
    </div>
    <div>
      <div :class="sectionClass" class="bg-black mb-4">
        <div class="flex items-center justify-center h-full">
          <div>
            <img class="mx-auto w-48 lg:w-1/5 mb-6" src="/website/images/shared/me.png" :alt="$t('index.contacts.title')">
              <div class="mx-auto lg:w-2/3 text-center">
                <h2 :class="titleClass" style="background: #FF512F; background: -webkit-linear-gradient(to right, #DD2476, #FF512F);  background: linear-gradient(to right, #DD2476, #FF512F); background-clip: text; background-clip: text; -webkit-background-clip: text; color: transparent;">
                  {{ $t('shared.blog.title') }}
                </h2>
                <h3 class="text-white lg:text-2xl">
                  {{ $t('shared.blog.description') }}
                </h3>
              </div>
              <div class="text-center mt-8">
                <nuxt-link :to="localePath('blog')" class="bg-white inline-block mx-auto rounded-full px-8 py-2 text-xl hover:bg-opacity-75" href="https://form.typeform.com/to/BR9qD3pl">
                  {{ $t('shared.blog.action') }}
                </nuxt-link>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="bg-black rounded-3xl bg-black p-6 md:p-12">
        <div class="flex items-center justify-center h-full">
          <div>
            <div class="mx-auto lg:w-2/3 text-center">
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
    return 'text-3xl md:text-4xl lg:text-6xl font-bold leading-tight relative z-50'
  }

  get sectionClass () {
    return 'rounded-3xl lg:h-screen p-12 overflow-hidden relative'
  }
}
</script>
