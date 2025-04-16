// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: true },
  css: ['@/app/styles/main.scss'],
  modules: ['@pinia/nuxt'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/app/styles/variables.scss" as *;`
        }
      }
    }
  },

  pinia: {
    storesDirs: ['./src/shared/store/**']
  },

  compatibilityDate: '2025-04-16'
})