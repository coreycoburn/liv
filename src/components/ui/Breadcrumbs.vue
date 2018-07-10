<template>
  <ul
    v-if="breadcrumbs.length"
    class="flex list-reset items-center mb-3"
  >
    <li
      v-for="({ name, path, title, icon }, index) in breadcrumbs"
      :key="index"
      class="flex"
    >
      <div class="flex items-center">
        <div v-if="icon">
          <fa-icon :icon="icon" class="text-grey-dark mr-4"/>
        </div>
          <router-link
            :to="{ name }"
            class="text-grey-dark text-xs hover:text-brand"
            :class="{ 'font-bold': index === 0, 'uppercase': index > 0 }"
          >
            {{ title }}
          </router-link>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      const full = this.$route.matched;

      return full.map(({ name, path, meta }) => {
        return {
          name,
          path,
          title: meta.title,
          icon: meta.icon
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@tailwind utilities;

li {
  &:after {
    @apply .text-xs .text-grey .mx-2 .flex .items-center;
    content: "/";
  }

  &:last-child:after {
    content: "";
  }
}
</style>
