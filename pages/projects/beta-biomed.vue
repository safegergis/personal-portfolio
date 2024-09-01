<template>
  <div class="flex flex-col justify-start md:p-12 h-screen">
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
    <p class="text-md md:text-xl text-white text-justify">
      This project showcases my expertise in crafting modern and performant web
      applications. Leveraging the powerful combination of AWS, Nuxt, and
      Vuetify, I developed a website that delivers a seamless and engaging user
      experience. By harnessing the capabilities of AWS, I ensured optimal
      performance, scalability, and reliability. The Nuxt framework provided a
      solid foundation for building dynamic and interactive components, while
      Vuetify's extensive library of pre-designed elements streamlined the
      development process and ensured a polished aesthetic.
      <br />
      Throughout the development process, I prioritized speed and efficiency,
      meticulously optimizing the website to achieve lightning-fast load times
      and smooth interactions. Careful attention was also given to search engine
      optimization (SEO) to enhance the website's visibility and reach.
      <br />
      This project exemplifies my proficiency in full-stack web development,
      combining front-end expertise with back-end infrastructure management.
      It's a testament to my commitment to delivering high-quality, user-centric
      solutions that leverage the latest technologies.
    </p>
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
const images = ["/img/beta/1.png", "/img/beta/2.png", "/img/beta/3.png"];
</script>

<style></style>
