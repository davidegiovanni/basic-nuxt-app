<template>
  <nuxt-link :class="buttonClass" :to="to">
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator'

type BaseNuxtLinkType = 'default' | 'selected' | 'white'

@Component({})
export default class BaseNuxtLink extends Vue {
  @Prop({ default: 'default' }) readonly type!: BaseNuxtLinkType
  @Prop() to!: string 

  get buttonClass () {
    return {
      'py-1 px-4 inline-block rounded font-display': true,
      'bg-gradient-to-tr from-gray-700 hover:from-gray-800 to-gray-600 text-white hover:bg-gray-900 shadow-volume-shadow': this.type === 'default',
      'hover:bg-white hover:bg-opacity-50 shadow-inner hover:shadow-volume-shadow-inset text-black': this.type === 'selected',
      'bg-gradient-to-tr from-gray-200 hover:from-gray-300 to-gray-100 bg-opacity-25 shadow-volume-shadow text-gray-800': this.type === 'white'
    }
  }
}
</script>