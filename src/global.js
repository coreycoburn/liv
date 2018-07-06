import Vue from "vue";
import MarketingLayout from "@/layouts/Marketing"; // Marketing / landing page
import DefaultLayout from "@/layouts/Default"; // Main admin theme layout
import AuthLayout from "@/layouts/Auth";

// Layout files
Vue.component("marketing-layout", MarketingLayout);
Vue.component("default-layout", DefaultLayout);
Vue.component("auth-layout", AuthLayout);
