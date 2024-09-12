<template>
  <div class="my-4">
    <Carousel :autoplay="2000" :breakpoints="carouselBreakpoints">
      <Slide class="p-3" v-for="image in featuredImages" :key="image.id">
        <NuxtImg
          provider="cloudinary"
          height="500"
          :src="image.id"
          fit="cover"
        />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
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

const featuredImages = props.images.filter((image) =>
  image.tags.includes("featured")
);

const carouselBreakpoints = {
  700: {
    itemsToShow: 2,
    wrapAround: true,
  },
  1200: {
    itemsToShow: 4,
    wrapAround: true,
  },
  1600: {
    itemsToShow: 5,
    wrapAround: true,
  },
};
</script>

<style></style>
