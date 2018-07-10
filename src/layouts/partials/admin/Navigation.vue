<template>
  <nav class="py-8 text-sm">
    <div
      class="mb-6"
      v-for="{ name, children, meta } in links"
      :key="name"
    >
      <side-nav :link="name" :submenu="children" :meta="meta"/>
    </div>
  </nav>
</template>

<script>
import SideNav from "@/components/ui/SideNav";
import links from "@/router/routes/admin";

export default {
  components: {
    SideNav
  },
  data() {
    return {
      links
    };
  }
};
</script>
