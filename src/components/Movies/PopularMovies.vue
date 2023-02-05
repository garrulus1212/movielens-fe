<script lang="ts">
  import { defineComponent, onMounted } from "vue";
  import LoadingBar from "../LoadingBar.vue";
  import MovieCard from "../MovieCard.vue";
  import getPopularMovies from "@/composables/Movies/getPopularMovies";

  export default defineComponent({
    components: { MovieCard, LoadingBar },
    setup() {
      const { popularMovies, loading, loadPopularMovies } = getPopularMovies();
      onMounted(() => {
        loadPopularMovies();
      });

      return { popularMovies, loading };
    },
  });
</script>

<template>
  <div class="container px-4 pt-10 mx-auto">
    <div>
      <h2
        class="pb-6 text-lg font-semibold tracking-wider uppercase text-myyellow"
      >
        Popular Movies
      </h2>
      <div v-if="loading"><loading-bar /></div>
      <div
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      >
        <div
          class="mt-3"
          v-for="popularMovie in popularMovies"
          :key="popularMovie.id"
        >
          <MovieCard
            :movie="popularMovie"
            :genres="popularMovie.genres.toString()"
          />
        </div>
      </div>
    </div>
  </div>
</template>
