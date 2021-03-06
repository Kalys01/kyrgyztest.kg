import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { State } from './state';

export type Mutations<S = State> = {
  [MutationTypes.SET_THEME](state: S, payload: string | boolean): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_THEME](state, payload: string) {
    state.theme = payload,
    localStorage.theme = payload || 'light'
  },
}
