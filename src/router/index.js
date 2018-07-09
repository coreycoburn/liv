import Vue from "vue";
import Router from "vue-router";
import pages from "./pages";
import dashboard from "./dashboard";
import maps from "./maps";
import tables from "./tables";
import auth from "./auth";

Vue.use(Router);

export default new Router({
  mode: "history", // default is 'hash'
  routes: [...pages, ...dashboard, ...maps, ...tables, ...auth]
});
