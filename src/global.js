import Vue from "vue";
import LoadingLayout from "@/layouts/Loading"; // Marketing / landing page
import MarketingLayout from "@/layouts/Marketing"; // Marketing / landing page
import AdminLayout from "@/layouts/Admin"; // Main admin theme layout
import AuthLayout from "@/layouts/Auth";

// Layout files
Vue.component("loading-layout", LoadingLayout);
Vue.component("marketing-layout", MarketingLayout);
Vue.component("admin-layout", AdminLayout);
Vue.component("auth-layout", AuthLayout);
