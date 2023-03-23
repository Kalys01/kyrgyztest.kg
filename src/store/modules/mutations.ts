import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { State } from './state';

export type Mutations<S = State> = {
  [MutationTypes.SET_THEME](state: S, payload: string): void;
  [MutationTypes.SET_SHOWSIDEBAR](state: S, payload: boolean): void;
  [MutationTypes.SET_LANG](state: S, payload: string): void;
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
  }
}
