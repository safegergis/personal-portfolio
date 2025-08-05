<template>
  <Button
    @click="toggleTheme"
    variant="text"
    size="small"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    class="!p-3 !rounded-full glass hover:scale-105"
  >
    <Icon 
      :name="isDark ? 'lucide:sun' : 'lucide:moon'" 
      class="w-5 h-5"
    />
  </Button>
</template>

<script setup>
const { isDark, toggleTheme } = useTheme()
</script>

<style scoped>
.glass {
  background: rgba(var(--color-glass), var(--glass-opacity)) !important;
  backdrop-filter: blur(var(--backdrop-blur));
  -webkit-backdrop-filter: blur(var(--backdrop-blur));
  border: 1px solid rgba(var(--color-border), 0.2) !important;
}

.glass:hover {
  border-color: rgba(var(--color-border-hover), 0.3) !important;
  box-shadow: var(--shadow-md);
}
</style>