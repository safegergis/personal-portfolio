<template>
  <div class="w-[90vw]">
    <Swiper :modules="[SwiperNavigation]">
      <SwiperSlide v-for="i in images" :key="i">
        <NuxtImg class="rounded-md" fit="contain" :src="i" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  images: string[];
}>();
</script>

<style></style>
