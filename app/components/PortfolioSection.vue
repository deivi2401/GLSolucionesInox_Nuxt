<template>
  <section ref="sectionRef" class="bg-primary-container py-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-8">
      <div class="flex justify-between items-center mb-16">
        <h2 class="font-headline text-4xl font-bold text-white tracking-tight">PORTAFOLIO DE PROYECTOS</h2>
        <div class="flex gap-4">
          <button class="p-4 bg-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center">
            <Icon name="material-symbols:arrow-back" class="text-2xl" />
          </button>
          <button class="p-4 bg-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center">
            <Icon name="material-symbols:arrow-forward" class="text-2xl" />
          </button>
        </div>
      </div>
      <div v-if="featuredProjects && featuredProjects.length > 0" class="grid grid-cols-12 gap-8">
        <!-- Large Featured (First Project) -->
        <div v-if="featuredProjects[0]" class="col-span-12 md:col-span-8 relative aspect-[16/9] bg-primary group overflow-hidden">
          <img class="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" :alt="featuredProjects[0].title" :src="featuredProjects[0].imageUrl"/>
          <div class="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
          <div class="absolute bottom-8 left-8">
            <span class="font-label text-[10px] text-primary-fixed-dim uppercase tracking-[0.4em] mb-2 block">Caso de Estudio Especial</span>
            <NuxtLink :to="'/proyectos/' + featuredProjects[0].slug.current">
              <h4 class="font-headline text-3xl text-white font-bold hover:underline">{{ featuredProjects[0].title }}</h4>
            </NuxtLink>
          </div>
        </div>
        <!-- Small Grid (Next 2 Projects) -->
        <div class="col-span-12 md:col-span-4 grid gap-8">
          <div v-for="project in featuredProjects.slice(1, 3)" :key="project._id" class="relative aspect-[4/3] bg-primary group overflow-hidden">
            <img class="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" :alt="project.title" :src="project.imageUrl"/>
            <div class="absolute bottom-6 left-6 z-10">
              <NuxtLink :to="'/proyectos/' + project.slug.current">
                <h4 class="font-headline text-xl text-white font-bold hover:underline">{{ project.title }}</h4>
              </NuxtLink>
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

// --- SANITY DATA FETCHING ---
const query = `*[_type == "project" && featured == true] | order(_createdAt desc)[0...3] {
  _id,
  title,
  slug,
  "imageUrl": heroImage.asset->url
}`
const { data: queryResult, error } = await useSanityQuery(query)
const featuredProjects = computed(() => queryResult.value?.data || queryResult.value || [])

if (error.value) {
  console.error('--- SANITY ERROR (PortfolioSection) ---', error.value)
} else {
  console.log('--- SANITY DATA (PortfolioSection) ---', featuredProjects.value)
}
// ----------------------------

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
<style scoped>
</style>
