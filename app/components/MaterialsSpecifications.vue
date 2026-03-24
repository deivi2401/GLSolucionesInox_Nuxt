<template>
  <div class="bg-slate-50 min-h-screen pt-32 pb-24 overflow-hidden">
    <!-- ───────────────── HERO SECTION (Technical Data Sheet Style) ───────────────── -->
    <section class="max-w-7xl mx-auto px-8 mb-20">
      <div ref="heroBg" class="bg-primary text-white p-12 md:p-20 relative overflow-hidden shadow-2xl">
        <!-- Background lines (industrial blueprint style) -->
        <div class="absolute inset-0 opacity-10 pointer-events-none"
          style="background-image: repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px);">
        </div>
        
        <div class="relative z-10">
          <span ref="heroLabel" class="font-label text-blue-300 uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block opacity-0">
            TECHNICAL DATA SHEET
          </span>
          <h1 ref="heroTitle" class="font-headline text-5xl md:text-7xl font-bold mb-8 leading-none tracking-tight opacity-0">
            Materiales &<br/>Especificaciones
          </h1>
          <p ref="heroDesc" class="font-body text-blue-100/70 max-w-xl text-lg leading-relaxed opacity-0">
            Fabricamos en acero inoxidable para requerimientos comerciales e industriales. Cuidamos cada detalle para asegurar la durabilidad de tus proyectos.
          </p>
        </div>
      </div>
    </section>

    <!-- ───────────────── DATA GRID ───────────────── -->
    <section class="max-w-7xl mx-auto px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left Column: General Materials Table -->
        <div ref="sheetsCol" class="lg:col-span-12 xl:col-span-8 opacity-0">
          <div class="flex justify-between items-end mb-8 border-b-2 border-primary pb-4">
            <h2 class="font-headline text-2xl font-bold text-primary uppercase tracking-tight">Láminas y Misceláneos</h2>
            <span class="font-label text-[10px] text-slate-400 font-bold">INVENTARIO GENERAL</span>
          </div>

          <div class="overflow-x-auto bg-white shadow-sm border border-slate-200">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-slate-50 border-b border-slate-200">
                  <th v-for="header in ['PRODUCTO', 'CALIBRE', 'TIPO']" :key="header"
                    class="p-4 text-left font-label text-[10px] uppercase tracking-widest text-slate-500 font-bold border-r last:border-0 border-slate-200 lg:w-1/3">
                    {{ header }}
                  </th>
                </tr>
              </thead>
              <tbody class="font-body text-sm text-primary">
                <tr v-for="(row, i) in tableData" :key="i" class="border-b last:border-0 border-slate-200 hover:bg-slate-50/50 transition-colors">
                  <td class="p-4 font-bold border-r border-slate-200">{{ row.product }}</td>
                  <td class="p-4 border-r border-slate-200">{{ row.gauge }}</td>
                  <td class="p-4">{{ row.type !== '-' ? 'Tipo ' + row.type : '-' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="mt-4 font-body text-[10px] text-slate-400 italic">
            * Cortes a medida con guillotina disponibles para dimensiones especiales de lámina.
          </p>
        </div>

        <!-- Right Column: PTR Tubing & Certifications -->
        <div class="lg:col-span-12 xl:col-span-4 space-y-12">
          
          <!-- PTR Tubing Section -->
          <div ref="tubingCol" class="opacity-0">
            <h2 class="font-headline text-2xl font-bold text-primary uppercase tracking-tight mb-8 border-b-2 border-primary pb-4">Tubería y PTR</h2>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="tube in tubingData" :key="tube.size + tube.type" class="bg-white border border-slate-200 p-4 shadow-sm hover:border-secondary transition-colors group">
                <span class="font-label text-[9px] text-slate-400 font-bold uppercase block mb-1">CALIBRE {{ tube.gauge }}</span>
                <span class="font-headline text-base font-bold text-primary block mb-2">{{ tube.size }}</span>
                <div class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-slate-300 rounded-full group-hover:bg-secondary transition-colors"></span>
                  <span class="font-label text-[9px] uppercase tracking-widest text-slate-500 font-bold">Tipo {{ tube.type }}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ───────────────── READY TO START CTA ───────────────── -->
    <section ref="ctaSection" class="max-w-7xl mx-auto px-8 mt-40 opacity-0 transform translate-y-12">
      <div class="border-4 border-primary p-12 md:p-16 bg-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
        <!-- Subtle detail -->
        <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-slate-50 rounded-full border border-slate-100 pointer-events-none"></div>
        
        <div class="max-w-xl text-center md:text-left relative z-10">
          <h2 class="font-headline text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">Listo para iniciar tu proyecto?</h2>
          <p class="font-body text-on-surface-variant text-lg leading-relaxed">
            Contactanos para mas informacion y poder proporcionarte una cotización exacta.
          </p>
        </div>

        <div class="relative z-10">
          <button class="bg-primary text-white font-label uppercase tracking-widest text-xs px-12 py-6 flex items-center gap-4 hover:bg-secondary transition-all hover:scale-105 active:scale-95 shadow-xl">
            Pide tu cotización
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, markRaw } from 'vue'
import gsap from 'gsap'

// --- Data based on Stitch Screenshot ---
const tableData = [
  { product: 'Ángulo 1/4 X 2 1/2', gauge: '-', type: '304' },
  { product: 'Ángulo 1/8 X 3/4', gauge: '-', type: '304' },
  { product: 'Barra Redonda 5/16', gauge: '-', type: '304' },
  { product: 'Lámina', gauge: '14', type: '201' },
  { product: 'Lámina', gauge: '14', type: '304' },
  { product: 'Lámina', gauge: '14', type: '430' },
  { product: 'Lámina', gauge: '16', type: '201' },
  { product: 'Lámina', gauge: '16', type: '304' },
  { product: 'Lámina', gauge: '16', type: '430' },
  { product: 'Lámina', gauge: '18', type: '201' },
  { product: 'Lámina', gauge: '18', type: '304' },
  { product: 'Lámina', gauge: '18', type: '430' },
  { product: 'Lámina', gauge: '20', type: '201' },
  { product: 'Lámina', gauge: '20', type: '304' },
  { product: 'Lámina', gauge: '20', type: '430' },
  { product: 'Regatón Cuadrado', gauge: '-', type: '-' },
  { product: 'Regatón Redondo', gauge: '-', type: '-' },
  { product: 'Solera de 1/2 X 4', gauge: '-', type: '304' }
]

const tubingData = [
  { size: 'PTR 1/2 X 1/2', gauge: '18', type: '201' },
  { size: 'PTR 1/2 X 1/2', gauge: '18', type: '304' },
  { size: 'PTR 3/4 X 3/4', gauge: '18', type: '201' },
  { size: 'PTR 3/4 X 3/4', gauge: '18', type: '304' },
  { size: 'PTR 1 X 1', gauge: '18', type: '201' },
  { size: 'PTR 1 X 1', gauge: '18', type: '304' },
  { size: 'PTR 1 1/4 X 1 1/4', gauge: '18', type: '201' },
  { size: 'PTR 1 1/4 X 1 1/4', gauge: '18', type: '304' },
  { size: 'PTR 1 1/2 X 1 1/2', gauge: '18', type: '201' },
  { size: 'PTR 1 1/2 X 1 1/2', gauge: '18', type: '304' },
  { size: 'PTR 2 X 2', gauge: '18', type: '201' },
  { size: 'PTR 2 X 2', gauge: '18', type: '304' },
  { size: 'PTR 3 X 3', gauge: '11', type: '201' },
  { size: 'PTR 3 X 3', gauge: '11', type: '304' },
  { size: 'Tubo Redondo 1 1/2', gauge: '16', type: '201' }
]


// --- Animation Refs ---
const heroLabel = ref(null)
const heroTitle = ref(null)
const heroDesc = ref(null)
const heroBg = ref(null)
const sheetsCol = ref(null)
const tubingCol = ref(null)
const ctaSection = ref(null)

// --- Lifecycle ---
onMounted(async () => {
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  // Initial Hero animation
  const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } })

  tl.fromTo(heroBg.value, { scaleY: 0.9, opacity: 0 }, { scaleY: 1, opacity: 1, ease: 'expo.out' })
    .fromTo(heroLabel.value, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.8')
    .fromTo(heroTitle.value, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, '-=1')
    .fromTo(heroDesc.value, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '-=1')

  // Section reveals
  gsap.fromTo(sheetsCol.value,
    { y: 40, opacity: 0 },
    { 
      y: 0, opacity: 1, duration: 1, 
      scrollTrigger: { trigger: sheetsCol.value, start: 'top 85%' } 
    }
  )

  gsap.fromTo(tubingCol.value,
    { y: 40, opacity: 0 },
    { 
      y: 0, opacity: 1, duration: 1, 
      scrollTrigger: { trigger: tubingCol.value, start: 'top 85%' },
      delay: 0.2
    }
  )

  gsap.fromTo(ctaSection.value,
    { y: 80, opacity: 0 },
    { 
      y: 0, opacity: 1, duration: 1, 
      scrollTrigger: { trigger: ctaSection.value, start: 'top 95%' } 
    }
  )
})
</script>

<style scoped>
.font-headline {
  font-family: 'Space Grotesk', sans-serif;
}
.font-body {
  font-family: 'Manrope', sans-serif;
}
.font-label {
  font-family: 'Inter', sans-serif;
}

.text-primary {
  color: #172b47;
}
.bg-primary {
  background-color: #172b47;
}
.border-primary {
  border-color: #172b47;
}
.bg-secondary {
  background-color: #206393;
}
.border-secondary {
  border-color: #206393;
}
.text-secondary {
  color: #206393;
}

/* Custom scrollbar for table */
::-webkit-scrollbar {
  height: 4px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #172b47;
}
::-webkit-scrollbar-thumb:hover {
  background: #206393;
}
</style>
