import axios from 'axios';
import { ref } from 'vue';

const getSearchResults = () => {
    const searchResults = ref([]);
    const loading = ref(false);

    const loadSearchResults = (search) => {
        loading.value = true;
        if (search.length > 2) {
            axios.get(`http://localhost:1323/movies/search?page=1&limit=10&term=${search}`)
                .then(res => {
                    loading.value = false;
                    searchResults.value = res.data.results;
                    console.log(searchResults)
                }).catch(err => {
                    loading.value = false;
                    console.log(err);
                });
        } else {
            searchResults.value = [];
        }
    }

    return { searchResults, loading, loadSearchResults };
}

export default getSearchResults;
