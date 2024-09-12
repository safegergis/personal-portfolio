<template>
  <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-0 p-10">
    <div v-for="image in images" class="break-inside-avoid p-2">
      <Photograph :imageID="image.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface ImageObject {
  id: string;
  tags: string[];
}

const props = defineProps<{
  images: ImageObject[];
}>();
</script>

<style></style>
