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
        <BCard :bookid="book.id" :ISBN="book.volumeInfo.industryIdentifiers[0].identifier" :title="book.volumeInfo.title" :image="book.volumeInfo.imageLinks.thumbnail" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: data } = await useFetch(
  "https://www.googleapis.com/books/v1/volumes?q=mystery"
);
</script>


 <!-- <!- google api -->
<!-- https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=AIzaSyB_365A3v-S93S4h05_3_gt5PJEL1pHFZw -->
<!-- api openlibrary
 const {data: books,} = await useFetch("https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback=mycallback")

  const bookid = ref(233);
  static writing
 const title = ref("Psychology of Money");  -->

<!-- // const searchBook = (searchInput) => {
   console.log("search text:", searchInput);
 }; -->
