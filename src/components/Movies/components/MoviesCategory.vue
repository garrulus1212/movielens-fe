<script>
  import getPopularMovies from "../composables/getPopularMovies";
  import MovieCard from "../../MovieCard.vue";
  import {onBeforeMount, onMounted, watchEffect} from "vue";
  import LoadingBar from "../../LoadingBar.vue";

  export default {
    props: ['selectedCategory'],
    components: {
      MovieCard,
      LoadingBar,
    },
    setup(props) {
      const { popularMovies, loading, loadPopularMovies } = getPopularMovies();

      onBeforeMount(() => {
        loadPopularMovies(props.selectedCategory);
      });

      watchEffect(() => {
        loadPopularMovies(props.selectedCategory);
      });

      onMounted(() => {
        window.onscroll = () => {
          let bottomOfWindow =
            document.documentElement.scrollTop + window.innerHeight ===
            document.documentElement.offsetHeight;
          if (bottomOfWindow) {
            loading.value = true;
            setTimeout(() => {
              loadPopularMovies(props.selectedCategory);
            }, 500);
          }
        };
      });

      return { popularMovies, loading };
    },
  };
</script>

<template>
  <div class="container px-4 pt-10 mx-auto">
    <div>
      <h2
        class="pb-6 text-lg font-semibold tracking-wider uppercase  text-myyellow"
      >
        Movies
      </h2>
      <div
        class="grid grid-cols-1 gap-8  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
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
    <div v-if="loading"><loading-bar /></div>
  </div>
</template>

<style>
</style>
