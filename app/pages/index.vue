<template>
  <div class="min-h-screen">
    <!-- Landing Page Hero Section -->
    <section class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      <!-- Theme Toggle - Floating in top right -->
      <div class="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      <!-- Main Content -->
      <div class="max-w-6xl mx-auto text-center relative z-10">
        <div 
          class="space-y-8"
          :class="loaded ? 'animate-fade-in-up' : 'opacity-0'"
        >
          <!-- Hero Text -->
          <div class="space-y-6">
            <h1 class="text-hero font-bold text-current leading-none">
              Safe <span class="text-blue-500">Gergis</span>
            </h1>
            <h2 class="text-display font-light text-current opacity-80">
              Junior Fullstack Engineer
            </h2>
            <p class="text-body max-w-3xl mx-auto leading-relaxed">
              I craft powerful, efficient web applications that make a difference. 
              Passionate about clean code, innovative solutions, and creating digital experiences that matter.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <NuxtLink to="/projects">
              <Button size="large" class="btn-primary px-8 py-4 text-lg font-semibold !rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]">
                View My Work
              </Button>
            </NuxtLink>
            <NuxtLink to="/contact">
              <Button variant="secondary" size="large" class="btn-secondary px-8 py-4 text-lg font-semibold !rounded-2xl hover:scale-[1.02] transition-all duration-200">
                Get In Touch
              </Button>
            </NuxtLink>
          </div>

          <!-- Social Links -->
          <div class="flex items-center justify-center space-x-6 pt-12">
            <a href="https://github.com/safegergis" target="_blank" aria-label="GitHub" class="group">
              <div class="glass-light p-4 rounded-full transition-all duration-300 group-hover:scale-110 hover:shadow-lg border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center">
                <Icon name="mdi:github" class="w-6 h-6  text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/safe-gergis-2b646419b/" target="_blank" aria-label="LinkedIn" class="group">
              <div class="glass-light p-4 rounded-full transition-all duration-300 group-hover:scale-110 hover:shadow-lg border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center">
                <Icon name="mdi:linkedin" class="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
            </a>
            <a href="https://www.instagram.com/safe.gergis/" target="_blank" aria-label="Instagram" class="group">
              <div class="glass-light p-4 rounded-full transition-all duration-300 group-hover:scale-110 hover:shadow-lg border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center">
                <Icon name="mdi:instagram" class="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
            </a>
            <a href="/resume.pdf" target="_blank" aria-label="Resume" class="group">
              <div class="glass-light p-4 rounded-full transition-all duration-300 group-hover:scale-110 hover:shadow-lg border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center">
                <Icon name="lucide:file-text" class="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Divider -->
      <div class="absolute bottom-0 left-0 right-0">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center py-12">
            <div class="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
            <div class="glass-light px-6 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50">
              <span class="text-sm font-medium text-gray-600 dark:text-gray-400">Explore my work</span>
            </div>
            <div class="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
          </div>
        </div>
      </div>

    </section>
    
    <!-- Projects Section -->
    <section 
      class="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      ref="projectSection"
    >
      <div class="max-w-7xl mx-auto relative z-10">
        <div 
          class="space-y-12"
          :class="projectsVisible ? 'animate-fade-in-up' : 'opacity-0'"
        >
          <div class="text-center space-y-4">
            <h2 class="text-display text-current">Featured Projects</h2>
            <p class="text-body max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for creating 
              meaningful digital experiences.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              v-for="project in projects"
              :key="project.id" 
              :class="[
                'hover:scale-[1.02] transition-all duration-300 cursor-pointer group',
                isDark ? 'bg-slate-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300'
              ]"
              @click="navigateTo(project.link)"
            >
              <template #title>{{ project.name }}</template>
              <template #content>
                <p class="text-body line-clamp-4 mb-4">
                  {{ project.description }}
                </p>
                <div class="flex items-center justify-between pt-4 border-t border-current border-opacity-10">
                  <span class="text-sm text-blue-500 font-medium group-hover:text-blue-600 transition-colors">
                    Learn more
                  </span>
                  <Icon
                    name="lucide:arrow-up-right"
                    class="w-5 h-5 text-current opacity-60 group-hover:opacity-100 group-hover:text-blue-500 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </template>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section 
      class="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      ref="gallerySection"
    >
      <div class="max-w-7xl mx-auto relative z-10">
        <div 
          class="space-y-12"
          :class="galleryVisible ? 'animate-fade-in-up' : 'opacity-0'"
        >
          <div class="text-center space-y-4">
            <h2 class="text-display text-current">Photography</h2>
            <p class="text-body max-w-2xl mx-auto">
              Capturing moments and exploring the world through my lens.
            </p>
            <NuxtLink 
              to="/gallery" 
              class="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
            >
              View full gallery
              <Icon name="lucide:arrow-right" class="ml-2 w-4 h-4" />
            </NuxtLink>
          </div>
          
          <Card :class="[
            isDark ? 'bg-slate-800 border-gray-700' : 'bg-white border-gray-200'
          ]">
            <template #content>
              <ImageWidget 
                :images="images" 
                :filter-featured="true"
                :num-visible="3"
                :autoplay-interval="2000"
                image-provider="cloudinary"
                image-class="object-cover"
                class="w-full" 
              />
            </template>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface project {
  name: string;
  description: string;
  id: number;
  link: string;
}
const projects: project[] = [
  {
    name: "Playability",
    description:
      "Playability is a full stack web app dedicated to making video games more accessible and inclusive for everyone, especially those with disabilities. Our mission is to empower gamers of all abilities by providing comprehensive accessibility information and fostering a community-driven approach to game accessibility.",
    id: 0,
    link: "projects/playability",
  },
  {
    name: "BETA Biomed",
    description:
      "BETA Biomed's new biomedical equipment website, built on Nuxt, combines performance and SEO to connect researchers and healthcare providers with the tools they need.  Responsive design ensures accessibility on any device.",
    id: 1,
    link: "projects/beta-biomed",
  },
  {
    name: "Archangel Michael Church Website",
    description:
      "This project is a dynamic web application built using the Django framework, HTML, CSS (Bootstrap), and JavaScript. My primary goal with this project is to create a visually appealing website with interactive animations.",
    id: 2,
    link: "projects/aamc-website",
  },
  {
    name: "React Native Job Searching App",
    description:
      "A user-friendly mobile app built with React Native that helps users connect with their dream job. JobFinder leverages the power of the RapidAPI job search API to deliver a seamless and effective job searching experience.",
    id: 3,
    link: "projects/rn-jobsearch",
  },
  {
    name: "AlgoCompare",
    description:
      "AlgoCompare is a web application that allows users to compare the performance of different algorithims for sorting. It allows users to enter an array and select an algorithim to sort the array. ",
    id: 4,
    link: "projects/algocompare",
  },
];

const { data } = await useFetch("/api/images");
const images = data.value?.images!;

const { isDark } = useTheme();
const loaded = ref(false);

onMounted(() => {
  loaded.value = true;
});

const projectSection = ref(null);
const gallerySection = ref(null);

const projectsVisible = useElementVisibility(projectSection);
const galleryVisible = useElementVisibility(gallerySection);

// SEO Meta Tags
useHead({
  title: "Safe Gergis - Junior Fullstack Engineer",
  meta: [
    {
      name: "description",
      content:
        "Safe Gergis is a Junior Fullstack Engineer building powerful and efficient web applications. Check out projects and photography.",
    },
    {
      name: "keywords",
      content:
        "Fullstack Engineer, Web Developer, Portfolio, Safe Gergis, Programming, Web Applications, Photography",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
  link: [{ rel: "canonical", href: "https://safegergis.com/" }],
});
</script>

