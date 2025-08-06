<template>
  <nav class="bg-slate-900 border-b border-slate-800 px-4 py-3 md:py-4">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
      <NuxtLink to="/" class="flex items-center">
        <span class="text-indigo-400 text-xl font-bold"></span>
      </NuxtLink>
      
      <!-- Mobile menu button -->
      <button 
        @click="isOpen = !isOpen" 
        class="md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <Icon v-if="!isOpen" name="heroicons:bars-3" class="size-6" />
        <Icon v-else name="heroicons:x-mark" class="size-6" />
      </button>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex md:items-center md:space-x-6">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.path" 
          :to="item.path" 
          class="text-white hover:text-indigo-400 transition-colors duration-300 py-2"
          :class="{ 'text-indigo-400': $route.path === item.path }"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      
      <!-- Mobile Navigation -->
      <div 
        v-show="isOpen" 
        class="w-full md:hidden mt-2"
      >
        <div class="flex flex-col space-y-2 pt-2 pb-3 border-t border-slate-800">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path" 
            class="text-white hover:text-indigo-400 transition-colors duration-300 py-2 px-1"
            :class="{ 'text-indigo-400': $route.path === item.path }"
            @click="isOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isOpen = ref(false);

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Skills', path: '/skills' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

// Close mobile menu when route changes
watch(() => useRoute().path, () => {
  isOpen.value = false;
});
</script> 