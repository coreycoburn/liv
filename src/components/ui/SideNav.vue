<template>
  <div v-if="!meta.hidden">
    <div v-if="submenu" class="flex pl-6">
      <router-link :to="{ name: link }" class="text-brand-lighter">
        <div>
          <fa-icon :icon="meta.icon" class="mr-6 text-2xl" size="lg"/>
        </div>
      </router-link>
      <transition name="fade-nav">
        <a class="flex-1" href="javascript:void(0);" @click.prevent="active = !active">
          <div
            v-if="sidebarOpen"
            class="flex uppercase tracking-wide text-sm text-brand-lighter hover:text-brand-lightest"
          >
            <div class="flex-1">{{ meta.title }}</div>
            <div class="justify-end">
              <div v-if="active">
                <fa-icon icon="caret-down" class="mr-4" size="sm"/>
              </div>
              <div v-else>
                <fa-icon icon="caret-right" class="mr-4" size="sm"/>
              </div>
            </div>
          </div>
        </a>
      </transition>
    </div>

    <div v-else class="pl-6">
      <router-link :to="{ name: link }" class="flex text-brand-lighter">
        <div>
          <fa-icon :icon="meta.icon" class="mr-6 text-2xl" size="lg"/>
        </div>
        <div v-if="sidebarOpen" class="flex flex-1 uppercase tracking-wide text-sm">
          <div class="flex-1 hover:text-brand-lightest">{{ meta.title }}</div>
        </div>
      </router-link>
    </div>

    <vue-slide-up-down :active="active && sidebarOpen">
      <ul class="list-reset mt-3" v-if="sidebarOpen">
        <li
          class="pl-20 py-1 bg-brand-light"
          v-for="{ name, meta } in submenu"
          :key="name"
          v-if="!meta.hidden"
        >
          <router-link
            :to="{ name }"
            class="text-brand-lightest hover:text-brand-lighter"
          >
            {{ meta.title }}
          </router-link>
        </li>
      </ul>
    </vue-slide-up-down>
  </div>
</template>

<script>
import VueSlideUpDown from "vue-slide-up-down";
import { mapGetters } from "vuex";

export default {
  props: {
    link: {
      required: true,
      type: String
    },
    submenu: {
      type: Array
    },
    meta: {
      required: true,
      type: Object
    }
  },
  components: {
    VueSlideUpDown
  },
  data() {
    return {
      active: false
    };
  },
  computed: {
    ...mapGetters({
      sidebarOpen: "admin/sidebarOpen"
    })
  },
  watch: {
    sidebarOpen() {
      if (!this.sidebarOpen) {
        this.active = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@tailwind utilities;

.router-link-active {
  @apply .text-brand-darker;
}
</style>
