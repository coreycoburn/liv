<template>
  <nav class="px-6 py-8">
    <div class="mb-6">
      <router-link :to="{ name: 'dashboard' }" class="font-bold">
        <fa-icon icon="home" class="text-brand-lighter mr-3" size="lg"/>
        <transition name="fade-nav">
          <span v-if="sidebarOpen">Dashboard</span>
        </transition>
      </router-link>
      <transition name="fade-nav">
        <ul v-if="sidebarOpen" class="list-reset mt-3 ml-12">
          <li class="mb-2">
            <router-link :to="{ name: 'dashboard1' }">Dashboard 1</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'dashboard2' }">Dashboard 2</router-link>
          </li>
        </ul>
      </transition>
    </div>
    <div class="mb-6">
      <router-link :to="{ name: 'tables' }" class="font-bold">
        <fa-icon icon="table" class="text-brand-lighter mr-3" size="lg"/>
        <transition name="fade-nav">
          <span v-if="sidebarOpen">Tables</span>
        </transition>
      </router-link>
      <transition name="fade-nav">
        <ul v-if="sidebarOpen" class="list-reset mt-3 ml-12">
          <li class="mb-2">
            <router-link :to="{ name: 'basicTable' }">Basic Table</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'dataTable' }">Data Table</router-link>
          </li>
        </ul>
      </transition>
    </div>
    <div class="mb-6">
      <router-link :to="{ name: 'maps' }" class="font-bold">
        <fa-icon icon="map" class="text-brand-lighter mr-3" size="lg"/>
        <transition name="fade-nav">
          <span v-if="sidebarOpen">Maps</span>
        </transition>
      </router-link>
      <transition name="fade-nav">
        <ul v-if="sidebarOpen" class="list-reset mt-3 ml-12">
          <li class="mb-2">
            <router-link :to="{ name: 'vectorMap' }">Vector Map</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'googleMap' }">Google Map</router-link>
          </li>
        </ul>
      </transition>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      sidebarOpen: "admin/sidebarOpen"
    })
  }
};
</script>

<style lang="scss" scoped>
@tailwind utilities;
.fade-nav-enter-active {
  transition: opacity 0.5s 0.5s;
}
.fade-nav-leave-active {
  transition: opacity 0.01s;
}
.fade-nav-enter,
.fade-nav-leave-to {
  @apply .opacity-0;
}
</style>
