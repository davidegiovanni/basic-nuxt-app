<template>
  <div class="overflow-hidden">
    <div class="flex items-start w-screen justify-center fixed top-0 inset-x-0 z-50">
      <img id="curtainLeft" :style="`width: ${(windowWidth - curtainWidth) / 2}px; min-width: 500px;`" class="flex-1" src="/website/images/shared/curtain-left.svg" alt="Parte sinistra della cortina di un teatro">
      <div id="logoWrapper" :style="`width: ${curtainWidth}px; flex: 0 0 ${curtainWidth}px;`" class="relative flex-grow h-24 bg-arancione border-b border-l border-r rounded-b-full border-white overflow-hidden">
        <img class="absolute top-0 inset-x-0 mt-4 mx-auto" src="/website/images/shared/davide-logo.svg" alt="Logo di Davide, composto da tre ovali in fila">
        <div id="logoName" class="absolute inset-x-0 mx-auto top-0 inset-y-0 h-full flex items-center justify-center">
          <img class="transform -translate-x-1" src="/website/images/shared/davide.svg" alt="Immagine con il testo in grassetto Davide">
        </div>
        <div id="scrollCommand" class="absolute bottom-0 inset-x-0 mx-auto mb-20 py-2 text-center">
          <p class="text-xl mt-5 translate-y-1 font-medium transform rotate-90 text-white bg-arancione relative z-10">
            Scroll
          </p>
          <div class="absolute rounded-full top-0 inset-0 w-0.5 h-32 bg-white mx-auto transform -translate-y-4" />
        </div>
      </div>
      <img id="curtainRight" :style="`width: ${(windowWidth - curtainWidth) / 2}px; min-width: 500px;`" class="flex-1" src="/website/images/shared/curtain-right.svg" alt="Parte destra della cortina di un teatro">
    </div>
    <div id="curtainWrapper" class="flex justify-center items-start z-20 overflow-hidden w-screen">
      <div :style="`width: ${(windowWidth - curtainWidth) / 2}px; flex: 0 0 ${(windowWidth - curtainWidth) / 2}px;`" class="flex items-start justify-end">
        <div id="curtain1" :style="`width: ${curtainWidth}px; flex: 0 0 ${curtainWidth}px;`" class="h-screen border border-white bg-black flex-grow rounded-b-full text-white flex items-center justify-center" v-for="(curtain, index) in halfCurtains" :key="index" />
      </div>
      <div :style="`width: ${curtainWidth}px; flex: 0 0 ${curtainWidth}px;`" class="h-screen opacity-0" />
      <div :style="`width: ${(windowWidth - curtainWidth) / 2}px; flex: 0 0 ${(windowWidth - curtainWidth) / 2}px;`" class="flex flex-row-reverse items-start justify-end">
        <div id="curtain2" :style="`width: ${curtainWidth}px; flex: 0 0 ${curtainWidth}px;`" class="h-screen border border-white bg-black flex-grow rounded-b-full text-white flex items-center justify-center" v-for="(curtain, index) in halfCurtains" :key="index" />
      </div>
    </div>
    <section id="headerSection" class="text-white h-screen overflow-hidden z-30 flex items-center justify-center">
      <div class="w-full max-w-screen-xl lg:mx-auto h-full md:h-5/6 lg:h-full 2xl:h-5/6 flex flex-col items-center justify-between text-center">
        <div class="w-full h-16" />
        <div class="overflow-hidden pb-8 px-4 md:px-0">
          <h1 id="headerTagline" class="text-white text-4xl md:text-6xl font-thin w-10/12 md:max-w-screen-sm mx-auto">
            Il tuo biglietto per uno spettacolo di brand
          </h1>
        </div>
        <h2 class="font-mono text-9xl mb-8 w-72 md:w-10/12 lg:w-full mx-auto flex flex-wrap justify-center items-baseline transform scale-110 lg:scale-150">
          <span id="logoLetter" class="block transform scale-110 md:scale-150 mb-0 md:mb-8" :class="[{ 'w-16': index === 3}, { 'w-24 md:w-auto md:px-2 lg:px-0 lg:w-32': index !== 3}]" v-for="(letter, index) in arrayFromString('davide')" :key="index">
            {{ letter }}
          </span>
        </h2>
      </div>
    </section>
    <section id="conquerSection" class="h-screen px-4 flex items-center justify-center relative">
      <div id="conquerInner" class="flex flex-wrap items-baseline justify-center max-w-screen-xl mx-auto mt-32 relative z-20">
        <div class="pr-6 hidden xl:block ">
          <h2 id="conquerTitle" class="text-pesca font-display text-6xl">
            Vai alla conquista
          </h2>
        </div>
        <div id="conquerListWrapper" class="relative z-30">
          <h2 id="conquerTitle" class="block xl:hidden text-pesca font-display text-6xl pb-8">
            Vai alla conquista
          </h2>
          <h2 id="conquerText1" class="text-white font-display text-5xl lg:text-6xl mb-2">
            del tuo pubblico
          </h2>
          <h2 id="conquerText2" class="text-white font-display text-5xl lg:text-6xl mb-2">
            dei competitors
          </h2>
          <h2 id="conquerText3" class="text-white font-display text-5xl lg:text-6xl mb-2">
            del web
          </h2>
          <div class="relative bottom-0 right-0 text-white font-display text-5xl lg:text-6xl mb-2 inline-flex items-baseline" style="transform: translate3d(0, 0, 0); -webkit-transform: translate3d(0, 0, 0);">
            <h2 id="conquerText4">del mondo</h2><span class="block relative w-16 h-16" id="o"><img class="absolute top-0 w-full h-full" src="/website/images/homepage/lilplanet.png" alt="Piccola icona di una stellina bianca, molto elegante"></span>
          </div>
        </div>
      </div>
      <div id="brandBeauty" class="relative z-30 font-display text-4xl">
        <h2 id="beautiful" class="font-display flex flex-col md:flex-row items-center justify-center text-white text-4xl xl:text-6xl">
          <span id="with" class="block md:pr-3">Con un brand</span> <span class="block" id="outside">bellissimo fuori</span>
        </h2>
        <h2 id="inside" class="text-white text-center text-4xl xl:text-6xl">
          E fantastico dentro
        </h2>
      </div>
      <img id="earth" class="fixed top-0 inset-0 w-full h-full transform scale-600 lg:scale-200 z-20 object-contain" src="/website/images/homepage/earth.png" alt="Immagine della terra vista dallo spazio, una sconfinata distesa blu con terre e nuvole">
      <img id="core" class="fixed opacity-0 top-0 inset-0 w-full h-full z-10 object-cover" src="/website/images/homepage/core.svg" alt="Una illustrazione di una stella fatta di linee che si intersecano, graziosa e moderna">
    </section>
    <section id="methodSection" class="h-full w-screen flex flex-col items-center justify-center">
      <div id="orangeCircle" class="relative bg-arancione w-11/12 md:w-1/2 mx-auto rounded-full pb-full md:pb-half">
        <div class="absolute top-0 inset-0 flex items-center justify-between text-center p-4">
          <h2 id="processTitle" class="font-display w-full w-2/3 mx-auto text-3xl lg:text-5xl">
            Un processo di branding mai visto prima
          </h2>
         <img id="decorations" class="absolute right-0 inset-0 w-full h-full object-cover" src="/website/images/homepage/orangediscdeco.svg" alt="Decorazione con stelle e linee per il disco arancione su cui si trova il testo appena letto">
        </div>
      </div>
      <div id="whiteCircles" class="h-full absolute top-0 w-full flex items-center justify-start">
        <div id="whiteCircle" class="relative bg-white w-11/12 md:w-1/2 flex-none mx-auto rounded-full pb-full md:pb-half">
          <div class="absolute top-0 inset-0 flex items-center justify-between text-center p-4">
            <h2 class="font-display w-full w-2/3 mx-auto text-3xl lg:text-5xl">
              Super pieno di scienza
            </h2>
            <img id="decorations" class="absolute right-0 inset-0 w-full h-full object-cover" src="/website/images/homepage/whitediscdeco.svg" alt="Decorazione con stelle e linee per il disco bianco su cui si trova il testo appena letto">
          </div>
        </div>
        <div id="whiteCircle" class="relative bg-white w-11/12 md:w-1/2 flex-none mx-auto rounded-full pb-full md:pb-half">
          <div class="absolute top-0 inset-0 flex items-center justify-between text-center p-4">
            <h2 class="font-display w-full w-2/3 mx-auto text-3xl lg:text-5xl">
              Ispirato al Design Sprint di Google
            </h2>
            <img id="decorations" class="absolute right-0 inset-0 w-full h-full object-cover" src="/website/images/homepage/whitediscdeco.svg" alt="Decorazione con stelle e linee per il disco bianco su cui si trova il testo appena letto">
          </div>
        </div>
        <div id="whiteCircle" class="relative bg-white w-11/12 md:w-1/2 flex-none mx-auto rounded-full pb-full md:pb-half">
          <div class="absolute top-0 inset-0 flex items-center justify-between text-center p-4">
            <h2 class="font-display w-full w-2/3 mx-auto text-3xl lg:text-5xl">
              Per brand che funzionano
            </h2>
            <img id="decorations" class="absolute right-0 inset-0 w-full h-full object-cover" src="/website/images/homepage/whitediscdeco.svg" alt="Decorazione con stelle e linee per il disco bianco su cui si trova il testo appena letto">
          </div>
        </div>
        <div id="whiteCircle" class="relative bg-white w-11/12 md:w-1/2 flex-none mx-auto rounded-full pb-full md:pb-half">
          <div class="absolute top-0 inset-0 flex items-center justify-between text-center p-4">
            <h2 class="font-display w-full w-2/3 mx-auto text-3xl lg:text-5xl">
              E basta.
            </h2>
            <img id="decorations" class="absolute right-0 inset-0 w-full h-full object-cover" src="/website/images/homepage/whitediscdeco.svg" alt="Decorazione con stelle e linee per il disco bianco su cui si trova il testo appena letto">
          </div>
        </div>
      </div>
    </section>
    <section id="websiteSection" class="py-32 w-screen flex flex-col items-center justify-center">
      <div class="w-full px-4">
        <div id="searchBar" class="max-w-screen-lg mx-auto rounded-xl md:rounded-full border border-white w-full p-8 md:px-8 md:py-4 h-full md:h-auto relative flex flex-col md:flex-row md:items-center justify-center md:justify-start" style="transform-origin: center center;">
          <img class="w-24 mr-4 mb-4 md:mb-0" src="/website/images/homepage/search-world.svg" alt="Icona moderna di un globo stilizzato, con linee di meridiani e paralleli">
          <h2 id="www" class="text-white font-display text-4xl lg:text-6xl transform -translate-y-2">
            <span class="hidden">
              World Wide Brands
            </span>
          </h2>
          <div id="cursor" class="hidden md:flex w-0.5 h-full items-center justify-center rounded-full pulse ml-2">
            <div class="w-full h-16 bg-white rounded-full" />
          </div>  
        </div>
      </div>
    </section>
    <section id="websiteBoxSection" class="w-screen relative h-screen w-full container mx-auto p-8 overflow-hidden flex items-center justify-center">
      <div id="websiteBox" class="w-full h-5/6 lg:h-full 2xl:h-5/6 mx-auto border border-white p-2 md:p-8 lg:p-16 overflow-hidden relative flex items-center justify-center" style="will-change: transform;">
        <div class="w-full flex items-center justify-between h-10 border-t bg-black bg-opacity-50 backdrop-filter backdrop-saturate-200 backdrop-blur-2xl border-white absolute bottom-0 inset-x-0 z-40">
          <p class="text-white border-r border-current px-4">
            {{ time }}
          </p>
          <p class="text-white border-l border-current px-4">
            davidegiovanni.com
          </p>
        </div>
        <h3 id="websiteText" class="w-10/12 lg:w-2/3 mx-auto text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl text-white">
          Sviluppa il tuo brand e poi portalo alla conquista del web con un sito web degno della sua bellezza. E con delle performance stellari su ogni tipo di dispositivo.
        </h3>
        <img class="absolute top-0 inset-0 w-full h-full object-cover mix-blend-overlay" src="/website/images/homepage/scanline.gif" alt="Gif animata di linee statiche di interferenza televisiva">
        <img class="absolute top-0 inset-0 w-full h-full object-cover opacity-40 mix-blend-hard-light z-50" src="/website/images/homepage/scanline.jpg" alt="Immagine di linee statiche di interferenza televisiva">
        <img class="absolute bottom-0 right-0 w-10 lg:w-24 xl:w-32 m-6 lg:m-10 xl:m-16" src="/website/images/homepage/lstar.svg" alt="Stella stilizzata bianca">
        <img class="absolute top-0 left-0 w-10 lg:w-24 xl:w-32 m-6 lg:m-10 xl:m-16" src="/website/images/shared/davide-logo.svg" alt="Il logo di Davide, bianco, composto da tre ovali in linea">
      </div>
    </section>
    <section class="relative max-w-screen-xl w-full mx-auto px-4">
      <div id="oval1" class="border relative overflow-hidden border-white py-16 md:py-32 w-full md:w-2/3 mx-auto flex items-center justify-center mb-16 lg:mb-24" style="border-radius: 100%;">
        <p class="relative z-10 text-white font-display text-2xl lg:text-4xl flex flex-col items-center justify-center">
          Performance <span id="ovalText1" class="text-4xl lg:text-6xl">Stellari</span>
        </p>
        <div id="ovalBg1" class="absolute top-0 h-full w-full inset-0 bg-purple-300">
          <img class="h-full w-full object-cover" src="https://media2.giphy.com/media/5wWf7GZPPlIvA2DyR6o/giphy.gif?cid=ecf05e475dnh6t2amj7neusm5ys9xuawjbvng97q9b01ww4q&rid=giphy.gif&ct=g" alt="Gif animata di lineee al neon che si intersecano">
        </div>
      </div>
      <div id="oval2" class="border relative overflow-hidden border-white py-16 md:py-32 w-full md:w-2/3 mx-auto flex items-center justify-center mb-16 lg:mb-24" style="border-radius: 100%;">
        <p class="relative z-10 text-white font-display text-2xl lg:text-4xl flex flex-col items-center justify-center">
          SEO <span id="ovalText2" class="text-4xl lg:text-6xl">Impeccabile</span>
        </p>
        <div id="ovalBg2" class="absolute top-0 h-full w-full inset-0 bg-purple-300">
          <img class="h-full w-full object-cover" src="https://media2.giphy.com/media/gNIcntbUWI1XO/giphy.gif?cid=ecf05e47h4ii0z15v1ayr34ruv2hsole5hy3t2yea86t004j&rid=giphy.gif&ct=g" alt="Gif animata di linee al neon che si intersecano">
        </div>
      </div>
      <div id="oval3" class="border relative overflow-hidden border-white py-16 md:py-32 w-full md:w-2/3 mx-auto flex items-center justify-center mb-16 lg:mb-24" style="border-radius: 100%;">
        <p class="relative z-10 text-white font-display text-2xl lg:text-4xl flex flex-col items-center justify-center">
          Animazioni <span id="ovalText3" class="text-4xl lg:text-6xl">Brillanti</span>
        </p>
        <div id="ovalBg3" class="absolute top-0 h-full w-full inset-0 bg-purple-300">
          <img class="h-full w-full object-cover" src="https://media3.giphy.com/media/26uf8tQf6WVQPxP9u/giphy.gif?cid=ecf05e47z5q6158s9i9uoxldz8oawhubgll4xnkfjxt56y5z&rid=giphy.gif&ct=g" alt="Gif animata di linee al neon che si intersecano">
        </div>
      </div>
      <div id="oval4" class="border relative overflow-hidden border-white py-16 md:py-32 w-full md:w-2/3 mx-auto flex items-center justify-center mb-16 lg:mb-24" style="border-radius: 100%;">
        <p class="relative z-10 text-white font-display text-2xl lg:text-4xl flex flex-col items-center justify-center">
          Design <span id="ovalText4" class="text-4xl lg:text-6xl">Unico</span>
        </p>
        <div id="ovalBg4" class="absolute top-0 h-full w-full inset-0 bg-purple-300">
          <img class="h-full w-full object-cover" src="https://media2.giphy.com/media/dXXujUmfpS3XG/giphy.gif?cid=ecf05e47j852sb0w4phhxdff2e7vkyreabec72qica6rk1qm&rid=giphy.gif&ct=g" alt="Gif animata di linee al neon che si intersecano">
        </div>
      </div>
      <h3 id="extensionText" class="max-w-screen-md mx-auto font-display text-center text-4xl lg:text-6xl text-white w-full mx-auto mt-32 mb-64 md:my-64">
        La naturale estensione online del tuo brand
      </h3>
      <p id="likeThisText" class="font-display text-center text-white w-full mx-auto mb-64 lg:mb-96">
        (come questo sito web qui)
      </p>
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-96 pb-48 relative">
        <div id="popUp1" class="relative border w-10/12 md:w-8/12 lg:w-full h-400 lg:h-auto border-white p-8 md:p-16 xl:p-32 lg:ml-8 overflow-hidden 2xl:max-w-screen-md flex items-center justify-center">
          <div class="w-full flex items-center justify-between h-10 border-b px-4 bg-black bg-opacity-50 backdrop-filter backdrop-saturate-200 backdrop-blur-2xl border-white absolute top-0 inset-x-0 z-30">
            <div class="inline-flex items-center">
              <span v-for="n in 3" :key="n" class="rounded-full h-3 w-3 border mr-2" />
            </div>
          </div>
          <p id="popUp1Text" class="mt-10 text-4xl lg:text-6xl text-white pr-16 relative z-10">
            E non solo è bellissimo da vedere
          </p>
          <img id="popUp1Text" class="absolute top-0 inset-0 object-cover w-full h-full" src="https://media0.giphy.com/media/l0HeaNsyouA7XetWw/giphy.gif?cid=ecf05e475khgv862sq653rb0n102or2ml4qlzcc0ji8x6qia&rid=giphy.gif&ct=g" alt="Una gif animata dai colori molto saturi (rosso, verde, giallo e blu), con uno stile retro, di una ragazza che cammina su una spiaggia al tramonto">
        </div>
        <div class="relative w-full h-600 lg:h-auto transform lg:-translate-x-16 lg:translate-y-32">
          <div id="popUp2" class="w-10/12 md:w-8/12 lg:w-full h-full absolute bottom-0 right-0 lg:-translate-x-16 lg:translate-y-96 lg:relative border border-white px-8 pt-16 pb-8 md:px-16 lg:mr-8 bg-purple-500 overflow-hidden 2xl:max-w-screen-md flex items-center justify-center">
            <div class="w-full flex items-center justify-between h-10 border-b px-4 bg-black bg-opacity-50 backdrop-filter backdrop-saturate-200 backdrop-blur-2xl border-white absolute top-0 inset-x-0 z-30">
              <div class="inline-flex items-center">
                <span v-for="n in 3" :key="n" class="rounded-full bg-white h-3 w-0.5 mr-1" />
              </div>
            </div>
            <h2 id="popUp2Text" class="font-display text-4xl xl:text-6xl text-white relative z-10">
              Ma è pure una meraviglia da gestire. Anche senza esperienza tecnica
            </h2>
            <img id="popUp1Text" class="absolute top-0 inset-0 w-full h-full object-cover" src="/website/images/homepage/revas.png" alt="Sfondo formato da un delicato gradiente viola che sfuma nel color pesca">
          </div>
        </div>
      </div>
      <p id="revas" class="font-display text-center text-white w-full mx-auto lg:mt-96">
        (grazie RevasOS, il workOS del futuro!)
      </p>
    </section>
    <section id="partnerTextSection" class="h-screen w-screen flex items-center justify-center p-4">
      <div class="w-full max-w-screen-lg mx-auto">
        <h2 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display">
          <span id="questionPartner" class="text-white leading-tight">Davide è un buon partner per il mio brand?</span>
          <span id="designPartner" class="text-white opacity-50 leading-tight">progetta dall’inizio alla fine il brand</span>
          <span id="brainPartner" class="text-white leading-tight text-pesca"><span class="text-white opacity-50">con</span> il potere delle neuroscienze,</span>
          <span id="webPartner" class="text-white opacity-50 leading-tight">sviluppa un sito web fenomenale</span>
          <span id="codingPartner" class="text-white leading-tight text-viola"><span class="text-white opacity-50">con</span> coding creativo</span>
          <span id="copyPartner" class="text-white leading-tight text-muschio"><span class="text-white opacity-50">e</span>  copywriting squisito,</span>
          <span id="morePartner" class="text-white opacity-50 leading-tight">e molto di più.</span>
          <span id="absolutelyPartner" class="text-white leading-tight">assolutamente</span>
          <span id="yesPartner" class="text-white leading-tight">sì</span>
        </h2>
      </div>
    </section>
    <section id="gridWhySection" class="w-screen flex items-center px-4">
      <div class="max-w-screen-lg w-full mx-auto relative p-0.5">
        <div id="whiteBgWhy" class="w-full h-full bg-white absolute top-0 bottom-0 inset-0" />
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-0.5 w-full relative z-10">
          <div id="brandwebTSection" class="bg-viola h-full flex items-center justify-center px-2 py-8 lg:py-16 lg:col-span-2">
            <h2 id="brandwebT" class="w-10/12 mx-auto text-pesca font-mono lg:col-span-1 text-2xl md:text-4xl lg:text-5xl">
              Dal brand al web il passo è brevissimo. E la qualità altissima.
            </h2>
          </div>
          <div id="brandwebDSection" class="bg-black lg:col-span-3 h-full flex items-center justify-center px-2 py-8 lg:py-16">
            <h3 id="brandwebD" class="mx-auto w-10/12 text-xl lg:text-2xl text-white">
              Quando i brand designer e chi poi  costruisce il brand online sono in sintonia è pura magia. E quando lo stesso brand designer è anche lo sviluppatore allora si vola nel futuro. Con Davide, hai una filiera di produzione che ti porta ad avere un grande brand e poi avere un grande brand online. Per conquistare il futuro, oggi.
            </h3>
          </div>
          <div id="brainTSection" class="bg-black lg:col-span-3 h-full">
            <div class="w-full lg:h-1/2 flex items-center justify-center px-2 py-8 lg:py-16">
              <h2 id="brainT" class="mx-auto w-10/12 text-ghiaccio font-mono lg:col-span-2 text-2xl md:text-4xl lg:text-5xl">
                Brand a tutto cervello.
                <br> 
                Che rimangono in testa.
              </h2>
            </div>
            <div id="brainTImageBox" class="overflow-hidden  bg-notte w-full pb-64 lg:h-1/2 border-t border-white relative">
              <div id="brainTImage" class="absolute top-0 inset-0 w-full h-full flex items-center justify-center">
                <img src="/website/images/homepage/logo-crepuscolo.png" alt="Il logo di Davide, composto da tre ovali, di cui due solo contorno bianco e quello al centro blu con una stella in mezzo">
              </div>
            </div>
          </div>
          <div id="brainDSection" class="overflow-hidden  bg-pesca lg:col-span-2 h-full flex items-center justify-center px-2 py-8 lg:py-16">
            <h3 id="brainD" class="mx-auto w-10/12 text-porpora text-xl lg:text-2xl ">
              Davide costruisce brand che vanno oltre la bellezza. Ogni brand è curato nel minimo dettaglio con tutta l'attenzione alle avanguardie delle scienze cognitive. Con Davide, avrai un brand che farà emozionare, un logo che rimarrà impresso nella memoria e una presenza come tu e nemmeno i tuoi competitors avete mai visto prima
            </h3>
          </div>
          <div id="moreTSection" class="bg-black lg:col-span-5  h-full flex items-center justify-center px-2 py-8 lg:py-16 xl:py-32">
            <h2 id="moreT" class="w-10/12 lg:w-2/3 mx-auto text-white font-mono lg:col-span-3 text-2xl md:text-4xl lg:text-5xl">
              Un brand designer per te. E anche molto di piu.
            </h2>
          </div>
          <div id="moreTImageBox"  class="overflow-hidden lg:col-span-2 h-72 lg:h-full flex items-center justify-center px-2 py-8 lg:py-16 bg-muschio relative">
            <div id="moreTImage" class="absolute inset-0 w-8/12 mx-auto my-auto h-4/5 flex items-center justify-center">
              <img class="h-full w-auto mx-auto" src="/website/images/homepage/logo-alba.png" alt="Un ovale con una stella in mezzo">
            </div>
          </div>
          <div id="moreDSection" class="bg-black lg:col-span-3 h-full flex items-center justify-center px-2 py-8 lg:py-16">
            <h2 id="moreD" class="mx-auto w-10/12 text-white lg:col-span-2 text-xl lg:text-2xl h-full">
              Perchè accontentarsi solo di un semplice designer? Con Davide hai a disposizione molto più un brand designer di primissima qualità. Alle sue spalle c’è la potenza di Revas,  la startup innovativa e società benefit che ha costruito RevasOS. In questo modo, che sia il giorno del lancio o fra dieci anni in tutto il mondo, il tuo brand non perderà un colpo e avrà i migliori strumenti tecnologici per crescere a lungo.
            </h2>
          </div>
        </div>
      </div>
    </section>
    <section id="lookAtTheProjects" class="w-screen mt-64 font-display text-3xl md:text-4xl lg:text-6xl xl:text-9xl">
      <div id="lookHere">
        <h2 style="text-stroke: 1px white;">
          Guarda qui
        </h2>
      </div>
      <div id="theseProjects">
        <h2 class="text-white transform translate-x-8 md:translate-x-16 lg:translate-x-32">
          Che progetti
        </h2>
      </div>
    </section>
    <section id="projectsSection" class="w-screen relative px-4 py-64">
      <div id="projectsGrid" class="max-w-screen-xl mx-auto" style="transform-origin: top center; will-change: transform;">
        <div id="firstGrid" class="grid grid-cols-2 lg:grid-cols-5 gap-4 h-screen mb-4" style="max-height: 500px;">
          <div id="block" class="relative h-full col-span-1 flex flex-col items-end justify-end">
            <div :style="backgroundImage('/website/images/homepage/projects/revasos.png')" class="bg-red-500 w-full h-4/5" />
          </div>
          <div id="mainBlock" class="relative h-full col-span-1 lg:col-span-2">
            <div :style="backgroundImage('/website/images/homepage/projects/davide.png')" class="w-full h-full absolute bottom-0 inset-x-0" />
          </div>
          <div class="relative h-full col-span-2 flex lg:flex-col items-start justify-end">
            <div :style="backgroundImage('/website/images/homepage/projects/voxel.png')" id="block" class="bg-indigo-500 w-7/12 mr-4 lg:w-9/12 h-full lg:h-1/3 mb-4" />
            <div :style="backgroundImage('/website/images/homepage/projects/holydavid.png')" id="block" class="bg-green-500 w-5/12 lg:w-full h-full lg:h-1/2" />
          </div>
        </div>
        <div id="secondGrid" class="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen" style="max-height: 500px;">
          <div id="block" class="relative h-full col-span-1 flex items-start justify-end">
            <div :style="backgroundImage('/website/images/homepage/projects/simulacrum.png')" class="bg-red-500 w-full lg:w-8/12 h-full" />
          </div>
          <div id="block" class="relative h-full col-span-1 flex items-start justify-start">
            <div :style="backgroundImage('/website/images/homepage/projects/revas.png')" class="bg-blue-500 w-10/12 h-4/5" />
          </div>
        </div>
      </div>
    </section>
    <section id="contacts" class="w-screen mt-64">
      <div class="w-full max-w-screen-xl justify-center mx-auto px-2 md:px-8 mb-8 md:mb-16 xl:mb-24">
        <h2 id="swText" class="font-display text-pesca text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center">
          Negli ultimi anni, altri brand hanno deciso il meglio per il loro futuro
        </h2>
        <h3 id ="cta" class="font-mono text-white text-2xl md:text-6xl lg:text-7xl text-center w-full mx-auto max-w-screen-xl mt-16 md:mt-32 lg:mt-40">
          Ora tocca al tuo
        </h3>
        <a href="https://form.typeform.com/to/BR9qD3pl" target="_blank" rel="noopener" @mouseleave="togglePlay(), toggleLoop()" @mouseenter="togglePlay(), toggleLoop()">
          <div id="contactButton" class="border overflow-hidden relative bg-arancione border-white py-16 md:py-32 w-full md:w-2/3 mx-auto mx-auto flex items-center justify-center mb-16 lg:mb-24 mt-16 md:mt-32 lg:mt-40" style="border-radius: 100%;">
            <div id="contactText" class="flex items-center">
              <p id="contact" v-for="n in 5" :key="n" class="text-4xl lg:text-6xl w-full h-full inline-flex items-center justify-center text-white font-display">
                Contattami
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
    <div class="w-screen" style="height: 50vh;" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: function (): any {
    return {
      time: '',
      windowWidth: 0,
      windowHeight: 0,
      halfCurtains: 16,
      curtainWidth: 95,
      curtains: 11,
      world: '',
      worldHeight: 0,
      worldWidth: 0,
      whiteCirclesSection: '',
      www: 0,
      websiteBox: '',
      wwwTextPlaceholder: '',
      boxScroller: '',
      isMobile: false,
      isTablet: false,
      isSmallDesktop: false,
      isDesktop: false,
      isBigDesktop: false,
      isHugeDesktop: false,
      popUp2: '',
      contactText: '',
      contact: '',
      pauseTextScroll: false,
      play: false,
      rainbowTl: (() => {}),
      textLoopTl: (() => {})
    }
  },
  mounted (): any {
    this.windowWidth = window.innerWidth
    this.windowHeight = window.innerHeight
    this.world = document.getElementById('o')
    this.worldWidth = document.getElementById('conquerText4')?.offsetWidth
    this.worldHeight = document.getElementById('conquerText4')?.offsetHeight
    this.whiteCirclesSection = document.getElementById('whiteCircles')
    this.www = document.getElementById('www')
    this.websiteBox = document.getElementById('websiteBox')
    this.wwwTextPlaceholder = document.getElementById('wwwTextPlaceholder')
    this.boxScroller =  document.getElementById('boxScroller')
    this.popUp2 = document.getElementById('popUp2')
    this.contactText = document.getElementById('contactText')
    this.contact = document.getElementById('contact')
    this.currentTime()
    this.setViewportType()
    this.scrollCurtains()
    this.showLogo()
    this.scrollConquer()
    this.scrollMethod()
    this.showWeb(),
    this.scrollWebPage()
    this.scrollPartnership()
    this.scrollWhy()
    this.lookAtTheProjects()
    this.showProjects()
    this.scrollContacts()
    this.infiniteLoopText()
    this.scrollData()
    this.rainbowBackground()
  },
  computed: {},
  methods: {
    currentTime () {
      setInterval(() => {
        let today = new Date();
        this.time = (today.getHours() + (today.getMinutes() < 10 ? ":0" + today.getMinutes() : ":" + today.getMinutes()) + (today.getSeconds() < 10 ? ":0" + today.getSeconds() : ":" + today.getSeconds())).toString()
      }, 1000)
    },
    setViewportType () {
      if (this.windowWidth <= 640) {
        this.isMobile = true
        this.isTablet = false
        this.isSmallDesktop = false
        this.isDesktop = false
        this.isBigDesktop = false
        this.isHugeDesktop = false
      } else if (this.windowWidth <= 768 && this.windowWidth > 640) {
        this.isMobile = false
        this.isTablet = true
        this.isSmallDesktop = false
        this.isDesktop = false
        this.isBigDesktop = false
        this.isHugeDesktop = false
      } else if (this.windowWidth <= 1024 && this.windowWidth > 768) {
        this.isMobile = false
        this.isTablet = false
        this.isSmallDesktop = true
        this.isDesktop = false
        this.isBigDesktop = false
        this.isHugeDesktop = false
      } else if (this.windowWidth <= 1280 && this.windowWidth > 1024) {
        this.isMobile = false
        this.isTablet = false
        this.isSmallDesktop = false
        this.isDesktop = true
        this.isBigDesktop = false
        this.isHugeDesktop = false
      } else if (this.windowWidth <= 1536 && this.windowWidth > 1280) {
        this.isMobile = false
        this.isTablet = false
        this.isSmallDesktop = false
        this.isDesktop = false
        this.isBigDesktop = true
        this.isHugeDesktop = false
      } else {
        this.isMobile = false
        this.isTablet = false
        this.isSmallDesktop = false
        this.isDesktop = false
        this.isBigDesktop = false
        this.isHugeDesktop = true
      }
    },
    scrollCurtains () {
      const curtains0 = this.$gsap.utils.toArray(".curtain0")
      this.$gsap.timeline(
        {
          scrollTrigger: {
            trigger: '#curtainWrapper',
            start: 'bottom bottom',
            pin: true,
            end: 'bottom top',
            scrub: 3
          }
        }
      )
      .from('#logoWrapper', 
        { height: '100vh', duration: 5 }, 0
      )
      .to('#curtainLeft', 
        { top: 0, yPercent: -45, duration: 5 }, 0
      )
      .to('#curtainRight', 
        { top: 0, yPercent: -45, duration: 5 }, 0
      )
      .to('#logoName', 
        { bottom: 0, yPercent: 160, duration: 5 }, 0
      )
      .to('#scrollCommand', 
        { opacity: 0 }, 0
      )
      .to('#curtain1', 
        { top: 0, yPercent: -100, duration: 5, stagger: -1 }, '<'
      )
      .to('#curtain2', 
        { top: 0, yPercent: -100, duration: 5, stagger: -1 }, '<'
      )
    },
    arrayFromString (name: string) {
      return Array.from(name)
    },
    showLogo () {
      this.$gsap.timeline(
        {
          scrollTrigger: {
            trigger: '#headerSection',
            start: '50% 50%',
            anticipatePin: 1,
            end: "bottom+=120% top",
            pin: '#headerSection',
            scrub: 2
          }
        }
      )
      .from('#logoLetter', 
        { opacity: 0, bottom: 0, yPercent: 200, duration: 3, stagger: 1 }, 0
      )
      .from('#headerTagline', 
        { opacity: 0, bottom: 0, yPercent: 100, duration: 6 }, '<+=7'
      )
      .to('#headerTagline', 
        { opacity: 100, duration: 6 }, '>+=2'
      )
    },
    scrollConquer () {
      const scrollX = (this.windowWidth)

      this.$gsap.timeline(
        {
          scrollTrigger: {
            trigger: '#conquerSection',
            start: '50% 50%',
            pin: true,
            anticipatePin: 1,
            end: 'bottom+=2000% top',
            scrub: true
          }
        }
      )
      .set('#brandBeauty', { display: 'none'})
      .set('#core', { opacity: 0, y: 0, rotate: 200, scale: 10 }, '<')
      .set('#o', { scale: 1 }, '<')
      .from('#conquerTitle', { opacity: 0, yPercent: 100 }, 0)

      .from('#conquerText1', { opacity: 0 }, '>')
      
      .to('#conquerListWrapper', { yPercent: -25}, '>')
      .from('#conquerText2', { opacity: 0 }, '<')

      .to('#conquerListWrapper', { yPercent: -50}, '>')
      .from('#conquerText3', { opacity: 0 }, '<')

      .to('#conquerListWrapper', { yPercent: -75}, '>')
      .from('#conquerText4', { opacity: 0 }, '<')
      .from('#o', { opacity: 0, y: 20 }, '<+=1')

      .to('#conquerTitle', { opacity: 0 }, '<')
      .to('#conquerText1', { opacity: 0 }, '<+=0.1')
      .to('#conquerText2', { opacity: 0 }, '<+=0.2')
      .to('#conquerText3', { opacity: 0 }, '<+=0.3')
      .to('#conquerText4', { opacity: 0 }, '<+=0.4')

      .to('#o', { y: -this.windowHeight / 2, opacity: 0, rotate: 180, duration: 6 }, '<+=0.5')
      .from('#earth', { y: 200, opacity: 0, duration: 5 }, '<')
      .to('#conquerInner', { display:"none" })
      .to('#brandBeauty', { display: 'block'})

      .from('#with', { y: 50, opacity: 0, duration: 2}, '<')
      .from('#outside', { y: 50, opacity: 0, duration: 2}, '>')
      .to('#beautiful', { y: -100, opacity: 0, display: 'none', duration: 2 }, '>+=1')

      .to('#earth', { scale: () => { return this.windowWidth <= 640 ? 3.50 : 1 }, duration: 5 }, '>-=0.2')
      .from('#inside', { y: 50, opacity: 0, duration: 2 }, '>')
      .to('#earth', { y: -this.windowHeight, duration: 2 }, '>+=1')
      .to('#inside', { scale: 0, opacity: 0, duration: 6 }, '>')
      .to('#core', { opacity: 100, rotate: 0, y: 0, scale: 1, duration: 5 }, '<+=1')
    },
    scrollMethod () {
      const horizontalScrollLength = this.whiteCirclesSection.getBoundingClientRect().width
      const outWidth = this.windowWidth
      const tl = this.$gsap.timeline(
        {
          scrollTrigger: {
            trigger: '#methodSection',
            start: '50% 50%',
            pin: true,
            anticipatePin: 1,
            end: `bottom+=${horizontalScrollLength * 3}px top`,
            scrub: 1
          }
        }
      ).timeScale(0.1)
      tl.set( '#whiteCircles', { x: (this.windowWidth + 32)})
      tl.from( '#orangeCircle', { y: 800, scale: 3, duration: 3 })
      tl.from( '#processTitle', { opacity: 0, scale: 1.2 }, '>+=1')
      tl.to( '#whiteCircles', { x: -(horizontalScrollLength * 3), duration: 20 }, '>+=2')
      tl.to( '#orangeCircle', { x: -outWidth, rotate: -180, duration: 3 }, '<+=0.7')
      tl.from('#whiteCircle', { rotation: 90, stagger: 1, duration: 3 }, '<-=0.5')
    },
    showWeb () {
      this.$gsap.timeline(
        { 
          scrollTrigger: {
            trigger: '#websiteSection',
            start: '50% 50%',
            pin: true,
            anticipatePin: 1,
            end: `bottom+=200% top`,
            scrub: 1
          }
        }
      )
      .from('#searchBar', { opacity: 0 })
      .from('#searchBar', { width: 0, padding: 0, duration: 2 }, '>+=0.5')
      .from('#cursor', { opacity: 0, duration: 0.2})
      .to('#www', {
        duration: 10,
        text: {
            value: "World Wide Brands"
        },
        ease: "power2"
      }, '>+=1.2')
    },
    scrollWebPage () {
      const tl = this.$gsap.timeline(
        { 
          scrollTrigger: {
            trigger: '#websiteBoxSection',
            start: '50% 50%',
            pin: true,
            anticipatePin: 1,
            end: `bottom top`,
            scrub: 1
          }
        }
      )
      tl.from('#websiteBox', { opacity: 0 })
      tl.from('#websiteBox', { width: 0 })
      tl.from('#websiteBox', { height: 0, y: -100, duration: 4, padding: 0 })
      tl.from('#websiteText', { y: 50, opacity: 0, duration: 1 }, '>')
      tl.to('#websiteText', { y: -100, opacity: 0, duration: 1 }, '>+=2')
      tl.to('#websiteBox', { height: 0, y: -100, duration: 4, padding: 0 }, '>+=2')
      tl.to('#websiteBox', { width: 0 })
      tl.to('#websiteBox', { opacity: 0 })
    },
    scrollData () {
      this.$gsap.from('#oval1', { 
        scrollTrigger: {
          trigger: '#oval1',
          start: 'top 70%',
          toggleActions: "play none none reverse"
        },
        y: 100, opacity: 0 })
      this.$gsap.from('#ovalText1', { 
        scrollTrigger: {
          trigger: '#oval1',
          start: 'top 50%',
          toggleActions: "play none none reverse"
        },
        y: 10, opacity: 0 })
      this.$gsap.from('#oval2', { 
        scrollTrigger: {
          trigger: '#oval2',
          start: 'top 70%',
          toggleActions: "play none none reverse"
        },
        y: 100, opacity: 0 })
      this.$gsap.from('#ovalText2', { 
        scrollTrigger: {
          trigger: '#oval2',
          start: 'top 50%',
          toggleActions: "play none none reverse"
        },
        y: 10, opacity: 0 })
      this.$gsap.from('#oval3', { 
        scrollTrigger: {
          trigger: '#oval3',
          start: 'top 70%',
          toggleActions: "play none none reverse"
        },
        y: 100, opacity: 0 })
      this.$gsap.from('#ovalText3', { 
        scrollTrigger: {
          trigger: '#oval3',
          start: 'top 50%',
          toggleActions: "play none none reverse"
        },
        y: 10, opacity: 0 })
      this.$gsap.from('#oval4', { 
        scrollTrigger: {
          trigger: '#oval4',
          start: 'top 70%',
          toggleActions: "play none none reverse"
        },
        y: 100, opacity: 0 })
      this.$gsap.from('#ovalText4', { 
        scrollTrigger: {
          trigger: '#oval4',
          start: 'top 50%',
          toggleActions: "play none none reverse"
        },
        y: 10, opacity: 0 })
      this.$gsap.from('#ovalBg1', { 
        scrollTrigger: {
          trigger: '#oval1',
          start: 'top 50%',
          toggleActions: "play none none reverse"
        },
        opacity: 0 })
      this.$gsap.from('#ovalBg2', { 
        scrollTrigger: {
          trigger: '#oval2',
          start: 'top 50%',
          toggleActions: "play none none reverse"
        },
        opacity: 0 })
      this.$gsap.from('#ovalBg3', { 
        scrollTrigger: {
          trigger: '#oval3',
          start: 'top 50%',
          toggleActions: "play none none reverse"
        },
        opacity: 0 })
      this.$gsap.from('#ovalBg4', { 
        scrollTrigger: {
          trigger: '#oval4',
          start: 'top 50%',
          toggleActions: "play none none reverse"
        },
        opacity: 0 })
      this.$gsap.from('#extensionText', { 
        scrollTrigger: {
          trigger: '#extensionText',
          start: 'center 60%',
          toggleActions: "play none none reverse"
        },
        opacity: 0, y: 20 })
      this.$gsap.from('#likeThisText', { 
        scrollTrigger: {
          trigger: '#likeThisText',
          start: 'center 70%',
          toggleActions: "play none none reverse"
        },
        opacity: 0, y: 20 })
      this.$gsap.from('#popUp1', { 
        scrollTrigger: {
          trigger: '#popUp1',
          start: 'top 70%',
          toggleActions: "play none none reverse"
        },
        height: 0, width: 0, padding: 0, opacity: 0 })
      this.$gsap.from('#popUp1Text', { 
        scrollTrigger: {
          trigger: '#popUp1',
          start: 'top 70%',
          toggleActions: "play none none reverse"
        },
        opacity: 0, delay: 1 })
      this.$gsap.from('#popUp2', { 
        scrollTrigger: {
          trigger: '#popUp2',
          start: 'top 70%',
          toggleActions: "play none none reverse"
        },
        height: 0, width: 0, padding: 0, opacity: 0 })
      this.$gsap.from('#popUp2Text', { 
        scrollTrigger: {
          trigger: '#popUp2',
          start: 'top 70%',
          toggleActions: "play none none reverse"
        },
        opacity: 0, delay: 1 })
      this.$gsap.from('#revas', { 
        scrollTrigger: {
          trigger: '#revas',
          start: 'top 70%',
          toggleActions: "play none none reverse"
        },
        opacity: 0, y: 20 })
    
    },
    scrollPartnership () {
      this.$gsap.timeline(
        { 
          scrollTrigger: {
            trigger: '#partnerTextSection',
            start: '50% 50%',
            pin: true,
            anticipatePin: 1,
            end: `+=400%`,
            scrub: 1
          }
        }
      )
      .from ('#questionPartner', { opacity: 0, duration: 2 })
      .from ('#designPartner', { opacity: 0, duration: 2, ease: "power2" }, '>+=2')
      .from ('#brainPartner', { opacity: 0, duration: 2, ease: "power2" }, '>+=2')
      .from ('#webPartner', { opacity: 0, duration: 2, ease: "power2" }, '>+=2')
      .from ('#codingPartner', { opacity: 0, duration: 2, ease: "power2" }, '>+=2')
      .from ('#copyPartner', { opacity: 0, duration: 2, ease: "power2" }, '>+=2')
      .from ('#morePartner', { opacity: 0, duration: 2, ease: "power2" }, '>+=2')
      .from ('#absolutelyPartner', { y: -200, x: -100, opacity: 0, duration: 2, ease: "elastic.out(1, 0.3)" }, '>+=2')
      .from ('#yesPartner', { y: -200, x: 100, opacity: 0, duration: 2, ease: "elastic.out(1, 0.3)" }, '>+=3')
      .to ('#yesPartner', { opacity: 100, duration: 2, ease: "elastic.out(1, 0.3)" }, '>+=3')
    },
    scrollWhy () {
      this.$gsap.from('#whiteBgWhy', {
        scrollTrigger: {
          trigger: '#gridWhySection',
          start: 'top 80%',
          end: 'bottom bottom',
          toggleActions: "play none none reverse"
        },
        width: 0,
        height: 0,
        delay: 0.5
      })
      this.$gsap.from('#brandwebTSection', {
        scrollTrigger: {
          trigger: '#brandwebTSection',
          start: 'top 50%',
          toggleActions: "play none none reverse"
        },
        backgroundColor: 'black'
      })
      this.$gsap.from('#brandwebT', {
        scrollTrigger: {
          trigger: '#brandwebTSection',
          start: 'top 45%',
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 20
      })
      this.$gsap.from('#brandwebD', {
        scrollTrigger: {
          trigger: '#brandwebDSection',
          start: 'top 45%',
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 20
      })
      // brain
      this.$gsap.from('#brainT', {
        scrollTrigger: {
          trigger: '#brainTSection',
          start: 'top 45%',
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 20
      })
      this.$gsap.from('#brainDSection', {
        scrollTrigger: {
          trigger: '#brainDSection',
          start: 'top 50%',
          toggleActions: "play none none reverse"
        },
        backgroundColor: 'black',
      })
      this.$gsap.from('#brainD', {
        scrollTrigger: {
          trigger: '#brainDSection',
          start: 'top 45%',
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 20
      })
      this.$gsap.from('#brainTImageBox', {
        scrollTrigger: {
          trigger: '#brainTImageBox',
          start: 'top 50%',
          toggleActions: "play none none reverse"
        },
        backgroundColor: 'black',
      })
      this.$gsap.from('#brainTImage', {
        scrollTrigger: {
          trigger: '#brainTImage',
          start: '50% 50%',
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 20
      })
      // more
      this.$gsap.from('#moreT', {
        scrollTrigger: {
          trigger: '#moreTSection',
          start: 'top 50%',
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 20
      })
      this.$gsap.from('#moreDSection', {
        scrollTrigger: {
          trigger: '#moreDSection',
          start: 'top 45%',
          toggleActions: "play none none reverse"
        },
        backgroundColor: 'black'
      })
      this.$gsap.from('#moreD', {
        scrollTrigger: {
          trigger: '#moreDSection',
          start: 'top 50%',
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 20
      })
      this.$gsap.from('#moreTImageBox', {
        scrollTrigger: {
          trigger: '#moreTImageBox',
          start: 'top 50%',
          toggleActions: "play none none reverse"
        },
        backgroundColor: 'black',
      })
      this.$gsap.from('#moreTImage', {
        scrollTrigger: {
          trigger: '#moreTImage',
          start: 'top 50%',
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 20
      })
    },
    lookAtTheProjects () {
      this.$gsap.timeline(
        { 
          scrollTrigger: {
            trigger: '#lookAtTheProjects',
            start: 'top bottom',
            anticipatePin: 1,
            end: 'bottom top',
            scrub: 1
          }
        }
      )
      .from('#lookHere', { xPercent: 100, duration: 8.5 })
      .from('#theseProjects', { xPercent: 100, duration: 10 }, '<+=0.1')
    },
    showProjects () {
      this.$gsap.timeline(
        { 
          scrollTrigger: {
            trigger: '#projectsSection',
            start: 'top top-=20%',
            pin: '#projectsGrid',
            anticipatePin: 1,
            end: 'bottom+=400% top',
            scrub: 1
          }
        }
      )
      .set('#projectsGrid', {scale: 3.3333})
      .to('#projectsGrid', {
        scale: 1,
        ease: "none",
      })
      .from('#secondGrid', { display: 'none'}, '>-=0.4')
    },
    scrollContacts () {
      this.$gsap.timeline(
        {
          scrollTrigger: {
            trigger: '#swText',
            start: '50% 50%',
            pin: true,
            anticipatePin: 1,
            end: `+=300%`,
            scrub: 1
          }
        }
      )
      .from('#swText', {opacity: 0, y: 50, duration: 3, ease: "none"}, '>+=1')
      .to('#swText', { color: '#BAFFFB', duration: 10, ease: "power2"}, '>+=10')
      this.$gsap.from('#cta', {scrollTrigger: {
          trigger: '#cta',
          start: 'top 80%',
          toggleActions: "play none none reverse"
        },opacity: 0, y: 100, ease: "power2"})
      this.$gsap.from('#contactButton', {scrollTrigger: {
          trigger: '#contactButton',
          start: 'top 80%',
          toggleActions: "play none none reverse"
        },y: 100, opacity: 0, ease: "power2"})
    },
    infiniteLoopText () {
      const words = this.$gsap.utils.toArray("#contact")
      const loop = this.horizontalLoop(words, {repeat: -1, speed: 2})
      const tl = this.$gsap.timeline({ repeat: -1})
      tl.to(loop, {})
    },
    rainbowBackground () {
      this.rainbowTl = this.$gsap.timeline({ speed: 1, paused: true, repeat: -1, yoyo: true})
      this.rainbowTl.to('#contactButton', {backgroundColor: '#FF8888', duration: 1})
      this.rainbowTl.to('#contactButton', {backgroundColor: '#6700A6', duration: 1})
      this.rainbowTl.to('#contactButton', {backgroundColor: '#A6001E', duration: 1})
      this.rainbowTl.to('#contactButton', {backgroundColor: '#003667', duration: 1})
      this.rainbowTl.to('#contactButton', {backgroundColor: '#007D76', duration: 1})
      this.rainbowTl.to('#contactButton', {backgroundColor: '#FF7A00', duration: 1})
    },
    horizontalLoop(items: any, config: any) {
      const gsap = this.$gsap
      items = gsap.utils.toArray(items);
      config = config || {};
      this.textLoopTl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => this.this.textLoopTl.totalTime(this.this.textLoopTl.rawTime() + this.this.textLoopTl.duration() * 100)})
      let length = items.length,
        startX = items[0].offsetLeft,
        times: any = [],
        widths: any = [],
        xPercents: any = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap = config.snap === false ? (v: any) => v : gsap.utils.snap(config.snap || 1),
        totalWidth, curX, distanceToStart, distanceToLoop, item, i;
      gsap.set(items, {
        xPercent: (i: any, el: any) => {
          let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
          xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
          return xPercents[i];
        }
      });
      gsap.set(items, {x: 0});
      totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
      for (i = 0; i < length; i++) {
        item = items[i];
        curX = xPercents[i] / 100 * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        this.textLoopTl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
          .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
          .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }
      const toIndex =  (index: any, vars: any) => {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex];
        if (time > this.textLoopTl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
          vars.modifiers = {time: gsap.utils.wrap(0, this.textLoopTl.duration())};
          time += this.textLoopTl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return this.textLoopTl.tweenTo(time, vars);
      }
      this.textLoopTl.next = (vars: any) => toIndex(curIndex+1, vars);
      this.textLoopTl.previous = (vars: any) => toIndex(curIndex-1, vars);
      this.textLoopTl.current = () => curIndex;
      this.textLoopTl.toIndex = (index: any, vars: any) => toIndex(index, vars);
      this.textLoopTl.times = times;
      this.textLoopTl.progress(1, true).progress(0, true); // pre-render for performance
      if (config.reversed) {
        this.textLoopTl.vars.onReverseComplete();
        this.textLoopTl.reverse();
      }
      return this.textLoopTl;
    },
    togglePlay() {
      this.rainbowTl.paused(!this.rainbowTl.paused())
    },
    toggleLoop() {
      this.textLoopTl.paused(!this.textLoopTl.paused())
    },
    backgroundImage (imagePath: string) {
      return `background-image: url(${imagePath}); background-position: center center; background-size: cover; background-repet: no-repeat;`
    }
  }
})
</script>

<style scoped>

h1, h2, h3, h4, h5, h6, p {
  cursor: default;
}

.pulse {
  animation: pulsing 2s ease infinite;
}

@keyframes pulsing {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 100%;
  }
  100% {
    opacity: 0%;
  }
}
</style>