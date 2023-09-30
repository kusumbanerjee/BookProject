<template>
  <div class="flex flex-col sm:flex-row justify-items-center m-10 ">
    <img class="w-full h-96 sm:w-64 sm:h-64 sm:object-cover" :src="image" />
    <div class="bg-white round-lg shadow-md p-2 sm:ml-4">
      <h1 class="font-bold text-2xl mb-2">{{ title }}</h1>
      <h2 class="font-semibold text-lg mb-2">{{ author }}</h2>
      <!-- using v-html to fix pehle jo pura html tag aa rhi thhi in des-->
      <div class="text-gray-500 text-md mb-2" v-html="renderedDescription"></div>
    </div>
  </div>
  <!-- Review component -->
  <BookReview :book="book" />
</template>

<script setup>
import BookReview from '@/components/BookReview.vue';



const { title, image, author, des } = defineProps(['title', 'image', 'author', 'des']);

// Func to render the description as HTML
const renderDescriptionAsHTML = (description) => {
 
  const sanitizedHTML = description.replace(/<\/?[^>]+(>|$)/g, '');
  return sanitizedHTML;
};

const renderedDescription = renderDescriptionAsHTML(des);
</script>
