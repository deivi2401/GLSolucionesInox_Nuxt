<template>
  <nav class="fixed top-0 w-full z-50 border-b border-blue-900/10 glass-header shadow-[0px_24px_48px_rgba(15,62,117,0.06)]">
    <div class="flex justify-between items-center max-w-full mx-auto px-8 h-20">
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <img src="/grupolopezfb.png" alt="Grupo López Inox Logo" class="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
        <div class="font-headline font-bold text-2xl tracking-tighter text-primary">Grupo López Inox</div>
      </NuxtLink>
      <div class="hidden md:flex items-center space-x-10">
        <NuxtLink class="font-label font-medium uppercase tracking-wider text-sm text-slate-500 hover:text-primary transition-colors" to="/">Capacidades</NuxtLink>
        <NuxtLink class="font-label font-medium uppercase tracking-wider text-sm text-slate-500 hover:text-primary transition-colors" to="/proyectos">Proyectos</NuxtLink>
        <NuxtLink class="font-label font-medium uppercase tracking-wider text-sm text-slate-500 hover:text-primary transition-colors" to="/materiales">Materiales</NuxtLink>
        <NuxtLink class="font-label font-medium uppercase tracking-wider text-sm text-slate-500 hover:text-primary transition-colors" to="#">Nosotros</NuxtLink>
        <NuxtLink class="font-label font-medium uppercase tracking-wider text-sm text-slate-500 hover:text-primary transition-colors" to="#">Contacto</NuxtLink>
      </div>
      <button class="bg-primary text-on-primary font-label uppercase tracking-widest text-xs px-8 py-4 transition-all hover:bg-primary-container active:scale-95">
        Cotizar
      </button>
    </div>
  </nav>
</template>

<script setup>
</script>
