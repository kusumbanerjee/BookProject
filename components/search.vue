<template>
  <div id="search">
    <form @submit.prevent="doSearch">
      <div class="flex justify-center">
        <input
          class="border border-navy my-4 py-4 px-4 w-3/4 rounded-l-full focus:outline-none focus:ring-2 focus:sky-500"
          type="text"
          placeholder="Search Books"
          v-model.lazy="query"
        />
        <button
          class="bg-indigo-900 text-white hover:bg-sky-500 hover:text-black my-4 py-2 px-4 rounded-r-full"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
    <div id="Results" class="mt-4">
      <div v-if="loading">Loading...</div>
      <div v-else-if="results.length > 0">
        <div v-for="book in results" :key="book.id">

          <!-- the entire card clickable -->
          <a :href="book.volumeInfo.previewLink" class="block">
            <div class="flex flex-col sm:flex-row justify-items-center m-10">
              <img
                class="w-full h-96 sm:w-64 sm:h-64 sm:object-cover"
                :src="book.volumeInfo.imageLinks?.thumbnail"
              />

              <div class="bg-white round-lg shadow-md p-2 sm:ml-4">
                <h1 class="font-bold text-2xl mb-2">
                  {{ book.volumeInfo.title }}
                </h1>
                <h2 class="font-semibold text-lg mb-2">
                  Author: {{ book.volumeInfo.authors.join(", ") }}
                </h2>
              </div>
            </div>
          </a>
           
        </div>
      </div>
      <!-- Only display "No results found" jb koi book nhi mili -->
      <div v-else-if="searchExecuted">No results found</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const query = ref("");
const loading = ref(false);
const results = ref([]);
const searchExecuted = ref(false);

const doSearch = async () => {
  loading.value = true;
  results.value = [];

  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
    query.value
  )}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      results.value = data.items;
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    loading.value = false;
    searchExecuted.value = results.value.length === 0;
  }
};
</script>
