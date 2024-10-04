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
      <h2 class="text-3xl font-bold mb-4">Mission Statement</h2>

      <p class="mb-6">
        Playability is a full stack web app dedicated to making video games more
        accessible and inclusive for everyone, especially those with
        disabilities. Our mission is to empower gamers of all abilities by
        providing comprehensive accessibility information and fostering a
        community-driven approach to game accessibility.
      </p>

      <p class="mb-6">
        At Playability, we believe that everyone should have the opportunity to
        enjoy video games, regardless of their physical or cognitive abilities.
        We strive to break down barriers in gaming by providing accurate,
        user-driven accessibility information and advocating for more inclusive
        game design. Our goal is to create a world where no gamer is left behind
        due to lack of accessibility features.
      </p>

      <h2 class="text-2xl font-bold mb-4">Key Features</h2>

      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
          <strong class="font-semibold"
            >User Registration and Authentication:</strong
          >
          Secure user sign-up and login with email verification and password
          recovery.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Comprehensive Game Database:</strong>
          Access a vast library of games with detailed information sourced from
          IGDB and PCGamingWiki.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Detailed Game Pages:</strong> View
          comprehensive game information including cover art, screenshots,
          supported platforms, release date, developer information, genre, tags,
          and accessibility features.
        </li>
        <li class="mb-2">
          <strong class="font-semibold"
            >User-Driven Accessibility Feedback:</strong
          >
          Submit detailed reports, rate existing accessibility options, and
          provide comments and tips for other users.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Accessibility Information:</strong>
          Detailed breakdown of features such as closed captions, colorblind
          modes, controller support, difficulty settings, and screen reader
          compatibility.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Accessibility Scoring System:</strong>
          Aggregate user feedback to provide overall accessibility scores for
          games across different categories.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Responsive Design:</strong>
          Mobile-friendly interface using Tailwind CSS, ensuring the platform is
          accessible across all devices.
        </li>
      </ul>

      <h2 class="text-2xl font-bold mb-4">Technical Features</h2>

      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
          <strong class="font-semibold">RESTful API:</strong> Well-structured
          API endpoints for seamless communication between frontend and backend.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">JWT Authentication:</strong> Secure,
          token-based authentication system for protected routes and user
          sessions.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Database Caching:</strong> Implemented
          Redis caching to improve performance and reduce load on the primary
          database.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">CI/CD Pipeline:</strong> Automated
          build, test, and deployment processes using GitHub Actions.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Microservices Architecture:</strong>
          Modular backend services for improved scalability and maintainability.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Data Analytics:</strong> Integration
          with analytics tools to track user behavior and improve the platform
          based on usage patterns.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Accessibility-First Design:</strong>
          Ensure that the Playability platform itself adheres to WCAG guidelines
          and is fully accessible to users with disabilities.
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
const images = [
  "/img/playability/1.png",
  "/img/playability/2.png",
  "/img/playability/3.png",
  "/img/playability/4.png",
  "/img/playability/5.png",
  "/img/playability/6.png",
  "/img/playability/7.png",
];
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
