<template>
  <TheBlockComponent
    title="Тест акысы"
    :backgroundColor="'bg-white text-gray-900'"
  >
    <div class="w-full flex md:justify-end justify-center items-center relative">
      <div class="flex h-[400px] sm:h-auto">
        <img src="@/assets/img/pay.jpg" class="object-none w-full rounded-md" alt="pay">
      </div>
      <div class="flex flex-col absolute gap-5 p-7 left-0 sm:left-12 text-sm md:text-md rounded-md bg-black/20 backdrop-filter backdrop-blur-md shadow-2xl">
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
import TheBlockComponent from "@/components/ReusedComponents/TheBlockComponent.vue";
// import Attention from '@/components/Attention/Attention'
// import Ads from '@/components/Attention/Ads'
</script>
