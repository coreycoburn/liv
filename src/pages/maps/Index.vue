<template>
  <div>
    Parent Maps here!!
    <transition name="fade" mode="out-in">
      <router-view :key="$route.fullPath"/>
    </transition>
  </div>
</template>
