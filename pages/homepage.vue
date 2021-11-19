<template>
  <div class="bg-black">
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
  head (): any {},
  mounted () {},
  components: {
    IndexPage
  },
  computed: {},
  methods: {}
})
</script>