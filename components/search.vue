<!-- SearchBar -->

<template>
    <section class="bg-sky-50 py-4">
        <div class="mx-auto md:px-40 px-5">
            <div class="flex">
                <input class="border border-navy py-2 px-4 w-full rounded-l-full focus:outline-none focus:ring-2 focus:sky-500"
                type="text" 
                placeholder="Search Books"
                v-model.lazy="searchInput"
                />
               
              <button class="bg-indigo-900 text-white hover:bg-sky-500 hover:text-black py-4 px-4 rounded-r-full"
              type="submit"
              @click="$emit('searchBook', searchInput)"
              >
                Search
              </button>

            </div>

        </div>
    </section>
    
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>

<!-- v-model lazy is used so that data property will not be updated with every keystroke but only when the user either clicks away from the input field or presses Enter -->