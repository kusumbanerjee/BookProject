<template>
  <div>
    <h1>Explore Romantic Shelf</h1>
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      :prevPage="prevPage"
      :nextPage="nextPage"
    />

    <div
      class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-slate-200"
    >
      <div v-for="book in data.items" :key="book.id">
        <BCard
          :bookid="book.id"
          :title="book.volumeInfo.title"
          :image="book.volumeInfo.imageLinks?.thumbnail"
        />
      </div>
    </div>
  </div>
</template>

<script setup>


const { data } = await useFetch(
  "https://www.googleapis.com/books/v1/volumes?q=romantic+inauthor:keyes&maxResults=40&key=AIzaSyAlTgCaAkO75NYmltCt8UwRvu6VNZXirv0" // Replace with your API key
);
</script>
