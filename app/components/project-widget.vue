<template>
  <div
    class="flex flex-col border-2 border-indigo-500 p-2 shadow-md justify-between rounded-md w-full md:w-96"
  >
    <NuxtLink :to="link">
      <h3 class="text-indigo-400 font-semibold text-xl md:text-2xl">
        {{ title }}
      </h3>
    </NuxtLink>
    <p class="text-white font-mono md:text-lg">{{ description }}</p>

    <div class="flex justify-end">
      <NuxtLink :to="link">
        <Icon
          name="mdi:arrow-right"
          class="text-indigo-500 size-7 transition ease-in-out hover:scale-110 hover:text-indigo-400"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  link: String,
});
</script>

<style></style>
