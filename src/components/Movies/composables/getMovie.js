import axios from 'axios';
import { ref } from 'vue';

const getPopularMovies = () => {
  const movie = ref({});
  const error = ref("");
  const loading = ref(false);

  const loadMovie = async (id) => {
    loading.value = true;
    axios.get(`http://127.0.0.1:1323/movies/${id}`)
      .then(res => {
          console.log(res)
        movie.value = res.data;
        loading.value = false;
      }).catch(err => {
        error.value = err.message;
        loading.value = false;
      });
  }

  return { movie, loading, loadMovie };
}

export default getPopularMovies;
