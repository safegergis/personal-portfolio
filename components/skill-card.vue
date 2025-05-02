<template>
  <div class="bg-slate-800 p-4 rounded-lg flex flex-col items-center transition-all duration-300 hover:bg-slate-700 hover:translate-y-[-4px]">
    <Icon :name="icon" class="size-12 mb-2" />
    <h3 class="text-white font-medium text-lg">{{ name }}</h3>
    <span 
      class="text-sm py-1 px-2 rounded-full mt-2"
      :class="{
        'bg-green-900/50 text-green-400': level === 'Advanced',
        'bg-blue-900/50 text-blue-400': level === 'Proficient',
        'bg-yellow-900/50 text-yellow-400': level === 'Intermediate',
        'bg-red-900/50 text-red-400': level === 'Beginner'
      }"
    >
      {{ level }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  level: 'Advanced' | 'Proficient' | 'Intermediate' | 'Beginner';
  icon: string;
}>();
</script> 