<template>
  <!-- ───────────────── HERO ───────────────── -->
  <section class="relative bg-primary overflow-hidden pt-40 pb-32">
    <!-- Background texture lines (industrial blueprint feel) -->
    <div class="absolute inset-0 opacity-5 pointer-events-none"
      style="background-image: repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px);">
    </div>

    <div class="relative max-w-7xl mx-auto px-8">
      <span ref="heroLabel" class="font-label text-secondary-fixed-dim uppercase tracking-[0.3em] text-xs font-bold mb-6 block opacity-0">
        Precisión en Práctica
      </span>
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
        <h1 ref="heroTitle" class="font-headline text-5xl md:text-7xl font-bold text-white leading-none max-w-2xl opacity-0">
          GALERÍA DE<br/>
          <span class="text-secondary-fixed-dim">PROYECTOS</span>
        </h1>
        <p ref="heroDesc" class="font-body text-white/60 max-w-sm text-base leading-relaxed opacity-0">
          Desde obras arquitectónicas monumentales hasta componentes industriales de tolerancia crítica, fabricamos el futuro con exactitud incomparable.
        </p>
      </div>

      <!-- Stats strip -->
      <div ref="heroStats" class="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 opacity-0">
        <div v-for="stat in stats" :key="stat.label" class="bg-primary px-8 py-6">
          <span class="font-headline text-3xl font-bold text-white block mb-1">{{ stat.value }}</span>
          <span class="font-label text-xs uppercase tracking-widest text-white/40">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ───────────────── FILTER + GRID ───────────────── -->
  <section class="bg-surface-container-lowest py-24">
    <div class="max-w-7xl mx-auto px-8">

      <!-- Filter tabs -->
      <div ref="filtersRef" class="flex gap-2 flex-wrap mb-16 opacity-0">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="active = cat"
          :class="[
            'font-label uppercase tracking-widest text-xs px-6 py-3 transition-all duration-200',
            active === cat
              ? 'bg-primary text-on-primary'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Project grid -->
      <TransitionGroup name="gallery" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, i) in filteredProjects"
          :key="project.id"
          ref="cardRefs"
          class="group relative overflow-hidden bg-primary cursor-pointer"
          :class="{ 'md:col-span-2 lg:col-span-2': project.featured }"
          @mouseenter="hoverProject = project.id"
          @mouseleave="hoverProject = null"
        >
          <!-- Image -->
          <div class="aspect-[4/3] overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover opacity-80 transition-all duration-700"
              :class="hoverProject === project.id ? 'scale-110 opacity-90' : 'scale-100'"
            />
          </div>

          <!-- Dark overlay gradient -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300"
            :class="hoverProject === project.id ? 'opacity-100' : 'opacity-70'">
          </div>

          <!-- Tag -->
          <div class="absolute top-4 left-4">
            <span class="font-label text-[10px] uppercase tracking-[0.3em] bg-secondary text-on-secondary px-3 py-1">
              {{ project.category }}
            </span>
          </div>

          <!-- Card content -->
          <div class="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300"
            :class="hoverProject === project.id ? 'translate-y-0' : 'translate-y-2'">
            <div class="flex gap-3 mb-3 flex-wrap">
              <span v-for="tag in project.tags" :key="tag"
                class="font-label text-[10px] uppercase tracking-wider text-white/50 border border-white/20 px-2 py-0.5">
                {{ tag }}
              </span>
            </div>
            <h3 class="font-headline text-xl md:text-2xl font-bold text-white mb-1">{{ project.title }}</h3>
            <p class="font-body text-sm text-white/60 mb-4 line-clamp-2 transition-all duration-300"
              :class="hoverProject === project.id ? 'opacity-100' : 'opacity-0'">
              {{ project.description }}
            </p>
            <a href="#" class="inline-flex items-center gap-2 font-label text-xs uppercase tracking-widest text-white/90
              border-b border-white/30 pb-0.5 transition-all hover:text-white hover:border-white group/link">
              Ver Caso de Estudio
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>
            </a>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </section>

  <!-- ───────────────── CTA SECTION ───────────────── -->
  <section ref="ctaRef" class="bg-primary py-32 overflow-hidden relative opacity-0">
    <!-- Subtle pattern -->
    <div class="absolute right-0 top-0 bottom-0 w-1/2 opacity-5 pointer-events-none"
      style="background: repeating-linear-gradient(-45deg, #fff 0px, #fff 1px, transparent 1px, transparent 20px);">
    </div>

    <div class="relative max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <span class="font-label text-secondary-fixed-dim uppercase tracking-[0.3em] text-xs font-bold mb-6 block">
          Siguiente Paso
        </span>
        <h2 class="font-headline text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
          Discuta Su Próximo<br/>Proyecto de Precisión
        </h2>
        <p class="font-body text-white/60 mb-10 max-w-md leading-relaxed">
          ¿Listo para llevar sus requerimientos de ingeniería a la realidad? Nuestro equipo está disponible para brindar consultoría técnica y estimados detallados.
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="/contacto"
            class="inline-flex items-center gap-3 bg-secondary text-on-secondary font-label uppercase tracking-widest text-xs px-8 py-4 transition-all hover:bg-secondary-fixed-dim">
            Iniciar Consulta
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>
          </a>
          <a href="#"
            class="inline-flex items-center gap-3 border border-white/30 text-white font-label uppercase tracking-widest text-xs px-8 py-4 transition-all hover:bg-white/10">
            Descargar Capacidades
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </a>
        </div>
      </div>

      <!-- Certification badges -->
      <div class="grid grid-cols-2 gap-px bg-white/10">
        <div v-for="cert in certifications" :key="cert.label" class="bg-primary/80 p-8 flex flex-col gap-3">
          <span class="text-secondary-fixed-dim text-3xl leading-none">{{ cert.emoji }}</span>
          <span class="font-headline text-base font-bold text-white">{{ cert.label }}</span>
          <span class="font-body text-xs text-white/50 leading-relaxed">{{ cert.description }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'

// ─── State ───────────────────────────────────────────────────────────────────
const active = ref('Todos')
const hoverProject = ref(null)

// ─── Refs ─────────────────────────────────────────────────────────────────────
const heroLabel = ref(null)
const heroTitle = ref(null)
const heroDesc = ref(null)
const heroStats = ref(null)
const filtersRef = ref(null)
const ctaRef = ref(null)

// ─── Data ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: '+120', label: 'Proyectos Completados' },
  { value: '99.9%', label: 'Precisión de Ensamblaje' },
  { value: '28 años', label: 'Experiencia Industrial' },
  { value: 'ISO 9001', label: 'Certificación Activa' },
]

