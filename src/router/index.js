import Vue from "vue";
import Router from "vue-router";

// Admin Routes
import admin from "./routes/admin";
import pages from "./routes/pages";

Vue.use(Router);

export default new Router({
  mode: "history", // default is 'hash'
  routes: [...admin, ...pages]
});
