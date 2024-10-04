<template>
  <div>
    <button @click="modalShown = !modalShown">
      <NuxtImg
        class="transition ease-in-out hover:-translate-y-2 hover:scale-105 w-full h-full object-cover"
        provider="cloudinary"
        :src="props.imageID"
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
          <Icon
            name="lucide:x"
            class="text-white text-opacity-70 hover:text-opacity-100 z-10 size-10"
          />
        </button>
        <a
          :href="`https://res.cloudinary.com/safegergisportfolio/image/upload/fl_attachment/v1726095766/${props.imageID}`"
          download
          class="absolute right-12 z-10"
        >
          <Icon
            name="lucide:cloud-download"
            class="text-white text-opacity-70 hover:text-opacity-100 z-10 size-10"
          />
        </a>
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
