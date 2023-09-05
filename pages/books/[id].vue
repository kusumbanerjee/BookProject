<template>
  <div>
    <BDetail
    :title="details.volumeInfo.title"
    :author="details.volumeInfo.authors[0]"
    :des="details.volumeInfo.description"
    :image="details.volumeInfo.imageLinks.thumbnail"
    :ISBN="details.volumeInfo.industryIdentifiers[0].identifier"
    />
  </div>
</template>


<script setup>
   const {data: details} = await useFetch('https://www.googleapis.com/books/v1/volumes/Dnt8DwAAQBAJ');
</script>



<style scoped></style>