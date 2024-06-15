// https://nuxt.com/docs/api/configuration/nuxt-config

const seoData = {
  name: 'Hendrych.io | Frontend developer',
  title: 'Tomáš Hendrych | Freelance frontend developer (JS/TS, VUE.js)',
  description: `Freelance web developer from Prague. Contact me for front-end engineering work with JavaScript/TypeScript, Vue.js, HTML, CSS, and more.`,
  image: `/img/ogImage.png`,
  ogTitle: 'Tomáš Hendrych | Freelance frontend developer',
};

export default defineNuxtConfig({
  app: {
    head: {
      // htmlAttrs: {
      //   lang: 'en'
      // }
    }
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "nuxt-icon",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/seo",
    "nuxt-gtag"
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  runtimeConfig: {
    public: {
      GA_ID: process.env.NUXT_PUBLIC_GTAG_ID,
    },
  },
  gtag: {
    enabled: false,
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: 'material-theme-ocean'
    },
  },
  // NUXT SEO config
  site: {
    url: 'https://hendrych.io',
    name: seoData.name,
    description: seoData.description,
    defaultLocale: 'en',
  },
});