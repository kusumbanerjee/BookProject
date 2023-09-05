<template>
  <!-- img section -->
  <div class="flex flex-col sm:flex-row justify-items-center m-10">
    <img class="w-full h-96 sm:w-64 sm:h-64 sm:object-cover" :src="image" />

    <div class="bg-white round-lg shadow-md p-2 sm:ml-4">
      <h1 class="font-bold text-2xl mb-2">{{ title }}</h1>
      <h2 class="font-semibold text-lg mb-2">{{ author }}</h2>
      <h3 class="text-gray-500 text-md mb-2">{{ des }}</h3>
    </div>
  </div>
</template>

<script setup>
// import { defineProps } from "vue";

defineProps(["ISBN", "title", "image", "author", "des"]);
</script>
