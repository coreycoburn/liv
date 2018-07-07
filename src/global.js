import Vue from "vue";
import MarketingLayout from "@/layouts/Marketing"; // Marketing / landing page
import AdminLayout from "@/layouts/Admin"; // Main admin theme layout
import AuthLayout from "@/layouts/Auth";

// Layout files
Vue.component("marketing-layout", MarketingLayout);
Vue.component("admin-layout", AdminLayout);
Vue.component("auth-layout", AuthLayout);
