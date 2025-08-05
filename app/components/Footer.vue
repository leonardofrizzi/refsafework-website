<script setup>
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <footer class="bg-zinc-900 text-zinc-300">
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div class="flex items-start">
          <div class="bg-white p-4 rounded-lg inline-block">
            <NuxtImg src="/reffooter.webp" alt="Refsafe Work Logo" class="h-24" format="webp" quality="80" />
          </div>
        </div>

        <div>
          <h3 class="text-lg font-bold text-white mb-4">Contato</h3>
          <ul class="space-y-4">
            <li class="flex items-start">
              <MapPinIcon class="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-zinc-400" />
              <span>Av. Dr. Maximiliano Baruto nº 691, Sala 1 - Jd. Universitário - Araras SP</span>
            </li>
            <li class="flex items-center">
              <PhoneIcon class="w-6 h-6 mr-3 flex-shrink-0 text-zinc-400" />
              <span>(16) 9 9700-0881 / (19) 9 9935-4908</span>
            </li>
            <li class="flex items-center">
              <EnvelopeIcon class="w-6 h-6 mr-3 flex-shrink-0 text-zinc-400" />
              <span>contato@refsafework.com.br</span>
            </li>
          </ul>
        </div>

        <div>
           <h3 class="text-lg font-bold text-white mb-4">Redes Sociais</h3>
           <div class="flex space-x-4">
             <a href="https://www.instagram.com/refsafework/" target="_blank" aria-label="Instagram" class="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 text-white transition-transform hover:scale-110">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 012.153 1.282A4.902 4.902 0 0122 8.492c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.282 2.153A4.902 4.902 0 0116.508 22c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-2.153-1.282A4.902 4.902 0 012 16.508c-.247-.636-.416-1.363-.465-2.427C1.503 13.065 1.5 12.71 1.5 10.285s.012-2.784.06-3.808c.049-1.064.218 1.791.465-2.427a4.902 4.902 0 011.282-2.153A4.902 4.902 0 015.492 2c.636-.247 1.363.416 2.427-.465C8.935 2.013 9.29 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.06-1.004.048-1.625.21-2.076.385a3.102 3.102 0 00-1.365.922c-.417.417-.74 1.018-.922 1.365-.175.451-.337 1.072-.385 2.076-.049 1.023-.06 1.35-.06 3.807v.468c0 2.456.011 2.784.06 3.807.048 1.004.21 1.625.385 2.076.182.447.505.948.922 1.365a3.102 3.102 0 001.365.922c.451.175 1.072.337 2.076.385 1.023.049 1.35.06 3.807.06h.468c2.456 0 2.784-.011 3.807-.06 1.004-.048 1.625-.21 2.076-.385a3.102 3.102 0 001.365-.922c.417-.417.74-.948.922-1.365.175-.451.337-1.072.385-2.076.049-1.023.06-1.35.06-3.807v-.468c0-2.456-.011-2.784-.06-3.807-.048-1.004-.21-1.625-.385-2.076a3.102 3.102 0 00-.922-1.365 3.102 3.102 0 00-1.365-.922c-.451-.175-1.072-.337-2.076-.385C15.17 3.813 14.843 3.802 12.234 3.802zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 1.802a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666zm5.338-3.205a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clip-rule="evenodd" /></svg>
             </a>
             <a href="https://www.linkedin.com/company/refsafework/about/" target="_blank" aria-label="LinkedIn" class="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-700 text-white transition-transform hover:scale-110">
               <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.62 1.62 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" /></svg>
             </a>
           </div>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-zinc-700 text-center flex flex-col md:flex-row justify-between text-sm text-zinc-500">
        <p class="mb-2 md:mb-0">&copy; {{ new Date().getFullYear() }} Refsafe Work. Todos os direitos reservados.</p>
        <NuxtLink to="/politica-de-privacidade" class="underline hover:text-white">Política de Privacidade</NuxtLink>
      </div>
    </div>
  </footer>
</template>