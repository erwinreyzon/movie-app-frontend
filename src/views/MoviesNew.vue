<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Add New Movie",
      newMovieParams: { plot: "" },
      errors: [],
    };
  },
  methods: {
    createMovie: function () {
      axios
        .post("/movies.json", this.newMovieParams)
        .then((response) => {
          console.log("Created", response.data);
          this.movies.push(response.data);
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>

<template>
  <h1>{{ message }}</h1>

  <div>
    <button v-on:click="createMovie()">Add New Movie</button>
    <div>
      <p>
        Title:
        <input type="text" v-model="newMovieParams.title" />
      </p>
    </div>
    <div>
      <p>
        Year:
        <input type="text" v-model="newMovieParams.year" />
      </p>
    </div>
    <div>
      <p>
        Plot:
        <input type="text" v-model="newMovieParams.plot" />
        <small>{{ 500 - newMovieParams.plot.length }} CHARACTERS REMAINING</small>
      </p>
    </div>
    <div>
      <p>
        Director:
        <input type="text" v-model="newMovieParams.director" />
      </p>
    </div>
  </div>
</template>
