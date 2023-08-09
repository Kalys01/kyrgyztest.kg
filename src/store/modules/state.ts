// import NavUp from "@/models/ModelNavUp";
import { defaultLocale } from "@/locales";
import News from "@/models/ModelNews";

export type State = {
  theme: string;
  // navUps: NavUp[];
  // translations: {};
  showSidebar: boolean;
  isLoading: boolean;
  isShowResult: boolean;
  lang: string;
  posts: News[];
  personNumber: string;
};

export const state: State = {
  theme: 'light',
  // navUps: messages[defaultLocale].navUps,
  // translations: {},
  showSidebar: false,
  isLoading: false,
  isShowResult: false,
  lang: defaultLocale,
  posts: [],
  personNumber: '',
};
