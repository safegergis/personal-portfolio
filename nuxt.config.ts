// https://nuxt.com/docs/api/configuration/nuxt-config
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
    head: {
      title: "Safe Gergis - Junior Fullstack Engineer",
      meta: [
        {
          name: "description",
          content:
            "Safe Gergis is a Junior Fullstack Engineer building powerful and efficient web applications. Check out projects and photography.",
        },
        {
          name: "keywords",
          content:
            "Fullstack Engineer, Web Developer, Portfolio, Safe Gergis, Programming, Web Applications, Photography",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: "Safe Gergis" },
      ],
      link: [
        { rel: "canonical", href: "https://yourdomain.com/" },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "apple-touch-icon", href: "/apple-icon.png" },
      ],
    },
  },
  plugins: ["~/plugins/analytics.client.ts"],
});
