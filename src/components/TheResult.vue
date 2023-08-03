<template>
  <h1 class="mb-[100px] text-4xl font-semibold">{{$t('results.title')}}</h1>
  <div class="flex flex-col justify-center items-center w-full max-w-[800px] px-3 mb-[180px] tracking-wider">
    <SentNumber v-model="personNumber"/>
    <h1 class="text-xl font-bold mb-10">{{$t('results.placeholder')}}: <span>{{ personNumber }}</span></h1>
    <h1 class="text-xl font-bold mb-10">{{$t('results.level')}}: <span>B2</span></h1>
    <table class="">
      <thead>
        <tr class="border-t-[1px] border-gray-500">
          <th class="text-center px-4 py-2">{{$t('results.subtests')}}</th>
          <th class="text-center px-4 py-2">{{$t('results.ball')}}</th>
          <th class="text-center px-4 py-2">{{$t('results.time')}}</th>
        </tr>
      </thead>
      <tbody >
        <tr class="border-t-[1px] border-gray-500 py-2">
          <td class="">{{data.items.subtest}}</td>
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

<script lang="ts" setup>
import { computed, reactive, toRefs, ref } from 'vue'
import { SearchIcon } from '@heroicons/vue/outline'
import SentNumber from '@/components/SentNumber.vue'
import { useStore } from 'vuex';

const store = useStore();

interface ItemObj {
  subtest: string;
  ball: number;
  time: string; 
}
const data = reactive<ItemObj>({
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

// const personNumber = ref('');

const personNumber = ref(store.state.personNumber);



</script>
