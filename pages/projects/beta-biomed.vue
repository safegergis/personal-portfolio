<template>
  <div class="flex flex-col justify-start md:p-12">
    <h1 class="text-white text-2xl md:text-4xl font-semibold">
      Project <br />
    </h1>
    <a
      class="text-indigo-400 text-5xl md:text-7xl font-bold"
      href="https://betabiomed.com"
      target="_blank"
      >BETA Biomed</a
    >
    <NuxtLink
      class="text-gray-300 text-xl md:text-3xl font-medium hover:text-white ml-1"
      to="/"
    >
      go back?
    </NuxtLink>
    <div class="bg-slate-900 mx-auto">
      <image-carousel :images="images" />
    </div>
    <div class="container mx-auto p-4 text-white">
      <h2 class="text-3xl font-bold mb-4">Introduction</h2>

      <p class="mb-6">
        This project showcases a dynamic web application built with the Vue.js
        framework, leveraging Nuxt.js for server-side rendering and enhanced
        performance. It's currently live and serving users, offering a visually
        appealing and user-friendly experience. The frontend is crafted using
        Vuetify, a comprehensive UI component library, ensuring a polished and
        consistent look.
      </p>

      <h2 class="text-2xl font-bold mb-4">Key Features</h2>

      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
          <strong class="font-semibold">Vuetify UI:</strong> The website employs
          Vuetify components for its frontend, resulting in a clean, modern
          aesthetic and a responsive design that adapts seamlessly to various
          screen sizes.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Nuxt.js SSR:</strong> By utilizing
          Nuxt.js, the application benefits from server-side rendering, leading
          to improved SEO, faster initial page loads, and a smoother user
          experience.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">SEO Optimization:</strong> The project
          incorporates SEO best practices to enhance its visibility on search
          engines and attract organic traffic.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Responsive Design:</strong> The
          website's layout is fully responsive, guaranteeing optimal viewing and
          interaction across desktops, tablets, and mobile devices.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Live Production:</strong> The
          application is currently deployed and accessible to users,
          demonstrating its readiness for real-world use.
        </li>
      </ul>
    </div>
    <div class="flex justify-center mt-2">
      <a href="https://betabiomed.com/">
        <button
          class="text-indigo-500 bg-transparent border text-semibold border-indigo-500 rounded-md w-48 md:text-xl hover:bg-indigo-500 hover:text-slate-900"
        >
          Visit the project
        </button>
      </a>
    </div>
  </div>
</template>

<script setup>
const images = [
  "/img/beta/1.png",
  "/img/beta/2.png",
  "/img/beta/3.png",
  "/img/beta/4.png",
  "/img/beta/5.png",
  "/img/beta/6.png",
];
</script>

<style></style>
