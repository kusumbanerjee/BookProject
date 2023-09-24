<template>
  <div>
    <BDetail
      :title="details.volumeInfo.title"
      :des="details.volumeInfo.description"
      :image="details.volumeInfo.imageLinks.thumbnail"
    />
  </div>
</template>

<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const bookId = route.params.id;

const fetchData = async () => {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
    const responseData = response.data;
    return { details: responseData };
  } catch (error) {
    console.error("Error:", error);
    return { details: null };
  }
};

const { details } = await fetchData();
</script>

