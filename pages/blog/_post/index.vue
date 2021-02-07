<template>
  <div class="text-white pb-4">
    <div v-if="$fetchState.pending" class="p-4 h-500">
      <div class="h-full w-full bg-black rounded-3xl animate-pulse" />
    </div>
    <div v-if="notFound && !apiError && !serverError">
      <div class="p-4 relative">
        <div :class="sectionClass" class="h-screen bg-black flex items-center justify-start">
          <div class="md:w-3/5 p-6 md:p-12 bg-black rounded-3xl relative z-50">
            <div class="relative">
              <h1 :class="titleClass" :style="'background-image: url(https://i.pinimg.com/originals/31/1b/4b/311b4bb83eb9333c67d1afa4caba4d68.gif)'" style="filter: saturate(250%); background-clip: text; background-clip: text; -webkit-background-clip: text; color: rgba(250,250,250,0.45);">
                {{ $t('shared.errors.notfound.title') }}
              </h1>
            </div>
            <h2 class="mt-2 md:mt-6 mb-4 md:mb-8 md:text-xl text-white">
              {{ $t('shared.errors.notfound.description1') }}
              <br>
              <span class="my-2 rounded bg-white bg-opacity-25 px-2 py-1 inline-block">
                {{ $route.params.post }}
              </span>
              <br>
              {{ $t('shared.errors.notfound.description2') }}
            </h2>
            <nuxt-link :to="localePath('index')" class="bg-white text-black inline-block rounded-full px-8 py-2 text-xl hover:bg-opacity-75">
              {{ $t('shared.errors.notfound.action') }}
            </nuxt-link>
          </div>
          <img class="absolute top-0 left-0 h-full w-full object-cover" src="https://i.pinimg.com/originals/31/1b/4b/311b4bb83eb9333c67d1afa4caba4d68.gif" :alt="title">
        </div>
      </div>
    </div>
    <div v-if="apiError && !serverError && !notFound">
      <div class="p-4 relative">
        <div :class="sectionClass" class="h-screen bg-black flex items-center justify-start">
          <div class="md:w-3/5 p-6 md:p-12 bg-black rounded-3xl relative z-50">
            <div class="relative">
              <h1 :class="titleClass" :style="'background-image: url(https://i.pinimg.com/originals/31/1b/4b/311b4bb83eb9333c67d1afa4caba4d68.gif)'" style="filter: saturate(250%); background-clip: text; background-clip: text; -webkit-background-clip: text; color: rgba(250,250,250,0.45);">
                {{ $t('shared.errors.notfound.title') }}
              </h1>
            </div>
            <h2 class="mt-2 md:mt-6 mb-4 md:mb-8 md:text-xl text-white">
              {{ $t('shared.errors.notfound.description1') }}
              <br>
              <span class="my-2 rounded bg-white bg-opacity-25 px-2 py-1 inline-block">
                {{ $route.params.post }}
              </span>
              <br>
              {{ $t('shared.errors.notfound.description2') }}
            </h2>
            <nuxt-link :to="localePath('index')" class="bg-white text-black inline-block rounded-full px-8 py-2 text-xl hover:bg-opacity-75">
              {{ $t('shared.errors.notfound.action') }}
            </nuxt-link>
          </div>
          <img class="absolute top-0 left-0 h-full w-full object-cover" src="https://i.pinimg.com/originals/31/1b/4b/311b4bb83eb9333c67d1afa4caba4d68.gif" :alt="title">
        </div>
      </div>
    </div>
    <div v-if="serverError && !notFound && !apiError">
      <div class="p-4 relative">
        <div :class="sectionClass" class="h-screen bg-black flex items-center justify-start">
          <div class="md:w-3/5 p-6 md:p-12 bg-black rounded-3xl relative z-50">
            <div class="relative">
              <h1 :class="titleClass" :style="'background-image: url(https://thumbs.gfycat.com/TestyDisloyalChinchilla-size_restricted.gif)'" style="filter: saturate(250%); background-clip: text; background-clip: text; -webkit-background-clip: text; color: rgba(250,250,250,0.45);">
                {{ $t('shared.errors.api.title') }}
              </h1>
            </div>
            <h2 class="mt-2 md:mt-6 mb-4 md:mb-8 md:text-xl text-white">
              {{ $t('shared.errors.api.description') }}
            </h2>
            <a href="mailto:davidegiovanni96@gmail.com" class="bg-white text-black inline-block rounded-full px-8 py-2 text-xl hover:bg-opacity-75">
              {{ $t('shared.errors.api.action') }}
            </a>
          </div>
          <img class="absolute top-0 left-0 h-full w-full object-cover" src="https://thumbs.gfycat.com/TestyDisloyalChinchilla-size_restricted.gif" :alt="title">
        </div>
      </div>
    </div>
    <div v-else>
      <div v-if="!apiError && !notFound && !serverError">
        <div class="p-4 relative">
          <div :class="sectionClass" class="bg-black flex items-center justify-start">
            <div class="md:w-3/5 p-6 md:p-12 bg-black rounded-3xl relative z-50 h-full">
              <div class="relative">
                <h1 :class="titleClass" :style="'background-image: url(' + thumbnail + ')'" style="filter: saturate(250%); background-clip: text; background-clip: text; -webkit-background-clip: text; color: rgba(250,250,250,0.45);">
                  {{ title }}
                </h1>
              </div>
              <h2 class="my-8">
                {{ description }}
              </h2>
              <span v-if="publishedOn !== ''" class="inline-block rounded-full px-6 py-1 bg-white text-black">
                {{ publishedOn }}
              </span>
            </div>
            <img class="absolute top-0 left-0 h-full w-full object-cover" :src="thumbnail" :alt="title">
          </div>
        </div>
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-3/5 p-8 bg-white rounded-2xl">
              <article class="prose max-w-none">
                <div v-html="body" />
              </article>
            </div>
            <div class="md:w-2/5 pt-4 md:pl-4 md:pt-0">
              <div class="bg-black rounded-2xl px-4 py-8">
                <img class="w-48 lg:w-1/5 mb-6 transform -translate-x-10 md:-translate-x-4" src="/website/images/shared/me.png" :alt="$t('index.contacts.title')">
                <div class="mt-8 ml-4">
                  <p class="text-white">
                    {{ $t('shared.post.hi') }}
                  </p>
                  <p class="text-3xl md:text-4xl font-bold leading-tight relative z-50" :style="'background-image: url(' + thumbnail + ')'" style="filter: saturate(250%); background-clip: text; background-clip: text; -webkit-background-clip: text; color: rgba(250,250,250,0.45);">
                    {{ $t('shared.post.iam') }} Davide Giovanni Steccanella.
                  </p>
                  <p class="text-lg mb-4">
                    {{ $t('shared.post.brand') }}
                  </p>
                  <nuxt-link :to="localePath('index')" class="bg-white text-black inline-block rounded-full px-8 py-2 text-xl hover:bg-opacity-75">
                    {{ $t('shared.post.visit') }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component } from 'nuxt-property-decorator'
