<template>
  <div class="flex flex-col justify-start">
    <h1 class="text-white text-2xl font-semibold">Project <br /></h1>
    <a
      class="text-indigo-400 text-5xl font-bold"
      href="https://betabiomed.com"
      target="_blank"
      >BETA Biomed</a
    >
    <div class="bg-slate-900 h-350px">
      <image-carousel :images="images" />
    </div>
    <p class="text-md text-white text-left">
      This project showcases my expertise in crafting modern and performant web
      applications. Leveraging the powerful combination of AWS, Vue.js, and
      Vuetify, I developed a website that delivers a seamless and engaging user
      experience. By harnessing the capabilities of AWS, I ensured optimal
      performance, scalability, and reliability. The intuitive Vue.js framework
      provided a solid foundation for building dynamic and interactive
      components, while Vuetify's extensive library of pre-designed elements
      streamlined the development process and ensured a polished aesthetic.
      <br />
      Throughout the development process, I prioritized speed and efficiency,
      meticulously optimizing the website to achieve lightning-fast load times
      and smooth interactions. Careful attention was also given to search engine
      optimization (SEO) to enhance the website's visibility and reach.
      <br />
      The website's responsive design ensures that it looks and functions
      flawlessly across a wide range of devices, from desktops to smartphones.
      This adaptability provides visitors with a consistent and user-friendly
      experience, regardless of their chosen platform.
      <br />
      This project exemplifies my proficiency in full-stack web development,
      combining front-end expertise with back-end infrastructure management.
      It's a testament to my commitment to delivering high-quality, user-centric
      solutions that leverage the latest technologies.
    </p>
  </div>
</template>

<script setup>
const images = ["/img/beta/1.png", "/img/beta/2.png"];
</script>

<style></style>
