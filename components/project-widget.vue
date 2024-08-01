<template>
  <div
    class="bg-transparent flex flex-col border-2 border-indigo-500 p-2 rounded-md justify-end"
  >
    <h3 class="text-indigo-400 font-semibold text-xl">{{ title }}</h3>
    <p class="text-white font-mono">{{ description }}</p>

    <div class="flex justify-end">
      <NuxtLink :to="link">
        <Icon name="mdi:arrow-right" class="text-indigo-500 size-7" />
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
