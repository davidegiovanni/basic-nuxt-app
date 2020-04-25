<template>
  <div>
    <section :class="sectionClass">
      <div :class="containerClass">
        <div class="w-full">
            <div class="flex flex-row items-center justify-between">
                <figure>
                  <img class="w-10 h-10 rounded-full" src="https://avatars1.githubusercontent.com/u/33760151?s=460&u=790f8ff6d4dfdef82885785b411e0633296affc1&v=4" alt="">
                </figure>
                <div class="flex flex-row items-center justify-between">
                  <p class="mr-8 hover:text-gray-500 hidden sm:inline-block">
                      About
                  </p>
                  <p class="mr-8 hover:text-gray-500 hidden sm:inline-block">
                      Works
                  </p>
                  <p class="mr-8 hover:text-gray-500 hidden sm:inline-block">
                      Blog
                  </p>
                  <a href="mailto:davidegiovanni96@gmail.com">
                    <button class="py-2 px-4 bg-black hover:bg-gray-700 focus:bg-gray-800 text-white shadow-lg hover:shadow-xl focus:shadow-md rounded-lg">
                      Contact me
                    </button>
                  </a>
                </div>
            </div> 
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  components: {
    
  },
  computed: {
    sectionClass() {
      return 'py-4'
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
