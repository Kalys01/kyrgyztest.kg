<template>
    <TheBlockComponent
      title="График проведения теста"
      :backgroundColor="'bg-yellow-500'"
    >
      <div class="flex justify-center gap-6">
        <div class="flex flex-col justify-center items-center w-full max-w-[800px] tracking-wider">
          <div class="flex flex-col justify-center w-full max-w-[800px] tracking-wider text-md leading-8">
            <p class="mb-4 leading-7">
              «Кыргызтест» мамлекеттик мекемеси саат <span class="font-bold">9:00</span>дон <span class="font-bold">18:00</span>го чейин иштейт, түшкү тыныгуу саат <span class="font-bold">12:00</span>дон <span class="font-bold">13:00</span>го чейин болот.
            </p>
            <h2 class="font-bold">Тест алдын ала бекитилген график боюнча эки нөөмөттө жүргүзүлөт.</h2>
            <p class="flex flex-col pl-10 my-3 ">
              <span>— Биринчи нөөмөткө каттоо саат 9:00до башталат</span>
              <span>— Экинчи нөөмөткө каттоо саат 13:30да башталат</span>
            </p>
            <p>Тест акысы төлөнбөгөн учурда тестке катышууга уруксат берилбейт (КР 2014-жылдын 17-июлундагы №139 «Мамлекеттик жана муниципалдык кызмат көрсөтүүлөр жөнүндө» Мыйзамынын 2-главасынын 7-беренесинин 1, 2-пункттарынан тышкары)</p>
          </div>
        </div>
        <div class=" overflow-hidden  max-w-xl">
          <img src="@/assets/img/WorkGraphic.jpg" class="rounded-md" alt="school">
        </div>
      </div>
    </TheBlockComponent>
</template>

<script lang="ts" setup>
import TheBlockComponent from "@/components/TheBlockComponent.vue";

</script>
