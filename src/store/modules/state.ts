// import NavUp from "@/models/ModelNavUp";
import { defaultLocale } from '@/locales'
import News from "@/models/ModelNews";

export type State = {
  theme: string;
  // navUps: NavUp[];
  translations: {};
  showSidebar: boolean;
  lang: string;
  posts: News[];
};

export const state: State = {
  theme: 'light',
  // navUps: messages[defaultLocale].navUps,
  translations: {},
  showSidebar: false,
  lang: defaultLocale,
  posts: [],
};
