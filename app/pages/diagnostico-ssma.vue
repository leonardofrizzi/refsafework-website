<script setup>
const pilares = [
  { icon: 'bx bxs-group', title: 'PESSOAS', items: ['Análise de comportamento, engajamento e cultura de prevenção', 'Gap de treinamentos e comunicação de riscos'] },
  { icon: 'bx bxs-bank', title: 'ATIVOS', items: ['Avaliação NR-12 (máquinas), NR-13 (vasos de pressão) e integridade estrutural', 'Custo oculto de manutenções corretivas'] },
  { icon: 'bx bxs-factory', title: 'AMBIENTES', items: ['Mapeamento de riscos ergonômicos (NR-17), químicos e físicos', 'Otimização de layouts para segurança e produtividade'] },
  { icon: 'bx bxs-star', title: 'REPUTAÇÃO', items: ['Percepção de clientes, investidores e órgãos reguladores', 'Prejuízos invisíveis da imagem corporativa'] }
];

const depoisDoPaar = [
  { title: 'Pessoas protagonistas', description: 'Times que identificam e agem sobre riscos proativamente.' },
  { title: 'Ativos otimizados', description: 'Redução de até 40% em paradas não programadas.' },
  { title: 'Ambientes inteligentes', description: 'Layouts que previnem acidentes e elevam a produtividade.' },
  { title: 'Reputação blindada', description: 'Diferencial competitivo e confiança institucional.' },
];

// MUDANÇA: Link do WhatsApp com a mensagem personalizada
const diagnosticoWhatsAppLink = 'https://wa.me/5519998333945?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Diagn%C3%B3stico%20PAAR.';

useHead({
  title: 'Diagnóstico SSMA - Método PAAR | Refsafe Work',
  meta: [
    { name: 'description', content: 'Descubra os riscos ocultos na sua operação com o Diagnóstico PAAR da Refsafe Work. Análise completa de Pessoas, Ativos, Ambientes e Reputação.' }
  ]
})
</script>

