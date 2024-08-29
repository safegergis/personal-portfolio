<template>
  <div class="grid grid-cols-4 gap-4">
    <div class="i" v-for="i in images">
      <Photograph :imageID="i" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  imageIDs: string[];
}>();
const images = props.imageIDs;
console.log(images);
</script>

<style></style>
