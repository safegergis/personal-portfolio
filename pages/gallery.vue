<template>
  <div class="container mx-auto py-8">
    <h1 class="text-indigo-400 text-5xl md:text-7xl font-bold">
      Image Gallery
    </h1>
    <NuxtLink
      class="text-gray-300 text-xl md:text-3xl font-medium hover:text-white ml-1"
      to="/"
    >
      go back?
    </NuxtLink>
    <p class="text-gray-300 text-lg mt-4">
      Click on any image to view it in full size and download for non-commercial
      use.
    </p>
    <ImageGallery :images="images" />
    <div class="mt-8 text-gray-400 text-sm">
      <h2 class="text-xl font-semibold mb-2">Licensing Information</h2>
      <p>
        All images in this gallery are licensed for non-commercial use with
        attribution. You are free to use these images for personal or
        educational purposes, but please credit the photographer when doing so.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/images");
const images = data.value?.images!;
</script>

<style></style>
