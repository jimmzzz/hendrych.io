// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon", "@nuxt/content", "@nuxtjs/tailwindcss", "@nuxt/image"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  content: {
    highlight: {
      theme: 'material-theme-ocean'
    },
  },
});