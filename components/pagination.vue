<template>
    <div class="flex justify-center mt-4 space-x-2 py-8">
      <!-- Backward arrow  -->
      <nuxt-link
        @click="prevPage"
        :to="currentPage === 1 ? '/' : `/page${currentPage - 1}`"
        class="px-3 py-1 mx-1 rounded cursor-pointer"
      >
        &lt;
      </nuxt-link>
  
      <!-- Page buttons -->
      <nuxt-link
        v-for="page in totalPages"
        :key="page"
        :to="page === 1 ? '/' : `/page${page}`"
        :class="{
          'bg-slate-700 text-white': currentPage === page,
          'bg-slate-300': currentPage !== page
        }"
        class="px-3 py-1 mx-1 rounded cursor-pointer"
      >
        {{ page }}
      </nuxt-link>
  
      <!-- Forward arrow -->
      <nuxt-link
        @click="nextPage"
        :to="currentPage === totalPages ? `/page${totalPages}` : `/page${currentPage + 1}`"
        class="px-3 py-1 mx-1 rounded cursor-pointer"
      >
        &gt;
      </nuxt-link>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
  
  const currentPage = ref(1);
  const totalPages = 6; 
  
  const route = useRoute();
  const router = useRouter();
  

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
      const targetPage = currentPage.value === 1 ? '/' : `/page${currentPage.value}`;
      router.push(targetPage);
    } else {
      // from 2, to the index page(1)
      router.push('/');
    }
  };
  
  const nextPage = () => {
    if (currentPage.value < totalPages) {
      currentPage.value++;
      router.push(`/page${currentPage.value}`);
    }
  };
  </script>
  