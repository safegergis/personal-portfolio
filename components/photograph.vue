<template>
  <div>
    <button @click="modalShown = !modalShown">
      <CldImage
        class="rounded-md"
        :src="props.imageID"
        width="624"
        height="624"
        crop="fill"
        alt="Photo"
      />
    </button>
    <div
      v-if="modalShown"
      class="bg-black bg-opacity-50 fixed top-10 left-10 bottom-10 right-10 flex justify-center align-center"
    >
      <CldImage crop="scale" :src="props.imageID" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  imageID: string;
}>();
const modalShown = ref(false);
</script>

<style></style>