const categories = ['Todos', 'Industrial', 'Arquitectónico', 'Marino', 'Aeroespacial']

const projects = [
  {
    id: 1,
    title: 'Terminal Marítima 4',
    category: 'Marino',
    description: 'Estructura de soporte completa en acero inoxidable grado 316 para terminal offshore. TIG Welding de precisión bajo condiciones de salinidad extrema.',
    tags: ['TIG Welding', 'Marine Grade 316'],
    featured: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWdBEpT_2c972qejloNHiAAaCB6zapb28bEZDCErU-27kdxJOXWNeJ2rKFu3XLweVQfaEtzVEMPI6x3MYW5Zs78tmv_Q-myT4at42nT0a0IyAgaUgsBilZhAcuSzeCtS0CqzUd3N9BiYGsXyCd5YFB5rADhvHarmQcWkVHit3OiIDPocgW04IaHzr9XJp_PFH9-YqcNw5ncHM2OMnjBw4sDNULmQ4zZlZPdllIOpx6OJjPljWaoJ4zl7SYFApDKSo3Xdlw8VPisHg',
  },
  {
    id: 2,
    title: 'The Helix Spire',
    category: 'Arquitectónico',
    description: 'Escultura arquitectónica en espiral de 24 metros con acabado mirror polish de alta complejidad geométrica.',
    tags: ['Laser Cutting', 'Mirror Polish'],
    featured: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2JtDJroUnILqJQ8gTpzcWS9MEqFoeIaIXsOXOXMnJ8IdzWF75L9TqtH_6HDaXiHOzlDw-38sSEHeoAJpmZFpcDNy9F09cswr0Dk0mpnFx9oPjQj5YfLfQN2mOaRmPokuJtcrNovv1LASqB8wUfnpkzQ79cmAK498GIyVWUwjGgh3S6fNBJBchdPZo7V_gRSZ2WTxZG_GxFLReXRsn2qWTkISB0El7MwuDw3LobBFAHyoFb7rm4ykGn9yL_5vq-8UJTjgEhmrT2EY',
  },
  {
    id: 3,
    title: 'Tubería de Proceso Sanitario',
    category: 'Industrial',
    description: 'Sistema de tuberías de grado cleanroom con acabado electropulido y soldadura orbital robotizada para farmacéutica.',
    tags: ['Orbital Welding', 'Cleanroom Grade'],
    featured: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaj8L5er6watbd_TXz9lxx6HZFLwlmlJf984LMjBXno-uOJGwTlUlhuoDAGRy88LpSlmX7OfFg7GYLmUQepap5YEkEQOGkaDQfeBkehuH34RP-ndsbXA0HA9g9aoBX-8iFeP2qJxkacWmWpchueRr_ZblecLwK4JCjnHsorgmx35dyEx6sAyaY8mM9Z2GpC4NEtDGjhJGKSDh74kU6iZ5rZ6UIC6-rZSaII7mkfYtrv3w283FClc6kpxK7cQ4v6mDhctOj34qn50I',
  },
  {
    id: 4,
    title: 'Celda de Clasificación Automatizada',
    category: 'Industrial',
    description: 'Ensamble estructural CNC para celda robótica de clasificación de alta precisión. Tolerancias de ±0.05mm en todos los puntos de montaje.',
    tags: ['CNC Bending', 'Structural Assembly'],
    featured: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8Z-bwXJZVhAt-VEt2mW8-AqIBTyDXjfKEhR2pGpMCO66r7ipWraAfx7PUfYsU3fL_dqfmhM1K3CdDa2yqdm8bxuibN-9yQvHgje7qLNQsNgM3oJWpXZ7pTKG-6qP01HgBg_hO9I-tQk8H9uG5owPcvQgrsOGQLIMqCQP-knL9ykO0_sYZ5cSv2_-m3-vl1B3a6aKA4f7ZjXQnFFAInZhVt9GLBzCBfqzm7YU7wmw5D-r43NCt65Tys0KBdX86AKsbl-wTdil_fiM',
  },
  {
    id: 5,
    title: 'Plantilla de Herramientas Aeroespaciales',
    category: 'Aeroespacial',
    description: 'Fixture de mecanizado en 5 ejes para componentes de motores aeroespaciales. Aluminio grado aeroespacial con tolerancias críticas.',
    tags: ['5-Axis CNC', 'Aerospace Grade Alum'],
    featured: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWdBEpT_2c972qejloNHiAAaCB6zapb28bEZDCErU-27kdxJOXWNeJ2rKFu3XLweVQfaEtzVEMPI6x3MYW5Zs78tmv_Q-myT4at42nT0a0IyAgaUgsBilZhAcuSzeCtS0CqzUd3N9BiYGsXyCd5YFB5rADhvHarmQcWkVHit3OiIDPocgW04IaHzr9XJp_PFH9-YqcNw5ncHM2OMnjBw4sDNULmQ4zZlZPdllIOpx6OJjPljWaoJ4zl7SYFApDKSo3Xdlw8VPisHg',
  },
  {
    id: 6,
    title: 'Escalera del Atrio Vertex',
    category: 'Arquitectónico',
    description: 'Escalera helicoidal de acero inoxidable con acabado manual artesanal para lobby corporativo de lujo. Placa estructural de 12mm de espesor.',
    tags: ['Hand-Crafted Finish', 'Structural Plate'],
    featured: false,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2JtDJroUnILqJQ8gTpzcWS9MEqFoeIaIXsOXOXMnJ8IdzWF75L9TqtH_6HDaXiHOzlDw-38sSEHeoAJpmZFpcDNy9F09cswr0Dk0mpnFx9oPjQj5YfLfQN2mOaRmPokuJtcrNovv1LASqB8wUfnpkzQ79cmAK498GIyVWUwjGgh3S6fNBJBchdPZo7V_gRSZ2WTxZG_GxFLReXRsn2qWTkISB0El7MwuDw3LobBFAHyoFb7rm4ykGn9yL_5vq-8UJTjgEhmrT2EY',
  },
]

