<template>
  <div class="bg-slate-900 min-h-screen py-12 px-6 md:px-12">
    <div 
      class="max-w-5xl mx-auto transition ease-in-out duration-700"
      :class="loaded ? 'opacity-100' : 'opacity-0 translate-y-10'"
    >
      <h1 class="text-indigo-400 text-4xl font-bold mb-8 md:text-5xl">
        Skills & Technologies
      </h1>

      <div class="mb-12">
        <h2 class="text-white text-2xl font-semibold mb-4">
          Frontend Development
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <SkillCard name="Vue.js" level="Advanced" icon="logos:vue" />
          <SkillCard name="React" level="Proficient" icon="logos:react" />
          <SkillCard name="JavaScript" level="Advanced" icon="logos:javascript" />
          <SkillCard name="TypeScript" level="Proficient" icon="logos:typescript-icon" />
          <SkillCard name="HTML5" level="Advanced" icon="logos:html-5" />
          <SkillCard name="CSS3" level="Advanced" icon="logos:css-3" />
          <SkillCard name="Tailwind CSS" level="Advanced" icon="logos:tailwindcss-icon" />
          <SkillCard name="React Native" level="Intermediate" icon="logos:react" />
        </div>
      </div>

      <div class="mb-12">
        <h2 class="text-white text-2xl font-semibold mb-4">
          Backend Development
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <SkillCard name="Node.js" level="Proficient" icon="logos:nodejs-icon" />
          <SkillCard name="Django" level="Intermediate" icon="logos:django-icon" />
          <SkillCard name="Express" level="Proficient" icon="logos:express" />
          <SkillCard name="Python" level="Proficient" icon="logos:python" />
          <SkillCard name="MongoDB" level="Intermediate" icon="logos:mongodb" />
          <SkillCard name="MySQL" level="Intermediate" icon="logos:mysql" />
          <SkillCard name="Firebase" level="Intermediate" icon="logos:firebase" />
          <SkillCard name="REST APIs" level="Proficient" icon="mdi:api" />
          <SkillCard name="Golang" level="Intermediate" icon="logos:go" />
          <SkillCard name="Rust" level="Beginner" icon="logos:rust" />
        </div>
      </div>

      <div class="mb-12">
        <h2 class="text-white text-2xl font-semibold mb-4">
          Tools & Others
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <SkillCard name="Git" level="Proficient" icon="logos:git-icon" />
          <SkillCard name="Docker" level="Intermediate" icon="logos:docker-icon" />
          <SkillCard name="AWS" level="Beginner" icon="logos:aws" />
          <SkillCard name="Figma" level="Intermediate" icon="logos:figma" />
          <SkillCard name="VS Code" level="Advanced" icon="logos:visual-studio-code" />
          <SkillCard name="Agile" level="Intermediate" icon="mdi:agile" />
          <SkillCard name="Unity" level="Intermediate" icon="logos:unity" />
        </div>
      </div>

      <div class="text-center mt-8">
        <NuxtLink to="/" class="text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
          Return to home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const loaded = ref(false);

onMounted(() => {
  loaded.value = true;
});

// SEO Meta Tags
useHead({
  title: "Skills & Technologies | Safe Gergis",
  meta: [
    {
      name: "description",
      content:
        "Explore Safe Gergis's technical skills and expertise in frontend, backend development, and various technologies.",
    },
    {
      name: "keywords",
      content:
        "Skills, Technologies, Vue.js, React, JavaScript, TypeScript, Node.js, Django, Safe Gergis",
    },
  ],
  link: [{ rel: "canonical", href: "https://safegergis.com/skills" }],
});
</script> 