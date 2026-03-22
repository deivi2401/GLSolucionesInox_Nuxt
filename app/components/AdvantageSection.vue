<template>
  <section ref="sectionRef" class="py-32 bg-surface-container-lowest">
    <div class="max-w-7xl mx-auto px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div class="relative" @mousemove="onMouseMove" @mouseleave="onMouseLeave">
          <div ref="borderRef" class="absolute -top-12 -left-12 w-48 h-48 border-l border-t border-primary/20 z-0"></div>
          <img ref="imageRef" class="relative z-10 w-full h-[600px] object-cover" alt="Engineer inspecting a stainless steel component with calipers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8Z-bwXJZVhAt-VEt2mW8-AqIBTyDXjfKEhR2pGpMCO66r7ipWraAfx7PUfYsU3fL_dqfmhM1K3CdDa2yqdm8bxuibN-9yQvHgje7qLNQsNgM3oJWpXZ7pTKG-6qP01HgBg_hO9I-tQk8H9uG5owPcvQgrsOGQLIMqCQP-knL9ykO0_sYZ5cSv2_-m3-vl1B3a6aKA4f7ZjXQnFFAInZhVt9GLBzCBfqzm7YU7wmw5D-r43NCt65Tys0KBdX86AKsbl-wTdil_fiM"/>
          <div ref="statsRef" class="absolute bottom-12 -right-12 bg-tertiary p-8 z-20 hidden md:block">
            <span class="font-headline text-5xl font-bold text-white block mb-2">99.9%</span>
            <span class="font-label text-xs uppercase tracking-widest text-on-tertiary font-bold">Precisión de Ensamblaje</span>
          </div>
        </div>
        <div>
          <span class="font-label text-primary uppercase tracking-[0.2em] text-xs font-bold mb-6 block">Nuestra Ventaja</span>
          <h2 class="font-headline text-5xl font-bold text-primary mb-10 leading-tight">EXCELENCIA EN<br/>INGENIERÍA</h2>
          <div class="space-y-12">
            <div class="flex gap-6">
              <div class="flex-shrink-0 w-16 h-16 bg-surface-container-high flex items-center justify-center">
                <span class="material-symbols-outlined text-primary text-3xl" data-icon="verified">verified</span>
              </div>
              <div>
                <h4 class="font-headline text-xl font-bold text-primary mb-2">Certificación ISO 9001:2015</h4>
                <p class="font-body text-on-surface-variant">Nuestras instalaciones operan bajo rigurosos sistemas internacionales de gestión de calidad para garantizar trazabilidad y precisión.</p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="flex-shrink-0 w-16 h-16 bg-surface-container-high flex items-center justify-center">
                <span class="material-symbols-outlined text-primary text-3xl" data-icon="speed">speed</span>
              </div>
              <div>
                <h4 class="font-headline text-xl font-bold text-primary mb-2">Producción de Alta Velocidad</h4>
                <p class="font-body text-on-surface-variant">Logística de cadena de suministro integrada junto con ciclos de corte automatizados 24/7 para un procesamiento eficiente.</p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="flex-shrink-0 w-16 h-16 bg-surface-container-high flex items-center justify-center">
                <span class="material-symbols-outlined text-primary text-3xl" data-icon="biotech">biotech</span>
              </div>
              <div>
                <h4 class="font-headline text-xl font-bold text-primary mb-2">Metalurgia Técnica</h4>
                <p class="font-body text-on-surface-variant">Nuestros especialistas asesoran sobre la elección de grados (304, 316, 2205) según la exposición ambiental y requisitos de carga.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const sectionRef = ref(null)
const imageRef = ref(null)
const borderRef = ref(null)
const statsRef = ref(null)

const onMouseMove = (e) => {
  // Disable on mobile/smaller screens
  if (window.innerWidth < 1024) return

  const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
  
  // Calculate relative mouse position (-1 to 1)
  const x = (e.clientX - left - width / 2) / (width / 2)
  const y = (e.clientY - top - height / 2) / (height / 2)

  // Displace image and decorative elements
  gsap.to(imageRef.value, {
    x: x * 15,
    y: y * 15,
    duration: 0.5,
    ease: 'power2.out'
  })
  
  gsap.to(borderRef.value, {
    x: x * 30,
    y: y * 30,
    duration: 0.5,
    ease: 'power2.out'
  })

  gsap.to(statsRef.value, {
    x: x * -20,
    y: y * -20,
    duration: 0.5,
    ease: 'power2.out'
  })
}

const onMouseLeave = () => {
  if (window.innerWidth < 1024) return

  // Reset positions
  gsap.to([imageRef.value, borderRef.value, statsRef.value], {
    x: 0,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
}

onMounted(async () => {
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)
  gsap.from(sectionRef.value, {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%',
    }
  })
})
</script>
