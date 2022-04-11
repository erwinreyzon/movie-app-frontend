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

    <!-- Create new movie -->
    <div>
      <button v-on:click="createMovie()">Add New Movie</button>
      <div>
        <p>
          Title:
          <input type="text" v-model="newMovie.title" />
        </p>
      </div>
      <div>
        <p>
          Year:
          <input type="text" v-model="newMovie.year" />
        </p>
      </div>
      <div>
        <p>
          Plot:
          <input type="text" v-model="newMovie.plot" />
        </p>
      </div>
      <div>
        <p>
          Director:
          <input type="text" v-model="newMovie.director" />
        </p>
      </div>
    </div>

    <!-- Index of Movies -->
    <div v-for="movie in movies" v-bind:key="movie.id">
      <p>Title: {{ movie.title }}</p>
      <p>Year: {{ movie.year }}</p>
      <p>Plot: {{ movie.plot }}</p>
      <p>Director: {{ movie.director }}</p>
    </div>
  </div>
</template>

<style></style>
