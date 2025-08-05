<template>
  <NuxtLink :to="link" class="block group">
    <div class="h-full flex flex-col justify-between">
      <div class="space-y-4">
        <div class="flex items-start justify-between">
          <h3 class="text-xl font-semibold text-current group-hover:text-blue-500 transition-colors">
            {{ title }}
          </h3>
          <Icon
            name="lucide:arrow-up-right"
            class="w-5 h-5 text-current opacity-60 group-hover:opacity-100 group-hover:text-blue-500 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
        <p class="text-body line-clamp-4">
          {{ description }}
        </p>
      </div>
      
      <div class="mt-6 pt-4 border-t border-current border-opacity-10">
        <span class="text-sm text-blue-500 font-medium group-hover:text-blue-600 transition-colors">
          Learn more
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  link: String,
});
</script>

<style></style>
