<template>
  <img :id="id" class="w-full h-auto" src="/website/images/homepage/davide-chrome.webp" alt="Scritta Davide con un font dalle forme sinuose e un effetto metallizzato sopra">
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    id: {
      type: String,
      default: 'logo'
    }
  }
})
</script>