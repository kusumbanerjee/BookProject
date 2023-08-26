
<template>
  <!-- the ultimate bg -->
  <div class="bg-gray-100">
    <!-- <img src="images/white.jpg" alt=""> -->
    <div class="flex w-full min-h-screen justify-center items-center">
      <!-- contact section -->
      <div
        class="flex flex-col md:flex-row md:space-x-6 md:space-y-0 bg-navy w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white"
      >
        <!-- contact info -->
        <div class="flex flex-col space-y-8 justify-between">
          <!-- the div, h1 and para with contact us title -->
          <div class="">
            <h1 class="font-bold text-4xl tracking-wide p-2">
              Login to Your Account
            </h1>
            <p class="pt-4 pb-4 text-indigo-200 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              eveniet fugit nulla, distinctio quisquam vel architecto
            </p>
          </div>
        </div>

        <!-- the form -->

        <div
          class="bg-indigo-200 text-black rounded-xl shadow-lg p-8 pt-4 md:w-80"
        >
          <form action="" class="flex flex-col space-y-4">
            <!-- email -->
            <div>
              <label for=""> Email </label>

              <input
                type="text"
                placeholder="Email Address"
                class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-indigo-700"
              />
            </div>

            <!-- password -->
            <div class="">
              <label for="password" class="block text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-indigo-700"
              />
            </div>

            <button
              class="inline-block w-64 self-end bg-indigo-900 text-white text-sm px-6 py-2 hover:bg-sky-500 hover:text-black rounded-lg transition duration-300 uppercase"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

