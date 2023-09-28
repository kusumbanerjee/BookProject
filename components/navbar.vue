<template>
  <div>
    <nav class="bg-slate-800">
      <div class="max-w-full mx-auto px-8 sm:px-4 lg:px-2">
        <div class="flex justify-between h-16 items-center">
          <div class="flex-shrink-0 flex items-center space-x-2">
            <Icon name="emojione:books" size="2.5em" color="" />
            <h1 class="text-teal-200 font-mono text-2xl font-bold">BookStore</h1>
          </div>

          <div class="mt-4 sm:mt-0 sm:ml-6 sm:flex sm:items-center">
            <NuxtLink
              to="/"
              class="px-3 py-2 rounded-md text-sm font-medium text-teal-200 font-mono hover:bg-slate-400 hover:text-black focus:bg-slate-400"
            >Home</NuxtLink>

            <NuxtLink
              to="/shelf"
              class="px-3 py-2 rounded-md text-sm font-medium text-teal-200 font-mono hover:bg-slate-400 hover:text-black focus:bg-slate-400"
            >Shelf </NuxtLink>

            <NuxtLink
              to="/login"
              class="px-3 py-2 rounded-md text-sm font-medium text-teal-200 font-mono hover:bg-slate-400 hover:text-black focus:bg-slate-400 ml-2"
            >Login</NuxtLink>

            <NuxtLink
              to="/contact"
              class="px-3 py-2 rounded-md text-sm font-medium text-teal-200 font-mono hover:bg-slate-400 hover:text-black focus:bg-slate-400 ml-2"
            >Contact Us</NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
