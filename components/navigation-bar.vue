<template>
  <div
    class="flex flex-row bg-blue-800 p-2 h-16 items-center justify-center rounded-b-md"
  >
    <div class="flex-1"></div>
    <NuxtLink to="/">
      <h1 class="font-sans text-3xl text-white font-bold">Safe Gergis</h1>
    </NuxtLink>
    <button class="flex-1" @click="showNav = !showNav">
      <Icon
        :name="showNav ? 'formkit:up' : 'formkit:down'"
        class="mt-2 size-9 hover:size-11"
        style="color: white"
      />
    </button>
  </div>
  <div
    :class="showNav ? 'flex' : 'hidden'"
    class="flex flex-col items-center bg-slate-50"
  >
    <ul>
      <li class="m-2" v-for="page in nav">
        <NuxtLink :to="page.to">{{ page.label }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
];

const showNav = ref(false);
</script>

<style></style>
