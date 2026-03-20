// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  css: ['~/assets/css/tailwind.css'],
  googleFonts: {
    families: {
      'Space+Grotesk': [300, 400, 500, 600, 700],
      'Manrope': [300, 400, 500, 600, 700]
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0',
        }
      ]
    }
  }
})

