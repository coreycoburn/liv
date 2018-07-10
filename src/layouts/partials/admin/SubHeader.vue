<template>
  <div class="flex items-center bg-grey-lightest pt-4 px-8 sticky pin-t shadow">
    <div class="flex-1 mb-4">
      <div class="mb-4">
        <fa-icon icon="home" class="text-grey-dark"/> -
        <span>
          <a href="javascript:void(0);" class="font-bold text-xs text-grey-dark">
            Dashboard
          </a>
        </span> -
        <span>
          <a href="javascript:void(0);" class="uppercase text-xs text-grey-dark">
            Dashboard 1
          </a>
        </span>
      </div>
      <div class="uppercase text-3xl tracking-wide text-grey-dark">
        <transition name="fade" mode="out-in">
          <div :key="$route.name">
            {{ $route.meta.title }}
          </div>
        </transition>
      </div>
    </div>
    <div class="justify-end">
      <fa-icon icon="plus-circle" size="3x" class="text-grey"/>
    </div>
  </div>
</template>
