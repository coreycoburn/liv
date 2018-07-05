import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import DefaultLayout from "@/layouts/Default";
import AuthLayout from "@/layouts/Auth";

import "@/styles/main.scss";

Vue.config.productionTip = false;

Vue.component("default-layout", DefaultLayout);
Vue.component("auth-layout", AuthLayout);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
