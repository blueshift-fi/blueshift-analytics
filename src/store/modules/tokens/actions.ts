import type { RootState } from '@/store/state';
import type { ActionContext, ActionTree } from 'vuex';
import type { Modify } from '@/typesUtils/modify';
import { TokensActionsNames } from '@/store/modules/tokens/names/actions.names';
import type { TokensState } from '@/store/modules/tokens/state';
import { TokensMutations } from '@/store/modules/tokens/mutations';
import { TokensMutationsNames } from '@/store/modules/tokens/names/mutations.names';
import { Token, useGetTopTokensQuery } from '@/generated/graphql';
import { watch } from 'vue';


export type AugmentedActionContext = Modify<
  ActionContext<TokensState, RootState>,
  { commit<K extends keyof TokensMutations>(key: K, payload?: Parameters<TokensMutations[K]>[1]): ReturnType<TokensMutations[K]> }
>;

export type DaoListActions = {
  [TokensActionsNames.FETCH_TOP_TOKENS]({ commit }: AugmentedActionContext): void,
}

export const actions: ActionTree<TokensState, RootState> & DaoListActions = {
  [TokensActionsNames.FETCH_TOP_TOKENS]({ commit }) {
    commit(TokensMutationsNames.SET_LOADING_TOP_TOKENS, true);

    const { result, error } = useGetTopTokensQuery();

    watch(() => result.value, () => {
      if(error.value) throw new Error();
      commit(TokensMutationsNames.SET_TOP_TOKENS, result.value?.tokens as Token[]);
      commit(TokensMutationsNames.SET_LOADING_TOP_TOKENS, false);
    }, { immediate: true });
  },
};
