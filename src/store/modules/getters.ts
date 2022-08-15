import  NavUp  from '@/models/ModelNavUp';
import { GetterTree } from "vuex";
import { State } from './state';

export type Getters = {
  GET_THEME(state: State): string 
  GET_NAVUPS(state: State): NavUp[]
}
export const getters: GetterTree<State, State> & Getters = {
  GET_THEME(state) {
    return state.theme;
  },
  GET_NAVUPS(state) {
    return state.navUps;
  }
}