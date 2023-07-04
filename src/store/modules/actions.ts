// import { Locales } from './../../locales/locales';
import { MutationTypes } from './mutation-types';
import { ActionContext, ActionTree, Commit } from "vuex";
import { ActionTypes } from "./action-types";
import { Mutations } from "./mutations";
import { State } from "./state";
// import { messages } from './../../locales/index';

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

export type Actions = {
  [ActionTypes.INIT_THEME](context: ActionAugments): void;
  // [ActionTypes.LOAD_TRANSLATIONS](context: { commit: Commit, state: State }, payload: any): void;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.INIT_THEME]({ commit }) {

    if (localStorage.getItem('theme') === 'dark' ) {
      commit(MutationTypes.SET_THEME, 'dark')
    }else {
      commit(MutationTypes.SET_THEME, 'light')
    }
  },

  [ActionTypes.toggle_theme]({ commit }) {

    switch(localStorage.theme) {
      case 'light':
        commit(MutationTypes.SET_THEME, 'dark')
        break;
    
      default:
        commit(MutationTypes.SET_THEME, 'light')
        break;
    }
  },

  [ActionTypes.open_sidebar]({ commit }, payload: boolean) {
    commit(MutationTypes.SET_SHOWSIDEBAR, payload)
  }

  // [ActionTypes.LOAD_TRANSLATIONS]({ commit, state}, payload) {
    // try {
    //   const responseKg = await fetch('src/locales/kg.json'); // Путь к файлу перевода на кыргызском
    //   const translationsKg = await responseKg.json();

    //   const responseRu = await fetch'src/locales/ru.json'); // Путь к файлу перевода на русском
    //   const translationsRu = await responseRu.json();

    //   const responseEn = await fetch('src/locales/en.json'); // Путь к файлу перевода на английском
    //   const translationsEn = await responseEn.json();

    //   const translations = {
    //     kg: translationsKg,
    //     ru: translationsRu,
    //     en: translationsEn,
    //   };
    //   commit(MutationTypes.SET_TRANSLATIONS, translations);

    // } catch (error) {
    //   console.error('Failed to load translations:', error);
    // }
  //   const lang = localStorage.getItem('lang') || state.lang;

  //   const translation  = messages;

  //   commit(MutationTypes.SET_TRANSLATIONS, translation );
  // },
}