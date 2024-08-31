<template>
  <div>
    <button @click="modalShown = !modalShown">
      <NuxtImg
        class="flex-grow rounded-lg transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-105"
        provider="cloudinary"
        :src="props.imageID"
        sizes="500px"
        fit="thumbnail"
        :placeholder="[300, 300, 5, 100]"
      />
    </button>
    <div
      v-if="modalShown"
      class="bg-black bg-opacity-70 fixed top-0 left-0 bottom-0 right-0 flex justify-center align-center"
    >
      <div class="relative m-auto">
        <button class="absolute right-1 z-10" @click="modalShown = !modalShown">
          <Icon name="formkit:close" class="text-white z-10 size-10" />
        </button>
        <NuxtImg
          class="max-w-screen max-h-screen lg:max-w-[1000px] lg:max-h-[1000px] object-cover"
          provider="cloudinary"
          quality="85"
          :src="props.imageID"
          :placeholder="[500, 500, 5, 100]"
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
