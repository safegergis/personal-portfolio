<template>
  <div class="flex flex-col justify-start md:p-12">
    <h1 class="text-white text-2xl md:text-4xl font-semibold">
      Project <br />
    </h1>
    <a
      class="text-indigo-400 text-5xl md:text-7xl font-bold"
      href="https://github.com/safegergis/playability"
      target="_blank"
      rel="noopener noreferrer"
      >Playability</a
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
        Playability is a full stack web app that allows users to search for
        games, view their details, and submit feedback on the accessibility of
        games. This is a passion project to help make video games more
        accessible and inclusive for everyone.
      </p>

      <h2 class="text-2xl font-bold mb-4">Key Features</h2>

      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
          <strong class="font-semibold">User Registration:</strong> Secure user
          sign-up with validation.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">User Driven Feedback:</strong> Users can
          submit feedback on the accessibility of games.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Game Search:</strong> Search for games
          by name.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Game Details:</strong> View
          comprehensive details including cover art, platforms, and
          accessibility features.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Accessibility Information:</strong>
          Display features like closed captions, colorblind modes, controller
          support, and remapping.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Responsive Design:</strong>
          Mobile-friendly interface using Tailwind CSS.
        </li>
      </ul>
    </div>
    <div class="flex justify-center mt-2">
      <a href="https://github.com/safegergis/playability">
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
// SEO Meta Tags
useHead({
  title: "Playability - Game Accessibility Website",
  meta: [
    {
      name: "description",
      content:
        "Playability is a game accessibility website that allows users to search for games, view their details, and submit feedback on the accessibility of games.",
    },
    {
      name: "keywords",
      content: "Playability, Game Accessibility, Web Development",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
  link: [
    { rel: "canonical", href: "https://safegergis.com/projects/playability" },
  ],
});
</script>

<style></style>
