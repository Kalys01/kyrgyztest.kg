<template>
  <form
    class="flex flex-col justify-center mb-14"
    @submit.prevent="handleSubmit"
  >
    <div class=" h-10 flex">
      <input
        class="outline-none border-r-0 rounded-l-md px-2 border-[1px] border-[#673AB7] dark:bg-gray-800"
        type="text"
        :placeholder="$t('results.placeholder')"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @keydown.enter="handleEnter"
      >
      <button
        class="border-[0px] border-[#673AB7] bg-[#673AB7] hover:bg-purple-700 h-full px-8 rounded-r-md"
        type="submit"
      >
        <SearchIcon class="w-6 h-6 text-gray-300"/>
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";
import { SearchIcon } from "@heroicons/vue/outline";
import { ActionTypes } from "@/store/modules/action-types";
import { useStore } from "vuex";

const store = useStore();

const personNumber = defineProps(['modelValue']);

const handleSubmit = async () => {
  if (personNumber.modelValue.trim() === '') {
    return;
  }
  console.log(personNumber.modelValue + '   кетти серверге' ); // НЕ ЗАБУДЬ УДАЛИТЬ ПОТОМ.
  await store.dispatch(ActionTypes.SEND_DATA_TO_SERVER, personNumber.modelValue);
  personNumber.modelValue = '';
};

const handleEnter = event => {
  if (event.key === 'Enter') {
    handleSubmit();
    personNumber.modelValue = '';
  }
};

</script>
