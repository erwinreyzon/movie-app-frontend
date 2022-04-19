<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  data: function () {
    return {
      message: "Movies Index",
      movies: [],
      // titleFilter: "",
    };
  },
  mixins: [Vue2Filters.mixin],
  created: function () {
    axios.get("http://localhost:3000/movies.json").then((response) => {
      this.movies = response.data;
      console.log("All Movies", this.movies);
    });
  },
};
</script>

<template>
  <h1>{{ message }}</h1>

  <!-- these feel broken, they don't work -->

  <!-- Search by title: <input v-model="titleFilter">
  <div v-for="movie in filterBy(movies, titleFilter, 'title')">

Search by name: <input v-model="titleFilter" list="titles">
<datalist id="titles">
	<option v-for="movie in movies" v-bind:key="movie.id">{{ movie.title }}</option>
</datalist> -->

  <!-- <div>
    <button>Sort Alphabetically</button>
    <div v-for="movie in orderBy(movies, 'title')"></div>
    <div v-for="movie in orderBy(filterBy(movies, titleFilter, 'title'), 'title')"></div>
  </div> -->

  <div v-for="movie in movies" v-bind:key="movie.id">
    <p>Title: {{ movie.title }}</p>
    <p>Year: {{ movie.year }}</p>
    <!-- <p>Director: {{ movie.director }}</p>
    <p>Plot: {{ movie.plot }}</p> -->
    <a :href="`/movies/${movie.id}`">More Info</a>
    <br />
    <a :href="`/movies/${movie.id}/edit`">Edit</a>
  </div>
</template>
