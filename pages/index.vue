<template>
  <div>
    <Hero />
    <Search @search-book="SearchBook" />

    <!-- for the book cards -->
    <div
      class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-sky-50"
    >
      <!-- passing the const data -->

      <div v-for="n in 7">
        <BCard :bookid="bookid" :title="title" />
      </div>
    </div>
  </div>
</template>

<script setup>
const bookid = ref(233);
const title = ref("Psychology of Money");
</script>
