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
          class="text-white bg-slate-700  hover:bg-slate-500 hover:text-black my-4 py-2 px-4 rounded-r-full"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
    <div id="Results" class="mt-4">
      <div v-if="loading">Loading...</div>
      <div v-else-if="results.length > 0">
        <div class="flex flex-wrap">
          <div v-for="book in results" :key="book.id" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <!-- Card -->
            <div class="bg-white border border-black shadow-md p-2">
              <a :href="book.volumeInfo.previewLink" target="_blank">
                <img
                  class="w-full h-96 object-cover cursor-pointer"
                  :src="book.volumeInfo.imageLinks?.thumbnail"
                  @click="openImageLink(book.volumeInfo.previewLink)"
                />
              </a>
              <div class="bg-white round-lg shadow-md p-2 mt-2">
                <h1 class="font-bold text-2xl mb-2">
                  {{ book.volumeInfo.title }}
                </h1>
                <h2 class="font-semibold text-lg mb-2">
                  Author: {{ book.volumeInfo.authors.join(", ") }}
                </h2>
                <div class="flex justify-between mt-4 px-4 py-2 space-x-4">
                  <!-- Buy option, amazon link use krke -->
                  <a
                    :href="'https://www.amazon.in/s?k=' + book.volumeInfo.title"
                    class="bg-slate-700 text-white font-medium py-2 px-4 rounded hover:bg-slate-400 hover:text-black"
                  >
                    Buy
                  </a>
                  <!-- Add to Bookmark option -->
                  <Dropdown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Only display "No results found" jb koi book nhi mili -->
      <div v-else-if="searchExecuted" class="text-center mt-4 text-lg">No results found</div>
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

const openImageLink = (link) => {
  window.open(link, "_blank");
};
</script>
