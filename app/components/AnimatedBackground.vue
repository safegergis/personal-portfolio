<template>
  <div 
    class="animated-background" 
    @mousemove="handleMouseMove"
    @click="handleClick"
  >
    <div class="liquid-bg" :class="{ 'reduce-motion': reduceMotion }">
      <div 
        v-for="(blob, index) in blobs"
        :key="index"
        class="liquid-blob"
        :class="`blob-${index + 1}`"
        :style="getBlobStyle(index)"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, onUnmounted, computed } from 'vue'

// Props for customization
const props = defineProps({
  // Number of blobs
  blobCount: {
    type: Number,
    default: 8,
    validator: (value) => value >= 1 && value <= 20
  },
  
  // Size configuration
  minSize: {
    type: Number,
    default: 150
  },
  maxSize: {
    type: Number,
    default: 350
  },
  
  // Animation speed configuration
  minAnimationDuration: {
    type: Number,
    default: 20
  },
  maxAnimationDuration: {
    type: Number,
    default: 45
  },
  
  // Mouse interaction sensitivity
  mouseSensitivity: {
    type: Number,
    default: 0.05,
    validator: (value) => value >= 0 && value <= 1
  },
  
  // Minimum and maximum mouse influence intensity
  minIntensity: {
    type: Number,
    default: 0.15
  },
  maxIntensity: {
    type: Number,
    default: 0.45
  },
  
  // Opacity configuration
  minOpacity: {
    type: Number,
    default: 0.2
  },
  maxOpacity: {
    type: Number,
    default: 0.45
  },
  
  // Blur configuration
  minBlur: {
    type: Number,
    default: 30
  },
  maxBlur: {
    type: Number,
    default: 50
  },
  
  // Color configuration
  colorPalette: {
    type: Array,
    default: () => null, // Will use random hues if null
    validator: (value) => !value || (Array.isArray(value) && value.every(color => typeof color === 'string'))
  },
  
  // Click interaction configuration
  clickSensitivity: {
    type: Number,
    default: 1.5,
    validator: (value) => value >= 0.5 && value <= 3
  },
  
  // Random movement configuration
  randomMovementSpeed: {
    type: Number,
    default: 0.0005
  },
  randomMovementAmplitude: {
    type: Number,
    default: 15
  },
  
  // Auto-randomization interval (in milliseconds, 0 to disable)
  randomizeInterval: {
    type: Number,
    default: 10000
  },
  
  // Dark mode opacity override
  darkModeOpacity: {
    type: Number,
    default: 0.15
  },
  
  // Enable/disable interactions
  enableMouseInteraction: {
    type: Boolean,
    default: true
  },
  enableClickInteraction: {
    type: Boolean,
    default: true
  }
})

const reduceMotion = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)
const isClicked = ref(false)

// Generate random properties using props
const generateRandomBlob = (index) => {
  // Color selection
  let hue
  if (props.colorPalette && props.colorPalette.length > 0) {
    const colorIndex = index % props.colorPalette.length
    hue = props.colorPalette[colorIndex]
  } else {
    hue = Math.random() * 360
  }
  
  return {
    x: 0,
    y: 0,
    baseX: Math.random() * 100,
    baseY: Math.random() * 100,
    scale: 1,
    baseScale: 0.8 + Math.random() * 0.6,
    intensity: props.minIntensity + Math.random() * (props.maxIntensity - props.minIntensity),
    size: props.minSize + Math.random() * (props.maxSize - props.minSize),
    animationDuration: props.minAnimationDuration + Math.random() * (props.maxAnimationDuration - props.minAnimationDuration),
    animationDelay: Math.random() * -20,
    hue: typeof hue === 'string' ? hue : hue,
    blurAmount: props.minBlur + Math.random() * (props.maxBlur - props.minBlur),
    opacity: props.minOpacity + Math.random() * (props.maxOpacity - props.minOpacity),
    rotationSpeed: 0.5 + Math.random() * 2,
    movePattern: index % 4
  }
}

const blobs = reactive(Array.from({ length: props.blobCount }, (_, i) => generateRandomBlob(i)))

