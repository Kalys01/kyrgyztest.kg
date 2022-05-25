<template>
    <TheCarousel />
    <div class="grid grid-cols-3 gap-4 justify-center mt-10">
      <div class="flex justify-center flex-wrap text-center p-10 mt-5 rounded-2xl shadow-xl bg-gray-50">
        <h1 class="text-xl font-bold mb-2 uppercase">Көңүл бургула!</h1>
        <p>
          «Кыргызтест»  системасы боюнча жүргүзүлгөн бардык тесттер толук көлөмдө «Кыргызтест»   Мамлекеттик мекемесинин сайтында онлайн көрсөтүлүп, видеого жазылып турат.
        </p>
      </div>

      <div class="flex justify-center flex-wrap text-center p-10 mt-5 rounded-2xl shadow-xl  bg-gray-50">
        <h1 class="text-xl font-bold mb-2">КУЛАКТАНДЫРУУ!</h1>
        <p>
          Мамлекеттик тил боюнча тест тапшырууну каалаган жарандар үчүн маалымат.

          «Кыргызтест» мамлекеттик мекемеси тестти 2 нөөмөт менен өткөрөт:
          1-нөөмөт: саат 9.00дон 12.00го чейин
          2-нөөмөт: саат 14.00дон 17.00го чейин

          Тестке белгиленген убакыттан 10 мүнөт эрте келүү зарыл.

          Администрация
        </p>
      </div>

      <div class="flex justify-center flex-wrap text-center p-10 mt-5 rounded-2xl shadow-xl  bg-gray-50">
        <h1 class="text-xl font-bold mb-2">ТЕСТ АКЫСЫ</h1>
        <p>
          Алуучу:
          «Кыргызтест» Мамлекеттик мекемеси
          Алуучунун банкы:
          КР борбордук казыналыгы
          Төлөм коду:
          14235400
          Төлөмдүн багыты:
          Мамлекеттик тил боюнча тест жүргүзүү үчүн төлөм
          Эсептешүү эсеби:
          4402031102000144
          БИК:
          440001
          Баасы:
          450 сом
          Бир субтестти кайра тапшыруу баасы:
          90 сом
        </p>
      </div>
    </div>

    <TheStatistics />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheStatistics from '@/components/Statistics/TheStatistics.vue'
import TheCarousel from '@/components/TheCarousel.vue'

export default defineComponent({
  name: 'Home',
  components: {
    TheStatistics,
    TheCarousel
  },
  setup() {

  }
});
</script>
