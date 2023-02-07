import axios from 'axios';
import { ref } from 'vue';

const getUserRecommendation = () => {
  const users = ref({});
  const error = ref("");
  const loading = ref(false);

  const loadRecommendation = async (id) => {
    loading.value = true;
    axios.get(`http://127.0.0.1:1323/users/${id}/recommendations/neigh`)
      .then(res => {
          console.log(res)
          users.value = res.data;
        loading.value = false;
      }).catch(err => {
        error.value = err.message;
        loading.value = false;
      });
  }

  return { users, loading, loadRecommendation };
}

export default getUserRecommendation;
