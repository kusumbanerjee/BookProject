<template>
    <div>
      
        <Search @search-book="SearchBook" />

    <!-- for the book cards -->
    <div
      class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-slate-200"
    >
      <!-- passing the data from the json file, (google api)-->

      <div v-for="book in data.items" :key="book.id">
        <BCard
          :bookid="book.id"
          :title="book.volumeInfo.title"
          :image="book.volumeInfo.imageLinks?.thumbnail"
          :bookmark-status="bookmarkStatus"
        />
      </div>
    </div>
    </div>
    </template>
    <script setup>
        
    const searchBook = (searchInput) => {
      console.log("Search Book :", searchInput);
    };
    const { data: data } = await useFetch(
      "https://www.googleapis.com/books/v1/volumes?q=programming+inauthor:keyes&maxResults=40&key=AIzaSyAlTgCaAkO75NYmltCt8UwRvu6VNZXirv0"
    );
    </script>