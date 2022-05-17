<template>
  <h1 class="mb-[100px] text-4xl font-semibold">Результаты теста</h1>
  <div class="flex flex-col justify-center items-center w-full max-w-[800px] px-3 mb-[180px] tracking-wider">
    <form class="flex flex-col justify-center mb-14">
      <div class=" h-10 flex">
        <input type="text" class="outline-none border-r-0 rounded-l-md px-2 border-[1px] border-[#673AB7] dark:bg-gray-800 " placeholder="Жеке-номер">
        <button
          class="border-[0px] border-[#673AB7] bg-[#673AB7] hover:bg-purple-700 h-full px-8 rounded-r-md"
        >
          <SearchIcon class="w-6 h-6 text-gray-300"/>
        </button>
      </div>
    </form>

    <h1 class="text-xl font-bold mb-10">Жеке-номер: <span>220511-58794</span></h1>
    <h1 class="text-xl font-bold mb-10">Уровень: <span>B2</span></h1>
    <table class="">
      <thead>
        <tr class="border-t-[1px] border-gray-500">
          <th class="text-center px-4 py-2">Субтесты</th>
          <th class="text-center px-4 py-2">Балл</th>
          <th class="text-center px-4 py-2">время</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-t-[1px] border-gray-500 py-2">
          <td class="">Лексика Грамматика</td>
          <td class="text-center">66</td>
          <td class="text-center">45:34</td>
        </tr>
        <tr class="border-t-[1px] border-gray-500">
          <td class="">Окуу</td>
          <td class="text-center">76</td>
          <td class="text-center">45:23</td>
        </tr>
        <tr class="border-t-[1px] border-gray-500">
          <td class="">Угуу</td>
          <td class="text-center">78</td>
          <td class="text-center">19:12</td>
        </tr>
        <tr class="border-t-[1px] border-gray-500">
          <td class="">Жазуу</td>
          <td class="text-center">67</td>
          <td class="text-center">65:12</td>
        </tr>
        <tr class="border-t-[1px] border-gray-500">
          <td class="">Сүйлөө</td>
          <td class="text-center">89</td>
          <td class="text-center">12:09</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { SearchIcon } from '@heroicons/vue/outline'

export default defineComponent({
  components: {
    SearchIcon
  },
  setup() {
    interface ItemObj {
      subtest: string;
      ball: number;
      time: string; 
    }
    const data = reactive({
      items: [
        {
          subtest: "Лексика.Грамматика",
          ball: 89,
          time: '12:45'
        },
        {
          subtest: "Окуу",
          ball: 89,
          time: '12:45'
        },
        {
          subtest: "Угуу",
          ball: 89,
          time: '12:45'
        },
        {
          subtest: "Жазуу",
          ball: 89,
          time: '12:45'
        },
        {
          subtest: "Сүйлөө",
          ball: 89,
          time: '12:45'
        }
      ]

    })
  }
})
</script>
