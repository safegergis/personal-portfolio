<template>
  <div class="my-4">
    <Carousel :breakpoints="carouselBreakpoints">
      <Slide class="p-3" v-for="i in images" :key="i">
        <NuxtImg height="500" fit="contain" :src="i" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  images: string[];
}>();

const carouselBreakpoints = {
  700: {
    itemsToShow: 2.5,
    wrapAround: true,
  },
};
</script>

<style></style>
