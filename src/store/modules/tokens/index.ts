import { Module } from 'vuex';
import { actions } from '@/store/modules/tokens/actions';
import { state } from '@/store/modules/tokens/state';
import { mutations } from '@/store/modules/tokens/mutations';
import { getters } from '@/store/modules/tokens/getters';
import type { RootState } from '@/store/state';
import type { TokensState } from '@/store/modules/tokens/state';

export const tokens: Module<TokensState, RootState> = {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
};
