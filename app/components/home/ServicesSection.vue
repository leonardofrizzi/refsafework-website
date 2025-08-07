<script setup>
const services = [
  {
    iconClass: 'bx bxs-hard-hat',
    title: 'GESTÃO DE SAÚDE E SEGURANÇA DO TRABALHO',
  },
  {
    iconClass: 'bx bxs-book-reader',
    title: 'DESENVOLVIMENTO E REALIZAÇÃO DE TREINAMENTOS TÉCNICOS E COMPORTAMENTAIS',
  },
  {
    iconClass: 'bx bxs-cog',
    title: 'GESTÃO DE SEGURANÇA DE PROCESSO',
  }
];
</script>

<template>
  <section class="bg-slate-50 py-20">
    <div class="container mx-auto px-6">
      
      <div class="text-center mb-16">
        <h2 class="text-4xl font-extrabold text-zinc-800">Nossas Soluções em Destaque</h2>
        <p class="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
          De treinamentos normativos a laudos técnicos, oferecemos um portfólio completo para atender todas as necessidades da sua empresa.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="block bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full"
        >
          <div class="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto">
            <i :class="service.iconClass" class="text-5xl text-amber-500"></i>
          </div>
          <h3 class="mt-6 text-xl font-bold text-zinc-800 h-24 flex items-center justify-center">{{ service.title }}</h3>
        </div>
      </div>

      <div class="text-center mt-16">
        <NuxtLink 
          to="/solucoes"
          class="inline-block bg-amber-400 text-black font-bold text-lg px-8 py-3 rounded-full hover:bg-amber-500 transition-transform hover:scale-105"
        >
          Ver Todas as Soluções
        </NuxtLink>
      </div>

    </div>
  </section>
</template>