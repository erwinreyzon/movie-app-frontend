<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Movies Index",
      movies: [],
    };
  },
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
