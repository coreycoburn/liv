import Vue from "vue";
import Vuex from "vuex";

// If you create any vuex modules, you must import them
import admin from "./modules/admin";

Vue.use(Vuex);

// Be sure to export any modules you imported
export default new Vuex.Store({
  modules: {
    admin
  }
});
