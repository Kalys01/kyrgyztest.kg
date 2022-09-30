import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { State } from './state';

export type Mutations<S = State> = {
  [MutationTypes.SET_THEME](state: S, payload: string | boolean): void;
  [MutationTypes.SET_SHOWSIDEBAR](state: S, payload: boolean): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_THEME](state: State, payload: string) {
    state.theme = payload,
    localStorage.theme = payload
  },
  [MutationTypes.SET_SHOWSIDEBAR](state: State, payload: boolean) {
    state.showSidebar = !state.showSidebar
  },
}
