<template>
  <div class="flex flex-col justify-center items-center py-20 text-gray-900 dark:text-gray-300">
    <div class="w-min-[340px] flex flex-col justify-center items-center p-5  border-gray-900 rounded-md">
      <h1 class="mb-10 text-4xl block font-medium leading-6">Welcome</h1>
      <form
        class="flex flex-col"
        @submit.prevent="submitHandler"
      >
      <div class=" mb-10">
          <v-input
            class="mb-2"
            v-model.trim="modelValueName"
            :type="'text'"
            :autocomplete="'name'"
            :labelName="'Name'"
            :border="errorName ? 'border-errorColor-500' : ''"
            :focus="errorName ? 'focus:border-errorColor-500' : ''"
          />
          <p>{{ modelValueName }}</p>
          <label v-if="errorName" class="flex flex-row text-xs text-errorColor-500 gap-1">
            <ExclamationCircleIcon class="w-4 h-4" />
            {{ errorName }}
          </label>
        </div>
        <div class=" mb-6">
          <v-input
            class="mb-2"
            v-model.trim="modelValue"
            :type="'text'"
            :labelName="'Email'"
            :border="errorEmail ? 'border-errorColor-500' : ''"
            :focus="errorEmail ? 'focus:border-errorColor-500' : ''"
          />
          <p>{{ modelValue }}</p>
          <label v-if="errorEmail" class="flex flex-row text-xs text-errorColor-500 gap-1">
            <ExclamationCircleIcon class="w-4 h-4" />
            {{ errorEmail }}
          </label>
        </div>
        <v-button
          class="mb-6"
          type="submit"
          :disabled="isBtnDisabled"
        >Sign in</v-button>
      </form>
      <p class="block text-sm font-medium leading-6">You already have an account? <router-link class="text-mainColor hover:text-hoverColor font-bold transition-all duration-200" to="Login">Sign in</router-link></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import VInput from "@/components/ReusedComponents/VInput.vue";
import VButton from "@/components/ReusedComponents/VButton.vue";
import { ExclamationCircleIcon } from '@heroicons/vue/outline';
import { ref, Ref, computed } from "vue";

const modelValue: Ref<string | undefined> = ref<string | undefined>(undefined);
const modelValueName: Ref<string | undefined> = ref<string | undefined>(undefined)
const isBtnDisabled = ref(false);
const startValidation: Ref<boolean | undefined> = ref<boolean | undefined>(false);


const errorName = computed(() => {
  if(modelValueName.value !== undefined ) {
    if(modelValueName.value.trim() === '') {
      isBtnDisabled.value = true;
      return "Не должно быть пустым";
    } else if(modelValueName.value.trim().length < 3) {
      isBtnDisabled.value = true;
      return "Имя должно быть больше 3 символов";
    }
    return;
  }
  isBtnDisabled.value = true;
  return ;
});

const validateEmail = (modelValue: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(modelValue);
};

const errorEmail = computed(() => {
  if(modelValue.value !== undefined) {
    if(modelValue.value.trim() === '') {
      isBtnDisabled.value = true;
      return "Не должно быть пустым";
    } else if(!validateEmail(modelValue.value)) {
      isBtnDisabled.value = true;
      return "Введите корректный email";
    }
    return isBtnDisabled.value = false;
  }
  isBtnDisabled.value = true;
  return ;
});
console.log(">>>>>>", errorName, errorEmail)
const submitHandler = () => {
  startValidation.value = true;
  if(errorName.value && errorEmail.value) {
    alert ("отправлен на сервер")
  }
  return;

};
</script>
