<script>
  import getMovie from "./composables/getMovie";
  import { onBeforeMount, ref } from "vue";
  import Images from "../Images.vue";
  import LoadingBar from "../LoadingBar.vue";
  import ImageOrPlaceholder from "../ImageOrPlaceholder.vue";

  export default {
    components: {
      Images,
      LoadingBar,
      ImageOrPlaceholder,
    },
    props: ["id"],
    setup(props) {
      const { movie, loading, loadMovie } = getMovie();
      const isOpenVideo = ref(false);

      onBeforeMount(() => {
        loadMovie(props.id);
      });

      return {
        movie,
        loading,
        isOpenVideo,
      };
    },
  };
</script>

<template>
  <div v-if="loading"><loading-bar /></div>
  <div
    class="border-b border-gray-800 movie-info"
    @keydown.esc="isOpenVideo = false"
  >
    <div class="container flex flex-col px-4 py-16 mx-auto md:flex-row">
      <div class="flex-none">
        <image-or-placeholder
          :result="movie"
          size="w400"
          my_key="poster_path"
        />
      </div>
      <div class="md:ml-24">
        <h2 class="mt-4 text-4xl font-semibold md:mt-0">
          {{ movie["name"] }}
        </h2>
        <div class="flex flex-wrap items-center mt-4 text-sm text-gray-700 dark:text-gray-400">
          <svg class="w-4 text-gray-700 fill-current dark:text-myyellow" viewBox="0 0 24 24">
            <g data-name="Layer 2">
              <path
                d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                data-name="star"
              />
            </g>
          </svg>
          <span class="ml-1">{{ Math.round(movie["rating"] * 10 * 2) }}% ({{ movie["numberOfRatings"]}})</span>
          <span class="mx-2">|</span>
          <span>{{ movie["year"] }}</span>
        </div>
        <div class="text-sm text-gray-500 truncate dark:text-gray-400">{{ movie["genres"].toString() }}</div>
        <p class="mt-8 text-gray-700 dark:text-gray-300">{{ movie["overview"] }}</p>
      </div>
    </div>
  </div>
</template>

<style>
</style>
