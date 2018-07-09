<template>
  <div
    id="sidebar"
    class="h-screen sticky pin-t bg-brand text-brand-lightest"
  >
    <div class="flex p-4 border-b-8 border-brand-light text-center h-32 justify-center items-center">
      <router-link :to="{ name: 'home' }" class="text-brand-lightest hover:text-brand-lighter">
        <div v-if="sidebarOpen">
          <logo class="fill-current stroke-current h-12"/>
          <div class="ml-16 text-xs">by {{ company.name }}</div>
        </div>
        <div v-else>
          <span class="font-bold italic uppercase text-xl">{{ company.nameShort }}</span>
        </div>
      </router-link>
    </div>
    <app-nav/>
  </div>
</template>

<script>
import AppNav from "@/layouts/partials/admin/Navigation";
import Logo from "@/assets/img/logo.svg";
import LogoSmall from "@/assets/img/logo-small.svg";
import { mapGetters } from "vuex";
import { company } from "@/../app.config";
import { TweenLite } from "gsap";

export default {
  components: {
    AppNav,
    Logo,
    LogoSmall
  },
  data() {
    return {
      company
    };
  },
  computed: {
    ...mapGetters({
      sidebarOpen: "admin/sidebarOpen"
    })
  },
  mounted() {
    this.checkSidebar();
  },
  methods: {
    checkSidebar() {
      if (this.sidebarOpen) {
        TweenLite.to("#sidebar", 0.5, { width: "250" });
      } else {
        TweenLite.to("#sidebar", 0.5, { width: "70" });
      }
    }
  },
  watch: {
    sidebarOpen() {
      this.checkSidebar();
    }
  }
};
</script>
