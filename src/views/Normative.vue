<template>
  <div class="flex flex-col items-center py-20">
    <h1 class="font-bold text-xl md:text-4xl mb-[100px] px-3 lg:px-0 transition duration-200">
      Нормативные акты
    </h1>
    <div class="w-full py-10">
      <h1
        v-for="(normative, index) in normativeActs"
        :key="index"
        class="font-bold text-md md:text-xl leading-relaxed py-6 px-3 lg:px-0 border-t-[.5px] border-gray-400 cursor-pointer hover:text-[#673AB7] transition duration-200"
      >
        <a :href="normative.to">{{ normative.title }}</a>
      </h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Nav from "@/models/ModelNav";
import { ref } from "@vue/reactivity";

const normativeActs = ref<Nav[]>([
  {
    title: "Конституция Кыргызской Республики",
    to: "https://kyrgyztest.gov.kg/wp-content/uploads/2021/07/Konstitutsiya_KR_RUS_5.05.2021_№59.pdf"
  },
  {
    title: "Закон «О государственном языке Кыргызской Республики» № 54 от 02.04.2004 г.",
    to: "https://kyrgyztest.gov.kg/wp-content/uploads/2021/03/Закон-о-гос.языке-№-54-от-02.04.2004г..pdf"
  },
  {
    title: "Концепция разработки и внедрения системы оценивания государственного языка «Кыргызтест» № 150 от 26.03.2013 г.",
    to: "https://kyrgyztest.gov.kg/wp-content/uploads/2021/03/Концепция-№150-развития-и-внедрения-системы-оцен.гос.яз.pdf"
  },
  {
    title: "Национальная программа развития государственного языка и совершенствования языковой политики в Кыргызской Республике на 2014-2020 годы",
    to: "https://kyrgyztest.gov.kg/wp-content/uploads/2021/03/Нац.программа-развития-гос.яз.-2014-2020.pdf"
  },
  {
    title: "Положение «Об уровнях и объеме обязательного владения государственным языком для лиц, претендующих и занимающих государственные и муниципальные должности» № 430 от 13.07.2017 г.",
    to: "https://kyrgyztest.gov.kg/wp-content/uploads/2021/03/Положение-№-430-об-уровнях-и-объеме-обяз.владения-г.яз.-.pdf"
  },
  {
    title: "Положение «О государственном учреждении «Кыргызтест» № 186 от 5.04.2018 г.",
    to: "https://kyrgyztest.gov.kg/wp-content/uploads/2021/03/Положение-о-ГУ-Кыргызтест.pdf"
  },
  {
    title: "Программа развития государственного языка и совершенствования языковой политики в Кыргызской Республике на 2021-2025 годы",
    to: "https://kyrgyztest.gov.kg/wp-content/uploads/2021/03/Программа-2021-2025-1.pdf"
  },
])
</script>

