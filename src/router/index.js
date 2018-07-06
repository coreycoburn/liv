import Vue from "vue";
import Router from "vue-router";
import pages from "./pages";
import auth from "./auth";

Vue.use(Router);

export default new Router({
  mode: "history", // default is 'hash'
  routes: [...pages, ...auth]
});
