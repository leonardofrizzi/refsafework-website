<template>
  <div>
    <section class="bg-zinc-900 text-white">
      <div class="container mx-auto px-6 py-20 text-center">
        <div class="flex justify-center mb-4">
          <div class="w-20 h-20 rounded-full bg-amber-400 flex items-center justify-center">
            <i class="bx bxs-hard-hat text-4xl text-black"></i>
          </div>
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">Profissionais Técnicos</h1>
        <p class="mt-4 text-lg text-zinc-300 max-w-3xl mx-auto">
          Nossa equipe de especialistas dedicados a garantir a segurança e a conformidade em todas as frentes de serviço da sua empresa.
        </p>
      </div>
    </section>

    <section class="bg-white py-16 md:py-24">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 class="text-3xl font-bold text-zinc-800">Supervisão e Execução Segura</h2>
            <p class="mt-4 text-lg text-zinc-600 leading-relaxed">
              Alocamos profissionais qualificados para supervisionar e executar tarefas críticas, garantindo que todos os procedimentos de segurança sejam seguidos rigorosamente. Desde a fiscalização de frentes de serviço até a auditoria de processos, nossa equipe atua como uma extensão da sua, focada em mitigar riscos e otimizar a operação.
            </p>
          </div>
          <div class="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <h3 class="text-2xl font-bold text-zinc-800 mb-6">Nossos Serviços Incluem:</h3>
            <ul class="space-y-4">
              <li v-for="item in services" :key="item" class="flex items-start">
                <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <i class="bx bxs-check-shield text-lg text-green-600"></i>
                </div>
                <span class="ml-4 text-lg text-zinc-700">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <section class="bg-slate-50 py-16 md:py-24 border-t border-slate-200">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <NuxtImg src="/p1.webp" alt="Profissionais técnicos em serviço 1" class="rounded-lg shadow-lg w-full h-64 object-cover" />
                <NuxtImg src="/p2.webp" alt="Profissionais técnicos em serviço 2" class="rounded-lg shadow-lg w-full h-64 object-cover" />
                <NuxtImg src="/p3.webp" alt="Profissionais técnicos em serviço 3" class="rounded-lg shadow-lg w-full h-64 object-cover" />
                <NuxtImg src="/p4.webp" alt="Profissionais técnicos em serviço 4" class="rounded-lg shadow-lg w-full h-64 object-cover" />
                <NuxtImg src="/p5.webp" alt="Profissionais técnicos em serviço 5" class="rounded-lg shadow-lg w-full h-64 object-cover" />
            </div>
        </div>
    </section>

    <HomeCtaSection />
  </div>
</template>

<script setup>
const services = [
  'Fiscalização de frentes de serviço',
  'Avaliação de Riscos',
  'Elaboração de Procedimentos de Trabalho Seguro',
  'Treinamento em Segurança, Supervisão e Monitoramento',
  'Inspeção de Equipamentos de Segurança',
  'Auditoria de Segurança',
  'Avaliação Pós-Parada',
  'Acompanhamento de Comissionamento e Startup'
];

useHead({
  title: 'Profissionais Técnicos - Refsafe Work',
  meta: [
    { name: 'description', content: 'Serviços de fiscalização, avaliação de riscos, auditoria e mais, com nossos profissionais técnicos especializados.' }
  ]
})
</script>