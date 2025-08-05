<template>
  <div class="flex flex-col justify-start md:p-12">
    <h1 class="text-white text-2xl md:text-4xl font-semibold">
      Project <br />
    </h1>
    <a
      class="text-indigo-400 text-5xl md:text-7xl font-bold"
      href="https://algocompare.onrender.com"
      target="_blank"
      rel="noopener noreferrer"
      >AlgoCompare</a
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
        AlgoCompare is a web application designed to help you visualize and
        compare the performance of various sorting algorithms. Whether you're a
        student learning about algorithm complexity or a developer looking to
        optimize your code, AlgoCompare provides an intuitive interface to
        understand how different sorting techniques perform under the hood.
      </p>

      <h2 class="text-2xl font-bold mb-4">Key Features</h2>

      <ul class="list-disc pl-6 mb-6">
        <li class="mb-2">
          <strong class="font-semibold">Visualize Sorting Algorithms:</strong>
          Watch how Bubble Sort, Merge Sort, Quick Sort, and Radix Sort operate
          on arrays in real-time.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Performance Comparison:</strong> Compare
          the time taken by each sorting algorithm to understand their
          efficiencies.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Interactive Interface:</strong> Generate
          random arrays with customizable parameters and perform linear searches
          to see how algorithms handle target searches.
        </li>
        <li class="mb-2">
          <strong class="font-semibold">Responsive Design:</strong> Built with
          Vue.js and Tailwind CSS for a seamless experience across devices.
        </li>
      </ul>
    </div>
    <div class="flex justify-center mt-2">
      <a href="https://algocompare.onrender.com">
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
const images = ["/img/algocompare/1.png", "/img/algocompare/2.png"];

// SEO Meta Tags
useHead({
  title: "AlgoCompare - Sorting Algorithm Visualizer",
  meta: [
    {
      name: "description",
      content:
        "AlgoCompare is a web application designed to help you visualize and compare the performance of various sorting algorithms.",
    },
    {
      name: "keywords",
      content: "AlgoCompare, Sorting Algorithm, Visualizer, Web Development",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
  link: [
    { rel: "canonical", href: "https://safegergis.com/projects/algocompare" },
  ],
});
</script>

<style></style>
