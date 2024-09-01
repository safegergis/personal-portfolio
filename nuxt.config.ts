// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/image",
    "nuxt-swiper",
    "@vueuse/nuxt",
  ],
  runtimeConfig: {
    cloudinarySecret: process.env.CLOUDINARY_SECRET_KEY,
  },
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/safegergisportfolio/image/upload/",
    },
  },
});
