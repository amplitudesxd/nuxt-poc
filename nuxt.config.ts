// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: './',
    buildAssetsDir: '/',
  },
  runtimeConfig: {
    app: {
      baseURL: './',
      buildAssetsDir: '/',
    },
  },
  experimental: {
    appManifest: true, // set this to false, then the application starts working
  },
});
