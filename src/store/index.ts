import {
  createStore,
  Store as VuexStore,
  CommitOptions,
  createLogger,
  DispatchOptions
} from 'vuex'

import { State, state } from './modules/state'
import { Mutations, mutations } from './modules/mutations'
import { Actions, actions } from './modules/actions'
import { Getters, getters } from './modules/getters'

export const store = createStore<State>({
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
  state,
  mutations,
  actions,
  getters,

  modules: {
  }
})

export function useStore() {
  return store as Store
}
export type Store = Omit<
VuexStore<State>,
'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}
