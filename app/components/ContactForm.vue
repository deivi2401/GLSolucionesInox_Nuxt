<template>
  <section ref="sectionRef" class="py-32 bg-surface">
    <div class="max-w-4xl mx-auto px-8">
      <div class="text-center mb-16">
        <h2 class="font-headline text-5xl font-bold text-primary mb-4">INICIA TU PROYECTO</h2>
        <p class="font-body text-on-surface-variant">Envía tus especificaciones técnicas o planos DXF/CAD para una cotización formal en menos de 24 horas.</p>
      </div>
      <div class="bg-white p-12 shadow-[0px_24px_48px_rgba(15,62,117,0.06)]">
        <form class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-2">
            <label class="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Nombre Completo</label>
            <input class="w-full bg-surface-container-high border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary px-4 py-4 font-body" type="text"/>
          </div>
          <div class="space-y-2">
            <label class="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Correo Electrónico</label>
            <input class="w-full bg-surface-container-high border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary px-4 py-4 font-body" type="email"/>
          </div>
          <div class="space-y-2 md:col-span-2">
            <label class="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Detalles del Proyecto y Requisitos de Material</label>
            <textarea class="w-full bg-surface-container-high border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary px-4 py-4 font-body" rows="4"></textarea>
          </div>
          <div class="md:col-span-2">
            <div class="border-2 border-dashed border-outline-variant p-8 text-center bg-surface-container-low group hover:bg-surface-container-high transition-colors cursor-pointer">
              <span class="material-symbols-outlined text-primary text-3xl mb-2" data-icon="cloud_upload">cloud_upload</span>
              <p class="font-body text-sm text-on-surface-variant">Arrastra y suelta tus archivos CAD/PDF aquí</p>
            </div>
          </div>
          <div class="md:col-span-2">
            <button class="w-full bg-primary text-on-primary font-label uppercase tracking-widest text-sm py-6 font-bold hover:bg-primary-container transition-all" type="submit">
              Enviar Proyecto para Cotización
            </button>
          </div>
        </form>
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
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%',
    }
  })
})
</script>
