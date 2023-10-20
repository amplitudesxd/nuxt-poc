// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: './',
  },
  runtimeConfig: {
    app: {
      baseURL: './',
    },
  },
  experimental: {
    appManifest: true, // set this to false, then the application starts working
  },
});
