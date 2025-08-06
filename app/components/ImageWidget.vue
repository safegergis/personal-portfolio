<template>
  <div class="flex my-4">
    <button @click="onPrevious">
      <Icon class="text-white w-10 h-10" name="lucide:arrow-left" />
    </button>
    <div class="overflow-hidden" ref="emblaRef">
      <div class="flex">
        <div
          class="flex-[0_0_33%]"
          v-for="image in featuredImages"
          :key="image.id"
        >
          <NuxtImg
            provider="cloudinary"
            height="500"
            :src="image.id"
            fit="cover"
          />
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

const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
  autoPlay({ delay: 5000 }),
]);

const onNext = () => {
  if (emblaApi.value) emblaApi.value.scrollNext();
};

const onPrevious = () => {
  if (emblaApi.value) emblaApi.value.scrollPrev();
};

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
</script>

<style></style>
