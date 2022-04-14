import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MoviesIndex from "../views/MoviesIndex.vue";
import MoviesNew from "../views/MoviesNew.vue";
import MovieShow from "../views/MovieShow.vue";
import MovieUpdate from "../views/MovieUpdate.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/movies",
    name: "movies",
    component: MoviesIndex,
  },
  {
    path: "/movies/new",
    name: "new",
    component: MoviesNew,
  },
  {
    path: "/movies/:id",
    name: "movie",
    component: MovieShow,
  },
  {
    path: "/movies/:id/edit",
    name: "update",
    component: MovieUpdate,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/login",
    name: "login",
    component: LogIn,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
