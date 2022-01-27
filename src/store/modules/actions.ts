import { MutationTypes } from './mutation-types';
import { ActionContext, ActionTree } from "vuex";
import { ActionTypes } from "./action-types";
import { Mutations } from "./mutations";
import { State } from "./state";

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

export type Actions = {
  [ActionTypes.INIT_THEME](context: ActionAugments): void;
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.INIT_THEME]({ commit }) {
    const cachedTheme: boolean = localStorage.theme ? localStorage.theme : false;
    return cachedTheme ? commit(MutationTypes.SET_THEME, cachedTheme) : commit(MutationTypes.SET_THEME, 'light');
  },
  
  [ActionTypes.toggle_theme]({ commit }) {

    switch (localStorage.theme) {
      case 'light':
        commit('SET_THEME', 'dark')
        break;
    
      default:
        commit('SET_THEME', 'light')
        break;
    }
  }
}