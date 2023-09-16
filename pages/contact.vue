<template>
  <!-- the ultimate bg -->
  <div class=" bg-gray-100">
    <div class="flex w-full min-h-screen justify-center items-center">
      <!-- contact section -->
      <div
        class="flex flex-col md:flex-row md:space-x-6 md:space-y-0 bg-navy w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white"
      >
        <!-- contact info -->
        <div class="flex flex-col space-y-8 justify-between">
          <!-- the div, h1 and para with contact us title -->
          <div class="">
            <h1 class="font-bold text-4xl tracking-wide p-2">Contact Us</h1>
            <p class="pt-2 text-indigo-200 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              eveniet fugit nulla, distinctio quisquam vel architecto
            </p>
          </div>

          <!-- parent div of three -->
          <div class="flex flex-col space-y-6 pb-6">
            <div class="inline-flex space-x-2 items-center">
              <Icon name="material-symbols:call" size="1.5em" color="white" />
              <span class="text-indigo-200"> 9874598986 </span>
            </div>

            <div class="inline-flex space-x-2 items-center">
              <Icon name="mdi:email" size="1.5em" color="white" />
              <span class="text-indigo-200">
                bookstore.official@outlook.com
              </span>
            </div>

            <div class="inline-flex space-x-2 items-center">
              <Icon name="mdi:google-maps" size="1.5em" color="white" />
              <span class="text-indigo-200">
                Juhu-tara road, Mumbai-400049
              </span>
            </div>
          </div>
        </div>

        <!-- contact form -->

        <div class="bg-indigo-200 text-black rounded-xl shadow-lg p-8 pt-4 md:w-80">
          <form action="" class="flex flex-col space-y-4">
            <!-- name -->
            <div>
              <label for=""> Name </label>
              <!-- erase this & dynamically pass by defineprops -->

              <input
                type="text"
                placeholder="Your Name"
                class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-indigo-700"
              />
            </div>

            <!-- email -->
            <div>
              <label for=""> Email </label>

              <input
                type="text"
                placeholder="Email Address"
                class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-indigo-700"
              />
            </div>

            <!-- msg -->
            <div>
              <label for=""> Message </label>

              <!-- to expand the message area -->
              <textarea
                placeholder="message" rows="4 "
                class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-indigo-700"
             ></textarea>
            </div>

            <button class="inline-block w-64 self-end bg-indigo-900 text-white text-sm px-6 py-2 hover:bg-sky-500 hover:text-black rounded-lg transition duration-300 uppercase"> Send Message </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

