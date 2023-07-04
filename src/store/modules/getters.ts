// import  NavUp  from '@/models/ModelNavUp';
import { GetterTree } from "vuex";
import { State } from './state';

export type Getters = {
  GET_THEME(state: State): string
  // GET_NAVUPS(state: State): NavUp[]
  GET_SHOWSIDEBAR(state: State): boolean
}
export const getters: GetterTree<State, State> & Getters = {
  GET_THEME(state) {
    return state.theme;
  },
  // GET_NAVUPS(state) {
  //   return state.navUps;
  // },
  GET_SHOWSIDEBAR(state) {
    return state.showSidebar;
  },
  GET_NAVUPS(state) {
    return state.translations;
  },
}