const certifications = [
  {
    emoji: '✓',
    label: 'ISO 9001:2015',
    description: 'Sistema de gestión de calidad certificado internacionalmente.',
  },
  {
    emoji: '⚡',
    label: 'Producción 24/7',
    description: 'Ciclos de corte automatizados para tiempos de entrega precisos.',
  },
  {
    emoji: '⬡',
    label: 'Metalurgia Técnica',
    description: 'Grados 304, 316, 2205 según exposición ambiental.',
  },
  {
    emoji: '◎',
    label: 'CNC 5-Ejes',
    description: 'Tolerancias de ±0.05mm en todos los ejes de mecanizado.',
  },
]

// ─── Computed ─────────────────────────────────────────────────────────────────
const filteredProjects = computed(() => {
  if (active.value === 'Todos') return projects
  return projects.filter(p => p.category === active.value)
})

// ─── Animations ───────────────────────────────────────────────────────────────
onMounted(async () => {
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  // Hero stagger
  gsap.fromTo(
    [heroLabel.value, heroTitle.value, heroDesc.value, heroStats.value],
    { y: 40, opacity: 0 },
    {
      y: 0, opacity: 1,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.15,
      delay: 0.1,
    }
  )

  // Filters reveal
  gsap.fromTo(filtersRef.value,
    { y: 30, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: filtersRef.value, start: 'top 85%' }
    }
  )

  // CTA reveal
  gsap.fromTo(ctaRef.value,
    { y: 60, opacity: 0 },
    {
      y: 0, opacity: 1, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: ctaRef.value, start: 'top 80%' }
    }
  )
})
</script>

<style scoped>
/* Gallery transition animations */
.gallery-enter-active,
.gallery-leave-active {
  transition: all 0.4s ease;
}
.gallery-enter-from,
.gallery-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.gallery-move {
  transition: transform 0.4s ease;
}
</style>
