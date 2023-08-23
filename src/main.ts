import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
import "./assets/tailwind.css";
import kg from "@/locales/kg.json";
import { createI18n } from "vue-i18n";
import { messages, defaultLocale } from "./locales";

type MessageSchema = typeof kg;

const LocalStorageLang = localStorage.getItem('lang');

export const i18n = createI18n<[MessageSchema], 'kg' | 'ru' | 'en' >({
    messages,
    locale: LocalStorageLang || defaultLocale,
    fallbackLocale: defaultLocale,
    legacy: false
  });

createApp(App).use(i18n).use(store).use(router).use(VueViewer).mount('#app');
