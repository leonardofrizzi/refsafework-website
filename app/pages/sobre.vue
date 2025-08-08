<template>
  <div>
    <section class="relative bg-zinc-900 text-white">
      <div class="absolute inset-0">
        <NuxtImg 
          src="/about-hero-image.jpg" 
          alt="Ambiente de trabalho industrial seguro" 
          class="w-full h-full object-cover opacity-30"
          format="webp"
          quality="80"
        />
      </div>
      <div class="relative container mx-auto px-6 py-24 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">
          Da Experiência à União: Nasce a REF SAFEWORK
        </h1>
        <p class="mt-4 text-lg text-zinc-300 max-w-2xl mx-auto">
          Promovemos segurança para gerar valor, transformando pessoas e processos.
        </p>
      </div>
    </section>

    <section class="bg-white py-16 md:py-24">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p class="text-amber-500 font-semibold">SOBRE A REF SAFEWORK</p>
            <p class="mt-4 text-lg text-zinc-600 leading-relaxed">
              A REF SAFEWORK representa uma consultoria especializada em gestão de riscos, com uma abordagem holística e voltada para para ir além dos resultados, atuando com uma missão: promover segurança para gerar valor. Além de oferecer serviços de consultoria, a REF SAFEWORK atua como uma agente transformadora, capacitando as pessoas e evoluindo os processos das organizações.
            </p>
            <p class="mt-4 text-lg text-zinc-600 leading-relaxed">
              Por meio de estratégias personalizadas, a empresa se dedica a criar e aprimorar ambientes corporativos mais seguros e produtivos, promovendo uma cultura organizacional voltada para a excelência e o sucesso a longo prazo.
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="bg-slate-50 p-6 rounded-lg">
              <i class='bx bx-trending-up text-3xl text-amber-500'></i>
              <h3 class="mt-2 text-lg font-bold text-zinc-800">Melhoria Contínua</h3>
              <p class="text-sm text-zinc-600">Dos processos, pessoas e equipamentos.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-lg">
              <i class='bx bx-extension text-3xl text-amber-500'></i>
              <h3 class="mt-2 text-lg font-bold text-zinc-800">Soluções Personalizadas</h3>
              <p class="text-sm text-zinc-600">Que integram segurança, produtividade e gestão de riscos.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-lg">
              <i class='bx bx-refresh text-3xl text-amber-500'></i>
              <h3 class="mt-2 text-lg font-bold text-zinc-800">Transformação Cultural</h3>
              <p class="text-sm text-zinc-600">Com foco em liderança engajada e colaboradores protagonistas.</p>
            </div>
            <div class="bg-slate-50 p-6 rounded-lg">
              <i class='bx bx-bar-chart-alt-2 text-3xl text-amber-500'></i>
              <h3 class="mt-2 text-lg font-bold text-zinc-800">Resultados Mensuráveis</h3>
              <p class="text-sm text-zinc-600">Que elevam padrões e reduzem custos operacionais.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16 md:py-24">
      <div class="container mx-auto px-6 text-center max-w-4xl">
        <h2 class="text-3xl md:text-4xl font-extrabold text-zinc-800">Nossa História</h2>
        <p class="mt-6 text-lg text-zinc-600 leading-relaxed">
          Por anos, percorremos os mesmos corredores industriais, vivenciamos os mesmos desafios em segurança, mas em empresas diferentes. Um de nós, especialista em treinamentos técnicos, via operários que dominavam máquinas complexas, mas ainda cometiam erros básicos por falta de conscientização. O outro, consultor comportamental, encontrava equipes engajadas, mas que falhavam por deficiências nos processos.
        </p>
        <blockquote class="mt-6 border-l-4 border-amber-400 pl-6 text-xl font-semibold text-zinc-800 italic text-left">
          "Foi ali que entendemos: treinamento sem cultura é teoria, e comportamento sem técnica é risco. Unimos nossas expertises para criar a REF SAFEWORK - onde o conhecimento técnico se encontra com a transformação humana."
        </blockquote>
        <p class="mt-6 text-lg text-zinc-600 leading-relaxed">
          Hoje, não apenas resolvemos problemas de SSMA, mas reescrevemos histórias de segurança em cada empresa que atendemos. Porque a verdadeira proteção começa quando decidimos que um acidente nunca será "apenas mais um número".
        </p>
        <p class="mt-4 text-xl font-bold text-zinc-900">
          Juntos, não apenas entregamos segurança - criamos legados que protegem gerações.
        </p>
      </div>
    </section>

    <section class="bg-white py-16 md:py-24">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="p-8 border border-slate-200 rounded-lg">
            <h2 class="text-2xl font-bold text-zinc-800">Missão</h2>
            <p class="mt-4 text-zinc-600 leading-relaxed">
              Ser reconhecida como a principal parceira de empresas na busca pela excelência em SSMA, fornecendo os melhores treinamentos e consultoria do mercado, impulsionando a melhoria contínua dos padrões de segurança, saúde e meio ambiente.
            </p>
          </div>
          <div class="p-8 border border-slate-200 rounded-lg">
            <h2 class="text-2xl font-bold text-zinc-800">Valor</h2>
            <p class="mt-4 text-zinc-600 leading-relaxed">
              Valorizamos a integridade, ética e transparência, promovendo uma cultura de segurança e sustentabilidade. Acreditamos no poder da educação e desenvolvimento profissional para criar um futuro mais seguro e sustentável para todos.
            </p>
          </div>
        </div>
      </div>
    </section>

    <HomeCtaSection />

  </div>
</template>

<script setup>
useHead({
  title: 'Sobre Nós - Refsafe Work',
  meta: [
    { name: 'description', content: 'Conheça a história, missão e valores da Refsafe Work, sua parceira especialista em segurança do trabalho.' }
  ]
})
</script>