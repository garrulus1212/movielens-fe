import axios from 'axios';
import {ref} from 'vue';

const getPopularMovies = () => {
    const popularMovies = ref([]);
    const loading = ref(false);
    let page = 0;

    const loadPopularMovies = () => {
        page++;
        loading.value = true;
        if (page < 1000) {
            axios.get(`http://127.0.0.1:1323/best-movies?limit=20&page=${page}`)
                .then(res => {
                    console.log(res)
                    res.data.results.forEach(result => {
                        popularMovies.value.push(result);
                    });
                    loading.value = false;
                    console.log(loading.value)
                }).catch(err => {
                console.log(err.message);
                loading.value = false;
            });
        }
    }

    return {popularMovies, loading, loadPopularMovies};
}

export default getPopularMovies;
