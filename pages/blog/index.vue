<template>
  <section class="px-4">
    <div class="container mx-auto">
      <div v-for="post in stories" :key="post.key">
        <nuxt-link :to="localePath({ name: 'blog-post', params: { post: post.slug }})">
          {{ post.content.title }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import showdown from '@/utils/showdown'

export default {
  asyncData (context) {
    // Load the JSON from the API
    return context.app.$storyapi.get('cdn/stories/', {
      starts_with: 'posts/',
      version: 'draft'
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content form api' })
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  },
  data () {
    return {
      story: { content: {} }
    }
  },
  computed: {
    html () {
      const converter = showdown()
      return converter.makeHtml(this.story.content.body)
    }
  },
  mounted () {
    // use the bridge to listen to events
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
      }
    })
  }
}
</script>