const handleMouseMove = (e) => {
  if (reduceMotion.value || !props.enableMouseInteraction) return
  
  const rect = e.currentTarget.getBoundingClientRect()
  mouseX.value = e.clientX - rect.left
  mouseY.value = e.clientY - rect.top
  
  // Update blob positions based on mouse
  blobs.forEach((blob, index) => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    
    const mouseInfluenceX = (mouseX.value - centerX) * blob.intensity * props.mouseSensitivity
    const mouseInfluenceY = (mouseY.value - centerY) * blob.intensity * props.mouseSensitivity
    
    // Add some randomness to the movement
    const randomOffsetX = Math.sin(Date.now() * props.randomMovementSpeed + index) * props.randomMovementAmplitude
    const randomOffsetY = Math.cos(Date.now() * props.randomMovementSpeed + index * 1.5) * props.randomMovementAmplitude
    
    blob.x = mouseInfluenceX + randomOffsetX * blob.intensity
    blob.y = mouseInfluenceY + randomOffsetY * blob.intensity
  })
}

const handleClick = (e) => {
  if (reduceMotion.value || !props.enableClickInteraction) return
  
  isClicked.value = true
  
  // Create ripple effect from click position
  const clickX = e ? e.clientX : window.innerWidth / 2
  const clickY = e ? e.clientY : window.innerHeight / 2
  
  blobs.forEach((blob, index) => {
    // Calculate distance from click to create varied response
    const distance = Math.sqrt(
      Math.pow(clickX - window.innerWidth * (blob.baseX / 100), 2) +
      Math.pow(clickY - window.innerHeight * (blob.baseY / 100), 2)
    )
    
    const maxDistance = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2)
    const normalizedDistance = distance / maxDistance
    
    // Scale based on distance (closer = bigger effect)
    const scaleMultiplier = props.clickSensitivity - normalizedDistance * 0.5
    blob.scale = blob.baseScale * scaleMultiplier
    
    // Add random variation
    blob.scale *= (0.8 + Math.random() * 0.4)
  })
  
  // Reset after animation
  setTimeout(() => {
    blobs.forEach(blob => {
      blob.scale = blob.baseScale
    })
    isClicked.value = false
  }, 600)
}

// Global button click handler
const handleGlobalClick = (e) => {
  if (e.target.closest('button, .btn-primary, .btn-secondary, a[href], [role="button"]')) {
    handleClick(e)
  }
}

const getBlobStyle = (index) => {
  const blob = blobs[index]
  
  // Handle color palette vs hue
  let backgroundStyle
  if (props.colorPalette && props.colorPalette.length > 0) {
    const colorIndex = index % props.colorPalette.length
    const color1 = props.colorPalette[colorIndex]
    const color2 = props.colorPalette[(colorIndex + 1) % props.colorPalette.length]
    backgroundStyle = `linear-gradient(45deg, ${color1}, ${color2})`
  } else {
    backgroundStyle = `linear-gradient(45deg, 
      hsl(${blob.hue}, 70%, 60%), 
      hsl(${(blob.hue + 60) % 360}, 70%, 65%)
    )`
  }
  
  return {
    width: `${blob.size}px`,
    height: `${blob.size}px`,
    left: `${blob.baseX}%`,
    top: `${blob.baseY}%`,
    background: backgroundStyle,
    filter: `blur(${blob.blurAmount}px)`,
    opacity: document.documentElement.classList.contains('dark') ? props.darkModeOpacity : blob.opacity,
    transform: `translate(${blob.x}px, ${blob.y}px) scale(${blob.scale}) translate(-50%, -50%)`,
    transition: isClicked.value 
      ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' 
      : 'transform 0.15s ease-out',
    animation: reduceMotion.value 
      ? 'none' 
      : `blob-move-${blob.movePattern} ${blob.animationDuration}s infinite linear`,
    animationDelay: `${blob.animationDelay}s`
  }
}

