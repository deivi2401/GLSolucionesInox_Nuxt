<template>
  <section ref="sectionRef" class="bg-primary-container py-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-8">
      <div class="flex justify-between items-center mb-16">
        <h2 class="font-headline text-4xl font-bold text-white tracking-tight">PORTAFOLIO DE PROYECTOS</h2>
        <div class="flex gap-4">
          <button class="p-4 bg-white/10 text-white hover:bg-white/20 transition-all">
            <span class="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
          </button>
          <button class="p-4 bg-white/10 text-white hover:bg-white/20 transition-all">
            <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-8">
        <!-- Large Featured -->
        <div class="col-span-12 md:col-span-8 relative aspect-[16/9] bg-primary group overflow-hidden">
          <img class="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Modern stainless steel skyscraper facade" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWdBEpT_2c972qejloNHiAAaCB6zapb28bEZDCErU-27kdxJOXWNeJ2rKFu3XLweVQfaEtzVEMPI6x3MYW5Zs78tmv_Q-myT4at42nT0a0IyAgaUgsBilZhAcuSzeCtS0CqzUd3N9BiYGsXyCd5YFB5rADhvHarmQcWkVHit3OiIDPocgW04IaHzr9XJp_PFH9-YqcNw5ncHM2OMnjBw4sDNULmQ4zZlZPdllIOpx6OJjPljWaoJ4zl7SYFApDKSo3Xdlw8VPisHg"/>
          <div class="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
          <div class="absolute bottom-8 left-8">
            <span class="font-label text-[10px] text-primary-fixed-dim uppercase tracking-[0.4em] mb-2 block">Caso de Estudio 01</span>
            <h4 class="font-headline text-3xl text-white font-bold">Torre Helix, Dubái</h4>
          </div>
        </div>
        <!-- Small Grid -->
        <div class="col-span-12 md:col-span-4 grid gap-8">
          <div class="relative aspect-[4/3] bg-primary group overflow-hidden">
            <img class="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" alt="Industrial steel bridge structure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2JtDJroUnILqJQ8gTpzcWS9MEqFoeIaIXsOXOXMnJ8IdzWF75L9TqtH_6HDaXiHOzlDw-38sSEHeoAJpmZFpcDNy9F09cswr0Dk0mpnFx9oPjQj5YfLfQN2mOaRmPokuJtcrNovv1LASqB8wUfnpkzQ79cmAK498GIyVWUwjGgh3S6fNBJBchdPZo7V_gRSZ2WTxZG_GxFLReXRsn2qWTkISB0El7MwuDw3LobBFAHyoFb7rm4ykGn9yL_5vq-8UJTjgEhmrT2EY"/>
            <div class="absolute bottom-6 left-6">
              <h4 class="font-headline text-xl text-white font-bold">Puente Nexus Int.</h4>
            </div>
          </div>
          <div class="relative aspect-[4/3] bg-primary group overflow-hidden">
            <img class="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" alt="Close up of steel structural connections" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaj8L5er6watbd_TXz9lxx6HZFLwlmlJf984LMjBXno-uOJGwTlUlhuoDAGRy88LpSlmX7OfFg7GYLmUQepap5YEkEQOGkaDQfeBkehuH34RP-ndsbXA0HA9g9aoBX-8iFeP2qJxkacWmWpchueRr_ZblecLwK4JCjnHsorgmx35dyEx6sAyaY8mM9Z2GpC4NEtDGjhJGKSDh74kU6iZ5rZ6UIC6-rZSaII7mkfYtrv3w283FClc6kpxK7cQ4v6mDhctOj34qn50I"/>
            <div class="absolute bottom-6 left-6">
              <h4 class="font-headline text-xl text-white font-bold">Terminal Marítima 4</h4>
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
