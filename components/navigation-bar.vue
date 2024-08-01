<template>
  <div
    class="flex flex-row bg-slate-900 p-2 h-16 items-center rounded-b-md justify-end"
  >
    <button @click="showNav = !showNav">
      <Icon
        :name="showNav ? 'formkit:up' : 'formkit:down'"
        class="mt-2 mr-2 size-9 hover:size-11"
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
