<template>
    <TheBlockComponent
      class="relative"
      title="Каналы"
      :backgroundColor="'bg-gray-900 text-gray-300'"
    >
      <div class="absolute h-full w-full">
        <img src="@/assets/img/payment.svg" class="w-full h-full object-fill -top-0" alt="payment">
      </div>
      <div class="flex justify-center gap-6">
        <div class="grid grid-col grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-center items-center w-full tracking-wider">
          <TheBlockChannel
            img_src="channel5.png"
            img_alt="youtube"
            title="Youtube канал"
            description="Канал с обучающими видео и дополнительными материалами по тематикам курсов"
            link_title="Youtube канал"
            link="#"
          />
          <TheBlockChannel
            img_src="channel5.png"
            img_alt="telegram"
            title="Telegram канал"
            description="Канал с обучающими видео и дополнительными материалами по тематикам курсов"
            link_title="Telegram канал"
            link="#"
          />
          <TheBlockChannel
            img_src="channel5.png"
            img_alt="facebook"
            title="Facebook канал"
            description="Канал с обучающими видео и дополнительными материалами по тематикам курсов"
            link_title="Facebook канал"
            link="#"
          />
          <TheBlockChannel
            img_src="channel5.png"
            img_alt="instagram"
            title="Instagram канал"
            description="Канал с обучающими видео и дополнительными материалами по тематикам курсов"
            link_title="Instagram канал"
            link="#"
          />
        </div>
      </div>
    </TheBlockComponent>
</template>

<script lang="ts" setup>
import TheBlockComponent from "@/components/ReusedComponents/TheBlockComponent.vue";
import TheBlockChannel from "@/components/TheBlockChannel.vue";

</script>
