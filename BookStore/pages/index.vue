<template>
    <div>
      <Hero/>
      <Search @search-book="SearchBook"/>
         
      <!-- for the book cards -->
      <div class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-sky-50">
          <BCard/>
          <BCard/>
          <BCard/>
        </div>
    </div>
</template>

<script setup>
 const searchBook = (searchInput) => {
  console.log("search text:", searchInput);
 };
</script>