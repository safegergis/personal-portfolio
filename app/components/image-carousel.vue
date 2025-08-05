<template>
  <div class="flex my-4">
    <button @click="onPrevious">
      <Icon class="text-white w-10 h-10" name="lucide:arrow-left" />
    </button>
    <div class="overflow-hidden" ref="emblaRef">
      <div class="flex items-center">
        <div class="flex-[0_0_33%] mx-5" v-for="image in images" :key="image">
          <NuxtImg height="500" :src="image" fit="contain" />
        </div>
      </div>
    </div>
    <button @click="onNext">
      <Icon class="text-white w-10 h-10" name="lucide:arrow-right" />
    </button>
  </div>
</template>

<script setup lang="ts">
import useEmblaCarousel from "embla-carousel-vue";
import autoPlay from "embla-carousel-autoplay";

const props = defineProps<{
  images: string[];
}>();

const [emblaRef, emblaApi] = useEmblaCarousel(
  {
    loop: true,
  },
  [autoPlay({ delay: 5000 })]
);

const onNext = () => {
  if (emblaApi.value) emblaApi.value.scrollNext();
};

const onPrevious = () => {
  if (emblaApi.value) emblaApi.value.scrollPrev();
};
</script>

<style></style>
