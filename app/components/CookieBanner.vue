<script setup>
import { ref, onMounted } from 'vue';

const showBanner = ref(false);

const acceptCookies = () => {
  localStorage.setItem('cookie_consent', 'true');
  showBanner.value = false;
};

onMounted(() => {
  if (!localStorage.getItem('cookie_consent')) {
    showBanner.value = true;
  }
});
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="opacity-0 translate-y-full"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-full"
  >
    <div v-if="showBanner" class="fixed bottom-0 left-0 right-0 bg-zinc-900 text-white p-4 z-50">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-center md:text-left">
          Utilizamos cookies para oferecer a melhor experiência e analisar o tráfego do nosso site. Ao continuar navegando, você concorda com a nossa 
          <NuxtLink to="/politica-de-privacidade" class="underline hover:text-amber-400">Política de Privacidade</NuxtLink>.
        </p>
        <button 
          @click="acceptCookies"
          class="bg-amber-400 text-black font-bold px-6 py-2 rounded-full hover:bg-amber-500 transition-colors flex-shrink-0"
        >
          Entendi e Aceitar
        </button>
      </div>
    </div>
  </Transition>
</template>