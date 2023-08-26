<template>
    <div>
      <nav>
        <!-- bg div -->
        <div class="bg-indigo-900">
  
          <!-- overall nav classes -->
          <div class="max-w-full mx-auto px-8 sm:px-4 lg:px-2">
            <div class="flex justify-between h-16 items-center"> <!-- isme items are center vertically -->
  
              <!-- BookStore title -->
              <div class="flex-shrink-0 flex items-center space-x-2">
  <Icon name="emojione:books" size="2.5em" color="" />
  <h1 class="text-white text-2xl font-bold">BookStore</h1>
</div>

  
              <!-- Nav links -->
              <div class="mt-4 sm:mt-0 sm:ml-6 sm:flex sm:items-center">
                <NuxtLink to="/" class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-sky-500 hover:text-black focus:outline-none focus:bg-sky-500">Home</NuxtLink>
                <NuxtLink to="/login" class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-sky-500 hover:text-black focus:outline-none focus:bg-sky-500">Login</NuxtLink>
                <NuxtLink to="/contact" class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-sky-500 hover:text-black focus:outline-none focus:bg-sky-500">Contact Us</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </template>
  