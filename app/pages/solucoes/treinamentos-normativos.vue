<template>
  <div>
    <section class="bg-zinc-900 text-white">
      <div class="container mx-auto px-6 py-20 text-center">
        <div class="flex justify-center mb-4">
          <div class="w-20 h-20 rounded-full bg-amber-400 flex items-center justify-center">
            <i class="bx bxs-book-reader text-4xl text-black"></i>
          </div>
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">Treinamentos Técnicos Normativos</h1>
        <p class="mt-4 text-lg text-zinc-300 max-w-3xl mx-auto">
          Capacitamos sua equipe com os mais altos padrões de segurança, abordando desde os procedimentos básicos até as normas regulamentadoras mais complexas.
        </p>
      </div>
    </section>

    <section class="bg-white py-16 md:py-24">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 class="text-3xl font-bold text-zinc-800">Conhecimento que Transforma</h2>
            <p class="mt-4 text-lg text-zinc-600 leading-relaxed">
              Nossos programas de treinamento são desenhados para ir além da simples conformidade. Focamos na conscientização e na mudança comportamental, garantindo que o conhecimento técnico seja aplicado de forma eficaz no dia a dia, criando uma cultura de segurança proativa e duradoura.
            </p>
          </div>
          <div class="bg-slate-50 p-8 rounded-lg border border-slate-200">
            <h3 class="text-2xl font-bold text-zinc-800 mb-6">Nossos Programas Incluem:</h3>
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
                <NuxtImg src="/tn1.webp" alt="Profissionais técnicos em serviço 1" class="rounded-lg shadow-lg w-full h-64 object-cover" />
                <NuxtImg src="/tn2.webp" alt="Profissionais técnicos em serviço 2" class="rounded-lg shadow-lg w-full h-64 object-cover" />
                <NuxtImg src="/tn3.webp" alt="Profissionais técnicos em serviço 3" class="rounded-lg shadow-lg w-full h-64 object-cover" />
                <NuxtImg src="/tn4.webp" alt="Profissionais técnicos em serviço 4" class="rounded-lg shadow-lg w-full h-64 object-cover" />
                <NuxtImg src="/tn5.webp" alt="Profissionais técnicos em serviço 5" class="rounded-lg shadow-lg w-full h-64 object-cover" />
            </div>
        </div>
    </section>

    <HomeCtaSection />
  </div>
</template>

<script setup>
const services = [
  'Desenvolvimento de Conteúdo Personalizado',
  'Treinamento em Procedimentos de Segurança e Emergência',
  'Programas de Atualização e Reciclagem',
  'Treinamentos em Normas Regulamentadoras (NR01, NR05, NR10, NR11, NR12, NR13, NR17, NR18, NR20, NR23, NR31, NR33, NR34, NR35)',
];

useHead({
  title: 'Treinamentos Técnicos Normativos - Refsafe Work',
  meta: [
    { name: 'description', content: 'Desenvolvimento de conteúdo, treinamentos em NRs e programas de reciclagem com a Refsafe Work.' }
  ]
})
</script>