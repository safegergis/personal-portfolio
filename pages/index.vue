<template>
  <div class="bg-slate-900 flex flex-col justify-start content-middle">
    <h1 class="text-white text-2xl font-semibold mb-2">
      Hi, my name is <br />
    </h1>
    <h1 class="text-indigo-400 text-5xl font-bold">Safe Gergis</h1>
    <h4 class="text-white text-3xl font-semibold">Junior Fullstack Engineer</h4>
    <h4 class="text-white text-2xl font-thin mt-10">
      I build powerful, efficient web apps
    </h4>
    <div class="text-white my-2">
      <a href="https://github.com/safegergis" target="_blank">
        <Icon name="mdi:github" class="size-6 mr-2" />
      </a>
      <a
        href="https://www.linkedin.com/in/safe-gergis-2b646419b/"
        target="_blank"
      >
        <Icon name="mdi:linkedin" class="size-6 mx-2" />
      </a>
      <a href="https://www.instagram.com/safe.gergis/" target="_blank">
        <Icon name="mdi:instagram" class="size-6 ml-2" />
      </a>
    </div>

    <h2 class="text-white text-2xl font-semibold">About me</h2>
    <p class="text-md text-white text-left">
      Hello, I'm a senior Computer Science student at California State
      University, Fullerton, with a lifelong passion for programming. My
      interests span a wide range of technologies, including game development,
      web applications, and embedded systems. Beyond my technical pursuits, I
      find joy in exploring nature through photography and hiking.
      <br />
      <br />
      Currently, I am actively involved in development projects for Medten and
      Orantech, where I apply my academic knowledge to solve real-world
      challenges. Last year, I gained valuable experience as an intern at
      CompTIA, further expanding my expertise in the IT industry.
      <br />
      <br />
      I am excited to share some of my photography and personal projects on this
      platform, and I welcome the opportunity to connect with others who share
      similar interests.
    </p>
    <button
      class="text-indigo-500 bg-transparent border text-semibold border-indigo-500 rounded-md mt-2"
    >
      Download my resume
    </button>

    <div class="flex items-center mt-5">
      <hr class="flex-grow border-t border-indigo-300" />
      <span class="px-3 text-slate-500"> more below </span>
      <hr class="flex-grow border-t border-indigo-300" />
    </div>
    <div class="mt-10">
      <h2 class="text-white text-2xl font-semibold">Projects</h2>
      <project-widget
        v-for="project in projects"
        :key="project.id"
        :title="project.name"
        :description="project.description"
        :link="project.link"
        class="my-4"
      />
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    name: "BETA Biomed",
    description:
      "BETA Biomed's new biomedical equipment website, built on Nuxt, combines performance and SEO to connect researchers and healthcare providers with the tools they need.  Responsive design ensures accessibility on any device.",
    id: 0,
    link: "projects/beta-biomed",
  },
  {
    name: "Archangel Michael Church Website",
    description:
      "This project is a dynamic web application built using the Django framework, HTML, CSS (Bootstrap), and JavaScript. My primary goal with this project is to create a visually appealing website with interactive animations, facilitate real-time blog post updates through Twitter integration, and offer an admin panel for convenient content management.",
    id: 1,
    link: "projects/aamc-website",
  },
  {
    name: "React Native Job Searching App",
    description:
      "A user-friendly mobile app built with React Native that helps users connect with their dream job. JobFinder leverages the power of the RapidAPI job search API to deliver a seamless and effective job searching experience.",
    id: 2,
    link: "projects/rn-jobsearch",
  },
];
</script>

<style></style>
