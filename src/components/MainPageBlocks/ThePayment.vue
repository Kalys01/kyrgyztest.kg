<template>
  <TheBlockComponent
    title="Тест акысы"
    :backgroundColor="'bg-gray-100'"
  >
    <div class="w-full flex justify-end items-center relative">
      <div class="flex">
        <img src="@/assets/img/pay.jpg" class=" rounded-md" alt="pay">
      </div>
      <div class="flex flex-col absolute gap-5 p-7 left-12 text-sm md:text-md rounded-md backdrop-filter backdrop-blur-lg shadow-2xl">
        <div><span class="font-bold">Алуучу:</span><br />«Кыргызтест» Мамлекеттик мекемеси</div>
        <div><span class="font-bold">Алуучунун банкы:</span><br />КР борбордук казыналыгы</div>
        <div><span class="font-bold">Төлөм коду:</span><br />14235400</div>
        <div><span class="font-bold">Төлөмдүн багыты:</span><br />Мамлекеттик тил боюнча тест жүргүзүү үчүн төлөм</div>
        <div><span class="font-bold">Эсептешүү эсеби:</span><br />4402031102000144</div>
        <div><span class="font-bold">БИК:</span><br />440001</div>
        <div><span class="font-bold">Баасы:</span><br />450 сом</div>
        <div><span class="font-bold">Бир субтестти кайра тапшыруу баасы:</span><br />90 сом</div>
      </div>
    </div>
  </TheBlockComponent>
</template>

<script lang="ts" setup>
import TheBlockComponent from "@/components/TheBlockComponent.vue";
import Attention from '@/components/Attention/Attention'
import Ads from '@/components/Attention/Ads'
</script>
