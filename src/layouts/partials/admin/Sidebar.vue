<template>
  <div class="h-screen w-1/5 sticky pin-t bg-brand text-brand-lightest">
    <div class="p-4 border-b-8 border-brand-light text-center">
      <router-link :to="{ name: 'home' }" class="text-brand-lightest hover:text-brand-lighter">
        <logo class="fill-current stroke-current h-12"/>
        <div class="ml-16">by {{ company.name }}</div>
      </router-link>
    </div>
    <app-nav/>
  </div>
</template>

<script>
import AppNav from "@/layouts/partials/admin/Navigation";
import Logo from "@/assets/img/logo.svg";
import { company } from "@/../app.config";

export default {
  components: {
    AppNav,
    Logo
  },
  data() {
    return {
      company
    };
  }
};
</script>
