<template>
  <div class="bg-slate-900 min-h-screen py-12 px-6 md:px-12">
    <div 
      class="max-w-4xl mx-auto transition ease-in-out duration-700"
      :class="loaded ? 'opacity-100' : 'opacity-0 translate-y-10'"
    >
      <h1 class="text-indigo-400 text-4xl font-bold mb-8 md:text-5xl">
        Get In Touch
      </h1>
      
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Contact Form -->
        <div class="bg-slate-800 p-6 rounded-lg">
          <h2 class="text-white text-2xl font-semibold mb-4">
            Send me a message
          </h2>
          
          <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label for="name" class="block text-white mb-1">Name</label>
              <input 
                id="name"
                v-model="form.name"
                type="text" 
                class="w-full bg-slate-700 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            
            <div class="mb-4">
              <label for="email" class="block text-white mb-1">Email</label>
              <input 
                id="email"
                v-model="form.email"
                type="email" 
                class="w-full bg-slate-700 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            
            <div class="mb-4">
              <label for="subject" class="block text-white mb-1">Subject</label>
              <input 
                id="subject"
                v-model="form.subject"
                type="text" 
                class="w-full bg-slate-700 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            
            <div class="mb-4">
              <label for="message" class="block text-white mb-1">Message</label>
              <textarea 
                id="message"
                v-model="form.message"
                rows="5" 
                class="w-full bg-slate-700 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit"
              class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300 flex justify-center items-center"
              :disabled="submitting"
            >
              <Icon v-if="submitting" name="eos-icons:loading" class="mr-2" />
              {{ submitting ? 'Sending...' : 'Send Message' }}
            </button>
            
            <div v-if="formStatus" class="mt-4 p-3 rounded-md text-center" :class="formStatus.type">
              {{ formStatus.message }}
            </div>
          </form>
        </div>
        
        <!-- Contact Information -->
        <div>
          <div class="bg-slate-800 p-6 rounded-lg mb-6">
            <h2 class="text-white text-2xl font-semibold mb-4">
              Contact Information
            </h2>
            
            <div class="space-y-4">
              <div class="flex items-start">
                <Icon name="mdi:email" class="text-indigo-400 size-6 mr-3 mt-1" />
                <div>
                  <h3 class="text-white font-medium">Email</h3>
                  <a href="mailto:contact@safegergis.com" class="text-indigo-300 hover:text-indigo-200 transition-colors">
                    contact@safegergis.com
                  </a>
                </div>
              </div>
              
              <div class="flex items-start">
                <Icon name="mdi:map-marker" class="text-indigo-400 size-6 mr-3 mt-1" />
                <div>
                  <h3 class="text-white font-medium">Location</h3>
                  <p class="text-gray-300">Orange County, California</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <Icon name="mdi:linkedin" class="text-indigo-400 size-6 mr-3 mt-1" />
                <div>
                  <h3 class="text-white font-medium">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/safe-gergis-2b646419b/" 
                    target="_blank" 
                    class="text-indigo-300 hover:text-indigo-200 transition-colors"
                  >
                    linkedin.com/in/safe-gergis
                  </a>
                </div>
              </div>
              
              <div class="flex items-start">
                <Icon name="mdi:github" class="text-indigo-400 size-6 mr-3 mt-1" />
                <div>
                  <h3 class="text-white font-medium">GitHub</h3>
                  <a 
                    href="https://github.com/safegergis" 
                    target="_blank" 
                    class="text-indigo-300 hover:text-indigo-200 transition-colors"
                  >
                    github.com/safegergis
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="text-center">
            <NuxtLink to="/" class="text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
              Return to home
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const loaded = ref(false);
const submitting = ref(false);
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const formStatus = ref<{ type: string; message: string } | null>(null);

onMounted(() => {
  loaded.value = true;
});

const submitForm = async () => {
  submitting.value = true;
  
  try {
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    formStatus.value = {
      type: 'bg-green-900/50 text-green-400',
      message: 'Thank you! Your message has been sent successfully.'
    };
    
    // Reset form after successful submission
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';
    
  } catch (error) {
    formStatus.value = {
      type: 'bg-red-900/50 text-red-400',
      message: 'Sorry, there was an error sending your message. Please try again.'
    };
  } finally {
    submitting.value = false;
    
    // Clear status message after 5 seconds
    setTimeout(() => {
      formStatus.value = null;
    }, 5000);
  }
};

// SEO Meta Tags
useHead({
  title: "Contact | Safe Gergis",
  meta: [
    {
      name: "description",
      content: "Get in touch with Safe Gergis. Send a message or connect through social media.",
    },
    {
      name: "keywords",
      content: "Contact, Safe Gergis, Message, Email, Social Media",
    },
  ],
  link: [{ rel: "canonical", href: "https://safegergis.com/contact" }],
});
</script>

<style scoped>
</style> 