<template>
  <div class="grid grid-cols-12">
    <div class="xs:col-span-3 bg-[#292828]"></div>
    <div class="flex flex-col items-center justify-center col-span-12 xs:col-span-9 border-l-2 border-gray-300 bg-gray-300 pt-16">
      <div class="w-[355px]  flex flex-col bg-white rounded-xl items-center px-4 shadow-lg relative my-16">
        <div class="w-[290px] rounded-xl overflow-hidden -top-14 absolute shadow-lg">
          <img src="https://kyrgyztest.gov.kg/wp-content/uploads/2021/04/44444-548x720.jpg" alt="">
        </div>
        <div class="w-full mt-[340px] mb-6 flex flex-col items-center text-[#292828]">
          <div class="flex flex-col text-center">
            <h1 class="text-md font-thin">Топоева-Ставинская Батма Болоталиевна</h1>
            <span class="text-xs text-gray-400 font-mono px-3">Директор  Государственной учереждении Кыргызтест</span>
          </div>
          <div class="w-full flex my-5">

            <div class="flex flex-col text-center w-1/2">
              <h1 class="text-md">+44 года</h1>
              <span class="text-xs text-gray-400 font-mono">Общий стаж работы</span>
            </div>
            <div class="flex flex-col text-center w-1/2">
               <h1 class="text-md">26 лет</h1>
              <span class="text-xs text-gray-400 font-mono">Педагогический стаж</span>
            </div>

          </div>
          <div class="flex">
            <a
              class="hover:text-[#673AB7] transition duration-200 border-[1px] border-[#673AB7] rounded-full py-2 px-7 text-sm"
              href="https://kyrgyztest.gov.kg/wp-content/uploads/2020/12/РЕЗЮМЕ_Топоевой-Ставинской_рус_.pdf"
            >
              Подробнее
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLifecycleLogger } from "@/common/hooks/lifecycleLogger";

const name = "Leadership";
useLifecycleLogger({ name });
</script>

