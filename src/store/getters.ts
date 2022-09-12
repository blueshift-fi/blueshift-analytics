import type { RootState } from '@/store/state';
import { RootGettersType } from '@/store/names/getters.names';
import { GetterTree } from 'vuex';
import { NetworkInfo } from '@/app.options/networks';

export type RootGetters = {
  [RootGettersType.GET_ACTIVE_NETWORK](state: RootState): NetworkInfo
}

export const getters: GetterTree<RootState, RootState> & RootGetters = {
  [RootGettersType.GET_ACTIVE_NETWORK](state) {
    return state.activeNetwork;
  }
};
