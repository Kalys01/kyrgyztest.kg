import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { State } from './state';
// import NavUp from "@/models/ModelNavUp";
// import { Locales } from "@/locales/locales";

export type Mutations<S = State> = {
  [MutationTypes.SET_THEME](state: S, payload: string): void;
  [MutationTypes.SET_SHOWSIDEBAR](state: S, payload: boolean): void;
  [MutationTypes.SET_LANG](state: S, payload: string): void;
  // [MutationTypes.SET_TRANSLATIONS](state: State, translations: Record<string, Record<string, string>>): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_THEME](state: State, payload: string) {
    state.theme = payload
    localStorage.theme = payload
  },
  
  [MutationTypes.SET_SHOWSIDEBAR](state: State, payload: boolean) {
    state.showSidebar = payload
  },

  [MutationTypes.SET_LANG](state: State, payload: string) {
    state.lang = payload
    localStorage.lang = payload
  },
  // [MutationTypes.UPDT_NAV](state: State, navUps: NavUp[]) {
  //   state.navUps = navUps
  //   // localStorage.lang = payload
  // },

  // [MutationTypes.SET_TRANSLATIONS](state: State, translations) {
  //   state.translations = translations;
  // },
}
