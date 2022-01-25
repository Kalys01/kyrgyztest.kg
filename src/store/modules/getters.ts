import { GetterTree } from "vuex";
import { State } from './state';

export type Getters = {
  GET_THEME(state: State): string | boolean
}
export const getters: GetterTree<State, State> & Getters = {
  GET_THEME(state) {
    return state.theme;
  }
}