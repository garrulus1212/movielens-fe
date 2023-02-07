import axios from 'axios';
import { ref } from 'vue';

const getUser = () => {
  const user = ref({});
  const error = ref("");
  const loading = ref(false);

  const loadUser = async (id) => {
    loading.value = true;
    axios.get(`http://127.0.0.1:1323/users/${id}`)
      .then(res => {
          console.log(res)
          user.value = res.data;
        loading.value = false;
      }).catch(err => {
        error.value = err.message;
        loading.value = false;
      });
  }

  return { user, loading, loadUser };
}

export default getUser;
