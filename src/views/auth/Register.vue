<template>
  <div class="flex flex-col justify-center items-center py-20 text-gray-900 dark:text-gray-300">
    <div class="w-min-[340px] flex flex-col justify-center items-center p-5  border-gray-900 rounded-md">
      <h1 class="mb-10 text-4xl block font-medium leading-6">Welcome</h1>
      <form
        class="flex flex-col"
        @submit.prevent=""
      >
      <div class=" mb-6">
          <label for="email" class="block text-sm font-medium leading-6 mb-1">Name</label>
          <v-input
            class="mb-2"
            :type="'text'"
            :autocomplete="'name'"
            :placeholder="'Name'"
          />
          <label class="flex flex-row text-xs text-errorColor-500 gap-1">
            <ExclamationCircleIcon class="w-4 h-4" />
            Please enter a full name
          </label>
        </div>
        <div class=" mb-6">
          <label for="email" class="block text-sm font-medium leading-6 mb-1">Email address</label>
          <v-input
            class="mb-2"
            :type="'email'"
            :autocomplete="'email'"
            :placeholder="'Email'"
          />
          <label class="flex flex-row text-xs text-errorColor-500 gap-1">
            <ExclamationCircleIcon class="w-4 h-4" />
            User already exists
          </label>
        </div>
        <v-button
          class="mb-6"
          type="submit"
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

</script>
