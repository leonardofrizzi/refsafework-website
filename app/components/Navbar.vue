<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMobileMenuOpen = ref(false);
const isSolutionsDropdownOpen = ref(false);

const navLinks = [
  { text: 'Início', to: '/' },
  { 
    text: 'Soluções',
    to: '/solucoes', 
    dropdown: [
      { text: 'Profissionais Técnicos', to: '/solucoes/profissionais-tecnicos' },
      { text: 'Treinamentos Normativos', to: '/solucoes/treinamentos-normativos' },
      { text: 'Líder de segurança', to: '/solucoes/lider-de-seguranca' },
      { text: 'Engenharia', to: '/solucoes/engenharia' },
      { text: 'Documentos', to: '/solucoes/documentos' },
    ] 
  },
  { text: 'Sobre Nós', to: '/sobre' },
  { text: 'Treinamentos EAD', to: '/treinamentos-ead'},
  { text: 'Diagnóstico SSMA', to: '/diagnostico-ssma'},
  { text: 'Contato', to: '/contato' },
];

const closeMenuOnResize = () => {
  if (window.innerWidth >= 768) { isMobileMenuOpen.value = false; }
};

onMounted(() => { window.addEventListener('resize', closeMenuOnResize); });
onUnmounted(() => { window.removeEventListener('resize', closeMenuOnResize); });
</script>

<template>
  <header class="bg-white shadow-md sticky top-0 z-40">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center">
            <NuxtImg src="/refnavbar.webp" alt="Refsafe Work Logo" class="h-16 w-auto" />
          </NuxtLink>
        </div>

        <div class="hidden md:flex md:items-center md:space-x-2 lg:space-x-4">
          <template v-for="link in navLinks" :key="link.text">
            <div 
              v-if="link.dropdown" 
              class="relative" 
              @mouseenter="isSolutionsDropdownOpen = true" 
              @mouseleave="isSolutionsDropdownOpen = false"
            >
              <NuxtLink :to="link.to" class="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-amber-400 transition-colors duration-300 flex items-center">
                <span>{{ link.text }}</span>
                <svg class="ml-1 h-5 w-5 text-black" xmlns="http://www.w.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </NuxtLink>
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <div v-if="isSolutionsDropdownOpen" class="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div class="py-1">
                    <NuxtLink v-for="item in link.dropdown" :key="item.text" :to="item.to" class="block px-4 py-2 text-base text-gray-700 hover:bg-amber-400 hover:text-black">
                      {{ item.text }}
                    </NuxtLink>
                  </div>
                </div>
              </transition>
            </div>
            <NuxtLink v-else :to="link.to" class="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-amber-400 transition-colors duration-300" active-class="bg-amber-400 text-black">
              {{ link.text }}
            </NuxtLink>
          </template>
        </div>

        <div class="md:hidden flex items-center">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none">
            <svg v-if="!isMobileMenuOpen" class="h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg v-else class="h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <Transition
      enter-active-class="transition ease-in-out duration-300 transform"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition ease-in-out duration-300 transform"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden fixed inset-0 z-50">
        <div class="fixed inset-0 bg-black opacity-25" @click="isMobileMenuOpen = false"></div>
        
        <div class="relative w-64 h-full bg-zinc-800 text-white p-4">
          <h2 class="text-xl font-bold mb-4">Menu</h2>
          <nav class="flex flex-col space-y-2">
            <template v-for="link in navLinks" :key="link.text">
               <NuxtLink v-if="!link.dropdown" :to="link.to" @click="isMobileMenuOpen = false" class="px-3 py-2 rounded-md hover:bg-zinc-700">{{ link.text }}</NuxtLink>
               <div v-else>
                 <NuxtLink :to="link.to" @click="isMobileMenuOpen = false" class="block px-3 py-2 text-amber-400 font-semibold">{{ link.text }}</NuxtLink>
                 <NuxtLink v-for="item in link.dropdown" :key="item.text" :to="item.to" @click="isMobileMenuOpen = false" class="pl-6 pr-3 py-2 rounded-md block hover:bg-zinc-700">
                   {{ item.text }}
                 </NuxtLink>
               </div>
            </template>
          </nav>
        </div>
      </div>
    </Transition>
  </header>
</template>