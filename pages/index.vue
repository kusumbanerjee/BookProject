<template>
  <div>
    <Hero />
    <Search @search-book="SearchBook" />

    <!-- for the book cards -->
    <div
      class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-sky-50"
    >
      <!-- passing the const data -->

      <div v-for="book in data.items" :key="book.id">
        <BCard
          :bookid="book.id"
          :title="book.volumeInfo.title"
          :image="book.volumeInfo.imageLinks.thumbnail"
        />
      </div>
    </div>
  </div>
</template>
<!--    :ISBN="book.volumeInfo.industryIdentifiers[0].identifier" -->

<script setup>
const { data: data } = await useFetch(
  "https://www.googleapis.com/books/v1/volumes?q=mystery"
);
</script>
