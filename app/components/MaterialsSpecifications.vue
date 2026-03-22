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
            Materials &<br/>Specifications
          </h1>
          <p ref="heroDesc" class="font-body text-blue-100/70 max-w-xl text-lg leading-relaxed opacity-0">
            Precision-engineered architectural and industrial components. Our material selection adheres to strict ASTM standards, ensuring structural integrity for every fabrication.
          </p>
        </div>
      </div>
    </section>

    <!-- ───────────────── DATA GRID ───────────────── -->
    <section class="max-w-7xl mx-auto px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left Column: Stainless Steel Sheets Table -->
        <div ref="sheetsCol" class="lg:col-span-12 xl:col-span-8 opacity-0">
          <div class="flex justify-between items-end mb-8 border-b-2 border-primary pb-4">
            <h2 class="font-headline text-2xl font-bold text-primary uppercase tracking-tight">Stainless Steel Sheets</h2>
            <span class="font-label text-[10px] text-slate-400 font-bold">ASTM A240 STANDARD</span>
          </div>

          <div class="overflow-x-auto bg-white shadow-sm border border-slate-200">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-slate-50 border-b border-slate-200">
                  <th v-for="header in ['TYPE', 'GAUGE', 'THICKNESS (MM)', 'FINISH']" :key="header"
                    class="p-4 text-left font-label text-[10px] uppercase tracking-widest text-slate-500 font-bold border-r last:border-0 border-slate-200">
                    {{ header }}
                  </th>
                </tr>
              </thead>
              <tbody class="font-body text-sm text-primary">
                <tr v-for="(row, i) in sheetData" :key="i" class="border-b last:border-0 border-slate-200 hover:bg-slate-50/50 transition-colors">
                  <td class="p-4 font-bold border-r border-slate-200">{{ row.type }}</td>
                  <td class="p-4 border-r border-slate-200">{{ row.gauge }}</td>
                  <td class="p-4 border-r border-slate-200">{{ row.thickness }}</td>
                  <td class="p-4">{{ row.finish }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="mt-4 font-body text-[10px] text-slate-400 italic">
            * Custom shearing and laser cutting available for non-standard dimensions.
          </p>
        </div>

        <!-- Right Column: PTR Tubing & Certifications -->
        <div class="lg:col-span-12 xl:col-span-4 space-y-12">
          
          <!-- PTR Tubing Section -->
          <div ref="tubingCol" class="opacity-0">
            <h2 class="font-headline text-2xl font-bold text-primary uppercase tracking-tight mb-8 border-b-2 border-primary pb-4">PTR Tubing</h2>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="tube in tubingData" :key="tube.size" class="bg-white border border-slate-200 p-6 shadow-sm hover:border-secondary transition-colors group">
                <span class="font-label text-[9px] text-slate-400 font-bold uppercase block mb-1">GAUGE 16</span>
                <span class="font-headline text-lg font-bold text-primary block mb-3">{{ tube.size }}</span>
                <div class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-slate-300 rounded-full group-hover:bg-secondary transition-colors"></span>
                  <span class="font-label text-[9px] uppercase tracking-widest text-slate-500 font-bold">{{ tube.type }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Certifications Sidebar (Stitch Design) -->
          <div ref="certCol" class="bg-primary text-white p-8 shadow-xl opacity-0 transform translate-y-8">
            <h3 class="font-headline text-lg font-bold mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Certifications
            </h3>
            <div class="space-y-10">
              <div v-for="cert in certs" :key="cert.title" class="group">
                <div class="flex items-center gap-4 mb-3">
                  <div class="p-2 bg-white/5 group-hover:bg-secondary transition-colors">
                    <component :is="cert.icon" class="w-4 h-4 text-blue-300 group-hover:text-white" />
                  </div>
                  <h4 class="font-headline text-sm font-bold tracking-tight">{{ cert.title }}</h4>
                </div>
                <p class="font-body text-xs text-blue-100/60 leading-relaxed pl-12">
                  {{ cert.desc }}
                </p>
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
          <h2 class="font-headline text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">Ready to start your project?</h2>
          <p class="font-body text-on-surface-variant text-lg leading-relaxed">
            Upload your blueprints and material requirements for a detailed engineering quote within 24 hours.
          </p>
        </div>

        <div class="relative z-10">
          <button class="bg-primary text-white font-label uppercase tracking-widest text-xs px-12 py-6 flex items-center gap-4 hover:bg-secondary transition-all hover:scale-105 active:scale-95 shadow-xl">
            Request Quote
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
const sheetData = [
  { type: 'Type 304', gauge: '14 GA', thickness: '1.98 mm', finish: '2B / #4 Polish' },
  { type: 'Type 304', gauge: '16 GA', thickness: '1.57 mm', finish: '2B / #4 Polish' },
  { type: 'Type 430', gauge: '18 GA', thickness: '1.27 mm', finish: 'Bright Annealed' },
  { type: 'Type 430', gauge: '20 GA', thickness: '0.91 mm', finish: 'Bright Annealed' }
]

const tubingData = [
  { size: '1" x 2"', type: 'RECTANGULAR' },
  { size: '2" x 2"', type: 'SQUARE' },
  { size: '2" x 3"', type: 'RECTANGULAR' },
  { size: '3" x 3"', type: 'SQUARE' }
]

const SettingsIcon = markRaw({
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`
})

const BarChartIcon = markRaw({
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`
})

const certs = [
  { 
    title: 'ISO 9001 Certified', 
    icon: SettingsIcon, 
    desc: 'Global quality management standards maintained throughout the fabrication lifecycle.' 
  },
  { 
    title: 'Material Traceability', 
    icon: BarChartIcon, 
    desc: 'Mill Test Reports (MTR) provided for all structural elements upon delivery.' 
  }
]

// --- Animation Refs ---
const heroLabel = ref(null)
const heroTitle = ref(null)
const heroDesc = ref(null)
const heroBg = ref(null)
const sheetsCol = ref(null)
const tubingCol = ref(null)
const certCol = ref(null)
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

  gsap.fromTo(certCol.value,
    { y: 60, opacity: 0 },
    { 
      y: 0, opacity: 1, duration: 1.2, 
      scrollTrigger: { trigger: certCol.value, start: 'top 90%' } 
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
