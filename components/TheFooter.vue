<template>
  <div :class="sectionClass">
    <footer :class="containerClass">
      <div class="flex flex-row flex-wrap">
        <div class="mb-16 sm:mb-0 sm:flex-1">
          <p class="text-4xl text-gray-400">
            {{ $t(`shared.footer.ideas`) }}
          </p>
          <a class="text-4xl -mt-6 hover:text-red-500 hover:underline" href="mailto:davidegiovanni96@gmail.com">
            {{ $t(`shared.footer.action`) }}
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
            class="mb-4 last:mb-0 hover:text-red-500 hover:underline"
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
            <p class="mb-4 last:mb-0 hover:text-red-500 hover:underline">
              Home
            </p>
          </nuxt-link>
          <nuxt-link :to="localePath('portfolio')">
            <p class="mb-4 last:mb-0 hover:text-red-500 hover:underline">
              {{ $t('shared.header.works') }}
            </p>
          </nuxt-link>
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
