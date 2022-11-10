<template>
  <div class="flex mx-3 h-full relative text-xs md:text-sm text-gray-300">
    <select
      class="bg-white bg-opacity-0 outline-none"
      v-model="$i18n.locale"
      @change="updateLanguage($event.target.value)"
    >
      <option
        class="bg-gray-900"
        v-for="(l, i) in locales"
        :key="i"
        :value="l.value"
        :selected="l.value === dfltLocale"
      >
      {{ l.caption }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { LOCALES } from '@/locales/locales'
import { defaultLocale } from '@/locales'
import { MutationTypes } from "@/store/modules/mutation-types";
import { useStore } from "@/store";

const locales = LOCALES
const dfltLocale = defaultLocale

const store = useStore();

const updateLanguage = (lang: locales) => {
  store.commit(MutationTypes.SET_LANG, lang)
}
</script>
