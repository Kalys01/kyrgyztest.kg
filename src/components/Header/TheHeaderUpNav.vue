<template>
  <div
    class="top-0 fixed lg:relative z-30 flex lg:justify-center justify-end items-center w-full py-1 lg:px-1 bg-gray-900 text-gray-300"
  >
    <div
      class="flex justify-between w-full text-xs md:text-sm lg:justify-around lg:gap-4 xl:gap-16"
    >
      <ul class="hidden lg:flex justify-around font-semibold py-2 text-xs xl:text-sm">
        <li class="xl:mx-3" v-for="(navup, index) in navUps" :key="index">
          <router-link
            class="text-gray-300 px-3 py-2 rounded-sm hover:border-b-2 hover:border-white"
            :to="navup.to"
          >
            {{ navup.title }}
          </router-link>
        </li>
      </ul>
      <div class="flex items-center mx-5 sm:mr-20 lg:hidden">
        <TheMobileButtonHumburger />
        <div class="mx-3 flex xs:hidden">LOGO</div>
      </div>

      <div class="hidden items-center 2xl:flex">Пн-Пт. 9:00 - 17:30</div>
      <div class="flex mx-5 lg:mx-0">
        <div class="lg:hidden flex items-center">
          <MultiLanguage />
        </div>
        <div class="flex items-center right-0 py-1">
          <TheToggleTheme />
        </div>
      </div>
    </div>
  </div>
  <TheMobileSidebarOverlay
    class="ease-in-out transition-all duration-500"
    v-show="isShowSidebar"
    @click="closeSidebar"
  />
  <TheMobileSidebar />
</template>

<script lang="ts" setup>
import NavUp from "@/models/ModelNavUp";
import TheMobileButtonHumburger from "@/components/TheMobileButtonHumburger.vue";
import TheToggleTheme from "@/components/TheToggleTheme.vue";
import TheMobileSidebar from "@/components/TheMobileSidebar.vue";
import TheMobileSidebarOverlay from "@/components/TheMobileSidebarOverlay.vue";
import MultiLanguage from "@/components/MultiLanguage.vue";
import { computed, onBeforeMount, watch, ref } from "vue";
import { MutationTypes } from "@/store/modules/mutation-types";
import { useStore } from "@/store";
import { ActionTypes } from "@/store/modules/action-types";

// import { i18n } from '@/main';
// import { useI18n } from 'vue-i18n';
// import { TranslateResult } from "vue-i18n";
// import { Link } from "@/models/model";
// import { Locales } from '@/locales/locales'
import { messages } from './../../locales/index';


const store = useStore();
// const navups = store.getters.GET_NAVUPS;
const lang = ref(localStorage.getItem('lang') || store.state.lang);
const navUps = computed( () => messages[lang.value].navUps)
// const navUps = computed(() => {
//   // const lang = store.state.lang;
//   const lang = localStorage.getItem('lang') || store.state.lang;
//   const translations = store.state.translations[lang];
// console.log('translations  ->    ' +  JSON.stringify(store.state.translations))
// console.log('lang  ->    ' +  lang)
// console.log('messages  ->    ' +  JSON.stringify(messages[langa].navUps))
//   if (!translations || !lang || !translations[lang] || !translations[lang].navUps) {
//     return [];
//   }

//   return translations[lang].navUps;
 
// });

// const { t } = useI18n();
// const navUps = $t("navUps") as TranslateResult;
// const navUps = ref<Link[]>(t('navUps') as unknown as Link[]);

// const lang = store.state.lang
// console.log('nuv  ->    ' +  navUps)
// console.log('мультилэнг   ' + lang)

onBeforeMount( () => store.dispatch(ActionTypes.INIT_THEME) );

const theme = computed( () => store.getters.GET_THEME );
watch(theme, (newTheme) => {
  const addTheme = document.querySelector("body") as HTMLElement;

  newTheme === 'light'
    ? addTheme.classList.remove("dark")
    : addTheme.classList.add("dark");
});

const isShowSidebar = computed( () => store.getters.GET_SHOWSIDEBAR );

const closeSidebar = () => store.commit(MutationTypes.SET_SHOWSIDEBAR, false);

</script>
