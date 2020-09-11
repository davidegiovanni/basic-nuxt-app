<template>
  <div v-if="show" class="bg-white cb-shadow py-4 px-6">
    <p class="text-sm mb-4">
      🍪 Utilizzo i cookies di Google Analytics e di Facebook in formato anonimo per fornire una migliore esperienza di navigazione del sito e per analizzare il traffico. Per maggiori informazioni, vedi l'Informativa Cookies
    </p>
    <div class="flex flex-col items-center">
      <button class="relative mb-2 bg-black text-lg rounded-md text-white w-full py-3 px-1 hover:bg-indigo-500 transition-all duration-500 ease-in-out" @click="show = false">
        <span class="flex h-4 w-4 absolute" style="top: -6px; left: -6px;">
          <span class="animate-ping absolute h-4 w-4 inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
          <span class="relative inline-flex rounded-full h-4 w-4 bg-pink-500" />
        </span>
        <span class="flex items-center justify-center">
          <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          OK
        </span>
      </button>
      <a class="transform hover:translate-x-4 transition-all duration-500 ease-in-out" href="/cookie-policy.pdf">
        <span class="flex items-center text-gray-500">
          Informativa
          <svg class="w-6 h-6 ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  computed: {

  }
}
</script>

<style scoped>
.cb-shadow {
    box-shadow: 0 0 50px #00000050;
}
</style>
