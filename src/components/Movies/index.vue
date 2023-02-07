<template>
  <div class="container px-4 pt-10 mx-auto">
    <div class="inline-block relative w-64">
      <select v-model="selectedCategory" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
        <option value="">All</option>
        <option v-for="category in categories" :value="category" class="text-gray-700">{{ category }}</option>
      </select>
    </div>
  </div>
  <all-movies :selected-category="selectedCategory"/>

</template>

<script>
  import AllMovies from "./components/AllMovies.vue";
  import getCategories from "@/components/Movies/composables/getCategories";
  import {onBeforeMount} from "vue";

  export default {
    components: { AllMovies },
    props: ['selectedCategory'],
    setup() {
      const { categories, loading, loadCategories } = getCategories();

      onBeforeMount(() => {
        loadCategories();
      });

      return { categories, loading };
    },
    data() {
      return {
        selectedCategory: '',
      };
    },
  };


</script>

<style>
</style>
