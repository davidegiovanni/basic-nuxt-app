<template>
  <div>
    <div v-if="$fetchState.pending" class="p-4">
      <div v-for="n in 6" :key="n" class="rounded-3xl bg-black animate-pulse h-300 mb-8" />
    </div>
    <div v-if="apiError || notFound">
      <div class="p-4 relative">
        <div :class="sectionClass" class="h-screen bg-black flex items-center justify-start">
          <div class="md:w-3/5 p-6 md:p-12 bg-black rounded-3xl relative z-50">
            <div class="relative">
              <h1 :class="titleClass" :style="'background-image: url(https://i.pinimg.com/originals/31/1b/4b/311b4bb83eb9333c67d1afa4caba4d68.gif)'" style="filter: saturate(250%); background-clip: text; background-clip: text; -webkit-background-clip: text; color: rgba(250,250,250,0.45);">
                {{ $t('shared.errors.notfoundblog.title') }}
              </h1>
            </div>
            <h2 class="mt-2 md:mt-6 mb-4 md:mb-8 md:text-xl text-white">
              {{ $t('shared.errors.notfoundblog.description1') }}
              <br>
              <span class="my-2 rounded bg-white bg-opacity-25 px-2 py-1 inline-block">
                {{ $route.name }}
              </span>
              <br>
              {{ $t('shared.errors.notfoundblog.description2') }}
            </h2>
            <nuxt-link :to="localePath('index')" class="bg-white text-black inline-block rounded-full px-8 py-2 text-xl hover:bg-opacity-75">
              {{ $t('shared.errors.notfoundblog.action') }}
            </nuxt-link>
          </div>
          <img class="absolute top-0 left-0 h-full w-full object-cover" src="https://i.pinimg.com/originals/31/1b/4b/311b4bb83eb9333c67d1afa4caba4d68.gif" :alt="title">
        </div>
      </div>
    </div>
    <div v-if="serverError">
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
      <div class="p-4" v-if="!serverError && !notFound && !apiError">
        <div class="container mx-auto flex flex-col lg:flex-row">
          <div class="lg:w-2/5 mb-8 bg-black rounded-3xl p-6 md:p-12">
            <div>
              <nuxt-link :to="localePath('index')">
                <img class="w-48 mb-6 transform -translate-x-10 md:-translate-x-12" src="/website/images/shared/me.png" :alt="$t('index.contacts.title')">
              </nuxt-link>
              <h1 class="mb-8 text-3xl md:text-4xl font-bold leading-tight" style="background: #FF512F; background: -webkit-linear-gradient(to right, #DD2476, #FF512F);  background: linear-gradient(to right, #DD2476, #FF512F); background-clip: text; background-clip: text; -webkit-background-clip: text; color: transparent;">
                {{ $t('shared.blog.title') }}
              </h1>
              <h2 class="md:text-xl text-white mb-4">
                {{ $t('shared.blog.description') }}
              </h2>
              <nuxt-link :to="localePath('index')">
                <h3 class="border-b-2 border-white text-white inline-block hover:opacity-75">
                  davidegiovanni.com
                </h3>
              </nuxt-link>
            </div>
          </div>
          <div class="lg:ml-4">
            <nuxt-link v-for="post in posts" :key="post.title" :to="localePath({ name: 'blog-post', params: { post: post.slug }})">
              <div class="bg-black hover:bg-opacity-50 rounded-3xl p-8 mb-4">
                <div class="md:w-2/3">
                  <h2 class="mb-4" :class="titleClass" :style="'background-image: url(' + post.thumbnail + ')'" style="filter: saturate(250%); background-clip: text; background-clip: text; -webkit-background-clip: text; color: rgba(250,250,250,0.45);">
                    {{ post.title }}
                  </h2>
                  <span class="inline-block rounded-full px-6 py-1 bg-white text-black">
                    {{ new Date(post.publishedOn).toLocaleString('it-IT', {'weekday': 'long', 'month': 'long', 'day': '2-digit', 'year': 'numeric'}) }}
                  </span>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component } from 'nuxt-property-decorator'
import metadata from '@/utils/metadata.ts'
import { Content } from '@/models'

@Component({
})
export default class BlogPage extends Vue {

  head () {
    return {
      title: this.$t('shared.blog.title'),
      meta: metadata({
        title: this.$t('shared.blog.title'),
        description: this.$t('shared.blog.description'),
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

  posts: Content[] = []

  async fetch () {
    try {
      const response = await this.$axios.post('https://api.revas.app/content/content.ListPublicContents/', {
        directorySlug: 'blog-davidegiovanni'
      },
      {
        headers: {
          'Revas-Public-Key': '01exy3y9j9pdvyzhchkpj9vc5w'
        },
        validateStatus: () => true
      })
      if (response.status === 200) {
        this.posts = response.data.contents
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
  
  // ListPublicContents per tutti i post di una directory e GetPublicDirectory dettagli Directory

  get titleClass () {
    return 'text-3xl md:text-4xl font-bold leading-tight relative z-50'
  }

  get sectionClass () {
    return 'rounded-3xl lg:h-screen p-6 md:p-12 overflow-hidden relative'
  }
}
</script>