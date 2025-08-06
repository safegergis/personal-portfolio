<template>
  <div 
    class="animated-background" 
    @mousemove="handleMouseMove"
    @click="handleClick"
  >
    <div class="liquid-bg" :class="{ 'reduce-motion': reduceMotion }">
      <div 
        class="liquid-blob blob-1"
        :style="getBlobStyle(0)"
        ref="blob1"
      ></div>
      <div 
        class="liquid-blob blob-2"
        :style="getBlobStyle(1)"
        ref="blob2"
      ></div>
      <div 
        class="liquid-blob blob-3"
        :style="getBlobStyle(2)"
        ref="blob3"
      ></div>
      <div 
        class="liquid-blob blob-4"
        :style="getBlobStyle(3)"
        ref="blob4"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'

const reduceMotion = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)
const isClicked = ref(false)

// Blob positions and interactions
const blobs = reactive([
  { x: 0, y: 0, scale: 1, intensity: 0.3 },
  { x: 0, y: 0, scale: 1, intensity: 0.25 },
  { x: 0, y: 0, scale: 1, intensity: 0.35 },
  { x: 0, y: 0, scale: 1, intensity: 0.2 }
])

const blob1 = ref(null)
const blob2 = ref(null)
const blob3 = ref(null)
const blob4 = ref(null)

const handleMouseMove = (e) => {
  if (reduceMotion.value) return
  
  mouseX.value = e.clientX
  mouseY.value = e.clientY
  
  // Calculate mouse influence on each blob
  blobs.forEach((blob, index) => {
    const intensity = blob.intensity
    const mouseInfluenceX = (mouseX.value - window.innerWidth / 2) * intensity * 0.1
    const mouseInfluenceY = (mouseY.value - window.innerHeight / 2) * intensity * 0.1
    
    blob.x = mouseInfluenceX * (index + 1) * 0.5
    blob.y = mouseInfluenceY * (index + 1) * 0.5
  })
}

const handleClick = () => {
  if (reduceMotion.value) return
  
  isClicked.value = true
  
  // Pulse effect on click
  blobs.forEach((blob, index) => {
    blob.scale = 1.3 + (index * 0.1)
  })
  
  // Reset after animation
  setTimeout(() => {
    blobs.forEach(blob => {
      blob.scale = 1
    })
    isClicked.value = false
  }, 300)
}

const getBlobStyle = (index) => {
  const blob = blobs[index]
  return {
    transform: `translate(${blob.x}px, ${blob.y}px) scale(${blob.scale})`,
    transition: isClicked.value ? 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' : 'transform 0.1s ease-out'
  }
}

onMounted(() => {
  // Respect user's motion preferences
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  reduceMotion.value = mediaQuery.matches
  
  mediaQuery.addEventListener('change', (e) => {
    reduceMotion.value = e.matches
  })
  
  // Listen for button clicks globally
  document.addEventListener('click', (e) => {
    if (e.target.closest('button, .btn-primary, .btn-secondary, a')) {
      handleClick()
    }
  })
})
</script>

<style>
.animated-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  pointer-events: auto;
}

.liquid-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.liquid-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.4;
  animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  animation-fill-mode: both;
  will-change: transform;
  transform-origin: center;
  backface-visibility: hidden;
  perspective: 1000px;
  z-index: 1;
}

/* Reduced motion support */
.reduce-motion .liquid-blob {
  animation: none !important;
  transform: none !important;
}

@media (prefers-reduced-motion: reduce) {
  .liquid-blob {
    animation: none !important;
    transform: none !important;
  }
}

:global(.dark) .liquid-blob {
  opacity: 0.2;
}

.blob-1 {
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #3b82f6, #6366f1);
  animation: blob1 12s infinite;
  animation-delay: 0s;
}

.blob-2 {
  top: 0;
  right: 0;
  width: 250px;
  height: 250px;
  background: linear-gradient(45deg, #8b5cf6, #a855f7);
  animation: blob2 15s infinite;
  animation-delay: -3s;
}

.blob-3 {
  bottom: 0;
  left: 20%;
  width: 350px;
  height: 350px;
  background: linear-gradient(45deg, #06b6d4, #0891b2);
  animation: blob3 18s infinite;
  animation-delay: -7s;
}

.blob-4 {
  bottom: 20%;
  right: 20%;
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #f59e0b, #f97316);
  animation: blob4 14s infinite;
  animation-delay: -5s;
}

@keyframes blob1 {
  0%, 100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
  25% {
    transform: translate(50px, -80px) scale(1.2) rotate(90deg);
  }
  50% {
    transform: translate(-30px, -20px) scale(0.8) rotate(180deg);
  }
  75% {
    transform: translate(-70px, 40px) scale(1.1) rotate(270deg);
  }
}

@keyframes blob2 {
  0%, 100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
  20% {
    transform: translate(-60px, 30px) scale(1.3) rotate(72deg);
  }
  40% {
    transform: translate(40px, -50px) scale(0.7) rotate(144deg);
  }
  60% {
    transform: translate(80px, 20px) scale(1.2) rotate(216deg);
  }
  80% {
    transform: translate(-20px, -70px) scale(0.9) rotate(288deg);
  }
}

@keyframes blob3 {
  0%, 100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
  30% {
    transform: translate(70px, 60px) scale(1.4) rotate(108deg);
  }
  60% {
    transform: translate(-80px, -30px) scale(0.6) rotate(216deg);
  }
  90% {
    transform: translate(20px, -90px) scale(1.1) rotate(324deg);
  }
}

@keyframes blob4 {
  0%, 100% {
    transform: translate(0, 0) scale(1) rotate(0deg);
  }
  15% {
    transform: translate(-50px, -40px) scale(1.1) rotate(54deg);
  }
  35% {
    transform: translate(60px, 80px) scale(0.8) rotate(126deg);
  }
  55% {
    transform: translate(-90px, 10px) scale(1.3) rotate(198deg);
  }
  75% {
    transform: translate(30px, -60px) scale(0.9) rotate(270deg);
  }
  90% {
    transform: translate(10px, 40px) scale(1.2) rotate(342deg);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .liquid-blob {
    filter: blur(30px);
  }
  
  .blob-1, .blob-3 {
    width: 200px;
    height: 200px;
  }
  
  .blob-2, .blob-4 {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 480px) {
  .liquid-blob {
    filter: blur(20px);
    opacity: 0.5;
  }
  
  :global(.dark) .liquid-blob {
    opacity: 0.3;
  }
}
</style>