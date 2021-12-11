<template>
  <div class="bg-black overflow-hidden">
    <index-page />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import metadata from '@/utils/metadata'

import IndexPage from '@/components/pages/IndexPage.vue'

export default Vue.extend({
  data (): any {
    return {}
  },
  head (): any {
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
  },
  mounted () {},
  components: {
    IndexPage
  },
  computed: {},
  methods: {}
})
</script>