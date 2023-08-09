// import  NavUp  from '@/models/ModelNavUp';
import { GetterTree } from "vuex";
import { State } from "./state";
import News from "@/models/ModelNews";

export type Getters = {
  GET_THEME(state: State): string;
  // GET_NAVUPS(state: State): NavUp[]
  GET_SHOWSIDEBAR(state: State): boolean;
  GET_LOADING(state: State): boolean;
  GET_POST(state: State): News[];
}


export const getters: GetterTree<State, State> & Getters = {
  GET_THEME(state) {
    return state.theme;
  },
  
  GET_LOADING(state) {
    return state.isLoading;
  },

  GET_SHOWSIDEBAR(state) {
    return state.showSidebar;
  },
  // GET_NAVUPS(state) {
  //   return state.translations;
  // },

  GET_POST(state) {
    return state.posts;
  }

}
