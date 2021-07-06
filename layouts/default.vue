<template>
  <div :class="mainWrapperClass">
    <div :class="routeWrapperClass">
      <div class="sticky top-0 transform translate-y-2 m-2 md:m-4 lg:m-8 inset-x-0 z-50">
        <div class="max-w-screen-xl mx-auto p-4 bg-black bg-opacity-25 rounded-3xl backdrop-filter backdrop-blur-2xl saturate-200">
          <div class="flex items-center justify-between">
            <div>
              <img class="h-12 w-12" src="/website/images/shared/favicon.png" alt="Davide Giovanni Steccanella">
            </div>
            <div>
              <a class="bg-white inline-block mx-auto rounded-full px-8 py-2 text-xl hover:shadow-xl delay-300 transform hover:scale-105 transition duration-300 ease-in-out" href="https://form.typeform.com/to/BR9qD3pl">
                {{ $t('index.contacts.action') }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <nuxt :class="routeClass" />
      <div class="text-center mt-4 mb-8 text-white">
        Davide Giovanni Steccanella. All rights reserved. Copyright © {{ currentYear}}
      </div>
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

  get currentYear () {
    return new Date().getFullYear()
  }
}
</script>
