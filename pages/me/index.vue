<template>
  <div>
    <section class="pt-12 pb-16">
      <div :class="containerClass">
        <div class="md:w-2/3 w-full">
          <h1 :class="h1Class">
            Conosciamoci un po'
          </h1>
          <p>
            A 19 anni ho cominciato a lavorare come designer di contenuti e loghi per diverse associazioni studentesche non profit. Nel mentre, studiavo Scienze Cognitive. Poi, dopo un soggiorno di studio e ricerca in Giappone, ho aperto una startup con degli amici e delle amiche per sostenere un nostro progetto per il non profit italiano.
          </p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-6 gap-3 sm:gap-6 pt-16">
          <div class="col-span-1 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1534364432722-54585249d766?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.sustainability.title`)" :title="$t(`home.sections.sustainability.title`)" loading="lazy" />
          <div class="col-span-1 sm:col-span-2 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.sustainability.title`)" :title="$t(`home.sections.sustainability.title`)" loading="lazy" />
          <div class="col-span-2 sm:col-span-3 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.sustainability.title`)" :title="$t(`home.sections.sustainability.title`)" loading="lazy" />
        </div>
      </div>
    </section>
    <section class="py-24">
      <div :class="containerClass">
        <div class="grid grid-cols-5 gap-8">
          <div class="col-span-5 sm:col-span-2 py-8">
            <h2 :class="h1Class" class="leading-normal mb-6">
              Il freelancing: capo di me stesso
            </h2>
            <p class=" mb-6">
              {{ $t(`home.sections.businessvalue.description`) }}
            </p>
            <p v-for="link in $t(`home.sections.businessvalue.links`)" :key="link.key" class="underline text-2xl hover:text-teal-500">
              {{ link.title }}
            </p>
          </div>
          <div class="col-span-5 sm:col-span-3 py-32" style="background-image: url('https://images.unsplash.com/photo-1470110385011-8c66cb46f0e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.businessvalue.title`)" :title="$t(`home.sections.businessvalue.title`)" loading="lazy" />
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
            <h2 :class="h1Class">
              Psicologia e Giappone
            </h2>
            <p>
              S{{ $t(`home.sections.centraltruth.description`) }}
            </p>
          </div>
          <div class="col-span-3 sm:col-span-1">
            <div class="flex flex-col justify-center items-start h-full">
              <p v-for="link in $t(`home.sections.centraltruth.links`)" :key="link.key" class="underline text-2xl hover:text-teal-500">
                {{ link.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-24 mb-24 bg-black text-white">
      <div :class="containerClass">
        <div class="grid grid-cols-3 gap-8">
          <div class="col-span-3 sm:col-span-2">
            <h2 :class="h1Class" class="leading-normal mb-8">
              L'esperienza della startup di prodotto
            </h2>
            <p>
              {{ $t(`home.sections.ethics.description`) }}
            </p>
          </div>
          <div class="col-span-3 sm:col-span-1">
            <div class="flex flex-col justify-center items-start h-full">
              <p v-for="link in $t(`home.sections.ethics.links`)" :key="link.key" class="underline text-2xl hover:text-teal-500">
                {{ link.title }}
              </p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-6 gap-3 sm:gap-6 pt-16">
          <div class="col-span-1 sm:col-span-4 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1522543558187-768b6df7c25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.ethics.title`)" :title="$t(`home.sections.ethics.title`)" loading="lazy" />
          <div class="col-span-1 sm:col-span-2 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-size: cover; background-position: center; background-repeat: no-repeat;" :alt="$t(`home.sections.ethics.title`)" :title="$t(`home.sections.ethics.title`)" loading="lazy" />
        </div>
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
      title: this.$t('home.meta.title'),
      meta: metadata({
        title: this.$t('home.meta.title'),
        description: this.$t('home.meta.description'),
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
