import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./global";
import "./icons";
import "./registerServiceWorker";

import "@/styles/main.scss";

// Vue config
Vue.config.productionTip = false;

// Render Vue instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
