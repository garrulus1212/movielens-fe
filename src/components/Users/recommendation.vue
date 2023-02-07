<template>
  <div class="container px-4 pt-10 mx-auto">
    <h1 class="pb-6 text-lg font-semibold tracking-wider uppercase  text-myyellow">
      Similar Users
    </h1>
    <button></button>
    <h2 class="pb-6 text-md font-semibold tracking-wider uppercase  text-myyellow">
      Users
    </h2>
    <div
        class="grid grid-cols-1 gap-8  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
    >
      <div
          class="mt-3"
          v-for="user in users"
          :key="user.id"
      >

        <div class="mt-2">
          <router-link
              :to="{ name: 'Users', params: { id: user['id'] } }"
              class="mt-2 text-lg dark:hover:text-gray-300 hover:text-gray-500"
          >
            {{ user["id"] }}</router-link
          >
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import { onBeforeMount, ref } from "vue";
import LoadingBar from "../LoadingBar.vue";
import ImageOrPlaceholder from "@/components/ImageOrPlaceholder.vue";
import getUserRecommendation from "@/components/Users/composables/getUserRecommendation";

export default {
  components: {
    ImageOrPlaceholder,
    LoadingBar,
  },
  props: ["id"],
  setup(props) {
    const { users, loading, loadRecommendation } = getUserRecommendation();
    const isOpenVideo = ref(false);

    onBeforeMount(() => {
      loadRecommendation(props.id);
    });

    return {
      users,
      loading,
      isOpenVideo,
    };
  },
};
</script>
<style>
</style>