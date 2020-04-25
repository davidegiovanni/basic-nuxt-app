<template>
  <div>
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
  
}
</script>

<style lang="scss" scoped>

</style>
