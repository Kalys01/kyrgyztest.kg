<template>
  <div class="flex flex-col justify-center items-center py-20 text-gray-900 dark:text-gray-300">
    <div class="w-min-[340px] flex flex-col justify-center items-center p-5  border-gray-900 rounded-md">
      <h1 class="mb-10 text-4xl block font-medium leading-6">Welcome</h1>
      <form class="flex flex-col" >
        <div ref="telegramWidget"></div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import axios from 'axios';

const telegramWidget = ref<HTMLElement | null>(null);

onMounted(() => {
  const widgetElement = telegramWidget.value;
  
  if (widgetElement) {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.setAttribute('data-telegram-login', "authToFootballer_bot");
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-radius', '20');
    script.setAttribute('data-auth-url', ' https://a952-94-143-197-22.ngrok-free.app/profile');

    script.async = true;
    widgetElement.appendChild(script);
  }
});

</script>
