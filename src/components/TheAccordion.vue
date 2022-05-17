<template>
  <h1 class="mb-[100px] text-4xl font-semibold">Объявления</h1>
  <div class=" w-full max-w-[800px] px-3 mb-[180px] tracking-wider">
    <div
      v-for="(item, id) in items"
      :key="id"
    >
      <div
        class="flex justify-between relative text-md md:text-xl font-bold cursor-pointer py-4 leading-relaxed border-t-[.5px] border-gray-400"
        @click="changeItem(item, id)"
      >
        <h2>{{ item.title }}</h2>
        <div>
          <PlusIcon
            class="h-6 w-6 transform transition duration-300"
            :class="item.show&&rotate"
          />
        </div>
      </div>
      <div 
        class="text-sm md:text-md pb-4 font-mono leading-6 text-gray-600 transform transition duration-300"
        v-show="active==id&&item.show" 
      >
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue'
import { PlusIcon } from '@heroicons/vue/outline'

export default defineComponent({
  components: {
    PlusIcon
  },
  setup() {
    interface ItemObj {
      title: string;
      content: string;
      show: boolean; 
    }
    const data = reactive({
      items: [
        {
          title: "Новости работы мобильных групп",
          content: "Из-за небольшого количества участников тестирования в Джалал-Абадской области мобильная группа ГУ «Кыргызтест» переехала из Джалал-Абада в Ош.С 1 июня 2021 года тестирование продолжится в ОшГУ. Адрес: г. Ош, ул. Ленина, 331, 3-й этаж главного корпуса, офис 323 Контактный телефон: 0700705770",
          show: false
        },
        {
          title: "Онлайн тестирование",
          content: "24 сентября 2020 года Государственным учреждением «Кыргызтест» было организовано и успешно проведено онлайн тестирование по государственному языку, посвящённое празднованию Дня государственного языка.",
          show: false
        },
        {
          title: "Информация по тестированию для кандидатов",
          content: "С сентября 2019 года Государственное учреждение «Кыргызтест» проводит тестирование по определению уровня владения государственным языком среди кандидатов на должности мэров городов и глав айыл окмоту согласно ЗАКОНА КЫРГЫЗСКОЙ РЕСПУБЛИКИ от 8 августа 2019 года № 118 «О внесения изменений в некоторые законодательные акты Кыргызской Республики» (в законы КР «О местном самоуправлении», «О статусе депутатов местных кенешей», «О статусе столицы», «О статусе города Ош»), статьи 42, 48x",
          show: false
        }
      ],
      active: 0,
      rotate: 'rotate-45',
      heigth: 'h-24 overflow-visible',
      changeItem: (vo: ItemObj, inx: number) => {
        if (inx === data.active) {
            vo.show = !vo.show
        } else {
            vo.show = true
        }
        data.active = inx
      }
    })

    // watch(changeItem(), (vo: ItemObj) => {
    //   vo.show = false
    // })

    return {
      ... toRefs(data)
    }
  }
})
</script>
