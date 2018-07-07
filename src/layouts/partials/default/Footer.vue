<template>
  <div class="flex p-8 bg-grey-lightest text-sm">
    <div class="flex-1">
      Copyright © {{ year }}. 
      <span class="uppercase text-md">
        <a href="javascript:void(0);">{{ company.name }}</a>
      </span>. 
      All rights reserved.            
    </div>
    <div class="flex justify-end">
      <div class="mr-4">
        <a href="javascript:void(0);">Terms & Conditions</a>
      </div>
      <div>
        <a href="javascript:void(0);">Privacy Policy</a>               
      </div>
    </div>
  </div>
</template>

<script>
import { company } from "@/../app.config";

export default {
  data() {
    return {
      company,
      year: new Date().getFullYear()
    };
  }
};
</script>
