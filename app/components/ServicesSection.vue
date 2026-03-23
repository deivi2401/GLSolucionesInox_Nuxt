<template>
  <section ref="sectionRef" class="py-32 bg-surface blueprint-overlay">
    <div class="max-w-7xl mx-auto px-8">
      <div class="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span class="font-label text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Nuestras Capacidades</span>
          <h2 class="font-headline text-5xl font-bold tracking-tight text-primary">NUESTROS SERVICIOS</h2>
        </div>
        <p class="font-body text-on-surface-variant max-w-md">
          Nos dedicamos a la fabricación en acero inoxidable con estrictos estándares de calidad internos, ofreciendo un excelente servicio y atención al cliente.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-0">
        <!-- Laser Cutting -->
        <div class="group bg-surface-container-lowest p-12 border-l border-outline-variant/30 hover:bg-primary transition-all duration-500">
          <div class="mb-12">
            <Icon name="material-symbols:precision-manufacturing-outline" class="text-4xl text-primary group-hover:text-white transition-colors" />
          </div>
          <h3 class="font-headline text-2xl font-bold mb-6 text-primary group-hover:text-white transition-colors">Corte con Guillotina</h3>
          <p class="font-body text-on-surface-variant mb-8 group-hover:text-primary-fixed-dim transition-colors">
            Cortes a la medida de lámina de acero inoxidable mediante guillotina, asegurando un trabajo rápido y adaptado a tus necesidades.
          </p>
          <div class="h-1 w-12 bg-tertiary"></div>
        </div>
        <!-- TIG Welding -->
        <div class="group bg-surface-container-low p-12 border-l border-outline-variant/30 hover:bg-primary transition-all duration-500">
          <div class="mb-12">
            <Icon name="material-symbols:mode-fan-outline" class="text-4xl text-primary group-hover:text-white transition-colors" />
          </div>
          <h3 class="font-headline text-2xl font-bold mb-6 text-primary group-hover:text-white transition-colors">Soldadura TIG</h3>
          <p class="font-body text-on-surface-variant mb-8 group-hover:text-primary-fixed-dim transition-colors">
            Soldadura TIG de alta calidad para uniones resistentes y limpias en todos nuestros trabajos de acero inoxidable.
          </p>
          <div class="h-1 w-12 bg-tertiary"></div>
        </div>
        <!-- Custom Forming -->
        <div class="group bg-surface-container-lowest p-12 border-l border-r border-outline-variant/30 hover:bg-primary transition-all duration-500">
          <div class="mb-12">
            <Icon name="material-symbols:architecture" class="text-4xl text-primary group-hover:text-white transition-colors" />
          </div>
          <h3 class="font-headline text-2xl font-bold mb-6 text-primary group-hover:text-white transition-colors">Doblado de Lámina</h3>
          <p class="font-body text-on-surface-variant mb-8 group-hover:text-primary-fixed-dim transition-colors">
            Servicio de doblez utilizando dobladora de 2 ejes, ideal para dar forma a la lámina según los requerimientos de tu proyecto.
          </p>
          <div class="h-1 w-12 bg-tertiary"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const sectionRef = ref(null)

onMounted(async () => {
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)
  gsap.from(sectionRef.value, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 85%',
    }
  })
})
</script>
