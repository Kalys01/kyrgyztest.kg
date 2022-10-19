import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import { createI18n } from 'vue-i18n'
import './assets/tailwind.css'

const i18n = createI18n({
    locale: 'ja',
  fallbackLocale: 'en'
  })

createApp(App).use(i18n).use(store).use(router).mount('#app')
