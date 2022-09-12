import type { MutationTree } from 'vuex';
import { CommonMutationsType } from '@/store/names/common.mutations.names';
import { TokensMutationsNames } from '@/store/modules/tokens/names/mutations.names';
import type { Token } from '@/generated/graphql';
import type { TokensState } from '@/store/modules/tokens/state';
import { getDefaultTokensState } from '@/store/modules/tokens/state';

export type TokensMutations<S = TokensState> = {
  [TokensMutationsNames.SET_TOP_TOKENS](state: S, payload: Token[]): void,
  [TokensMutationsNames.SET_LOADING_TOP_TOKENS](state: S, payload: boolean): void,
  [CommonMutationsType.RESET_MODULE](state: S): void,
}

export const mutations: MutationTree<TokensState> & TokensMutations = {
  [TokensMutationsNames.SET_TOP_TOKENS](state, payload) {
    state.topTokensList = payload;
  },

  [TokensMutationsNames.SET_LOADING_TOP_TOKENS](state, payload) {
    state.isLoadingTopTokens = payload;
  },


  [CommonMutationsType.RESET_MODULE](state) {
    Object.assign(state, getDefaultTokensState());
  }
};
