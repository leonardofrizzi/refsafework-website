<script setup>
const platformFeatures = [
  { text: 'Progresso individual acompanhado em tempo real' },
  { text: 'Lembretes automáticos para os alunos' },
  { text: 'Quiz interativos para fixação do conteúdo' },
  { text: 'Avaliação completa no final do treinamento' },
];

const platformLink = 'https://treinamentos.refsafework.com.br/';

useHead({
  title: 'Treinamentos EAD - Refsafe Work',
  meta: [
    { name: 'description', content: 'Cursos de segurança do trabalho 100% online ou semi-presenciais com certificado válido em todo o Brasil. Capacite sua equipe com flexibilidade total.' }
  ]
})
</script>

<template>
  <div>
    <section class="bg-white">
      <div class="container mx-auto px-6 py-16 md:py-24">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p class="font-semibold text-amber-500">TREINAMENTO EAD</p>
            <h1 class="mt-2 text-4xl md:text-5xl font-extrabold text-zinc-800">
              Segurança na Palma da Sua Mão
            </h1>
            <p class="mt-4 text-lg text-zinc-600">
              Capacite sua equipe com flexibilidade total. Cursos 100% online onde a norma permite e treinamentos semi-presenciais, com certificado válido em todo o Brasil.
            </p>
            <div class="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a 
                :href="platformLink" 
                target="_blank"
                class="inline-block bg-amber-400 text-black font-bold text-lg px-8 py-3 rounded-full hover:bg-amber-500 transition-transform hover:scale-105"
              >
                Acessar Plataforma EAD
              </a>
              <NuxtLink 
                to="/contato" 
                class="font-semibold text-zinc-600 hover:text-zinc-900"
              >
                Falar com um consultor &rarr;
              </NuxtLink>
            </div>
          </div>
          <div>
            <NuxtImg 
              src="/13051.webp" 
              alt="Pessoa estudando em um tablet" 
              class="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16 md:py-24">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl font-extrabold text-zinc-800">Por que escolher o EAD da Refsafe Work?</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <i class='bx bxs-badge-check text-5xl text-amber-500'></i>
            <h3 class="mt-4 text-xl font-bold text-zinc-800">Segurança Jurídica</h3>
            <p class="mt-2 text-zinc-600">Nossos treinamentos possuem certificado válido, auditável e reconhecido em todo o Brasil.</p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <i class='bx bx-time-five text-5xl text-amber-500'></i>
            <h3 class="mt-4 text-xl font-bold text-zinc-800">Flexibilidade Total</h3>
            <p class="mt-2 text-zinc-600">Seus funcionários estudam sem interromper a produção, seja em turnos, home office ou na fábrica.</p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg text-center">
            <i class='bx bxs-bar-chart-alt-2 text-5xl text-amber-500'></i>
            <h3 class="mt-4 text-xl font-bold text-zinc-800">Plataforma Moderna</h3>
            <p class="mt-2 text-zinc-600">Acompanhamento de progresso, quizzes interativos e lembretes automáticos para garantir o aprendizado.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-16 md:py-24">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1">
            <h2 class="text-3xl font-bold text-zinc-800">Uma Plataforma Completa para o Aprendizado</h2>
            <p class="mt-4 text-lg text-zinc-600">
              Nossa ferramenta EAD foi desenhada para maximizar a retenção de conteúdo e facilitar a gestão dos treinamentos.
            </p>
            <ul class="mt-6 space-y-4">
              <li v-for="feature in platformFeatures" :key="feature.text" class="flex items-start">
                <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <i class="bx bx-check text-lg text-green-600"></i>
                </div>
                <span class="ml-4 text-lg text-zinc-700">{{ feature.text }}</span>
              </li>
            </ul>
            <div class="mt-8">
              <a 
                :href="platformLink" 
                target="_blank"
                class="inline-block bg-zinc-800 text-white font-bold px-8 py-3 rounded-full hover:bg-black transition-colors"
              >
                Explore a Plataforma
              </a>
            </div>
          </div>
          <div class="order-1 md:order-2">
            <NuxtImg 
              src="/3694.webp" 
              alt="Interface da plataforma de EAD" 
              class="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-zinc-800 text-white">
      <div class="container mx-auto px-6 py-16 text-center">
        <h2 class="text-3xl font-extrabold tracking-tight">Certificado Válido e Reconhecido pelo MTE</h2>
        <p class="mt-4 text-lg text-zinc-300 max-w-3xl mx-auto">
          Todos os nossos treinamentos EAD em Normas Regulamentadoras são desenvolvidos por especialistas e totalmente alinhados às exigências do Ministério do Trabalho, com certificado emitido conforme os requisitos legais.
        </p>
      </div>
    </section>

    <section class="bg-amber-400">
      <div class="container mx-auto px-6 py-16 text-center">
          <h2 class="text-3xl md:text-4xl font-extrabold text-zinc-900">
            Pronto para Começar?
          </h2>
          <p class="mt-2 text-lg text-zinc-800">
            Acesse nossa plataforma e transforme a segurança da sua equipe hoje mesmo.
          </p>
          <div class="mt-8">
            <a 
              :href="platformLink" 
              target="_blank"
              class="inline-block bg-zinc-900 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-black transition-colors transform hover:scale-105"
            >
              Acessar Plataforma de Treinamentos
            </a>
          </div>
      </div>
    </section>

  </div>
</template>