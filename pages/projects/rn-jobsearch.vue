<template>
  <div class="flex flex-col justify-start md:p-12">
    <h1 class="text-white text-2xl md:text-4xl font-semibold">
      Project <br />
    </h1>
    <a
      class="text-indigo-400 text-5xl md:text-7xl font-bold"
      href="https://github.com/safegergis/JobSearchRN"
      target="_blank"
      rel="noopener noreferrer"
      >React Native Job Searching Application</a
    >
    <NuxtLink
      class="text-gray-300 text-xl md:text-3xl font-medium hover:text-white ml-1"
      to="/projects"
    >
      Go back
    </NuxtLink>
    <div class="bg-slate-900 mx-auto">
      <image-carousel :images="images" />
    </div>
    <div class="container mx-auto p-4 text-white">
      <h2 class="text-3xl font-bold mb-4">Description</h2>

      <p class="mb-6">
        A user-friendly mobile app built with React Native that helps users
        connect with their dream job. JobFinder leverages the power of the
        RapidAPI job search API, along with best practices from Adrian Hajdin's
        tutorials, to deliver a seamless and effective job searching experience.
      </p>

      <h2 class="text-2xl font-bold mb-4">Features</h2>

      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
          <strong class="font-semibold">Home Page:</strong>
          <ul class="list-disc pl-6">
            <li>Displays a curated selection of popular job listings.</li>
            <li>Showcases nearby jobs based on the user's location.</li>
          </ul>
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Search Functionality:</strong>
          <ul class="list-disc pl-6">
            <li>Allows users to search for jobs by keywords</li>
          </ul>
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Detailed Job Listings:</strong>
          <ul class="list-disc pl-6">
            <li>
              Provides in-depth job descriptions, company information, and
              application instructions.
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="flex justify-center mt-2">
      <a href="https://github.com/safegergis/JobSearchRN">
        <button
          class="text-indigo-500 bg-transparent border text-semibold border-indigo-500 rounded-md w-48 md:text-xl hover:bg-indigo-500 hover:text-slate-900"
        >
          Visit the project
        </button>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  "/img/jobsearch/1.png",
  "/img/jobsearch/2.png",
  "/img/jobsearch/3.png",
];

// SEO Meta Tags
useHead({
  title: "React Native Job Searching Application - JobFinder",
  meta: [
    {
      name: "description",
      content:
        "JobFinder is a React Native application designed to help users find their dream jobs by leveraging the RapidAPI job search API for a seamless experience.",
    },
    {
      name: "keywords",
      content:
        "React Native, JobSearch App, JobFinder, Mobile Development, RapidAPI, Job Hunting, Fullstack Engineer",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
  link: [
    { rel: "canonical", href: "https://safegergis.com/projects/rn-jobsearch" },
  ],
});
</script>

<style></style>
