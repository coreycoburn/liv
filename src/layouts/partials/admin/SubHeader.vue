<template>
  <div class="flex items-center bg-grey-lightest pt-4 px-8 sticky pin-t shadow">
    <div class="flex-1 mb-4">
      <breadcrumbs/>
      <div class="uppercase text-3xl tracking-wide text-grey-dark">
        {{ $route.meta.title }}
      </div>
    </div>
    <div class="justify-end">
      <fa-icon icon="plus-circle" size="3x" class="text-grey"/>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default {
  components: {
    Breadcrumbs
  }
};
</script>
