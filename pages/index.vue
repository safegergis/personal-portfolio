<template>
  <div class="bg-slate-900 flex flex-col justify-start content-middle">
    <div
      class="md:h-screen md:flex md:items-center md:px-12 md:justify-between transition ease-in-out duration-700"
      :class="loaded ? 'opacity-100 ' : 'opacity-0 translate-y-40'"
    >
      <div class="md:flex-none md:mb-24">
        <h1 class="text-white text-2xl font-semibold mb-2 md:text-5xl">
          Hi, my name is
          <br />
        </h1>
        <h1 class="text-indigo-400 text-5xl font-bold md:text-7xl">
          Safe Gergis
        </h1>
        <h4 class="text-white text-3xl font-semibold md:text-5xl">
          Junior Fullstack Engineer
        </h4>
        <h4 class="text-white text-2xl font-thin mt-10 md:text-4xl">
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
      </div>
      <div class="md:p-4 md:mb-24 md:w-1/2">
        <h2
          class="text-white text-2xl font-semibold md:text-center md:text-4xl"
        >
          About me
        </h2>
        <p class="text-md text-white text-left md:text-lg">
          Hi there! I'm a Computer Science student at Cal State Fullerton with a
          long-standing interest in programming. My curiosity spans various tech
          areas, including game development, web applications, and embedded
          systems. When I'm not coding, I enjoy exploring nature through
          photography and hiking.
          <br />
          <br />
          Currently, I'm working on development projects at Medten and Orantech,
          where I'm applying what I've learned to real-world challenges. Last
          year, I had the opportunity to intern at CompTIA, which gave me
          valuable insights into the IT industry.
          <br />
          <br />
          I've created this space to share some of my photography and personal
          projects. I'm always eager to connect with others who have similar
          interests or just want to chat about tech.
        </p>
        <a href="/resume.pdf" target="_blank">
          <button
            class="text-indigo-500 bg-transparent border text-semibold border-indigo-500 rounded-md mt-2 w-full hover:bg-indigo-500 hover:text-slate-900"
          >
            Download my resume
          </button>
        </a>
      </div>
    </div>
    <div class="flex items-center mt-5">
      <hr class="flex-grow border-t border-indigo-300" />
      <span class="px-3 text-slate-500">more below</span>
      <hr class="flex-grow border-t border-indigo-300" />
    </div>
    <div
      class="mt-10 transition ease-in-out duration-1000"
      ref="project"
      :class="projectsVisible ? 'opacity-100' : 'opacity-0'"
    >
      <h2 class="text-white text-2xl font-semibold md:text-4xl md:ml-14">
        Projects
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-7xl my-4"
      >
        <ProjectWidget
          v-for="project in projects"
          :key="project.id"
          :title="project.name"
          :description="project.description"
          :link="project.link"
        />
      </div>
      <div
        class="flex flex-col items-start transition ease-in-out duration-1000"
        ref="gallery"
        :class="galleryVisible ? 'opacity-100' : 'opacity-0'"
      >
        <hr class="w-full border-t border-indigo-400 mt-6 rounded-md" />
        <h2
          class="text-white text-2xl mt-10 font-semibold md:text-4xl md:ml-14"
        >
          Featured Images
        </h2>
        <NuxtLink
          to="/gallery"
          class="text-indigo-400 mt-2 md:ml-14 hover:text-indigo-300 transition-colors duration-300"
        >
          Click here to view the entire gallery
        </NuxtLink>
        <ImageWidget :images="images" class="mx-auto" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface project {
  name: string;
  description: string;
  id: number;
  link: string;
}
const projects: project[] = [
  {
    name: "Playability",
    description:
      "Playability is a full stack web app dedicated to making video games more accessible and inclusive for everyone, especially those with disabilities. Our mission is to empower gamers of all abilities by providing comprehensive accessibility information and fostering a community-driven approach to game accessibility.",
    id: 0,
    link: "projects/playability",
  },
  {
    name: "BETA Biomed",
    description:
      "BETA Biomed's new biomedical equipment website, built on Nuxt, combines performance and SEO to connect researchers and healthcare providers with the tools they need.  Responsive design ensures accessibility on any device.",
    id: 1,
    link: "projects/beta-biomed",
  },
  {
    name: "Archangel Michael Church Website",
    description:
      "This project is a dynamic web application built using the Django framework, HTML, CSS (Bootstrap), and JavaScript. My primary goal with this project is to create a visually appealing website with interactive animations.",
    id: 2,
    link: "projects/aamc-website",
  },
  {
    name: "React Native Job Searching App",
    description:
      "A user-friendly mobile app built with React Native that helps users connect with their dream job. JobFinder leverages the power of the RapidAPI job search API to deliver a seamless and effective job searching experience.",
    id: 3,
    link: "projects/rn-jobsearch",
  },
  {
    name: "AlgoCompare",
    description:
      "AlgoCompare is a web application that allows users to compare the performance of different algorithims for sorting. It allows users to enter an array and select an algorithim to sort the array. ",
    id: 4,
    link: "projects/algocompare",
  },
];

const { data } = await useFetch("/api/images");
const images = data.value?.images!;

const loaded = ref(false);

onMounted(() => {
  loaded.value = true;
});

const project = ref(null);
const gallery = ref(null);

const projectsVisible = useElementVisibility(project);
const galleryVisible = useElementVisibility(gallery);

// SEO Meta Tags
useHead({
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
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
  link: [{ rel: "canonical", href: "https://safegergis.com/" }],
});
</script>

<style></style>
