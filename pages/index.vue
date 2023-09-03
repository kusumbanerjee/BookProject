<template>
  <div>
    <Hero />
    <Search @search-book="SearchBook" />

    <!-- for the book cards -->
    <div
      class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-sky-50"
    >
      <!-- passing the const data -->

      <div v-for="book in books" :key="book.key">
        <BCard :ISBN="book.isbn" :title="book.title" :image="book.image" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: books } = await useFetch(
  "https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data"
);
</script>

<!-- // const searchBook = (searchInput) => {
//   console.log("search text:", searchInput);
// };

 <!- google api -->
<!-- https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=AIzaSyB_365A3v-S93S4h05_3_gt5PJEL1pHFZw -->
<!-- // api openlibrary
// const {data: books,} = await useFetch("https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback=mycallback")

// static writing
// const bookid = ref(233);
// const title = ref("Psychology of Money");  -->
