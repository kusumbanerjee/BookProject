<template>
    <div>
      
        <Search @search-book="SearchBook" />
        <About/>

    <!-- for the book cards -->
    <div
      class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-slate-200"
    >
     

      <div v-for="book in data.items" :key="book.id">
        <BCard
          :bookid="book.id"
          :title="book.volumeInfo.title"
          :image="book.volumeInfo.imageLinks?.thumbnail"
        />
        
        <!-- <Dropdown :book="book" /> -->
      </div>
    </div>
    </div>
    </template>
    <script setup>
    import { supabase } from "/src/lib/supabaseClient";
    console.log(supabase.auth.getUser())
    
        
    const searchBook = (searchInput) => {
      console.log("Search Book :", searchInput);
    };
    const { data: data } = await useFetch(
      "https://www.googleapis.com/books/v1/volumes?q=mystery+inauthor:keyes&maxResults=40&key=AIzaSyAlTgCaAkO75NYmltCt8UwRvu6VNZXirv0"
    );
    </script>