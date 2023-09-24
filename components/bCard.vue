<template>
  <!-- the main..whole card design -->
  <div class="bg-white border border-black shadow-md p-2 my-8 mx-4 mb-2">
    <img class="w-full h-96 object-cover mb-4" :src="image" />

    <!-- displaying title, author from index pg -->
    <h1 class="font-bold text-2xl mb-4">{{ title }}</h1>
    <h2 class="font-semibold text-lg mb-2">{{ author }}</h2>

    <div class="flex justify-between mt-4 px-4 py-2 space-x-4">
      <!-- Buy option, amazon link use krke -->
    
      <a
        :href="'https://www.amazon.in/s?k=' + title"
        class="bg-indigo-900 text-white font-medium py-2 px-4 rounded hover:bg-sky-500 hover:text-black"
        >Buy</a
      >
      
      <!-- iss pe kaam krnge..not cmplted -->
      <!-- Add to Bookmark option -->
     
        <Dropdown />
   

      <NuxtLink
        :to="`books/${bookid}`"
        class="bg-indigo-900 text-white font-medium py-2 px-4 rounded hover:bg-sky-500 hover:text-black"
      >
        View Details
      </NuxtLink>

      
      <!-- try -->
      <div v-for="book in results" :key="book.id">

<!-- the entire card clickable -->
<a :href="book.volumeInfo.previewLink" class="block">
  <div class="flex flex-col sm:flex-row justify-items-center m-10">
    <img
      class="w-full h-96 sm:w-64 sm:h-64 sm:object-cover"
      :src="book.volumeInfo.imageLinks?.thumbnail"
    />

    <div class="bg-white round-lg shadow-md p-2 sm:ml-4">
      <h1 class="font-bold text-2xl mb-2">
        {{ book.volumeInfo.title }}
      </h1>
      <h2 class="font-semibold text-lg mb-2">
        Author: {{ book.volumeInfo.authors.join(", ") }}
      </h2>
    </div>
  </div>
</a>
 
</div>
     
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
