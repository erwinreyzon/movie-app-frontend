<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: {},
    };
  },
  created: function () {
    axios.get("/movies/" + this.$route.params.id + ".json").then((response) => {
      console.log("Show Movie", response.data);
      this.movie = response.data;
    });
  },
};
</script>

<template>
  <h1>{{ movie.title }}</h1>
  <p>Year: {{ movie.year }}</p>
  <p>Director: {{ movie.director }}</p>
  <p>Plot: {{ movie.plot }}</p>
</template>
