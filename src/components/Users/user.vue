<template>
  <div class="container px-4 pt-10 mx-auto">
    <div>
    <h1 class="pb-6 text-lg font-semibold tracking-wider uppercase  text-myyellow">

      User_Id: {{ user["id"] }}
    </h1>
    </div>
    <router-link
        :to="{ name: 'Rec', params: { id: user['id'] } }"
        class="mt-2 text-lg dark:hover:text-gray-300 hover:text-gray-500"
    >
      Get similar users</router-link
    >
    <h2 class="pb-6 text-md font-semibold tracking-wider uppercase  text-myyellow">
      Ratings
    </h2>
    <div
        class="grid grid-cols-1 gap-8  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
    >
      <div
          class="mt-3"
          v-for="rating in user['ratings']"
          :key="rating.id"
      >
        <div class="mt-2">
          <router-link
              :to="{ name: 'MoviesShow', params: { id: rating['movieId'] } }"
              class="mt-2 text-lg dark:hover:text-gray-300 hover:text-gray-500"
          >
            {{ rating["name"] }}</router-link
          >
          <div class="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
            <svg class="w-4 text-gray-700 fill-current dark:text-myyellow" viewBox="0 0 24 24">
              <g data-name="Layer 2">
                <path
                    d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                    data-name="star"
                />
              </g>
            </svg>
            <span class="ml-1">{{ Math.round(rating["rating"] * 10 * 2) }}%</span>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import getUser from "./composables/getUser";
import { onBeforeMount, ref } from "vue";
import LoadingBar from "../LoadingBar.vue";
import ImageOrPlaceholder from "@/components/ImageOrPlaceholder.vue";

export default {
  components: {
    ImageOrPlaceholder,
    LoadingBar,
  },
  props: ["id"],
  setup(props) {
    const { user, loading, loadUser } = getUser();
    const isOpenVideo = ref(false);

    onBeforeMount(() => {
      loadUser(props.id);
    });

    return {
      user,
      loading,
      isOpenVideo,
    };
  },
};
</script>
<style>
</style>