<template>
  <div>
    <section class="bg-zinc-900 text-white">
      <div class="container mx-auto px-6 py-20 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">Existem Riscos Ocultos na Sua Operação?</h1>
        <p class="mt-4 text-lg text-zinc-300 max-w-3xl mx-auto">
          O Diagnóstico PAAR revela pontos críticos que passam despercebidos e transforma a segurança em uma vantagem competitiva para o seu negócio.
        </p>
        <div class="mt-8">
          <a 
            :href="diagnosticoWhatsAppLink" 
            target="_blank"
            class="inline-block bg-amber-400 text-black font-bold text-lg px-8 py-3 rounded-full hover:bg-amber-500 transition-transform hover:scale-105"
          >
            Solicitar Diagnóstico via WhatsApp
          </a>
        </div>
      </div>
    </section>

    <section class="bg-white py-16 md:py-24">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl font-extrabold text-zinc-800">Chega da "Gestão de Antigamente"</h2>
          <p class="mt-4 text-lg text-zinc-600">Segurança reativa, baseada em obrigação e não em valor, gera custos invisíveis e riscos permanentes. 85% das empresas só buscam soluções após um incidente grave.</p>
        </div>
        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <i class="bx bx-meh-blank text-5xl text-red-500"></i>
            <h3 class="mt-2 text-xl font-bold">Pessoas Desengajadas</h3>
            <p>Segurança vista como "obrigação", não como valor.</p>
          </div>
          <div>
            <i class="bx bx-trending-down text-5xl text-red-500"></i>
            <h3 class="mt-2 text-xl font-bold">Ativos Subaproveitados</h3>
            <p>Paradas frequentes por falhas evitáveis.</p>
          </div>
          <div>
            <i class="bx bxs-error-alt text-5xl text-red-500"></i>
            <h3 class="mt-2 text-xl font-bold">Ambientes Hostis</h3>
            <p>Riscos mascarados pela rotina.</p>
          </div>
          <div>
            <i class="bx bxs-shield-x text-5xl text-red-500"></i>
            <h3 class="mt-2 text-xl font-bold">Reputação Vulnerável</h3>
            <p>Multas, acidentes e desconfiança no mercado.</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="bg-slate-50 py-16 md:py-24">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl font-extrabold text-zinc-800">A Solução: O Método PAAR</h2>
          <p class="mt-4 text-lg text-zinc-600">Uma abordagem estratégica que vai além do óbvio, identificando riscos e oportunidades em 4 Pilares Críticos para sua organização.</p>
        </div>
        <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="pilar in pilares" :key="pilar.title" class="bg-white p-6 rounded-lg shadow-lg">
            <i :class="pilar.icon" class="text-4xl text-amber-500"></i>
            <h3 class="mt-4 text-2xl font-bold text-zinc-800">{{ pilar.title }}</h3>
            <ul class="mt-4 space-y-2 text-zinc-600">
              <li v-for="item in pilar.items" :key="item" class="flex items-start">
                <i class="bx bx-check text-xl text-green-600 mr-2 mt-1 flex-shrink-0"></i>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-16 md:py-24">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-zinc-800">O Que Acontece Após o Diagnóstico?</h2>
        <p class="mt-4 text-lg text-zinc-600 max-w-3xl mx-auto">
          Nosso processo é transparente e rápido. Em até 72 horas úteis, você recebe um plano claro para a transformação da sua segurança.
        </p>
        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-slate-50 p-8 rounded-lg">
            <h3 class="text-xl font-bold text-zinc-800">Análise Técnica (24-72h)</h3>
            <p class="mt-2 text-zinc-600">Validamos suas respostas com benchmarks do setor e identificamos os 3 maiores gaps e oportunidades.</p>
          </div>
          <div class="bg-slate-50 p-8 rounded-lg">
            <h3 class="text-xl font-bold text-zinc-800">Relatório Personalizado</h3>
            <p class="mt-2 text-zinc-600">Você recebe um documento claro com pontuação, classificação de risco e próximos passos prioritários.</p>
          </div>
          <div class="bg-slate-50 p-8 rounded-lg">
            <h3 class="text-xl font-bold text-zinc-800">Reunião de Alinhamento</h3>
            <p class="mt-2 text-zinc-600">Opcionalmente, agendamos uma reunião para explicar os resultados e apresentar um plano de ação sob medida.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-zinc-800 text-white py-16 md:py-24">
       <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
             <h2 class="text-3xl font-extrabold">O Resultado: Sua Empresa Transformada</h2>
              <ul class="mt-6 space-y-6">
                <li v-for="item in depoisDoPaar" :key="item.title" class="flex items-start">
                  <div class="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <i class="bx bx-check text-2xl text-white"></i>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold">{{ item.title }}</h4>
                    <p class="text-zinc-300">{{ item.description }}</p>
                  </div>
                </li>
              </ul>
          </div>
          <div>
            <NuxtImg src="/placeholders/diagnostico-1.jpg" alt="Gestor de sucesso e confiante" class="rounded-lg shadow-2xl w-full h-auto"/>
          </div>
        </div>
       </div>
    </section>

    <section class="bg-amber-400">
      <div class="container mx-auto px-6 py-16 text-center">
          <h2 class="text-3xl md:text-4xl font-extrabold text-zinc-900">
            Quantas histórias de risco sua empresa ainda vai viver?
          </h2>
          <p class="mt-2 text-lg text-zinc-800">
            Transforme sua segurança antes que seja tarde demais.
          </p>
          <div class="mt-8">
            <a 
              :href="diagnosticoWhatsAppLink"
              target="_blank"
              class="inline-block bg-zinc-900 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-black transition-colors transform hover:scale-105"
            >
              Solicitar Diagnóstico via WhatsApp
            </a>
          </div>
      </div>
    </section>
  </div>
</template>