<template>
    <TheBlockComponent 
      title="Каналы"
      :backgroundColor="'bg-gray-100'"
    >
      <div class="flex justify-center gap-6">
        <div class="grid grid-col grid-cols-2 gap-4 justify-center items-center w-full tracking-wider">
          <div class="flex flex-col p-5 bg-gray-400">
            <div class="flex gap-2">
              <div class="flex max-w-[120px]">
                <img class="object-cover w-full" src="@/assets/img/Pupils.jpg" alt="">
              </div>
              <div class="flex flex-col">
                <h1>Youtube канал</h1>
                <p>Канал с обучающими видео и дополнительными материалами по тематикам курсов</p>
              </div>
            </div>
            <div class="">
              <a href="#">Youtube канал</a>
            </div>
          </div>

          <div class="flex flex-col p-5 bg-gray-400">
            <div class="flex gap-2">
              <div class="flex max-w-[120px]">
                <img class="object-cover w-full" src="@/assets/img/Pupils.jpg" alt="">
              </div>
              <div class="flex flex-col">
                <h1>Youtube канал</h1>
                <p>Канал с обучающими видео и дополнительными материалами по тематикам курсов</p>
              </div>
            </div>
            <div class="">
              <a href="#">Youtube канал</a>
            </div>
          </div>
          <div class="flex flex-col p-5 bg-gray-400">
            <div class="flex gap-2">
              <div class="flex max-w-[120px]">
                <img class="object-cover w-full" src="@/assets/img/Pupils.jpg" alt="">
              </div>
              <div class="flex flex-col">
                <h1>Youtube канал</h1>
                <p>Канал с обучающими видео и дополнительными материалами по тематикам курсов</p>
              </div>
            </div>
            <div class="">
              <a href="#">Youtube канал</a>
            </div>
          </div>
          <div class="flex flex-col p-5 bg-gray-400">
            <div class="flex gap-2">
              <div class="flex max-w-[120px]">
                <img class="object-cover w-full" src="@/assets/img/Pupils.jpg" alt="">
              </div>
              <div class="flex flex-col">
                <h1>Youtube канал</h1>
                <p>Канал с обучающими видео и дополнительными материалами по тематикам курсов</p>
              </div>
            </div>
            <div class="">
              <a href="#">Youtube канал</a>
            </div>
          </div>
        </div>
      </div>
    </TheBlockComponent>
</template>

<script lang="ts" setup>
import TheBlockComponent from "@/components/TheBlockComponent.vue";

</script>
