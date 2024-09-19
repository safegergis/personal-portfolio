// https://nuxt.com/docs/api/configuration/nuxt-config
import { inject } from "@vercel/analytics";
export default defineNuxtConfig({
  
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/image",
    "@vueuse/nuxt",
    "vue3-carousel-nuxt",
  ],
  runtimeConfig: {
    cloudinarySecret: process.env.CLOUDINARY_SECRET_KEY,
  },
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/safegergisportfolio/image/upload/",
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  inject();
});
