<script setup>
const features = [
  {
    iconClass: 'bx bxs-user-check',
    text: 'Especialistas Altamente Qualificados'
  },
  {
    iconClass: 'bx bxs-comment-detail',
    text: 'Atendimento Personalizado e Consultivo'
  },
  {
    iconClass: 'bx bxs-extension',
    text: 'Soluções Completas de A a Z'
  }
];
</script>

<template>
  <section class="bg-white py-20">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div>
          <NuxtImg 
            src="/451.webp" 
            alt="Equipe Refsafe em uma consultoria de segurança" 
            class="rounded-lg shadow-2xl w-full h-auto"
            format="webp"
            quality="80"
          />
        </div>

        <div class="text-center md:text-left">
          <p class="text-amber-500 font-semibold">SOBRE NÓS</p>
          <h2 class="mt-2 text-4xl font-extrabold text-zinc-800">
            A Parceria Certa para a Segurança da Sua Empresa
          </h2>
          <p class="mt-4 text-lg text-zinc-600">
            Com anos de experiência no mercado, a Refsafe Work nasceu com a missão de simplificar a complexa área de saúde e segurança do trabalho, oferecendo soluções práticas e eficazes que protegem sua equipe e garantem a total conformidade do seu negócio.
          </p>

          <ul class="mt-6 space-y-4">
            <li v-for="feature in features" :key="feature.text" class="flex items-center justify-center md:justify-start">
              <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <i :class="feature.iconClass" class="text-xl text-green-600"></i>
              </div>
              <span class="ml-4 text-lg font-medium text-zinc-700">{{ feature.text }}</span>
            </li>
          </ul>

          <div class="mt-8">
            <NuxtLink 
              to="/sobre" 
              class="inline-block bg-zinc-800 text-white font-bold text-lg px-8 py-3 rounded-full hover:bg-black transition-colors"
            >
              Conheça nossa história
            </NuxtLink>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>