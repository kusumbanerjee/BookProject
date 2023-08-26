<template>
  <div>
    <Hero />
    <Search @search-book="SearchBook" />

    <!-- for the book cards -->
    <div
      class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-sky-50"
    >
      <!-- passing the const data -->

      <div v-for="n in 8">
        <BCard :bookid="bookid" 
      :title="title" />
      </div>
    
    </div>
  </div>
</template>

<script setup>
// const searchBook = (searchInput) => {
//   console.log("search text:", searchInput);
// };

//  fetching the bookdata, philal and pass it through props in bcard.vue... will be using API fetch for this soon


const bookid = ref(333);
const title = ref("Psychology of Money");
</script>
