<template>
  <div class="bg-sky-50 rounded-lg shadow-md overflow-hidden m-4 px-2">
    <div class="p-1 py-4">
      <h3 class="font-semibold text-lg mb-2 text-center"> {{ title }} </h3>
      <div class="overflow-hidden mb-4">
        <img
          class="h w object-cover"
          :src="image"
        />
      </div>

      <div class="mt-4 p-2 text-right">

        <!-- need to view the id page through this button, :to=" `books/${bookid}` -->
        <NuxtLink
          :to="`books/${bookid}`"
          class="bg-indigo-900 text-white font-medium py-2 px-4 rounded hover:bg-sky-500 hover:text-black"
        > View Details
        </NuxtLink>
      </div>
    </div>
  </div>
</template>


<!-- in index.vue, bookdata through array using defineprops -->
 <script setup>
import { defineProps } from 'vue';

 defineProps(["ISBN", "title", "image", "bookid"]);
</script> 



<style scoped>
.h{
    height: 300px;
}
.w{
    width: 250px;
}
</style>