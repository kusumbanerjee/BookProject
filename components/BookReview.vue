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
          class="bg-slate-700 text-white text-sm px-6 py-2 hover:bg-slate-400 hover:text-black rounded-lg transition duration-300"
          @click="submitReview"
        >
          Submit
        </button>
      </div>
    </div>
  </div>

</template>

<script setup>


const reviewText = ref("");
const reviews = ref([]);
const reviewSent = ref(false);

const submitReview = () => {
  if (reviewText.value.trim() !== "") {
    reviews.value.push(reviewText.value);
    reviewText.value = "";
    reviewSent.value = true;
  }
};
</script>
