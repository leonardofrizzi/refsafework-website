<script setup>
useHead({
  title: 'Elaboração de Documentos de SSMA - Refsafe Work',
  meta: [
    { name: 'description', content: 'Serviços de elaboração de documentos, políticas, procedimentos, auditorias e inspeções em Segurança, Saúde e Meio Ambiente.' }
  ]
})
</script>

<template>
  <div>
    <section class="bg-zinc-900 text-white">
      <div class="container mx-auto px-6 py-20 text-center">
        <div class="flex justify-center mb-4">
          <div class="w-20 h-20 rounded-full bg-amber-400 flex items-center justify-center">
            <i class="bx bxs-file-doc text-4xl text-black"></i>
          </div>
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">Elaboração de Documentos</h1>
        <p class="mt-4 text-lg text-zinc-300 max-w-3xl mx-auto">
          Requisitos em Segurança, Saúde e Meio Ambiente para garantir a total conformidade da sua empresa.
        </p>
      </div>
    </section>

    <section class="bg-white py-16 md:py-24">
      <div class="container mx-auto px-6 max-w-4xl">
        <div class="space-y-12">
          
          <div>
            <h3 class="text-2xl font-semibold text-zinc-800 border-l-4 border-amber-400 pl-4">Higiene Ocupacional</h3>
            <ul class="mt-4 ml-4 space-y-4">
              <li class="flex items-start">
                <i class="bx bx-check text-2xl text-green-600 mr-3 flex-shrink-0"></i>
                <span class="text-lg text-zinc-700">Programa de gerenciamento de risco – PGR, PCA, PPR</span>
              </li>
              <li class="flex items-start">
                <i class="bx bx-check text-2xl text-green-600 mr-3 flex-shrink-0"></i>
                <span class="text-lg text-zinc-700">Gestão de insalubridade, periculosidade e aposentadoria especial</span>
              </li>
              <li class="flex items-start">
                <i class="bx bx-check text-2xl text-green-600 mr-3 flex-shrink-0"></i>
                <span class="text-lg text-zinc-700">Avaliações de riscos – LTCAT e Ruído externo</span>
              </li>
              <li class="flex items-start">
                <i class="bx bx-check text-2xl text-green-600 mr-3 flex-shrink-0"></i>
                <span class="text-lg text-zinc-700">Assistência técnica em perícia</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-2xl font-semibold text-zinc-800 border-l-4 border-amber-400 pl-4">Desenvolvimento e Implementação de Sistemas de Gestão</h3>
            <ul class="mt-4 ml-4 space-y-4">
              <li class="flex items-start">
                <i class="bx bx-check text-2xl text-green-600 mr-3 flex-shrink-0"></i>
                <span class="text-lg text-zinc-700">ISO 45001 - Sistema de Gestão de Segurança e Saúde Ocupacional.</span>
              </li>
              <li class="flex items-start">
                <i class="bx bx-check text-2xl text-green-600 mr-3 flex-shrink-0"></i>
                <span class="text-lg text-zinc-700">ISO 14001 - Sistema de Gestão Ambiental.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-2xl font-semibold text-zinc-800 border-l-4 border-amber-400 pl-4">Elaboração de Políticas e Procedimentos</h3>
            <ul class="mt-4 ml-4 space-y-4">
              <li class="flex items-start">
                <i class="bx bx-check text-2xl text-green-600 mr-3 flex-shrink-0"></i>
                <span class="text-lg text-zinc-700">Desenvolvimento de Políticas Corporativas de SSMA.</span>
              </li>
              <li class="flex items-start">
                <i class="bx bx-check text-2xl text-green-600 mr-3 flex-shrink-0"></i>
                <span class="text-lg text-zinc-700">Elaboração de Procedimentos Operacionais Padrão (POP).</span>
              </li>
              <li class="flex items-start">
                <i class="bx bx-check text-2xl text-green-600 mr-3 flex-shrink-0"></i>
                <span class="text-lg text-zinc-700">Elaboração de Checklists operacionais.</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-2xl font-semibold text-zinc-800 border-l-4 border-amber-400 pl-4">Auditorias e Inspeções</h3>
            <ul class="mt-4 ml-4 space-y-4">
              <li class="flex items-start">
                <i class="bx bx-check text-2xl text-green-600 mr-3 flex-shrink-0"></i>
                <span class="text-lg text-zinc-700">Auditorias Internas: Realização de auditorias internas regulares para avaliar a conformidade e a eficácia dos sistemas de gestão de SSMA.</span>
              </li>
              <li class="flex items-start">
                <i class="bx bx-check text-2xl text-green-600 mr-3 flex-shrink-0"></i>
                <span class="text-lg text-zinc-700">Inspeções de Segurança: Condução de inspeções de segurança para identificar e corrigir condições inseguras no local de trabalho.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
    
    <section class="bg-slate-50 py-16 md:py-24 border-t border-slate-200">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <NuxtImg src="/d1.webp" alt="Imagem de projeto de engenharia 1" class="rounded-lg shadow-lg w-full h-72 object-cover" />
                <NuxtImg src="/d2.webp" alt="Imagem de projeto de engenharia 2" class="rounded-lg shadow-lg w-full h-72 object-cover" />
                <NuxtImg src="/d3.webp" alt="Imagem de projeto de engenharia 3" class="rounded-lg shadow-lg w-full h-72 object-cover" />
            </div>
        </div>
    </section>

    <HomeCtaSection />
  </div>
</template>