import { Content } from '@/models'
import metadata from '@/utils/metadata.ts'
import showdown from 'showdown'

@Component({
})
export default class PostPage extends Vue {

  head () {
    return {
      title: this.title,
      meta: metadata({
        title: this.title,
        description: this.description,
        url: process.env.BASE_URL + this.$route.path,
        image: this.thumbnail
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

  post: Content | null = {
    title: '',
    description: '',
    thumbnail: '',
    slug: '',
    markdown: ''
  }

  async fetch () {
    try {
      const response = await this.$axios.post('https://api.revas.app/content/content.GetPublicContent/', {
        contentSlug:  this.$route.params.post,
        directorySlug: 'blog-davidegiovanni'
      },
      {
        headers: {
          'Revas-Public-Key': '01exy3y9j9pdvyzhchkpj9vc5w'
        },
        validateStatus: () => true
      })
      if (response.status === 200) {
        this.post = response.data.content
      } else if ( response.status === 404 ) {
        this.notFound = true
      } else {
        this.apiError = true
      }
    } catch (error) {
      this.serverError = true
      //nb: use this instead of fetcheError
    }
  }

  // Errors
  apiError = false
  serverError = false
  notFound = false

  get body () {
    if ( this.post !== null && this.post.markdown !== '') {
      const converter = new showdown.Converter()
      return converter.makeHtml(this.post.markdown)
    } else {
      return ''
    }
  }

  get title () {
    if ( this.post !== null && this.post.title !== '') {
      return this.post.title
    } else {
      return 'Questo post non sembra esistere'
    }
  }

  get description () {
    if ( this.post !== null && this.post.description !== '') {
      return this.post.description
    } else {
      return 'Questo post non sembra esistere'
    }
  }

  get thumbnail () {
    if ( this.post !== null && this.post.thumbnail !== '') {
      return this.post.thumbnail
    } else {
      return 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
    }
  }

  get publishedOn () {
    if ( this.post !== null && this.post.publishedOn !== undefined) {
      return new Date(this.post.publishedOn).toLocaleString('it-IT', {'weekday': 'long', 'month': 'long', 'day': '2-digit', 'year': 'numeric'})
    } else {
      return ''
    }
  }

  // ListPublicContents per tutti i post di una directory e GetPublicDirectory dettagli Directory

  get titleClass () {
    return 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight relative z-50'
  }

  get sectionClass () {
    return 'container mx-auto min-h-500 rounded-3xl p-6 md:p-12 overflow-hidden relative'
  }
}
</script>