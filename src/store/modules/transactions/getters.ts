import type { RootState } from '@/store/state';
import type { GetterTree } from 'vuex';
import { TransactionsState } from '@/store/modules/transactions/state';
import { TransactionsGettersNames } from '@/store/modules/transactions/names/getters.names';
import { Transaction } from '@/generated/graphql';

export type TransactionsGetters = {
  [TransactionsGettersNames.GET_TOP_TRANSACTIONS](state: TransactionsState): Transaction[],
  [TransactionsGettersNames.GET_LOADING_TOP_TRANSACTIONS](state: TransactionsState): boolean,
}

export const getters: GetterTree<TransactionsState, RootState> & TransactionsGetters = {
  [TransactionsGettersNames.GET_TOP_TRANSACTIONS](state) {
    return state.topTransactionsList;
  },

  [TransactionsGettersNames.GET_LOADING_TOP_TRANSACTIONS](state) {
    return state.isLoadingTopTransactions;
  },
};
