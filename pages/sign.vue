<template>
  <!-- the ultimate bg -->
  <div class="bg-gray-100">
    <div class="flex w-full min-h-screen justify-center items-center">
      <!-- contact section -->
      <div
        class="flex flex-col md:flex-row md:space-x-6 md:space-y-0 bg-navy w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white"
      >
        <!-- contact info -->
        <div class="flex flex-col space-y-8 justify-between">
          <!-- the div, h1 and para with contact us title -->
          <div class="">
            <h1 class="font-bold text-4xl p-2">Sign Up for your account</h1>
            <p class="pt-4 pb-4 text-indigo-200 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              quos numquam? Repudiandae obcaecati quae ex, adipisci praesentium
              ducimus nobis quasi hic doloribus architecto, sit assumenda magnam
              fugiat est non delectus!
            </p>
          </div>
        </div>
        <!-- the form -->
        <div
          class="bg-indigo-200 text-black rounded-xl shadow-lg p-8 pt-4 md:w-80"
        >
          <form @submit.prevent="signup" class="flex flex-col space-y-4">
            <!-- email -->
            <div>
              <label for=""> Email </label>
              <input
                v-model="email"
                type="email"
                placeholder="Email Address"
                class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-indigo-700"
                required
              />
            </div>
            <!-- password -->
            <div class="">
              <label for="password" class="block text-gray-600"
                >Create Password</label
              >
              <input
                v-model="password"
                type="password"
                id="password"
                placeholder="Create password"
                class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-indigo-700"
                required
              />
            </div>
            <div class="">
              <label for="confirmPassword" class="block text-gray-600"
                >Confirm Password</label
              >
              <input
                v-model="confirmPassword"
                type="password"
                id="confirmPassword"
                placeholder="Confirm password"
                class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-indigo-700"
                required
              />
            </div>
            <button
              type="submit"
              class="inline-block w-64 self-end bg-indigo-900 text-white text-sm px-6 py-2 hover:bg-sky-500 hover:text-black rounded-lg transition duration-300 uppercase"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

// supabase probly not working..will figure out
import { createClient } from '@supabase/supabase-js';
import { ref } from 'vue';

 const supabase = createClient('https://txsxagqsqkctnmwfzbbe.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4c3hhZ3FzcWtjdG5td2Z6YmJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3OTEzMTUsImV4cCI6MjAxMDM2NzMxNX0.75Ws41gYiDr98wOqAvo9cHsUxo8OfcSmcogk7j-ueT8');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

// if passwords not matched
const signup = async () => {
  if (password.value !== confirmPassword.value) {
    console.error('Passwords do not match');
    return;
  }

  try {
    const { user, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });

    // errors handling...error txt, success
    if (error) {
      console.error('Error signing up:', error.message);
    
    } else if (user) {
      console.log('User signed up successfully:', user);
     
    }
  } catch (error) {
    console.error('Error signing up:', error.message);
  }
};
</script>
