<template>
  <div>
    <h1>Explore Romantic Shelf</h1>
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      :prevPage="prevPage"
      :nextPage="nextPage"
    />

    <div v-for="book in data.items" :key="book.id">
      <BCard
        :bookid="book.id"
        :title="book.volumeInfo.title"
        :image="book.volumeInfo.imageLinks?.thumbnail"
      />
    </div>
  </div>
</template>

<script setup>
onBeforeMount(() => {
  const page = parseInt(route.params.page);
  if (!isNaN(page) && page >= 1 && page <= totalPages) {
    currentPage.value = page;
  } else {
    currentPage.value = 3;
  }
});

const { data } = await useFetch(
  "https://www.googleapis.com/books/v1/volumes?q=romantic+inauthor:keyes&maxResults=40&key=AIzaSyAlTgCaAkO75NYmltCt8UwRvu6VNZXirv0" // Replace with your API key
);
</script>
