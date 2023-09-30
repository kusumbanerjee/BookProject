<template>
  <div>
    <Hero />

    <Content />
    <div
      class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-slate-200"
    >
      <!-- passing the data from the json file, (google api)-->

      <div v-for="book in data.items" :key="book.id">
        <IndexC
          :bookid="book.id"
          :title="book.volumeInfo.title"
          :image="book.volumeInfo.imageLinks?.thumbnail"
        />
      </div>
    </div>
  </div>
  <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      :prevPage="prevPage"
      :nextPage="nextPage"
    />
</template>
<script setup>



const isUserSignedIn = ref(false);
const { data: data } = await useFetch(
  "https://www.googleapis.com/books/v1/volumes?q=programming+inauthor:keyes&maxResults=40&key=AIzaSyAlTgCaAkO75NYmltCt8UwRvu6VNZXirv0"
);
</script>
