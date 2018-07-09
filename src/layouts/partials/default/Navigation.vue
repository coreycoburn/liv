<template>
  <nav class="p-8">
    <div class="mb-6">
      <router-link :to="{ name: 'dashboard' }" class="font-bold">
        <fa-icon icon="home" class="text-brand-lighter mr-3" size="lg"/>
        Dashboard
      </router-link>
      <ul class="list-reset mt-3 ml-12">
        <li class="mb-2">
          <router-link :to="{ name: 'dashboard1' }">Dashboard 1</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'dashboard2' }">Dashboard 2</router-link>
        </li>
      </ul>
    </div>
    <div class="mb-6">
      <router-link :to="{ name: 'tables' }" class="font-bold">
        <fa-icon icon="table" class="text-brand-lighter mr-3" size="lg"/>
        Tables
      </router-link>
    </div>
    <div class="mb-6">
      <router-link :to="{ name: 'maps' }" class="font-bold">
        <fa-icon icon="map" class="text-brand-lighter mr-3" size="lg"/>
        Maps
      </router-link>
      <ul class="list-reset mt-3 ml-12">
        <li class="mb-2">
          <router-link :to="{ name: 'vector' }">Vector Maps</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'google' }">Google Maps</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
