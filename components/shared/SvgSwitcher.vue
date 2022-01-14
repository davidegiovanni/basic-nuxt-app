<template>
  <div class="w-full h-full">
    <svg v-if="file === 'star'" class="w-full h-full" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M64.0004 0.257172L66.7064 52.221C66.956 57.014 70.7859 60.8439 75.5789 61.0935L127.543 63.7995L75.5789 66.5055C70.7859 66.7551 66.956 70.5851 66.7064 75.3781L64.0004 127.342L61.2943 75.3781C61.0448 70.5851 57.2148 66.7551 52.4218 66.5055L0.458008 63.7995L52.4218 61.0935C57.2148 60.8439 61.0448 57.014 61.2943 52.221L64.0004 0.257172Z" fill="white"/>
    </svg>
    <svg v-if="file === 'ellipse'" class="w-full h-full" viewBox="0 0 202 166" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M200.921 82.8771C200.921 127.948 156.283 164.646 101 164.646C45.7172 164.646 1.07886 127.948 1.07886 82.8771C1.07886 37.8058 45.7172 1.10785 101 1.10785C156.283 1.10785 200.921 37.8058 200.921 82.8771Z" stroke="white"/>
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    file: {
      type: String,
      default: ''
    }
  }
})
</script>