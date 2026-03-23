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
  sanity: {
    projectId: '5f3r5g0t',
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

