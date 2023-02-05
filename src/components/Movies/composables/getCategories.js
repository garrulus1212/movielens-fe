import axios from 'axios';
import {ref} from 'vue';

const getCategories = () => {
    const categories = ref([]);
    const error = ref("");
    const loading = ref(false);

    const loadCategories = () => {
        loading.value = true;
        console.log("dopice")
        axios.get(`http://127.0.0.1:1323/genres`)
            .then(res => {
                console.log(res)
                categories.value = res.data;
                loading.value = false;
            }).catch(err => {
            error.value = err.message;
            loading.value = false;
        });
    }

    return {categories, loading, loadCategories};
}

export default getCategories;
