<template>
  <div>
    <button @click="modalShown = !modalShown">
      <NuxtImg
        class="flex-grow"
        provider="cloudinary"
        :src="props.imageID"
        height="300"
        width="300"
        fit="thumbnail"
      />
    </button>
    <div
      v-if="modalShown"
      class="bg-black bg-opacity-50 fixed top-0 left-0 bottom-0 right-0 flex justify-center align-center"
    >
      <div class="relative top-20">
        <button
          class="absolute top-30 left-30 z-10"
          @click="modalShown = !modalShown"
        >
          <Icon name="formkit:close" class="text-white z-10 size-20" />
        </button>
        <NuxtImg
          class="max-w-[1000px] max-h-[800px] object-cover"
          fit="contain"
          provider="cloudinary"
          :src="props.imageID"
        />
      </div>
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
