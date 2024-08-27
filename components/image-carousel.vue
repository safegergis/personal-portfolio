<template>
  <div class="flex items-center h-60">
    <a class="text-white mr-2" @click="prev" href="#"
      ><Icon name="formkit:arrowleft"
    /></a>
    <div v-for="i in [currentIndex]" :key="i">
      <img class="rounded-md" :src="currentImg" />
    </div>

    <a class="text-white ml-2" @click="next" href="#"
      ><Icon name="formkit:arrowright"
    /></a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  images: string[];
}>();
// get images

onMounted(() => {
  startSlide();
});

//create timer object and index
const timer = ref<Object>();
const currentIndex = ref(0);

// start slider and move every 8 seconds
const startSlide = () => {
  timer.value = setInterval(next, 8000);
};
const next = () => {
  currentIndex.value++;
};
const prev = () => {
  currentIndex.value--;
};

const currentImg = computed(() => {
  return props.images[Math.abs(currentIndex.value % props.images.length)];
});
</script>

<style></style>
