// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sanity',
    '@nuxt/icon',
    'nuxt-security',
    '@nuxtjs/turnstile'
  ],
  security: {
    rateLimiter: {
      tokensPerInterval: 3,
      interval: 15 * 60 * 1000, // 15 minutos en ms
      headers: false
    },
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === 'development' ? 'unsafe-none' : 'credentialless',
      contentSecurityPolicy: {
        'frame-src': ["'self'", "https://challenges.cloudflare.com"],
        'script-src': [
          "'self'",
          "https://challenges.cloudflare.com",
          "'unsafe-inline'",
          "'strict-dynamic'",
          "'nonce-{{nonce}}'"
        ],
        'img-src': ["'self'", "data:", "https://cdn.sanity.io", "https://lh3.googleusercontent.com", "https://challenges.cloudflare.com"]
      }
    }
  },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'gsap',
        'gsap/ScrollTrigger',
        '@sanity/client',
        'lenis'
      ]
    }
  },
  turnstile: {
    siteKey: process.env.NUXT_TURNSTILE_SITE_KEY || ''
  },
  runtimeConfig: {
    turnstile: {
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY || ''
    },
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

