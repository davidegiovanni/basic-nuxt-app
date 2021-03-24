<template>
  <div :class="mainWrapperClass">
    <div :class="routeWrapperClass">
      <nuxt :class="routeClass" />
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Prop, Component } from 'nuxt-property-decorator'

@Component({})
export default class LayoutDefault extends Vue {

//styles

  get mainWrapperClass () {
    return 'min-h-screen relative bg-black'
  }

  get routeWrapperClass () {
    return 'min-h-screen flex flex-col'
  }

  get routeClass () {
    return 'flex-1'
  }

  get gradientWrapper () {
    return 'fixed top-0 left-0 w-screen h-screen flex-1 min-h-screen flex flex-col overflow-hidden'
  }

  get gradientOverlayClass () {
    return 'h-screen w-full relative z-50 bg-white bg-opacity-95'
  }

  get gradientInnerContainerClass () {
    return 'h-screen w-full absolute top-0 left-0 bg-black'
  }
}
</script>
