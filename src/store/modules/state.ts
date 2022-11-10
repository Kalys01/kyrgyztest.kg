import NavUp from "@/models/ModelNavUp";
import { defaultLocale } from '@/locales'

export type State = {
  theme: string;
  navUps: NavUp[];
  showSidebar: boolean;
  lang: string;
};

export const state: State = {
  theme: 'light',
  navUps: [
    {title: 'Нормативные акты', to: '/normative'},
    {title: 'Выпускникам школ', to: '/forschool'},
    {title: 'Система Кыргызтест', to: '/system'},
    {title: 'График проведения теста', to: '/graph'},
    {title: 'Тренировочные тесты', to: '/training'},
    {title: 'Объявления', to: '/ads'}
  ],
  showSidebar: false,
  lang: defaultLocale
};