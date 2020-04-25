<template>
    <div :class="sectionClass">
        <footer :class="containerClass">
            <div class="flex flex-row flex-wrap">
                <div class="mb-16 sm:mb-0 sm:flex-1">
                    <p class="text-4xl text-gray-400">
                        Progetti? Idee?
                    </p>
                    <p class="text-4xl -mt-6">
                        Parliamone!
                    </p>
                </div>
                <div class=" mr-16 sm:mx-16">
                    <p class="mb-4 text-2xl">
                        Socials
                    </p>
                    <p class="underline">
                        Uno
                    </p>
                    <p class="underline">
                        2
                    </p>
                    <p class="underline">
                        3
                    </p>
                </div>
                <div>
                    <p class="mb-4 text-2xl">
                        Risorse
                    </p>
                    <p class="underline">
                        Uno
                    </p>
                    <p class="underline">
                        2
                    </p>
                    <p class="underline">
                        3
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>

export default {
  components: {
    
  },
  computed: {
    sectionClass() {
      return 'pt-4 pb-64'
    },
    containerClass() {
      return 'max-w-screen-xl m-auto px-8'
    },
    h1Class() {
      return 'text-3xl '
    }
  }
}
</script>