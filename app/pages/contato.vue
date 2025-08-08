<template>
  <div>
    <section class="bg-zinc-900 text-white">
      <div class="container mx-auto px-6 py-20 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">Fale Conosco</h1>
        <p class="mt-4 text-lg text-zinc-300 max-w-2xl mx-auto">
          Estamos aqui para ajudar. Preencha o formulário abaixo ou utilize um de nossos canais de atendimento. Sua segurança é nossa prioridade.
        </p>
      </div>
    </section>

    <section class="bg-white py-16 md:py-24">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          <div class="flex flex-col justify-center">
            <h2 class="text-3xl font-bold text-zinc-800">Informações de Contato</h2>
            <p class="mt-2 text-zinc-600">
              Entre em contato conosco diretamente através dos canais abaixo.
            </p>
            <div class="mt-8 space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <i class="bx bxs-map text-2xl text-amber-500"></i>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-zinc-800">Nosso Endereço</h3>
                  <p class="text-zinc-600">Av. Dr. Maximiliano Baruto, 691 - Sala 1<br>Jd. Universitário, Araras - SP, 13607-337</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <i class="bx bxs-phone text-2xl text-amber-500"></i>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-zinc-800">Telefones</h3>
                  <p class="text-zinc-600">(16) 99700-0881 / (19) 99935-4908</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <i class="bx bxs-envelope text-2xl text-amber-500"></i>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-zinc-800">E-mail</h3>
                  <p class="text-zinc-600">contato@refsafework.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-slate-50 p-8 rounded-lg border border-slate-200 shadow-lg">
            <h2 class="text-3xl font-bold text-zinc-800 mb-6">Envie sua Mensagem</h2>
            <form action="#" method="POST" class="space-y-5">
              <div>
                <label for="name" class="block text-sm font-medium text-zinc-700 mb-1">Seu Nome</label>
                <input type="text" name="name" id="name" required class="block w-full px-4 py-3 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-zinc-700 mb-1">Seu E-mail</label>
                <input type="email" name="email" id="email" required class="block w-full px-4 py-3 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500">
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-zinc-700 mb-1">Mensagem</label>
                <textarea name="message" id="message" rows="5" required class="block w-full px-4 py-3 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"></textarea>
              </div>
              <div>
                <button type="submit" class="w-full bg-amber-400 text-black font-bold py-3 px-6 rounded-full hover:bg-amber-500 transition-colors text-lg transform hover:scale-105">
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
    
    <section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.813087095038!2d-47.36952488836853!3d-22.360779218659683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c87733f1ff7a57%3A0x6b45e2a2a0d6e24!2sAv.%20Dr.%20Maximiliano%20Baruto%2C%20691%20-%20Jardim%20Universit%C3%A1rio%2C%20Araras%20-%20SP%2C%2013607-337!5e0!3m2!1spt-BR!2sbr!4v1723121703673!5m2!1spt-BR!2sbr"
        class="w-full h-[450px]"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>

  </div>
</template>

<script setup>
useHead({
  title: 'Contato - Refsafe Work',
  meta: [
    { name: 'description', content: 'Entre em contato com a Refsafe Work. Estamos prontos para atender você, solicitar um orçamento ou tirar dúvidas.' }
  ]
})
</script>