<template>
  <div class="flex mx-3 h-full relative text-xs md:text-sm text-gray-300">
    <select
      class="bg-white bg-opacity-0 outline-none cursor-pointer"
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
// import NavUp from "@/models/ModelNavUp";
// import { useI18n } from 'vue-i18n';
import { defaultLocale } from '@/locales'
import { MutationTypes } from "@/store/modules/mutation-types";
import { useStore } from "@/store";

const locales = LOCALES
const dfltLocale = defaultLocale

const store = useStore();
// const { t } = useI18n();


// const navUps = t('navUps');
const updateLanguage = (lang: locales) => {

  // const navUps = loadNavUpsForLocale(locale)
  store.commit(MutationTypes.SET_LANG, lang)
  window.location.reload();
  // store.commit(MutationTypes.UPDT_NAV, navUps )
}

// const loadNavUpsForLocale = async (locale: string): Promise<NavUp[]> => {
//   try {
//     const response = await fetch(`@/locales/${locale}.json`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch navUps');
//     }
//     const navUps = await response.json();
//     return navUps;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };
</script>
