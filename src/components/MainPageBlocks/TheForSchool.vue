<template>
    <TheBlockComponent 
      title="Выпускникам школ"
      :backgroundColor="'bg-gray-100'"
    >
      <div class="flex justify-center gap-6">
        <div class="flex flex-col justify-center items-center w-full max-w-[800px] tracking-wider">
          <div class="text-md">
            <p class="mb-4 leading-7">
              Согласно Постановлению Правительства Кыргызской Республики №279 от 11 июня 2018 года Государственное учреждение «Кыргызтест» тестирование по государственному языку для выпускников общеобразовательных учреждений будет проводиться с 20 апреля по 15 июля 2021 года.
            </p>  
            <h2 class="font-bold">При себе необходимо иметь:</h2>
            <p class="flex flex-col pl-10 my-3 leading-8">
              <span>документ, удостоверяющий личность (паспорт, свидетельство о рождении)</span>
              <span>справку с места учебы, заверенную печатью и подписью.</span>
            </p>
            <h2 class="font-bold">Уровень для выпускников школ:</h2>
            <p class="flex flex-col pl-10 my-3 leading-8">
              <span>— с обучением на кыргызском языке – В1;</span>
              <span>— с обучением на русском языке – А2.</span>
              <span>Пересдача теста не допускается.</span>
            </p>
          </div>
        </div>
        <div class="overflow-hidden max-w-xl">
          <img src="@/assets/img/Pupils.jpg" class="rounded-md" alt="school">
        </div>
      </div>
    </TheBlockComponent>
</template>

<script lang="ts" setup>
import TheBlockComponent from "@/components/ReusedComponents/TheBlockComponent.vue";

</script>
