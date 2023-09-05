<template>
  <div>
    <BDetail
      :title="details.volumeInfo.title"
      :des="details.volumeInfo.description"
      :image="details.volumeInfo.imageLinks.thumbnail"
    />
  </div>
</template>
<!--  :author="details.volumeInfo.authors[0]" -->
<!-- :ISBN="details.volumeInfo.industryIdentifiers[0].identifier" -->

<script setup>
const { data: details } = await useFetch(
  "https://www.googleapis.com/books/v1/volumes/Dnt8DwAAQBAJ"
);
</script>

<!-- trying to implement ssr -->
<!-- //   import { onRender, useFetch } from '@nuxt/http';

// const Data = async () => {
//   try {
//     const { data: Data } = await useFetch(
//       "https://www.googleapis.com/books/v1/volumes?q=mystery"
//     );

  
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// onRender(Data); -->

<style scoped></style>
