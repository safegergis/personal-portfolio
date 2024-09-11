<template>
  <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-0 p-10">
    <div v-for="i in images" class="break-inside-avoid mb-4">
      <Photograph :imageID="i" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  imageIDs: string[];
}>();
const images = props.imageIDs;
</script>

<style></style>
