<template>
  <div :class="{ 'dark': isDark }" class="theme-wrapper">
    <AnimatedBackground :blob-count="16" />
    <div class="content-layer">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup>
const { isDark } = useTheme()
</script>

<style>
:root {
  /* Light theme colors */
  --color-bg-primary: 255 255 255;
  --color-bg-secondary: 248 250 252;
  --color-bg-tertiary: 241 245 249;
  --color-text-primary: 15 23 42;
  --color-text-secondary: 71 85 105;
  --color-text-tertiary: 148 163 184;
  --color-accent: 59 130 246;
  --color-accent-hover: 37 99 235;
  --color-border: 226 232 240;
  --color-border-hover: 203 213 225;
  --color-glass: 255 255 255;
  --glass-opacity: 0.8;
  --backdrop-blur: 20px;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.dark {
  /* Dark theme colors */
  --color-bg-primary: 15 23 42;
  --color-bg-secondary: 30 41 59;
  --color-bg-tertiary: 51 65 85;
  --color-text-primary: 248 250 252;
  --color-text-secondary: 203 213 225;
  --color-text-tertiary: 148 163 184;
  --color-accent: 96 165 250;
  --color-accent-hover: 59 130 246;
  --color-border: 71 85 105;
  --color-border-hover: 100 116 139;
  --color-glass: 30 41 59;
  --glass-opacity: 0.9;
  --backdrop-blur: 24px;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.3);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.3);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.3);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.3);
}

* {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.theme-wrapper {
  min-height: 100vh;
  background: rgb(var(--color-bg-primary));
  color: rgb(var(--color-text-primary));
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(16px);
  filter: blur(4px);
}

/* Glass morphism utility classes */
.glass {
  background: rgba(var(--color-glass), var(--glass-opacity));
  backdrop-filter: blur(var(--backdrop-blur));
  -webkit-backdrop-filter: blur(var(--backdrop-blur));
  border: 1px solid rgba(var(--color-border), 0.2);
}

.glass-light {
  background: rgba(var(--color-glass), 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

/* Apple-style button */
.btn-primary {
  background: rgb(var(--color-accent));
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  background: rgb(var(--color-accent-hover));
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background: transparent;
  color: rgb(var(--color-accent));
  border: 2px solid rgb(var(--color-accent));
  border-radius: 12px;
  padding: 10px 22px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
  background: rgb(var(--color-accent));
  color: white;
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}

/* Apple-style card */
.card {
  background: rgba(var(--color-glass), var(--glass-opacity));
  backdrop-filter: blur(var(--backdrop-blur));
  -webkit-backdrop-filter: blur(var(--backdrop-blur));
  border: 1px solid rgba(var(--color-border), 0.2);
  border-radius: 16px;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(var(--color-border-hover), 0.3);
}

/* Typography */
.text-hero {
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.text-display {
  font-size: clamp(1.875rem, 5vw, 2.25rem);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.text-body {
  font-size: 1.125rem;
  line-height: 1.7;
  color: rgb(var(--color-text-secondary));
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-delay-100 { animation-delay: 100ms; }
.animate-delay-200 { animation-delay: 200ms; }
.animate-delay-300 { animation-delay: 300ms; }
.animate-delay-400 { animation-delay: 400ms; }

.content-layer {
  position: relative;
  z-index: 10;
}
</style>
