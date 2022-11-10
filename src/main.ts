import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import './assets/tailwind.css'
import ru from '@/locales/ru.json'
import { createI18n } from 'vue-i18n'
import { messages, defaultLocale } from './locales'

type MessageSchema = typeof ru

const LocalStorageLang = localStorage.getItem('lang')

const i18n = createI18n<[MessageSchema], 'ru' | 'en'>({
    messages,
    locale: LocalStorageLang || defaultLocale,
    fallbackLocale: defaultLocale,
    legacy: false
  })

createApp(App).use(i18n).use(store).use(router).mount('#app')
