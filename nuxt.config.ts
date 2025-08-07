export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-icon'
  ],
  css: [
    '~/assets/css/tailwind.css'
  ],
  devtools: { enabled: true }
})