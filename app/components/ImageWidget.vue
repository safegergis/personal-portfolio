<template>
  <div class="my-6">
    <Carousel 
      v-if="carouselImages.length > 0"
      :value="carouselImages" 
      :num-visible="numVisible" 
      :num-scroll="1" 
      :circular="true"
      :autoplay-interval="autoplayInterval"
      :show-indicators="showIndicators"
      :show-navigators="showNavigators"
      :responsive-options="responsiveOptions"
      :unstyled="false"
    >
      <template #item="slotProps">
        <div class="carousel-item-wrapper">
          <NuxtImg
            :provider="imageProvider"
            :src="getImageSrc(slotProps.data)"
            :alt="getImageAlt(slotProps.data, slotProps.index)"
            class="carousel-image"
            :class="imageClass"
          />
        </div>
      </template>
    </Carousel>
    <div v-else class="empty-state">
      <Icon name="lucide:image-off" class="w-12 h-12 text-gray-400 mb-4" />
      <p class="text-gray-500 text-center">{{ emptyMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ImageObject {
  id: string;
  tags: string[];
}

type ImageInput = string | ImageObject;

const props = withDefaults(defineProps<{
  images: ImageInput[];
  // Display options
  numVisible?: number;
  showIndicators?: boolean;
  showNavigators?: boolean;
  autoplayInterval?: number;
  // Filtering
  filterFeatured?: boolean;
  // Styling
  imageClass?: string;
  emptyMessage?: string;
  // Provider
  imageProvider?: string;
}>(), {
  numVisible: 1,
  showIndicators: true,
  showNavigators: true,
  autoplayInterval: 4000,
  filterFeatured: false,
  imageClass: 'object-cover',
  emptyMessage: 'No images available',
  imageProvider: undefined
});

const { isDark } = useTheme();

// Process images based on type and filtering
const carouselImages = computed(() => {
  if (!props.images || props.images.length === 0) return [];
  
  if (props.filterFeatured) {
    return props.images.filter((image): image is ImageObject => 
      typeof image === 'object' && image.tags?.includes('featured')
    );
  }
  
  return props.images;
});

// Responsive options
const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: Math.min(props.numVisible, 3),
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: Math.min(props.numVisible, 2),
    numScroll: 1
  },
  {
    breakpoint: '640px',
    numVisible: 1,
    numScroll: 1
  }
];

// Helper functions
const getImageSrc = (image: ImageInput): string => {
  return typeof image === 'string' ? image : image.id;
};

const getImageAlt = (image: ImageInput, index: number): string => {
  const baseAlt = typeof image === 'string' ? 'Image' : 'Photo';
  return `${baseAlt} ${index + 1}`;
};

</script>

<style scoped>
.carousel-item-wrapper {
  @apply p-3;
}

.carousel-image {
  @apply w-full h-48 md:h-64 lg:h-80 object-cover rounded-lg shadow-lg transition-transform hover:scale-105;
}

.empty-state {
  @apply flex flex-col items-center justify-center p-12 rounded-lg bg-gray-50 border border-gray-200;
}

:global(.dark) .empty-state {
  @apply bg-gray-800 border-gray-700;
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .carousel-image {
    @apply h-40;
  }
  
  .carousel-item-wrapper {
    @apply p-2;
  }
}
</style>
