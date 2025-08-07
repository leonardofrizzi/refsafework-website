<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

const clientLogos = [
  'cliente-1.png',
  'cliente-2.png',
  'cliente-3.png',
  'cliente-4.png',
  'cliente-5.png',
  'cliente-6.png',
  'cliente-7.png'
];

const modules = [Autoplay, FreeMode];
</script>

<template>
  <section class="bg-white py-20">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-extrabold text-zinc-800">Clientes que Confiam em Nós</h2>
        <p class="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
          Temos orgulho de ser o parceiro de segurança de empresas de diversos portes e segmentos.
        </p>
      </div>

      <Swiper
        :modules="modules"
        :loop="true"
        :free-mode="true"
        :grab-cursor="true"
        :autoplay="{
          delay: 1, 
          disableOnInteraction: false,
        }"
        :speed="7000" 
        :breakpoints="{
          320: { slidesPerView: 2, spaceBetween: 40 },
          768: { slidesPerView: 3, spaceBetween: 50 },
          1024: { slidesPerView: 5, spaceBetween: 60 },
        }"
        class="py-4"
      >
        <SwiperSlide v-for="(logo, index) in clientLogos" :key="index">
          <div class="flex items-center justify-center h-24">
            <NuxtImg
              :src="`/logos/${logo}`"
              :alt="`Logo do cliente ${index + 1}`"
              class="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              format="webp"
              quality="80"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
.swiper-wrapper {
  transition-timing-function: linear !important;
}
</style>