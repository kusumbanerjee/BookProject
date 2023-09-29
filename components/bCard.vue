<template>
  <!-- the main card design -->
  <div class="bg-white border border-black shadow-md p-2 my-8 mx-4 mb-2">
    <img class="w-full h-96 object-cover mb-4" :src="image" />

    <!-- Displaying title and author from props -->
    <h1 class="font-bold text-2xl mb-4">{{ title }}</h1>
    <h2 class="font-semibold text-lg mb-2">{{ author }}</h2>

    <div class="flex justify-between mt-4 px-4 py-2 space-x-4">
      <!-- Buy option with Amazon link (opens in a new tab) -->
      <a
        :href="'https://www.amazon.in/s?k=' + title"
        class=" text-teal-100 font-medium py-2 px-4 rounded hover:bg-slate-400 bg-slate-700 hover:text-black"
        target="_blank"
      >
        Buy
      </a>

      <!-- Add to Bookmark option -->
      <Dropdown  />

      <!-- View Details button -->
      <NuxtLink
        :to="`books/${bookid}`"
        class="bg-slate-700 text-teal-100 font-medium py-2 px-4 rounded hover:bg-slate-400 hover:text-black"
      >
        View Details
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  image: String,
  author: String,
  bookid: String,
});
</script>
