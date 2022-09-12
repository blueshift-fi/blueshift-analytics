import type { RootState } from '@/store/state';
import { RootMutationsType } from '@/store/names/mutations.names';
import { getDefaultRootState } from '@/store/state';
import { MutationTree } from 'vuex';
import { NetworkInfo } from '@/app.options/networks';

export type RootMutation<S = RootState> = {
  [RootMutationsType.SET_IS_LOADED_APP](state: S, payload: boolean): void,
  [RootMutationsType.SET_ACTIVE_NETWORK](state: S, payload: NetworkInfo): void,
  [RootMutationsType.RESET_STORE](state: S): void
}

export const mutations: MutationTree<RootState> & RootMutation = {
  [RootMutationsType.SET_IS_LOADED_APP](state, payload) {
    state.isLoadingDictionaries = payload;
  },

  [RootMutationsType.SET_ACTIVE_NETWORK](state, payload) {
    state.activeNetwork = payload;
  },

  [RootMutationsType.RESET_STORE](state) {
    Object.assign(state, getDefaultRootState());
  }
};
