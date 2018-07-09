<template>
  <div id="app" class="flex">
    <app-sidebar/>

    <div id="main" class="flex flex-col flex-1" :style="{ width: mainWidth }">
      <app-header/>
      <app-sub-header/>

      <div class="flex-1 p-8">
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </div>

      <app-footer/>
    </div>
  </div>
</template>

<script>
import AppSidebar from "./partials/admin/Sidebar";
import AppHeader from "./partials/admin/Header";
import AppSubHeader from "./partials/admin/SubHeader";
import AppFooter from "./partials/admin/Footer";
import { mapGetters } from "vuex";

export default {
  components: {
    AppSidebar,
    AppHeader,
    AppSubHeader,
    AppFooter
  },
  data() {
    return {
      mainWidth: 70
    };
  },
  computed: {
    ...mapGetters({
      sidebarOpen: "admin/sidebarOpen"
    })
  }
};
</script>
