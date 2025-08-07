<script setup>
defineProps({
  icon: String,
  title: String,
  to: String
});
</script>

<template>
  <NuxtLink :to="to" class="block bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
    <div class="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto">
      <Icon :name="icon" class="w-10 h-10 text-amber-500" />
    </div>
    
    <h3 class="mt-6 text-xl font-bold text-zinc-800 h-24 flex items-center justify-center">{{ title }}</h3>
    
    <span class="mt-4 inline-block font-semibold text-amber-600 hover:text-amber-700">
      Saiba Mais &rarr;
    </span>
  </NuxtLink>
</template>