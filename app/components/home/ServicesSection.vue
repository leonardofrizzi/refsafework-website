<script setup>
const services = [
  {
    icon: 'heroicons:shield-check-solid',
    // MUDANÇA: Texto exato da imagem
    title: 'GESTÃO DE SAÚDE E SEGURANÇA DO TRABALHO',
    to: '/servicos/gestao-sst'
  },
  {
    icon: 'heroicons:academic-cap-solid',
    // MUDANÇA: Texto exato da imagem
    title: 'DESENVOLVIMENTO E REALIZAÇÃO DE TREINAMENTOS TÉCNICOS E COMPORTAMENTAIS',
    to: '/servicos/treinamentos'
  },
  {
    icon: 'heroicons:cog-6-tooth-solid',
    // MUDANÇA: Texto exato da imagem
    title: 'GESTÃO DE SEGURANÇA DE PROCESSO',
    to: '/servicos/seguranca-de-processo'
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
        <HomeServiceCard
          v-for="service in services"
          :key="service.title"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
          :to="service.to"
        />
      </div>

    </div>
  </section>
</template>