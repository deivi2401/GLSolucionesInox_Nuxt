<template>
  <div>
    <!-- ─── HERO (full-bleed) ─── -->
    <section class="relative bg-primary overflow-hidden min-h-[65vh] flex flex-col justify-end">
      <!-- Background image with overlay -->
      <div class="absolute inset-0">
        <img
          :src="project.heroImage"
          :alt="project.title"
          class="w-full h-full object-cover opacity-40"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
        <!-- Blueprint grid overlay -->
        <div class="absolute inset-0 opacity-5 pointer-events-none"
          style="background-image: repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px);">
        </div>
      </div>

      <div class="relative max-w-7xl mx-auto px-8 pb-20 pt-40 w-full">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-3 mb-8">
          <NuxtLink to="/proyectos" class="font-label text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
            Galería de Proyectos
          </NuxtLink>
          <span class="text-white/20 text-xs">/</span>
          <span class="font-label text-xs uppercase tracking-widest text-white/60">{{ project.category }}</span>
        </nav>

        <!-- Title + meta row -->
        <div ref="heroContent" class="opacity-0 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <span class="font-label text-secondary-fixed-dim uppercase tracking-[0.3em] text-xs font-bold mb-4 block">{{ project.category }}</span>
            <h1 class="font-headline text-5xl md:text-7xl font-bold text-white leading-none mb-4">{{ project.title }}</h1>
            <div class="flex flex-wrap gap-3 mt-5">
              <span v-for="tag in project.tags" :key="tag"
                class="font-label text-[10px] uppercase tracking-widest border border-white/20 text-white/50 px-3 py-1">
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Quick stats strip -->
          <div class="hidden lg:grid grid-cols-4 gap-px bg-white/10 min-w-[480px]">
            <div class="bg-primary/80 px-5 py-5 backdrop-blur-sm">
              <span class="font-headline text-xl font-bold text-white block">{{ project.duration }}</span>
              <span class="font-label text-[10px] uppercase tracking-widest text-white/40">Duración</span>
            </div>
            <div class="bg-primary/80 px-5 py-5 backdrop-blur-sm">
              <span class="font-headline text-xl font-bold text-white block">{{ project.engineeringHours }}</span>
              <span class="font-label text-[10px] uppercase tracking-widest text-white/40">Horas de Ingeniería</span>
            </div>
            <div class="bg-primary/80 px-5 py-5 backdrop-blur-sm">
              <span class="font-headline text-xl font-bold text-white block">{{ project.year }}</span>
              <span class="font-label text-[10px] uppercase tracking-widest text-white/40">Año</span>
            </div>
            <div class="bg-primary/80 px-5 py-5 backdrop-blur-sm">
              <span class="font-headline text-xl font-bold text-white block truncate">{{ project.location.split(',')[0] }}</span>
              <span class="font-label text-[10px] uppercase tracking-widest text-white/40">Ubicación</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── OVERVIEW + GALLERY ─── -->
    <section class="bg-surface-container-lowest py-24">
      <div class="max-w-7xl mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          <!-- Left: overview text -->
          <div ref="overviewRef" class="lg:col-span-2 opacity-0">
            <span class="font-label text-primary uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Descripción del Proyecto</span>
            <h2 class="font-headline text-3xl font-bold text-primary mb-6 leading-snug">Resumen del Proyecto</h2>
            <p class="font-body text-on-surface-variant leading-relaxed mb-8">{{ project.overview }}</p>

            <!-- Mobile stat strip -->
            <div class="grid grid-cols-2 gap-px bg-surface-container-high lg:hidden mb-8">
              <div v-for="stat in mobilestats" :key="stat.label" class="bg-surface-container-lowest p-5">
                <span class="font-headline text-xl font-bold text-primary block">{{ stat.value }}</span>
                <span class="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">{{ stat.label }}</span>
              </div>
            </div>

            <!-- Client info -->
            <div class="space-y-3">
              <div class="flex justify-between items-center border-b border-outline-variant/30 pb-3">
                <span class="font-label text-xs uppercase tracking-widest text-on-surface-variant">Cliente</span>
                <span class="font-body text-sm text-on-surface font-medium">{{ project.client }}</span>
              </div>
              <div class="flex justify-between items-center border-b border-outline-variant/30 pb-3">
                <span class="font-label text-xs uppercase tracking-widest text-on-surface-variant">Ubicación</span>
                <span class="font-body text-sm text-on-surface font-medium">{{ project.location }}</span>
              </div>
              <div class="flex justify-between items-center border-b border-outline-variant/30 pb-3">
                <span class="font-label text-xs uppercase tracking-widest text-on-surface-variant">Categoría</span>
                <span class="font-body text-sm text-on-surface font-medium">{{ project.category }}</span>
              </div>
            </div>
          </div>

          <!-- Right: image gallery -->
          <div ref="galleryRef" class="lg:col-span-3 opacity-0 space-y-4">
            <!-- Main image (large) -->
            <div class="aspect-[16/9] overflow-hidden bg-surface-container">
              <img
                :src="activeImage"
                :alt="project.title"
                class="w-full h-full object-cover transition-all duration-700"
              />
            </div>
            <!-- Thumbnail strip -->
            <div class="grid grid-cols-3 gap-4">
              <div
                v-for="(img, i) in [project.heroImage, ...project.galleryImages]"
                :key="i"
                class="aspect-[4/3] overflow-hidden cursor-pointer border-2 transition-all duration-200"
                :class="activeImage === img ? 'border-primary' : 'border-transparent hover:border-primary/40'"
                @click="activeImage = img"
              >
                <img :src="img" :alt="`${project.title} ${i+1}`" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── TECHNICAL SPECIFICATIONS ─── -->
    <section ref="specsRef" class="bg-surface-container py-24 opacity-0">
      <div class="max-w-7xl mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">

          <!-- Title column -->
          <div>
            <span class="font-label text-primary uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Datos Técnicos</span>
            <h2 class="font-headline text-3xl font-bold text-primary leading-snug">Especificaciones<br/>Técnicas</h2>
          </div>

          <!-- Specs table -->
          <div class="lg:col-span-2">
            <div class="divide-y divide-outline-variant/30">
              <div v-for="spec in project.specs" :key="spec.label"
                class="flex items-start justify-between py-5 gap-8">
                <span class="font-label text-xs uppercase tracking-widest text-on-surface-variant w-48 flex-shrink-0">{{ spec.label }}</span>
                <span class="font-body text-sm text-on-surface font-medium text-right">{{ spec.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CHALLENGES ─── -->
    <section ref="challengesRef" class="bg-surface-container-lowest py-24 opacity-0">
      <div class="max-w-7xl mx-auto px-8">
        <span class="font-label text-primary uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Desafíos y Soluciones</span>
        <h2 class="font-headline text-3xl font-bold text-primary mb-16">Ingeniería Aplicada</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-surface-container">
          <div v-for="(ch, i) in project.challenges" :key="i"
            class="bg-surface-container-lowest p-10 group hover:bg-primary/5 transition-colors duration-300">
            <span class="text-3xl block mb-6 text-primary leading-none">{{ ch.icon }}</span>
            <h3 class="font-headline text-xl font-bold text-primary mb-3">{{ ch.title }}</h3>
            <p class="font-body text-sm text-on-surface-variant leading-relaxed">{{ ch.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CTA ─── -->
    <section ref="ctaRef" class="bg-primary py-28 overflow-hidden relative opacity-0">
      <div class="absolute inset-0 opacity-5 pointer-events-none"
        style="background-image: repeating-linear-gradient(-45deg,#fff 0,#fff 1px,transparent 1px,transparent 24px);">
      </div>

      <div class="relative max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div class="max-w-xl">
          <span class="font-label text-secondary-fixed-dim uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Siguiente Paso</span>
          <h2 class="font-headline text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Inicie Su<br/>Proyecto Personalizado
          </h2>
          <p class="font-body text-white/60 leading-relaxed">
            Nuestros ingenieros están listos para dar vida a sus visiones más complejas con precisión matemática.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink to="/proyectos"
            class="inline-flex items-center justify-center gap-3 border border-white/30 text-white font-label uppercase tracking-widest text-xs px-8 py-4 transition-all hover:bg-white/10">
            Ver Más Proyectos
          </NuxtLink>
          <a href="#"
            class="inline-flex items-center justify-center gap-3 bg-secondary text-on-secondary font-label uppercase tracking-widest text-xs px-8 py-4 transition-all hover:bg-secondary-fixed-dim">
            Solicitar Consulta
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  project: { type: Object, required: true }
})

// Active image for gallery
const activeImage = ref(props.project.heroImage)

// Mobile stats (repeated from hero for small screens)
const mobilestats = computed(() => [
  { label: 'Duración', value: props.project.duration },
  { label: 'Horas de Ing.', value: props.project.engineeringHours },
  { label: 'Año', value: props.project.year },
  { label: 'Ubicación', value: props.project.location.split(',')[0] },
])

// Refs for animations
const heroContent = ref(null)
const overviewRef = ref(null)
const galleryRef = ref(null)
const specsRef = ref(null)
const challengesRef = ref(null)
const ctaRef = ref(null)

onMounted(async () => {
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  // Hero reveal
  gsap.fromTo(heroContent.value,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', delay: 0.2 }
  )

  const scrollSections = [overviewRef, galleryRef, specsRef, challengesRef, ctaRef]
  scrollSections.forEach(refEl => {
    gsap.fromTo(refEl.value,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: refEl.value, start: 'top 82%' }
      }
    )
  })
})
</script>
