<script setup>
useHead({
  title: 'Engenharia de Segurança - Refsafe Work',
  meta: [
    { name: 'description', content: 'Soluções em engenharia de segurança, incluindo projetos de andaimes, projeto estrutural e plano de rigging.' }
  ]
})
</script>

<template>
  <div>
    <section class="bg-zinc-900 text-white">
      <div class="container mx-auto px-6 py-20 text-center">
        <div class="flex justify-center mb-4">
          <div class="w-20 h-20 rounded-full bg-amber-400 flex items-center justify-center">
            <i class="bx bxs-cube-alt text-4xl text-black"></i>
          </div>
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">Engenharia</h1>
        <p class="mt-4 text-lg text-zinc-300 max-w-3xl mx-auto">
          Projetos de engenharia detalhados para garantir a máxima segurança e eficiência em suas operações de montagem e içamento.
        </p>
      </div>
    </section>

    <section class="bg-white py-16 md:py-24">
      <div class="container mx-auto px-6 max-w-4xl">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-zinc-800">Projetos de Andaimes e Plano de Rigging</h2>
        </div>
        
        <div class="mt-12 space-y-10">
          <div>
            <h3 class="text-2xl font-semibold text-zinc-800 border-l-4 border-amber-400 pl-4">Análise e Planejamento</h3>
            <ul class="mt-4 ml-4 space-y-4">
              <li class="flex items-start">
                <i class="bx bx-check text-2xl text-green-600 mr-3 flex-shrink-0"></i>
                <span class="text-lg text-zinc-700">Avaliação detalhada do local e das necessidades específicas do projeto para determinar a melhor solução de andaimes.</span>
              </li>
              <li class="flex items-start">
                <i class="bx bx-check text-2xl text-green-600 mr-3 flex-shrink-0"></i>
                <span class="text-lg text-zinc-700">Desenvolvimento de planos de montagem e desmontagem seguros e eficientes, atendendo às normas regulamentadoras e de segurança vigentes.</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-2xl font-semibold text-zinc-800 border-l-4 border-amber-400 pl-4">Projeto Estrutural</h3>
            <ul class="mt-4 ml-4 space-y-4">
              <li class="flex items-start">
                <i class="bx bx-check text-2xl text-green-600 mr-3 flex-shrink-0"></i>
                <span class="text-lg text-zinc-700">Elaboração de projetos estruturais detalhados, incluindo desenhos técnicos e especificações dos materiais, garantindo estabilidade e segurança durante o uso.</span>
              </li>
              <li class="flex items-start">
                <i class="bx bx-check text-2xl text-green-600 mr-3 flex-shrink-0"></i>
                <span class="text-lg text-zinc-700">Cálculos de carga e resistência para assegurar que os andaimes suportem as cargas previstas sem comprometer a segurança dos trabalhadores.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-2xl font-semibold text-zinc-800 border-l-4 border-amber-400 pl-4">Plano de Rigging</h3>
            <ul class="mt-4 ml-4 space-y-4">
              <li class="flex items-start">
                <i class="bx bx-check text-2xl text-green-600 mr-3 flex-shrink-0"></i>
                <span class="text-lg text-zinc-700">Elaboração de desenhos técnicos e cálculos de engenharia para determinar os pontos de ancoragem, tipos de equipamentos e acessórios de rigging necessários.</span>
              </li>
              <li class="flex items-start">
                <i class="bx bx-check text-2xl text-green-600 mr-3 flex-shrink-0"></i>
                <span class="text-lg text-zinc-700">Cálculos de capacidade de carga, fator de segurança e estabilidade das operações de içamento.</span>
              </li>
              <li class="flex items-start">
                <i class="bx bx-check text-2xl text-green-600 mr-3 flex-shrink-0"></i>
                <span class="text-lg text-zinc-700">Preparação de toda a documentação técnica necessária, incluindo relatórios de engenharia, planos de rigging, certificados de inspeção e documentação de conformidade.</span>
              </li>
              <li class="flex items-start">
                <i class="bx bx-check text-2xl text-green-600 mr-3 flex-shrink-0"></i>
                <span class="text-lg text-zinc-700">Suporte contínuo na atualização e manutenção dos registros e documentos técnicos</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <section class="bg-slate-50 py-16 md:py-24 border-t border-slate-200">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <NuxtImg src="/e1.webp" alt="Imagem de projeto de engenharia 1" class="rounded-lg shadow-lg w-full h-72 object-cover" />
                <NuxtImg src="/e2.webp" alt="Imagem de projeto de engenharia 2" class="rounded-lg shadow-lg w-full h-72 object-cover" />
                <NuxtImg src="/e3.webp" alt="Imagem de projeto de engenharia 3" class="rounded-lg shadow-lg w-full h-72 object-cover" />
                <NuxtImg src="/e4.webp" alt="Imagem de projeto de engenharia 4" class="rounded-lg shadow-lg w-full h-72 object-cover" />
            </div>
        </div>
    </section>

    <HomeCtaSection />
  </div>
</template>