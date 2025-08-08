<script setup>
import { ref, computed } from 'vue';

const allSolutions = [
  { category: 'treinamentos', title: 'NR-01', description: 'Disposições Gerais e Gerenciamento de Riscos', iconClass: 'bx bxs-file-doc' },
  { category: 'treinamentos', title: 'NR-05', description: 'Comissão Interna Prevenção de Acidentes', iconClass: 'bx bxs-group' },
  { category: 'treinamentos', title: 'NR-06', description: 'Equipamento de Proteção Individual', iconClass: 'bx bxs-hard-hat' },
  { category: 'treinamentos', title: 'NR-10', description: 'Segurança em Instalações e Serviços com Eletricidade', iconClass: 'bx bxs-bolt' },
  { category: 'treinamentos', title: 'NR-11', description: 'Transporte, Movimentação, Armazenagem e Manuseio', iconClass: 'bx bxs-truck' },
  { category: 'treinamentos', title: 'NR-12', description: 'Máquinas e Equipamentos', iconClass: 'bx bxs-wrench' },
  { category: 'treinamentos', title: 'NR-17', description: 'Ergonomia', iconClass: 'bx bxs-universal-access' },
  { category: 'treinamentos', title: 'NR-18', description: 'Montagem de Andaimes', iconClass: 'bx bxs-building-house' },
  { category: 'treinamentos', title: 'NR-20', description: 'Trabalhos com Inflamáveis e Combustíveis', iconClass: 'bx bxs-hot' },
  { category: 'treinamentos', title: 'NR-23', description: 'Proteção Contra Incêndios', iconClass: 'bx bxs-shield' },
  { category: 'treinamentos', title: 'NR-26', description: 'Sinalização de Segurança', iconClass: 'bx bxs-traffic-cone' },
  { category: 'treinamentos', title: 'NR-31', description: 'Trabalhos na Agricultura com Agrotóxicos', iconClass: 'bx bxs-leaf' },
  { category: 'treinamentos', title: 'NR-33', description: 'Trabalho em Espaço Confinado', iconClass: 'bx bxs-archive-in' },
  { category: 'treinamentos', title: 'NR-34', description: 'Trabalhos a Quente', iconClass: 'bx bxs-flame' },
  { category: 'treinamentos', title: 'NR-35', description: 'Trabalhos em Altura', iconClass: 'bx bxs-arrow-to-top' },
  { category: 'documentos', title: 'PGR', description: 'Programa de Gerenciamento de Riscos', iconClass: 'bx bxs-file-plus' },
  { category: 'documentos', title: 'LTCAT', description: 'Laudo Técnico das Condições Ambientais de Trabalho', iconClass: 'bx bxs-file-plus' },
  { category: 'engenharia', title: 'Laudo de Periculosidade', description: 'Avaliação de atividades e operações perigosas', iconClass: 'bx bxs-error-alt' },
];

const tabs = [
  { id: 'treinamentos', name: 'Treinamentos Normativos' },
  { id: 'documentos', name: 'Documentos' },
  { id: 'engenharia', name: 'Engenharia' },
];

const activeTab = ref('treinamentos');

const filteredSolutions = computed(() => {
  return allSolutions.filter(solution => solution.category === activeTab.value);
});

useHead({
  title: 'Soluções - Refsafe Work',
  meta: [
    { name: 'description', content: 'Explore nossa gama completa de soluções em segurança do trabalho, incluindo treinamentos normativos (NRs), laudos, documentos e mais.' }
  ]
})
</script>

<template>
  <div>
    <section class="bg-zinc-900 text-white">
      <div class="container mx-auto px-6 py-20 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">Nossas Soluções</h1>
        <p class="mt-4 text-lg text-zinc-300 max-w-3xl mx-auto">
          Oferecemos um portfólio completo de serviços em Saúde, Segurança e Meio Ambiente (SSMA) para garantir a conformidade e a excelência operacional da sua empresa.
        </p>
      </div>
    </section>

    <section class="bg-slate-50 py-16 md:py-24">
      <div class="container mx-auto px-6">
        
        <div class="border-b border-gray-200 mb-12">
          <nav class="-mb-px flex justify-center space-x-4 md:space-x-8" aria-label="Tabs">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="[
                activeTab === tab.id
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg'
              ]"
            >
              {{ tab.name }}
            </button>
          </nav>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="solution in filteredSolutions"
            :key="solution.title"
            class="group block bg-white p-6 rounded-lg border border-slate-200 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5"
          >
            <i :class="solution.iconClass" class="text-5xl text-zinc-500 group-hover:text-amber-500 transition-colors"></i>
            <h3 class="mt-4 text-xl font-bold text-zinc-800">{{ solution.title }}</h3>
            <p class="mt-1 text-sm text-zinc-600">{{ solution.description }}</p>
          </div>
        </div>
        
      </div>
    </section>

    <HomeCtaSection />
  </div>
</template>