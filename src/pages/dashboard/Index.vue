<template>
  <div>
    Parent Dashboard here!!
    <transition name="fade">
      <router-view :key="$route.fullPath"/>
    </transition>
  </div>
</template>
