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
        class="bg-indigo-900 text-white font-medium py-2 px-4 rounded hover:bg-sky-500 hover:text-black"
        >Buy</a
      >

      <!-- iss pe kaam krnge..not cmplted -->
      <!-- Add to Bookmark option -->
      <button
        @click="addToBookmark"
        class="bg-indigo-900 text-white font-medium py-2 px-4 rounded hover:bg-sky-500 hover:text-black"
      >
        Bookmark
      </button>

      <NuxtLink
        :to="`books/${bookid}`"
        class="bg-indigo-900 text-white font-medium py-2 px-4 rounded hover:bg-sky-500 hover:text-black"
      >
        View Details
      </NuxtLink>

      
      
     
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

 <!-- trying Star rating feature using vue-star-rating -->
       <!-- <client-only>
    <star-rating 
      v-model="selectedRating"
      :increment="0.5"
      :read-only="false"
      @rating-selected="setRating"
    ></star-rating>
  </client-only> -->
  <!-- inside script, stars-->
<!-- 
 import StarRating from 'vue-star-rating';

let selectedRating = 0;

Function 
  const setRating = (rating) => {
     selectedRating = rating;

}; -->