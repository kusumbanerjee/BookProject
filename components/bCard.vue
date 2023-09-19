<template>
  <!-- the main..whole card design -->
  <div class="bg-white border border-gray-100 shadow-md p-2 my-8 mx-4 mb-2">
    <img class="w-full h-96 object-cover mb-4" :src="image" />

    <!-- displaying title, author from index pg -->
    <h1 class="font-bold text-2xl mb-4">{{ title }}</h1>
    <h2 class="font-semibold text-lg mb-2">{{ author }}</h2>

    <div class="flex justify-between mt-4 px-4 py-2 space-x-4">
      <!-- Buy option, amazon link use krke -->
      <a
        :href="'https://www.amazon.in/s?k=' + title"
        class="text-navy hover:underline hover:text-blue-700"
        >Buy</a
      >

      <!-- inn dono pe kaam krnge..not cmplted -->
      <!-- Add to Bookmark option -->
      <button
        @click="addToBookmark"
        class="text-navy hover:underline hover:text-blue-700"
      >
        Add to Bookmark
      </button>

      <!-- Read About the Book option -->
      <a
        :href="'/book/' + bookid"
        class="text-navy hover:underline hover:text-blue-700"
        >Read About the Book</a
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  image: String,
  author: String,
  bookid: String,
});
</script>
