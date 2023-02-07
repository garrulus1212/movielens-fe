<template>
  <div class="container px-4 pt-10 mx-auto">

  <form v-if="!submitted" class="p-6 rounded-lg shadow-md">
    <div class="mb-4">
      <label class="block text-myyellow font-medium mb-2">User ID:</label>
      <input class="w-full border border-gray-400 p-2" type="text" v-model="userId"/>
    </div>
    <div class="mb-4">
      <label class="block text-myyellow font-medium mb-2">Film ID:</label>
      <input class="w-full border border-gray-400 p-2" type="text" v-model="movieId"/>
    </div>
    <div class="mb-4">
      <label class="block text-myyellow font-medium mb-2">Rating:</label>
      <input class="w-full border border-gray-400 p-2" type="text" v-model="rating"/>
    </div>
    <button class="bg-blue-500 hover:bg-blue-700 text-myyellow font-medium py-2 px-4 rounded-lg" @click.prevent="submitForm">Submit</button>
  </form>
  <div v-else class="bg-green-500 text-myyellow p-6 rounded-lg shadow-md text-center" role="alert">
    Your rating was added successfully!
  </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userId: '',
      movieId: '',
      rating: '',
      submitted: false,
    }
  },
  methods: {
    async submitForm() {
      try {
        console.log(this.userId)
        const response = await axios.post(`http://localhost:1323/users/${this.userId}/ratings`, {
          movieId: parseInt(this.movieId),
          rating: parseFloat(this.rating)
        });
        console.log(response.data);
        this.submitted = true;
      } catch (error) {
        console.error(error.message);
      }
    }
  }
}
</script>
