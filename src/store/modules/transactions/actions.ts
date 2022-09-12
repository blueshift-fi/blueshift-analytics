import type { RootState } from '@/store/state';
import type { ActionContext, ActionTree } from 'vuex';
import type { Modify } from '@/typesUtils/modify';
import { Transaction, useGetTopTransactionsQuery } from '@/generated/graphql';
import { TransactionsState } from '@/store/modules/transactions/state';
import { TransactionsMutations } from '@/store/modules/transactions/mutations';
import { TransactionsActionsNames } from '@/store/modules/transactions/names/actions.names';
import { TransactionsMutationsNames } from '@/store/modules/transactions/names/mutations.names';
import { watch } from 'vue';


export type AugmentedActionContext = Modify<
  ActionContext<TransactionsState, RootState>,
  { commit<K extends keyof TransactionsMutations>(key: K, payload?: Parameters<TransactionsMutations[K]>[1]): ReturnType<TransactionsMutations[K]> }
>;

export type DaoListActions = {
  [TransactionsActionsNames.FETCH_TOP_TRANSACTIONS]({ commit }: AugmentedActionContext): void,
}

export const actions: ActionTree<TransactionsState, RootState> & DaoListActions = {
  [TransactionsActionsNames.FETCH_TOP_TRANSACTIONS]({ commit }) {
    commit(TransactionsMutationsNames.SET_LOADING_TOP_TRANSACTIONS, true);

    const { result, error } = useGetTopTransactionsQuery();

    watch(() => result.value, () => {
      if(error.value) throw new Error();
      commit(TransactionsMutationsNames.SET_TOP_TRANSACTIONS, result.value?.transactions as Transaction[]);
      commit(TransactionsMutationsNames.SET_LOADING_TOP_TRANSACTIONS, false);
    }, { immediate: true });
  },
};
