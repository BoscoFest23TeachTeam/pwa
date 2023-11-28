// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/color-mode', '@kevinmarrec/nuxt-pwa', '@nuxtjs/device'],
  css: ['./assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  googleFonts: {
    families: {
      Inter: true
    }
  },
  colorMode: {
    preference: 'system',
    dataValue: 'theme'
  },
  ssr: false,
  pwa: {
    workbox: {
      enabled: true
    }
  }
})
