<template>
  <div v-html="require(`@/assets/img/${icon}.svg`)"></div>
</template>

<script>
export default {
  props: {
    icon: {
      default: "logo"
    }
  }
};
</script>
