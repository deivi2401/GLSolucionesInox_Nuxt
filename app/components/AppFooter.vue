<template>
  <footer class="bg-primary text-white mt-20">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 w-full">
      <div class="space-y-6">
        <div class="font-headline font-bold text-xl text-white">Grupo López Inox</div>
        <p class="font-body text-sm text-blue-200/70 antialiased">
          Especialistas en la fabricación de acero inoxidable. Comprometidos con la calidad de nuestros servicios y atención.
        </p>
      </div>
      <div class="space-y-6">
        <h5 class="font-label text-[10px] uppercase tracking-widest font-bold text-tertiary-fixed-dim">Servicios</h5>
        <ul class="space-y-4 font-body text-sm text-blue-200/70">
          <li><a class="hover:text-white transition-colors" href="#">Corte con Guillotina</a></li>
          <li><a class="hover:text-white transition-colors" href="#">Acabados de Superficie</a></li>
          <li><a class="hover:text-white transition-colors" href="#">Fabricación Personalizada</a></li>
          <li><NuxtLink class="hover:text-white transition-colors" to="/materiales">Especificaciones Técnicas</NuxtLink></li>
          <li><NuxtLink class="hover:text-white transition-colors" to="/nosotros">Acerca de Nosotros</NuxtLink></li>
          <li><NuxtLink class="hover:text-white transition-colors" to="/contacto">Soporte y Contacto</NuxtLink></li>
        </ul>
      </div>
      <div class="space-y-6">
        <h5 class="font-label text-[10px] uppercase tracking-widest font-bold text-tertiary-fixed-dim">Contacto Legal</h5>
        <ul class="space-y-4 font-body text-sm text-blue-200/70">
          <li><a class="hover:text-white transition-colors" href="mailto:info@grupo-lopez.odoo.com">info@grupo-lopez.odoo.com</a></li>
          <li><a class="hover:text-white transition-colors" href="#">Aviso de Privacidad</a></li>
          <li><a class="hover:text-white transition-colors" href="#">Términos de Servicio</a></li>
        </ul>
      </div>
      <div class="space-y-6">
        <h5 class="font-label text-[10px] uppercase tracking-widest font-bold text-tertiary-fixed-dim">Ubicación</h5>
        <p class="font-body text-sm text-blue-200/70 antialiased leading-loose">
          Donato Guerra 2110<br/>
          Nuevo Laredo, Mexico, 88209<br/>
          +52 867 251 7096
        </p>
      </div>
    </div>
    <div class="px-12 py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
      <span class="font-body text-xs text-blue-200/50">© 2026 Grupo López Soluciones Inox. </span>
      <div class="flex gap-6">
        <a href="https://www.facebook.com/profile.php?id=61587383860192" target="_blank" rel="noopener noreferrer" class="text-blue-200/50 hover:text-white cursor-pointer transition-colors" title="Facebook">
          <Icon name="mdi:facebook" class="text-2xl" />
        </a>
        <a href="https://www.instagram.com/grupolopezinox/" target="_blank" rel="noopener noreferrer" class="text-blue-200/50 hover:text-white cursor-pointer transition-colors" title="Instagram">
          <Icon name="mdi:instagram" class="text-2xl" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
