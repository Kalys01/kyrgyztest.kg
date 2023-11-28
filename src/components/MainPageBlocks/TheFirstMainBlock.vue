<template>
    <div class="w-full flex justify-center bg-gray-100 md:bg-gray-900">
      <div class="relative overflow-hidden max-w-screen-xl flex h-[700px] rounded-b-3xl md:rounded-none">
        <div class="">
          <img src="@/assets/img/mainPhoto.jpg" class="object-none h-full lg:h-auto lg:w-full" alt="first_main_block">  
        </div>
        <div class="absolute w-full h-full bg-gradient-to-r from-gray-900"></div>
        <div class="absolute flex items-center bottom-0 md:bottom-auto md:top-[200px] w-full md:w-3/4 p-[20px] bg-black/20 backdrop-filter backdrop-blur-sm rounded-b-3xl md:rounded-none">
          <h1 class="text-xl sm:text-2xl font-semibold text-gray-300">{{$t('mainPage.welcome')}}</h1>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">

</script>
