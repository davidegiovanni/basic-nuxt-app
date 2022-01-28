<template>
  <div class="w-full h-full">
    <svg v-if="file === 'star'" class="w-full h-full" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M64.0004 0.257172L66.7064 52.221C66.956 57.014 70.7859 60.8439 75.5789 61.0935L127.543 63.7995L75.5789 66.5055C70.7859 66.7551 66.956 70.5851 66.7064 75.3781L64.0004 127.342L61.2943 75.3781C61.0448 70.5851 57.2148 66.7551 52.4218 66.5055L0.458008 63.7995L52.4218 61.0935C57.2148 60.8439 61.0448 57.014 61.2943 52.221L64.0004 0.257172Z" fill="white"/>
    </svg>
    <svg v-if="file === 'ellipse'" class="w-full h-full" viewBox="0 0 202 166" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M200.921 82.8771C200.921 127.948 156.283 164.646 101 164.646C45.7172 164.646 1.07886 127.948 1.07886 82.8771C1.07886 37.8058 45.7172 1.10785 101 1.10785C156.283 1.10785 200.921 37.8058 200.921 82.8771Z" stroke="white"/>
    </svg>
    <svg v-if="file === 'rays'" class="w-full h-full" viewBox="0 0 147 147" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="74.2122" y1="0.776367" x2="74.2122" y2="146.704" stroke="white"/>
      <line x1="146.676" y1="74.24" x2="0.74855" y2="74.24" stroke="white"/>
      <line x1="37.6633" y1="10.3018" x2="110.627" y2="136.678" stroke="white"/>
      <line x1="137.15" y1="37.6911" x2="10.7737" y2="110.655" stroke="white"/>
      <line x1="22.4726" y1="21.7934" x2="125.659" y2="124.98" stroke="white"/>
      <line x1="125.659" y1="22.5005" x2="22.4725" y2="125.687" stroke="white"/>
      <line x1="10.7738" y1="36.8253" x2="137.15" y2="109.789" stroke="white"/>
      <line x1="110.627" y1="10.8015" x2="37.6633" y2="137.178" stroke="white"/>
      <line x1="3.36415" y1="54.3727" x2="144.319" y2="92.1415" stroke="white"/>
      <line x1="93.0793" y1="3.39186" x2="55.3106" y2="144.347" stroke="white"/>
      <line x1="3.10539" y1="92.1415" x2="144.06" y2="54.3728" stroke="white"/>
      <line x1="55.3107" y1="3.13329" x2="93.0794" y2="144.088" stroke="white"/>
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