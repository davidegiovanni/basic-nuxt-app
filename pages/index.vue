<template>
  <div>
    <section :class="sectionClass">
      <div :class="containerClass">
        <div class="md:w-2/3 w-full">
          <h1 :class="h1Class">
            {{ $t(`home.sections.header.title`) }}
          </h1>
        </div>
      </div>
    </section>
    <section class="pb-16">
      <div :class="containerClass">
        <div class="md:w-2/3 w-full">
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div v-for="activity in $t(`home.sections.header.activities`)" :key="activity.key">
              <p class="text-2xl">
                {{ activity.title }}
              </p>
              <p v-for="point in activity.points" :key="point.key">
                {{ point }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pb-16 pt-12">
      <div :class="containerClass">
        <div class="bg-black flex flex-row flex-wrap shadow-lg">
          <div class="text-white p-8 sm:p-16 w-full sm:w-1/2">
            <h2 class="text-2xl">
              Sito web personale <span class="opacity-50">Ultimo progetto</span>
            </h2>
            <p class="text-white mb-16 mt-8 leading-loose">
              Descrizione del progetto
              <ul class="list-disc list-inside mt-8">
                <li class="mt-4">
                  Punto uno
                </li>
                <li class="mt-4">
                  Punto due
                </li>
                <li class="mt-4">
                  Punto tre
                </li>
                <li class="mt-4">
                  Punto quattro
                </li>
              </ul>
            </p>
            <button class="py-2 px-4 bg-gray-800 hover:bg-gray-700 focus:bg-gray-800 shadow-lg text-white hover:shadow-xl focus:shadow-md rounded-lg">
              <span class="opacity-100 text-white">
                Contact me
              </span>
            </button>
          </div>
          <div class="text-white p-8 sm:p-16 w-full sm:w-1/2 bg-red-400">
            <figure class="w-full h-full">
              <img class="w-full h-full object-cover" src="https://i.imgur.com/PJgTg7a.png" alt="">
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section class="pb-16 pt-12">
      <div :class="containerClass">
        <div class="md:w-2/3 w-full">
          <h1 :class="h1Class">
            Sostenibilità, innanzitutto
          </h1>
          <p>
            Sono specializzato nell’aiutare business e prodotti a creare sistemi di brand e linguaggi visivi che siano capaci di scalare nel tempo e nello spazio. Il mondo e la comunicazione sono in costante mutamento e i brand che sviluppo permettono di accompagnarne la crescita
          </p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-6 gap-3 sm:gap-6 pt-16">
          <div class="col-span-1 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1534364432722-54585249d766?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-size: cover; background-position: center; background-repeat: no-repeat;" />
          <div class="col-span-1 sm:col-span-2 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-size: cover; background-position: center; background-repeat: no-repeat;" />
          <div class="col-span-2 sm:col-span-3 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-size: cover; background-position: center; background-repeat: no-repeat;" />
        </div>
      </div>
    </section>
    <section class="pb-16 pt-12">
      <div :class="containerClass">
        <div class="grid grid-cols-3 gap-6">
          <div class="col-span-3 sm:col-span-2">
            <h2 :class="h1Class">
              Un’unica fonte di verità
            </h2>
            <p>
              Spesso, un brand viene usato da molti reparti e da diverse figure, sia interne ed esterne all’organizzazione. Per mantenere uniformità e coerenza, aiuto a costruire documentazioni e strumenti per centralizzare i brand assets, i principi di riferimento e propagare in maniera distribuita le modifiche a tutti gli stakeholders.
            </p>
          </div>
          <div class="col-span-3 sm:col-span-1">
            <div class="flex flex-col justify-center items-start h-full">
              <p class="underline text-2xl hover:text-teal-500">
                Brand System
              </p>
              <p class="underline text-2xl hover:text-teal-500">
                Atomic Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pb-16 pt-12">
      <div :class="containerClass">
        <div class="grid grid-cols-5 gap-8">
          <div class="col-span-5 sm:col-span-2 py-8">
            <h2 :class="h1Class" class="leading-normal mb-6">
              Valore di business, presto
            </h2>
            <p class=" mb-6">
              Il mio approccio di sviluppo di una brand identity ha come obiettivo la partenza rapida, in modo tale da ottenere valore di business presto e avere dati in mano su cui implementare ulteriori assets di brand. Rispetto a eccessiv e lente e progettazioni, preferisco un approccio agile che fornisca quello che serve quando serve.
            </p>
            <p class="underline text-2xl hover:text-teal-500">
              Agile Branding
            </p>
          </div>
          <div class="col-span-5 sm:col-span-3 py-32" style="background-image: url('https://images.unsplash.com/photo-1534364432722-54585249d766?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-size: cover; background-position: center; background-repeat: no-repeat;" />
        </div>
      </div>
    </section>
    <section class="pb-16 pt-12">
      <div :class="containerClass">
        <hr class="border-t-2">
      </div>
    </section>
    <section class="pb-16 pt-12">
      <div :class="containerClass">
        <div class="grid grid-cols-3 gap-8">
          <div class="col-span-3 sm:col-span-2">
            <h2 :class="h1Class">
              Brand etici e solidi
            </h2>
            <p>
              Un brand non comunica a vuoto verso sè stesso, ma interagisce con le persone. Credo nel potere dei brand di poter creare relazioni che nutrono in maniera stabile e sostenibile le persone e le comunità con cui entrano in contatto, in un circolo virtuoso
            </p>
          </div>
          <div class="col-span-3 sm:col-span-1">
            <div class="flex flex-col justify-center items-start h-full">
              <p class="underline text-2xl hover:text-teal-500">
                Ethical Branding
              </p>
              <p class="underline text-2xl hover:text-teal-500">
                Ethics and Design
              </p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-6 gap-3 sm:gap-6 pt-16">
          <div class="col-span-1 sm:col-span-4 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1534364432722-54585249d766?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-size: cover; background-position: center; background-repeat: no-repeat;" />
          <div class="col-span-1 sm:col-span-2 bg-black py-32 sm:py-64" style="background-image: url('https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'); background-size: cover; background-position: center; background-repeat: no-repeat;" />
        </div>
      </div>
    </section>
    <section class="pb-16 pt-12">
      <div :class="containerClass">
        <div class="flex flex-col sm:flex-row">
          <div class="flex-initial sm:mr-8">
            <div class="bg-white shadow-lg px-8 sm:px-16 py-8">
              <div class="flex flex-row sm:flex-col">
                <div class="mr-8">
                  <p class="text-5xl">
                    10
                  </p>
                  <p>
                    clienti
                  </p>
                </div>
                <div class="mr-8">
                  <p class="text-5xl">
                    1
                  </p>
                  <p>
                    startup
                  </p>
                </div>
                <div>
                  <p class="text-5xl">
                    6
                  </p>
                  <p>
                    progetti di brand
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1 sm:px-16 pt-16 sm:ml-2 sm:pt-0">
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-24">
              <div>
                <p class="text-2xl">
                  titolo
                </p>
                <p>
                  sottotilolo
                </p>
              </div>
              <div>
                <p class="text-2xl">
                  titolo
                </p>
                <p>
                  sottotilolo
                </p>
              </div>
              <div>
                <p class="text-2xl">
                  titolo
                </p>
                <p>
                  sottotilolo
                </p>
              </div>
              <div>
                <p class="text-2xl">
                  titolo
                </p>
                <p>
                  sottotilolo
                </p>
              </div>
              <div>
                <p class="text-2xl">
                  titolo
                </p>
                <p>
                  sottotilolo
                </p>
              </div>
              <div>
                <p class="text-2xl">
                  titolo
                </p>
                <p>
                  sottotilolo
                </p>
              </div>
              <div>
                <p class="text-2xl">
                  titolo
                </p>
                <p>
                  sottotilolo
                </p>
              </div>
              <div>
                <p class="text-2xl">
                  titolo
                </p>
                <p>
                  sottotilolo
                </p>
              </div>
              <div>
                <p class="text-2xl">
                  titolo
                </p>
                <p>
                  sottotilolo
                </p>
              </div>
              <div>
                <p class="text-2xl">
                  titolo
                </p>
                <p>
                  sottotilolo
                </p>
              </div>
              <div>
                <p class="text-2xl">
                  titolo
                </p>
                <p>
                  sottotilolo
                </p>
              </div>
            </div>
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
  }
}
</script>
