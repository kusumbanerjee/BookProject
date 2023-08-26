<template>
  <div class="bg-sky-50 rounded-lg shadow-md overflow-hidden m-4 px-2">
    <div class="p-1 py-4">
      <h3 class="font-semibold text-lg mb-2 text-center">Title book</h3>
      <div class="overflow-hidden mb-4">
        <img
          class="h w object-cover"
          src="/BookStore/assets/images/blue.jpg"
        />
      </div>

      <div class="mt-4 p-2 text-right">
        <NuxtLink
          to="#"
          class="bg-indigo-900 text-white font-medium py-2 px-4 rounded hover:bg-sky-500 hover:text-black"
        > View Details
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style scoped>
.h{
    height: 300px;
}
.w{
    width: 250px;
}
</style>