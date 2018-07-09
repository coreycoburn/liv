<template>
  <div class="flex items-center bg-grey-lightest text-brand p-6 border-b">
    <div class="mr-8">
      <button @click="toggleSidebar" class="focus:outline-none">
        <template v-if="sidebarOpen">
          <fa-icon icon="compress" class="text-brand hover:text-brand-dark" size="lg"/>
        </template>
        <template v-else>
          <fa-icon icon="list" class="text-brand hover:text-brand-dark" size="lg"/>
        </template>
      </button>
    </div>
    <div class="flex-1 mr-32">
      <div>
        <button class="focus:outline-none" @click="searchToggle">
          <fa-icon id="search-button" icon="search" class="text-brand hover:text-brand-dark" size="lg"/>
        </button>
        <transition name="fade">
          <input
            v-show="displaySearch"
            v-on-clickaway="searchClickAway"
            id="search"
            class="appearance-none bg-transparent border-2 border-brand rounded-full px-4 py-2 outline-none ml-3 text-grey-darker"
            placeholder="Search..."
            v-model="search"
          >
        </transition>
      </div>
    </div>
    <div class="flex justify-end items-center">
      <div class="mr-6">
        <div class="relative rounded-full h-8 w-8 flex items-center justify-center bg-brand">
          <fa-icon icon="bell" class="text-white"/>
          <span v-if="notificationTotal > 0" class="flex pin-t pin-r items-center justify-center absolute bg-red rounded-full w-5 h-5 text-xs text-white -mr-2 -mt-2">
            {{ notificationTotal }}
          </span>
        </div>
      </div>
      <div class="mr-6">
        <div class="rounded-full h-8 w-8 flex items-center justify-center bg-brand">
          <fa-icon icon="grip-horizontal" class="text-white"/>
        </div>
      </div>
      <div class="mr-6">
        <img src="@/assets/img/user.png" class="rounded-full h-10 w-10">
      </div>
      <div>
        <fa-icon icon="power-off" size="lg" class="text-blue-light"/>
      </div>
    </div>
  </div>
</template>

<script>
import Mousetrap from "mousetrap";
import { mixin as clickaway } from "vue-clickaway";
import { mapGetters, mapActions } from "vuex";

export default {
  mixins: [clickaway],
  data() {
    return {
      displaySearch: false,
      search: ""
    };
  },
  mounted() {
    // Allow user to type / to open search
    Mousetrap.bind("/", e => {
      e.preventDefault();

      this.searchToggle();
    });
  },
  computed: {
    ...mapGetters({
      notificationTotal: "admin/notificationTotal",
      sidebarOpen: "admin/sidebarOpen"
    })
  },
  methods: {
    ...mapActions({
      toggleSidebar: "admin/sidebarOpen"
    }),
    searchToggle() {
      this.displaySearch = !this.displaySearch;

      if (this.displaySearch) {
        setTimeout(() => {
          document.getElementById("search").focus();
        }, 300);
      }
    },
    searchClickAway(event) {
      if (!event.target.matches("#search-button")) {
        this.displaySearch = false;
        this.search = "";
      }
    }
  }
};
</script>
