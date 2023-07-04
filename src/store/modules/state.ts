// import NavUp from "@/models/ModelNavUp";
import { defaultLocale } from '@/locales'

export type State = {
  theme: string;
  // navUps: NavUp[];
  translations: {};
  showSidebar: boolean;
  lang: string;
};

export const state: State = {
  theme: 'light',
  // navUps: messages[defaultLocale].navUps,
  translations: {},
  showSidebar: false,
  lang: defaultLocale
};