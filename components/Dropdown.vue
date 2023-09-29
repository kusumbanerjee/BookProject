<template>
  <div class="relative" @click="toggleDropdown">
    <button
      class="text-teal-100 font-medium py-2 px-4 rounded hover:bg-slate-400 bg-slate-700 hover:text-black"
    >
      Bookmark
      <Icon
        :name="isOpen ? 'ph:caret-up' : 'ph:caret-down'"
        class="align-bottom"
      />
    </button>

    <div
      v-if="isOpen"
      class="z-10 bg-teal-50 border-md shadow-lg absolute top-12 max-h-64 overflow-y-scroll cursor-pointer w-fit"
    >
      <ul class="p-1">
        <li
          v-for="option in options"
          :key="option"
          @click="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '/src/lib/supabaseClient';

const isOpen = ref(false);

const options = ['Want to Read', 'Read', 'Reading'];

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = async (option) => {

  try {
    const { error } = await supabase.from('bookmark').upsert([

      {
        id: option,
      },
    ]);

    if (error) throw error;

    alert('Added to bookmarks');
   
  } catch (error) {
    console.error('Error bookmarking book:', error);
    alert('An error occurred... Please try again.');
  }

  isOpen.value = false;
};
</script>