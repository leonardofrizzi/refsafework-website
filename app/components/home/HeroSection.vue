<script setup>
import { ref, onMounted } from 'vue';

const hasMounted = ref(false);

onMounted(() => {
  setTimeout(() => {
    hasMounted.value = true;
  }, 100);
});
</script>

<template>
  <section class="bg-white">
    <div class="container mx-auto px-6 py-16 md:py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div class="text-center md:text-left">
          <h1 
            class="text-4xl md:text-5xl font-extrabold text-zinc-800 transition-all duration-700 ease-out"
            :class="hasMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
          >
            Capacitação que Protege. Conformidade que Impulsiona.
          </h1>

          <p 
            class="mt-4 text-lg text-zinc-600 transition-all duration-700 ease-out delay-200"
            :class="hasMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
          >
            Oferecemos treinamentos, laudos e consultoria completa para garantir a segurança e a produtividade da sua equipe.
          </p>

          <div 
            class="mt-8 transition-all duration-700 ease-out delay-300"
            :class="hasMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
          >
            <NuxtLink 
              to="/solucoes" 
              class="inline-block bg-amber-400 text-black font-bold text-lg px-8 py-3 rounded-full hover:bg-amber-500 transition-transform hover:scale-105"
            >
              Conheça Nossas Soluções
            </NuxtLink>
          </div>
        </div>

        <div 
          class="transition-all duration-1000 ease-out delay-200"
          :class="hasMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'"
        >
          <NuxtImg 
            src="/hero.webp" 
            alt="Especialista em segurança do trabalho instruindo equipe" 
            class="rounded-lg shadow-2xl w-full h-auto"
            format="webp"
            quality="80"
          />
        </div>

      </div>
    </div>
  </section>
</template>