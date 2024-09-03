<template>
  <div class="flex flex-col justify-start md:p-12 bg-slate-900">
    <h1 class="text-white text-2xl md:text-4xl font-semibold">
      Project <br />
    </h1>
    <a
      class="text-indigo-400 text-5xl md:text-7xl font-bold"
      href="https://github.com/safegergis/aamc-website/"
      target="_blank"
      >Demo Church Website</a
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
        This project is a dynamic web application built using the Django
        framework, HTML, CSS, and JavaScript. My primary goal with this project
        is to create a visually appealing website with interactive animations,
        facilitate real-time blog post updates through Twitter integration, and
        offer an admin panel for convenient content management.
      </p>

      <h2 class="text-2xl font-bold mb-4">Features</h2>

      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
          <strong class="font-semibold">Animations:</strong> I've integrated
          animations throughout the website to enhance user engagement and
          provide a visually pleasing experience. From subtle hover effects to
          more elaborate transitions, animations are used to create a dynamic
          interface.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Twitter Integration:</strong> The
          website connects to the Twitter API to fetch and display the latest
          blog posts or updates from a specified Twitter account. This ensures
          that the website's content remains up-to-date and relevant.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Admin Page:</strong> I've implemented an
          admin page that is accessible only to authorized users. This admin
          panel allows content managers or administrators to conveniently add,
          edit, or remove blog posts, update animations, and manage various
          aspects of the website.
        </li>
      </ul>
    </div>
    <div class="flex justify-center mt-2">
      <a href="https://github.com/safegergis/aamc-website">
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
const images = ["/img/aamc/1.png", "/img/aamc/2.png"];
</script>

<style></style>
