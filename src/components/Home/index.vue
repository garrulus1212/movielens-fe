<template>
	<popular-movies></popular-movies>
</template>

<script>
	import MovieCard from "../MovieCard.vue";
	import PopularMovies from "../Movies/components/PopularMovies.vue";

	export default {
		components: {
			MovieCard,
			PopularMovies,
		},
		setup() {},
	};
</script>
