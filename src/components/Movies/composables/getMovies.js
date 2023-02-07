import axios from 'axios';
import {ref} from 'vue';

const getMovies = () => {
    const movies = ref([]);
    const loading = ref(false);
    let page = 0;

    const loadMovies = (isCategoryChanged, selectedCategory) => {
        page++;
        loading.value = true;
        if (page < 1000) {
            if (selectedCategory === "") {
                axios.get(`http://127.0.0.1:1323/movies?limit=20&page=${page}`)
                    .then(res => {
                        res.data.results.forEach(result => {
                            movies.value.push(result);
                        });
                        loading.value = false;
                        console.log(loading.value)
                    }).catch(err => {
                    console.log(err.message);
                    loading.value = false;
                });
            } else {
                console.log(isCategoryChanged)
                if (isCategoryChanged) {
                    movies.value = []
                    page = 1
                }
                axios.get(`http://127.0.0.1:1323/movies/category/${selectedCategory.toLowerCase()}?limit=20&page=${page}`)
                    .then(res => {
                        console.log(res)
                        res.data.results.forEach(result => {
                            movies.value.push(result);
                        });
                        loading.value = false;
                        console.log(loading.value)
                    }).catch(err => {
                    console.log(err.message);
                    loading.value = false;
                });
            }
        }
    }

    return {movies, loading, loadMovies};
}

export default getMovies;
