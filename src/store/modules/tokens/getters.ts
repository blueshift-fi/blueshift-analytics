import type { RootState } from '@/store/state';
import type { GetterTree } from 'vuex';
import { TokensGettersNames } from '@/store/modules/tokens/names/getters.names';
import type { TokensState } from '@/store/modules/tokens/state';
import type { Token } from '@/generated/graphql';

export type DaoListGetters = {
  [TokensGettersNames.GET_TOP_TOKENS](state: TokensState): Token[],
  [TokensGettersNames.GET_LOADING_TOP_TOKENS](state: TokensState): boolean,
}

export const getters: GetterTree<TokensState, RootState> & DaoListGetters = {
  [TokensGettersNames.GET_TOP_TOKENS](state) {
    return state.topTokensList;
  },

  [TokensGettersNames.GET_LOADING_TOP_TOKENS](state) {
    return state.isLoadingTopTokens;
  },
};
