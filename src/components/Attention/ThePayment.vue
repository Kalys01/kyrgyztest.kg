<template>
  <div class="flex flex-col lg:flex-row my-10 py-10 pl-5 lg:px-5 gap-5 bg-gray-300 dark:bg-gray-800">
    <div class="flex flex-col gap-5">
      <Attention />
      <Ads />
    </div>
    <div class="flex flex-col justify-center lg:w-[700px] py-5 pl-10 pr-5 lg:px-5 rounded-l-[80px] lg:rounded-md  shadow-xl bg-[#673AB7] text-gray-300">
      <h1 class="flex justify-center text-xl font-bold mb-2">ТЕСТ АКЫСЫ</h1>
      <div class="flex flex-col gap-4 my-5 lg:my-0 text-sm md:text-md">
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
  </div>
</template>

<script lang="ts" setup>
import Attention from '@/components/Attention/Attention'
import Ads from '@/components/Attention/Ads'
</script>
