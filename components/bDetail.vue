<template>
  <!-- img section -->
  <div class="grid sm:grid-cols-3 gap-7 justify-items-center m-10">
    <div class="bg-white round-lg shadow-md overflow-hidden">
      <h1> {{ title  }}</h1>
      <h3>{{ des }}</h3>
      <h2>{{ author }}</h2>
      <img
        class="h-400 w-300 object-cover"
        :src=  image
        alt=""
      />
    </div>

    <!-- details section -->
    <div class="sm:col-span-2 mx-6">
   

    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

 defineProps(["ISBN", "title", "image", "author", "des"]);
</script>

      <!-- <h1 class="font-bold text-2xl mb-5">Dark Matter</h1>
      <h3 class="font-semibold text-lg mb-5">Author : Blake Crouch</h3>
      <p class="text-gray-500 text-md mb-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
        rerum vel tenetur quasi molestiae! Maiores, nemo rerum repudiandae quis
        dignissimos velit accusantium ut suscipit, aliquam fugiat ipsa! Eveniet,
        possimus reiciendis. -->
      <!-- </p> -->