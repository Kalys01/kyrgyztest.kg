<template>
  <h1 class="mb-[100px] text-4xl font-semibold">{{$t('results.title')}}</h1>
  <div class="flex flex-col justify-center items-center w-full max-w-[800px] px-3 mb-[180px] tracking-wider">
    <SentNumber v-model="personNumber"/>
    <div v-if="isLoading">
      <SkeletonLoader class="w-64 h-6 mt-6" />
      <SkeletonLoader class="w-56 h-6 mt-6" />
      <SkeletonLoader class="w-64 h-4 mt-6" />
      <div v-for="i in 5">
        <SkeletonLoader class="w-72 h-2 mt-2" />
      </div>
    </div>
    <div v-else v-if="isShowResult">
      <h1 class="text-xl font-bold mb-10">{{$t('results.placeholder')}}: <span>{{ 0 }}</span></h1>
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
          <tr v-for="i in 5"  class="border-t-[1px] border-gray-500 py-2">
            <td class="">Лексика Грамматика</td>
            <td class="text-center">66</td>
            <td class="text-center">45:34</td>
          </tr>
          
        </tbody>
      </table>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, toRefs, ref } from "vue";
import { SearchIcon } from "@heroicons/vue/outline";
import SentNumber from "@/components/Results/SentNumber.vue";
import SkeletonLoader from "@/components/ReusedComponents/SkeletonLoader.vue";
import { useStore } from "vuex";

const store = useStore();

interface ItemObj {
  subtest: string;
  ball: number;
  time: string; 
}
// const data = reactive<ItemObj>({
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

// })

const isLoading = computed( () => store.state.isLoading );
const isShowResult = computed( () => store.state.isShowResult );

const personNumber = ref(store.state.personNumber);

</script>
