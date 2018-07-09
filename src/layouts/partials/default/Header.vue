<template>
  <div class="flex items-center bg-grey-lightest text-brand p-6 border-b">
    <div class="mr-12">
      <fa-icon icon="bars" class="text-brand" size="lg"/>
    </div>
    <div class="flex-1 mr-32">
      <div class="border-b-2 border-brand opacity-50">
        <fa-icon icon="search" class="mr-2"/>
        <input class="appearance-none bg-transparent outline-none">
      </div>
    </div>
    <div class="flex justify-end items-center">
      <div class="mr-6">
        <div class="rounded-full h-8 w-8 flex items-center justify-center bg-brand">
          <fa-icon icon="bell" class="text-white"/>
        </div>
      </div>
      <div class="mr-6">
        <div class="rounded-full h-8 w-8 flex items-center justify-center bg-brand">
          <fa-icon icon="grip-horizontal" class="text-white"/>
        </div>
      </div>
      <div class="mr-6">
        <img src="@/assets/img/user.png" class="rounded-full h-10 w-10">
      </div>
      <div>
        <fa-icon icon="power-off" size="lg" class="text-blue-light"/>
      </div>
    </div>
  </div>
</template>
