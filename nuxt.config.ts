export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image' 
  ],
  css: [
    '~/assets/css/tailwind.css'
  ],
  devtools: { enabled: true }
})