<template>
  <div class="flex flex-col justify-center items-center py-20 text-gray-900 dark:text-gray-300">
    <div class="w-min-[340px] flex flex-col justify-center items-center p-5  border-gray-900 rounded-md">
      <h1 class="mb-10 text-4xl block font-medium leading-6">Welcome</h1>
      <form class="flex flex-col" >
        <div class=" mb-6">
          <v-input
            class="mb-2"
            v-model.trim="modelValue"
            :type="'text'"
            :autocomplete="'email'"
            :labelName="'Email'"
            :border="errorEmail ? 'border-errorColor-500' : ''"
            :focus="errorEmail ? 'focus:border-errorColor-500' : ''"
          />
          <label
            v-if="errorEmail"
            class="flex flex-row text-xs text-errorColor-500 gap-1"
          >
              <ExclamationCircleIcon class="w-4 h-4" />
            <span>{{ errorEmail }}</span>
          </label>
        </div>
        <v-button
          class="mb-6"
          type="submit"
          :disabled=isBtnDisabled
        >Sign in</v-button>
      </form>
      <p class="block text-sm font-medium leading-6">Don't have an account yet? <router-link class="text-mainColor hover:text-hoverColor font-bold transition-all duration-200" to="Register">Sign up</router-link></p>
    </div>
  </div>
  <!-- <corbado-auth :project-id="corbadoProjectID" conditional="yes">
    <input name="username" id="corbado-username" required autocomplete="webauthn"/>
  </corbado-auth> -->
</template>

<script lang="ts" setup>
// import '@corbado/webcomponent/pkg/auth_cui.css';
// import '@corbado/webcomponent';
import VInput from "@/components/ReusedComponents/VInput.vue";
import VButton from "@/components/ReusedComponents/VButton.vue";
import { ExclamationCircleIcon } from "@heroicons/vue/outline";
import { ref, onMounted, Ref, computed } from "vue";

const modelValue: Ref<string | undefined> = ref<string | undefined>(undefined);
const isBtnDisabled = ref(true);

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
      return "Введите корректный email";
    }
    return isBtnDisabled.value = false;
  }
  isBtnDisabled.value = true;
  return ;
});

const submitHandler = () => {
  alert ("отправлен на сервер")
  return;

};

// const corbadoProjectID = ref('ateCxGcftuOmj3lJiHkhMeIuMvrQ/uSLSci58DaqnUw=');

</script>
