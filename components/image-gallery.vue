<template>
  <div class="flex flex-wrap align-bottom p-10 gap-4 justify-center items-top">
    <div v-for="i in images">
      <Photograph :imageID="i" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  imageIDs: string[];
}>();
</script>

<style></style>
