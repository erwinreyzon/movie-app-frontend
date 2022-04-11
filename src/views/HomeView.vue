<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to the Movies App!",
      movies: [],
    };
  },
  created: function () {
    axios.get("/movies.json").then((response) => {
      this.movies = response.data;
      console.log("All Movies", this.movies);
    });
  },
  methods: {},
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <!-- Index of Movies -->
    <div v-for="movie in movies" v-bind:key="movie.id">
      <p>Title: {{ movie.title }}</p>
      <p>Year: {{ movie.year }}</p>
      <p>Plot: {{ movie.plot }}</p>
      <p>Director: {{ movie.director }}</p>
      <p>English: {{ movie.english }}</p>
    </div>
  </div>
</template>

<style></style>
