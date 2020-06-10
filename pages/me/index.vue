<template>
  <div>
    <section class="pt-12 pb-16">
      <div :class="containerClass">
        <div class="md:w-2/3 w-full">
          <h1 :class="h1Class" class="leading-normal mb-6">
            {{ $t(`about.header.title`) }}
          </h1>
          <p>
            {{ $t(`about.header.description`) }}
          </p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-6 gap-3 sm:gap-6 pt-16">
          <div class="col-span-1 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.sustainability.title`)" :title="$t(`home.sections.sustainability.title`)" loading="lazy" />
          <div class="col-span-1 sm:col-span-2 bg-black py-32 sm:py-64" style="background-image: url('/images/shared/davide-steccanella.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.sustainability.title`)" :title="$t(`home.sections.sustainability.title`)" loading="lazy" />
          <div class="col-span-2 sm:col-span-3 bg-black py-32 sm:py-64" style="background-image: url('/images/portfolio/dogs-app.gif'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.sustainability.title`)" :title="$t(`home.sections.sustainability.title`)" loading="lazy" />
        </div>
      </div>
    </section>
    <section class="py-24">
      <div :class="containerClass">
        <div class="grid grid-cols-5 gap-8">
          <div class="col-span-5 sm:col-span-2 py-8">
            <h2 :class="h1Class" class="leading-normal mb-6">
              {{ $t(`about.sections.freelancing.title`) }}
            </h2>
            <p class=" mb-6">
              {{ $t(`about.sections.freelancing.description`) }}
            </p>
          </div>
          <div class="col-span-5 sm:col-span-3 py-32" style="background-image: url('https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.businessvalue.title`)" :title="$t(`home.sections.businessvalue.title`)" loading="lazy" />
        </div>
      </div>
    </section>
    <section class="pb-16 pt-12">
      <div :class="containerClass">
        <hr class="border-t-2">
      </div>
    </section>
    <section class="pb-24 pt-12">
      <div :class="containerClass">
        <div class="grid grid-cols-3 gap-6">
          <div class="col-span-3 sm:col-span-2">
            <h2 :class="h1Class" class="leading-normal mb-8">
              {{ $t(`about.sections.japan.title`) }}
            </h2>
            <p>
              {{ $t(`about.sections.japan.description`) }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-24 mb-24 bg-black text-white">
      <div :class="containerClass">
        <div class="grid grid-cols-3 gap-8">
          <div class="col-span-3 sm:col-span-2">
            <h2 :class="h1Class" class="leading-normal mb-8">
              {{ $t(`about.sections.startup.title`) }}
            </h2>
            <p>
              {{ $t(`about.sections.startup.description`) }}
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-6 gap-3 sm:gap-6 pt-16">
          <div class="col-span-1 sm:col-span-4 bg-black py-32 sm:py-64" style="background-image: url('/images/shared/startup.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.ethics.title`)" :title="$t(`home.sections.ethics.title`)" loading="lazy" />
          <div class="col-span-1 sm:col-span-2 bg-black py-32 sm:py-64" style="background-image: url('/images/shared/dsteccanella.png'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.ethics.title`)" :title="$t(`home.sections.ethics.title`)" loading="lazy" />
        </div>
      </div>
    </section>
    <section class="py-24">
      <div :class="containerClass">
        <div class="grid grid-cols-5 gap-8">
          <div class="col-span-5 sm:col-span-2 py-8">
            <h2 :class="h1Class" class="leading-normal mb-6">
              {{ $t(`about.sections.lgbt.title`) }}
            </h2>
            <p class=" mb-6">
              {{ $t(`about.sections.lgbt.description`) }}
            </p>
          </div>
          <div class="col-span-5 sm:col-span-3 py-32" style="background-image: url('/images/shared/pride.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.businessvalue.title`)" :title="$t(`home.sections.businessvalue.title`)" loading="lazy" />
        </div>
      </div>
    </section>
    <section class="pb-16 pt-12">
      <div :class="containerClass">
        <hr class="border-t-2">
      </div>
    </section>
    <section class="pb-8 pt-12">
      <div :class="containerClass">
        <h2 :class="h1Class" class="leading-normal mb-8">
          {{ $t(`about.sections.together.title`) }}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
          <div v-for="service in $t(`about.sections.together.services`)" :key="service.title" class="mb-12">
            <p class="text-4xl">
              {{ service.icon }}
            </p>
            <p class="text-xl lg:w-2/3 mb-4">
              {{ service.title }}
            </p>
            <p class="hidden lg:block">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="pb-16 pt-12">
      <div :class="containerClass">
        <hr class="border-t-2">
      </div>
    </section>
  </div>
</template>

<script>
import metadata from '@/utils/metadata'

export default {
  components: {

  },
  computed: {
    sectionClass () {
      return 'py-16'
    },
    containerClass () {
      return 'max-w-screen-xl m-auto px-8'
    },
    h1Class () {
      return 'text-3xl md:text-5xl'
    }
  },
  head () {
    return {
      title: this.$t('about.meta.title'),
      meta: metadata({
        title: this.$t('about.meta.title'),
        description: this.$t('about.meta.description'),
        url: process.env.BASE_URL + this.$route.path,
        image: process.env.BASE_URL + '/images/shared/og-image.png'
      }),
      link: [
        {
          rel: 'canonical',
          href: process.env.BASE_URL + this.$route.path
        }
      ]
    }
  }
}
</script>
