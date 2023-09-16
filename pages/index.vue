<template>
  <div>
    <Hero />
    <Search @search-book="SearchBook" />

    <!-- for the book cards -->
    <div
      class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-sky-50"
    >
      <!-- Loop through the books from the API response -->

      <div v-for="book in data" :key="book.id">
        <BCard
          :bookid="book.id"
          :title="book.title"
          :author="book.author"
          :des="book.description"
          :image="book.image_url"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch("https://example-data.draftbit.com/books?_limit=200");
</script>
