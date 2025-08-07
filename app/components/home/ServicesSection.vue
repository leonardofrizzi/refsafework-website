<script setup>
const services = [
  {
    // MUDANÇA: Trocado o ícone que não existia por um de capacete.
    iconClass: 'bx bxs-hard-hat', 
    title: 'GESTÃO DE SAÚDE E SEGURANÇA DO TRABALHO',
    to: '/servicos/gestao-sst'
  },
  {
    iconClass: 'bx bxs-book-reader',
    title: 'DESENVOLVIMENTO E REALIZAÇÃO DE TREINAMENTOS TÉCNICOS E COMPORTAMENTAIS',
    to: '/servicos/treinamentos'
  },
  {
    iconClass: 'bx bxs-cog',
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
          :iconClass="service.iconClass"
          :title="service.title"
          :to="service.to"
        />
      </div>

    </div>
  </section>
</template>