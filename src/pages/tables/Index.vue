<template>
  <div>
    Parent Table here!!
    <transition name="fade" mode="out-in">
      <router-view :key="$route.fullPath"/>
    </transition>
  </div>
</template>
