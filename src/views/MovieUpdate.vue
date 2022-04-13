<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Edit Movie",
      movie: {},
    };
  },
  methods: {
    updateMovie: function () {
      console.log("update movie");
      axios.patch("/movies/" + this.$route.params.id + ".json", this.movie).then((response) => {
        console.log("Success!", response.data);
        this.$router.push("/movies");
      });
    },
  },
  created: function () {
    axios
      .get("/movies/" + this.$route.params.id + ".json")
      .then((response) => {
        console.log("Show Movie", response.data);
        this.movie = response.data;
      })
      .catch((error) => console.log(error.response));
  },
};
</script>

<template>
  <h1>{{ message }}</h1>
  <p>
    Title:
    <input type="text" v-model="movie.title" />
  </p>
  <p>
    Year:
    <input type="text" v-model="movie.year" />
  </p>
  <p>
    Plot:
    <input type="text" v-model="movie.plot" />
  </p>
  <p>
    Director:
    <input type="text" v-model="movie.director" />
  </p>
  <button v-on:click="updateMovie()">Update</button>
</template>