// Randomize blob properties periodically
const randomizeBlobs = () => {
  if (reduceMotion.value) return
  
  blobs.forEach((blob, index) => {
    // Slowly drift the base positions
    blob.baseX += (Math.random() - 0.5) * 2
    blob.baseY += (Math.random() - 0.5) * 2
    
    // Keep within bounds
    blob.baseX = Math.max(0, Math.min(100, blob.baseX))
    blob.baseY = Math.max(0, Math.min(100, blob.baseY))
    
    // Occasionally change hue
    if (Math.random() < 0.1) {
      blob.hue = (blob.hue + (Math.random() - 0.5) * 30) % 360
    }
  })
}

let randomizeInterval

onMounted(() => {
  // Motion preferences
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  reduceMotion.value = mediaQuery.matches
  
  mediaQuery.addEventListener('change', (e) => {
    reduceMotion.value = e.matches
  })
  
  // Global click listener
  document.addEventListener('click', handleGlobalClick)
  
  // Randomize blobs based on prop interval
  if (props.randomizeInterval > 0) {
    randomizeInterval = setInterval(randomizeBlobs, props.randomizeInterval)
  }
})

onUnmounted(() => {
  document.removeEventListener('click', handleGlobalClick)
  if (randomizeInterval) {
    clearInterval(randomizeInterval)
  }
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
  will-change: transform;
  transform-origin: center;
  backface-visibility: hidden;
  z-index: 1;
}

/* Reduced motion support */
.reduce-motion .liquid-blob {
  animation: none !important;
  transform: translate(-50%, -50%) !important;
}

@media (prefers-reduced-motion: reduce) {
  .liquid-blob {
    animation: none !important;
    transform: translate(-50%, -50%) !important;
  }
}

/* Dark mode adjustments - handled via inline styles from props */

/* Different movement patterns for variety */
@keyframes blob-move-0 {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg) translate(-50%, -50%); }
  25% { transform: translate(50px, -80px) scale(1.2) rotate(90deg) translate(-50%, -50%); }
  50% { transform: translate(-30px, -20px) scale(0.8) rotate(180deg) translate(-50%, -50%); }
  75% { transform: translate(-70px, 40px) scale(1.1) rotate(270deg) translate(-50%, -50%); }
}

@keyframes blob-move-1 {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg) translate(-50%, -50%); }
  20% { transform: translate(-60px, 30px) scale(1.3) rotate(72deg) translate(-50%, -50%); }
  40% { transform: translate(40px, -50px) scale(0.7) rotate(144deg) translate(-50%, -50%); }
  60% { transform: translate(80px, 20px) scale(1.2) rotate(216deg) translate(-50%, -50%); }
  80% { transform: translate(-20px, -70px) scale(0.9) rotate(288deg) translate(-50%, -50%); }
}

@keyframes blob-move-2 {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg) translate(-50%, -50%); }
  30% { transform: translate(70px, 60px) scale(1.4) rotate(108deg) translate(-50%, -50%); }
  60% { transform: translate(-80px, -30px) scale(0.6) rotate(216deg) translate(-50%, -50%); }
  90% { transform: translate(20px, -90px) scale(1.1) rotate(324deg) translate(-50%, -50%); }
}

@keyframes blob-move-3 {
  0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg) translate(-50%, -50%); }
  16.66% { transform: translate(-40px, -60px) scale(1.1) rotate(60deg) translate(-50%, -50%); }
  33.33% { transform: translate(70px, 30px) scale(0.9) rotate(120deg) translate(-50%, -50%); }
  50% { transform: translate(-10px, 80px) scale(1.3) rotate(180deg) translate(-50%, -50%); }
  66.66% { transform: translate(-90px, -10px) scale(0.8) rotate(240deg) translate(-50%, -50%); }
  83.33% { transform: translate(30px, -70px) scale(1.2) rotate(300deg) translate(-50%, -50%); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .liquid-blob {
    filter: blur(25px) !important;
  }
}

@media (max-width: 480px) {
  .liquid-blob {
    filter: blur(20px) !important;
    opacity: 0.3 !important;
  }
  
  :global(.dark) .liquid-blob {
    opacity: 0.1 !important;
  }
}

/* Performance optimizations */
@media (prefers-reduced-motion: no-preference) {
  .liquid-blob {
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
}
</style>