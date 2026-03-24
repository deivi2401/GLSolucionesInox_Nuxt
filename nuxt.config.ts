// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sanity',
    '@nuxt/icon'
  ],
  runtimeConfig: {
    public: {
      sanityProjectId: process.env.SANITY_PROJECT_ID || '5f3r5g0t'
    }
  },
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID || '5f3r5g0t',
    dataset: 'production',
    apiVersion: '2024-03-22',
    useCdn: false
  },
  css: ['~/assets/css/tailwind.css'],
  googleFonts: {
    families: {
      'Space+Grotesk': [300, 400, 500, 600, 700],
      'Manrope': [300, 400, 500, 600, 700]
    }
  }
})

