<template>
  <div>
    <section class="bg-zinc-900 text-white">
      <div class="container mx-auto px-6 py-20 text-center">
        <div class="flex justify-center mb-4">
          <div class="w-20 h-20 rounded-full bg-amber-400 flex items-center justify-center">
            <i class="bx bxs-user-voice text-4xl text-black"></i>
          </div>
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">Gestão Comportamental para Líder em Segurança</h1>
        <p class="mt-4 text-lg text-zinc-300 max-w-3xl mx-auto">
          Capacitando lideranças para construir e sustentar uma cultura de segurança proativa, engajada e de alta performance.
        </p>
      </div>
    </section>

    <section class="bg-white py-16 md:py-24">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 class="text-3xl font-bold text-zinc-800">Liderança que Inspira Segurança</h2>
            <p class="mt-4 text-lg text-zinc-600 leading-relaxed">
              A verdadeira transformação da segurança começa nos líderes. Nosso programa foca no desenvolvimento de competências essenciais para que gestores e supervisores não apenas gerenciem, mas inspirem suas equipes a adotar comportamentos seguros como parte intrínseca do trabalho diário.
            </p>
          </div>
          <div class="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <h3 class="text-2xl font-bold text-zinc-800 mb-6">Focos do Desenvolvimento:</h3>
            <ul class="space-y-4">
              <li v-for="item in services" :key="item" class="flex items-start">
                <div class="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <i class="bx bx-check text-lg text-green-600"></i>
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
                <NuxtImg src="/ls1.webp" alt="Profissionais técnicos em serviço 1" class="rounded-lg shadow-lg w-full h-64 object-cover" />
                <NuxtImg src="/ls2.webp" alt="Profissionais técnicos em serviço 2" class="rounded-lg shadow-lg w-full h-64 object-cover" />
                <NuxtImg src="/ls3.webp" alt="Profissionais técnicos em serviço 3" class="rounded-lg shadow-lg w-full h-64 object-cover" />
            </div>
        </div>
    </section>

    <HomeCtaSection />
  </div>
</template>

<script setup>
const services = [
  'Práticas de Observação e Feedback',
  'Conscientização e capacitação das lideranças',
  'Contrato de resultados com as lideranças',
  'Desenvolvimento de Competências de Comunicação Assertiva',
  'Diagnóstico de cultura de segurança e saúde',
  'Identificação de comportamentos de riscos',
  'Mentoria com as lideranças',
];

useHead({
  title: 'Líder em Segurança - Gestão Comportamental | Refsafe Work',
  meta: [
    { name: 'description', content: 'Desenvolva a liderança em segurança da sua equipe com nossas soluções em gestão comportamental.' }
  ]
})
</script>