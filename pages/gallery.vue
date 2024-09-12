<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-indigo-400 text-5xl md:text-7xl font-bold">
      Image Gallery
    </h1>
    <ImageGallery :images="images" />
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/images");
const images = data.value?.images!;
</script>

<style></style>
