<template>
  <div class="flex justify-end m-4">
    <div>
      <!-- Review -->
      <textarea
        class="ring-1 ring-gray-300 w-64 rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-indigo-700"
        v-model="reviewText"
        placeholder="Write your review"
      ></textarea>
      <div>
        <!-- Submit button -->
        <button
          class="bg-indigo-900 text-white text-sm px-6 py-2 hover:bg-sky-500 hover:text-black rounded-lg transition duration-300"
          @click="submitReview"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// need to fix script thoda..
import { ref } from "vue";

const reviews = ref("");
const reviewSent = ref(false);

const submitReview = () => {
  reviewSent.value = true;

  reviews.value = "";
};
</script>
