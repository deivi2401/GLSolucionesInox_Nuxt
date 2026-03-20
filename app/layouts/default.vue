<template>
  <div class="bg-surface text-on-surface font-body antialiased min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

let lenis;
let rafTicker;

onMounted(() => {
  // Ensure ScrollTrigger is registered globally for all child components
  gsap.registerPlugin(ScrollTrigger)

  // Initialize smooth scrolling
  lenis = new Lenis()

  // Sync GSAP ScrollTrigger with Lenis
  lenis.on('scroll', ScrollTrigger.update)

  rafTicker = (time) => {
    lenis.raf(time * 1000)
  }
  
  gsap.ticker.add(rafTicker)
  gsap.ticker.lagSmoothing(0)
})

onUnmounted(() => {
  if (lenis) {
    lenis.destroy()
  }
  if (rafTicker) {
    gsap.ticker.remove(rafTicker)
  }
})
</script>
