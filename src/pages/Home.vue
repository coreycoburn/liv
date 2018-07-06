<template>
<div>
    <div id="nav">
        <router-link :to="{ name: 'home' }">Home</router-link> | 
        <router-link :to="{ name: 'login' }">Login</router-link> | 
        <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
    </div>
</div>
</template>

<script>
export default {
  name: "home",
  components: {
    //
  }
};
</script>
