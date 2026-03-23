<template>
  <div v-if="project">
    <ProjectDetail :project="project" />
  </div>
  <div v-else class="min-h-screen bg-primary flex items-center justify-center">
    <p class="font-headline text-white text-2xl">Proyecto no encontrado.</p>
  </div>
</template>

<script setup>
const route = useRoute()

// --- SANITY DATA FETCHING ---
const query = `*[_type == "project" && slug.current == $slug][0] {
  title, category, client, location, duration, engineeringHours, year, tags, overview,
  "heroImage": heroImage.asset->url,
  "galleryImages": galleryImages[].asset->url,
  specs, challenges
}`
const { data: queryResult, error } = await useSanityQuery(query, { slug: route.params.slug })
const project = computed(() => queryResult.value?.data || queryResult.value || null)

if (error.value) {
  console.error('--- SANITY ERROR (ProjectDetail) ---', error.value)
} else {
  console.log('--- SANITY DATA (ProjectDetail) ---', project.value)
}
// ----------------------------

useHead({
  title: computed(() => project.value ? `${project.value.title} | Grupo López Inox` : 'Proyecto | Grupo López Inox'),
  meta: [
    { name: 'description', content: computed(() => project.value?.overview?.slice(0, 160) || '') },
  ]
})
</script>
