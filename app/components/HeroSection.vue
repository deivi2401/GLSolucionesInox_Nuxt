<template>
  <header ref="sectionRef" class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
    <div class="absolute inset-0 z-0 opacity-40">
      <img class="w-full h-full object-cover" alt="Close up of structural architectural steel beams" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE_G6967s-U7hVXpWPJDS0bFnnLLfyrcLlGSv4mekQtHLycqcJwVpQe7C_396Cf8gVY7DPRJg4yuStAs6AdBvLDnZVrXBvPAoUhdhaXuLfEPVY151QbT4xYAYW5-kbedr2vbQg1sUeRv29M6BM5Rxkz8b0aSk50NZc1edFkE0w5TdWok0StcodSnJlb9DkkZtuqu6cUffFqD1yO6QKEMX6hPmxIaU055U2rc5A7L6nPXDbEds_ncsiyTB883rwlLJbtmqieiMc51c"/>
    </div>
    <div class="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
    <div class="relative z-20 max-w-7xl mx-auto px-8 w-full">
      <div class="max-w-3xl">
        <div class="inline-block bg-tertiary px-4 py-1 mb-6">
          <span class="font-label text-[10px] uppercase tracking-[0.3em] text-on-tertiary font-bold">Líderes en Acero Inoxidable</span>
        </div>
        <h1 class="font-headline text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8">
          SOLUCIONES EN<br/>ACERO INOXIDABLE
        </h1>
        <p class="font-body text-xl text-primary-fixed-dim max-w-xl mb-12 leading-relaxed">
          Diseños de precisión en acero inoxidable para todo tipo de proyectos. En Grupo López Soluciones Inox fusionamos la exactitud milimétrica con calidad artesanal para redefinir el paisaje estructural.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <button class="bg-white text-primary font-label uppercase tracking-widest text-sm px-10 py-5 font-bold hover:bg-surface-container-low transition-all">
            Solicitar Cotización
          </button>
          <button class="border border-white/30 text-white font-label uppercase tracking-widest text-sm px-10 py-5 hover:bg-white/10 transition-all">
            Ver Portafolio
          </button>
        </div>
      </div>
    </div>
    <div class="absolute bottom-12 right-12 z-20 hidden lg:block">
      <div class="flex flex-col items-end border-r-4 border-tertiary pr-6 py-2">
        <span class="font-headline text-4xl text-white font-light tracking-tighter">0.001mm</span>
        <span class="font-label text-xs uppercase tracking-widest text-primary-fixed-dim">Tolerancia Máxima</span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const sectionRef = ref(null)

onMounted(() => {
  gsap.from(sectionRef.value, {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  })
})
</script>
