<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const whatsappLink = "https://api.whatsapp.com/send?l=pt&phone=5519998333945";
const isPinging = ref(false);
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    isPinging.value = true;
    setTimeout(() => {
      isPinging.value = false;
    }, 1000);
  }, 7000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50">
    <a 
      :href="whatsappLink" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="relative flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg text-white hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
      aria-label="Fale conosco no WhatsApp"
    >
      <span 
        v-if="isPinging" 
        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
      >
      </span>
      
      <i class='bx bxl-whatsapp text-4xl relative'></i>
      
    </a>
  </div>
</template>