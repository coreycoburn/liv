<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <component :is="layout">
        <router-view/>
      </component>
    </transition>
  </div>
</template>

<script>
const default_layout = "admin";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  }
};
</script>
