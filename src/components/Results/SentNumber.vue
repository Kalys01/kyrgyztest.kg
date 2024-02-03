<template>
  <form
    class="flex flex-col justify-center mb-14"
    @submit.prevent="handleSubmit"
  >
    <div class="h-10 flex">
      <v-input
        :border="'border-r-0'"
        :rounded="'rounded-l-md'"
        :type="'text'"
        :placeholder="$t('results.placeholder')"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @keydown.enter="handleEnter"
      />
      <v-button
        class="rounded-l-none"
        type="submit"
      >
        <SearchIcon class="w-6 h-6 text-gray-300"/>
      </v-button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { SearchIcon } from "@heroicons/vue/outline";
import { ActionTypes } from "@/store/modules/action-types";
import { useStore } from "vuex";
import VInput from "@/components/ReusedComponents/VInput.vue";
import VButton from "@/components/ReusedComponents/VButton.vue";

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
