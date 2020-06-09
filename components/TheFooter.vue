<template>
  <div :class="sectionClass">
    <footer :class="containerClass">
      <div class="flex flex-row flex-wrap">
        <div class="mb-16 sm:mb-0 sm:flex-1">
          <p class="text-4xl text-gray-400">
            {{ $t(`shared.footer.ideas`) }}
          </p>
          <a class="text-4xl -mt-6 hover:underline gradient" href="mailto:davidegiovanni96@gmail.com">
           <span class="gradient">
              {{ $t(`shared.footer.action`) }}
           </span>
          </a>
        </div>
        <div class="flex flex-col mr-16 sm:mx-16">
          <p class="mb-4 text-2xl">
            {{ $t(`shared.footer.socials.title`) }}
          </p>
          <a
            v-for="social in $t(`shared.footer.socials.links`)"
            :key="social.link"
            :href="social.link"
            class="mb-4 last:mb-0 gradient hover:underline"
            target="_blank"
            rel="noopener"
          >
            {{ social.title }}
          </a>
        </div>
        <div>
          <p class="flex flex-col mb-4 text-2xl">
            {{ $t(`shared.footer.pages.title`) }}
          </p>
          <nuxt-link :to="localePath('index')">
            <p class="mb-4 last:mb-0 gradient hover:underline">
              Home
            </p>
          </nuxt-link>
          <nuxt-link :to="localePath('me')">
            <p class="mb-4 last:mb-0 gradient hover:underline">
              {{ $t('shared.header.about') }}
            </p>
          </nuxt-link>
          <nuxt-link :to="localePath('portfolio')">
            <p class="mb-4 last:mb-0 gradient hover:underline">
              {{ $t('shared.header.works') }}
            </p>
          </nuxt-link>
          <a href="https://medium.com/@davidegiovanni96" target="_blank" rel="noopener" class="mb-4 last:mb-0 gradient hover:underline">
            Blog
          </a>
        </div>
      </div>
      <div class="text-center text-xs relative" style="bottom: -220px;">
        {{ $t(`shared.footer.copyright`) }}
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  components: {

  },
  computed: {
    sectionClass () {
      return 'pt-4 pb-64'
    },
    containerClass () {
      return 'max-w-screen-xl m-auto px-8'
    },
    h1Class () {
      return 'text-3xl '
    }
  }
}
</script>

<style lang="scss" scoped>
.gradient {
  position: relative;
  color: transparent;
  transition: all 0.5s ease;
  background: linear-gradient(to right, #9F7AEA 0%, #F56565 50%, transparent 50%) 100% 0 / 200% 200% #000000;
  background-clip: text;
}

.gradient:hover {
  background-position: 0 0;
}
</style>
