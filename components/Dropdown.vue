<template>
    <div class="relative" @click="toggleDropdown">
      <button class=" text-teal-100 font-medium py-2 px-4 rounded hover:bg-slate-400 bg-slate-700 hover:text-black">
        Bookmark <Icon :name="isOpen ? 'ph:caret-up' : 'ph:caret-down'" class="align-bottom" />
      </button>
  
      <div v-if="isOpen" class="z-10 bg-teal-50 border-md shadow-lg absolute top-12 max-h-64 overflow-y-scroll cursor-pointer w-fit">
        <ul class="p-1">
          <li v-for="option in options" :key="option" @click="selectOption(option)">
            {{ option }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';

  // route
import { useRoute, useRouter } from 'vue-router';
  
  const isOpen = ref(false);
  const router = useRouter();
  const route = useRoute();
  
  const options = ['Want to Read', 'Read', 'Reading'];
  
  function toggleDropdown() {
    isOpen.value = !isOpen.value;
  }
  
  function selectOption(option) {
    // to go to the selected option's page
    switch (option) {
      case 'Want to Read':
        router.push({ name: 'WantToRead' });
        break;
      case 'Read':
        router.push({ name: 'Read' });
        break;
      case 'Reading':
        router.push({ name: 'Reading' });
        break;
      default:
        // Handling other option errors
        console.error('Unknown option:', option);
        break;
    }
  
    isOpen.value = false;
  }
  </script>
  