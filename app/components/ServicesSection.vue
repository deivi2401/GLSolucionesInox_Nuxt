<template>
  <section ref="sectionRef" class="py-32 bg-surface blueprint-overlay">
    <div class="max-w-7xl mx-auto px-8">
      <div class="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span class="font-label text-primary uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Nuestras Capacidades</span>
          <h2 class="font-headline text-5xl font-bold tracking-tight text-primary">SERVICIOS DE PRECISIÓN</h2>
        </div>
        <p class="font-body text-on-surface-variant max-w-md">
          Utilizamos tecnología CNC de vanguardia y soldadores certificados para entregar calidad insuperable en cada corte y doblez.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-0">
        <!-- Laser Cutting -->
        <div class="group bg-surface-container-lowest p-12 border-l border-outline-variant/30 hover:bg-primary transition-all duration-500">
          <div class="mb-12">
            <Icon name="material-symbols:precision-manufacturing-outline" class="text-4xl text-primary group-hover:text-white transition-colors" />
          </div>
          <h3 class="font-headline text-2xl font-bold mb-6 text-primary group-hover:text-white transition-colors">Corte Láser</h3>
          <p class="font-body text-on-surface-variant mb-8 group-hover:text-primary-fixed-dim transition-colors">
            Sistemas láser de fibra óptica de alta velocidad capaces de procesar placa de acero inoxidable de hasta 25mm con cero distorsión térmica.
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
            Soldadura TIG de grado quirúrgico para uniones estructurales perfectas. Especialistas en acabados arquitectónicos de alta estética.
          </p>
          <div class="h-1 w-12 bg-tertiary"></div>
        </div>
        <!-- Custom Forming -->
        <div class="group bg-surface-container-lowest p-12 border-l border-r border-outline-variant/30 hover:bg-primary transition-all duration-500">
          <div class="mb-12">
            <Icon name="material-symbols:architecture" class="text-4xl text-primary group-hover:text-white transition-colors" />
          </div>
          <h3 class="font-headline text-2xl font-bold mb-6 text-primary group-hover:text-white transition-colors">Doblado Especializado</h3>
          <p class="font-body text-on-surface-variant mb-8 group-hover:text-primary-fixed-dim transition-colors">
            Prensas dobladoras avanzadas de 7 ejes que proporcionan plegado de geometría compleja para revestimientos y componentes arquitectónicos a medida.
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
