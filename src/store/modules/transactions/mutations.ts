import type { MutationTree } from 'vuex';
import { CommonMutationsType } from '@/store/names/common.mutations.names';
import { TransactionsMutationsNames } from '@/store/modules/transactions/names/mutations.names';
import type { TransactionsState } from '@/store/modules/transactions/state';
import { Transaction } from '@/generated/graphql';
import { getDefaultTransactionsState } from '@/store/modules/transactions/state';

export type TransactionsMutations<S = TransactionsState> = {
  [TransactionsMutationsNames.SET_TOP_TRANSACTIONS](state: S, payload: Transaction[]): void,
  [TransactionsMutationsNames.SET_LOADING_TOP_TRANSACTIONS](state: S, payload: boolean): void,
  [CommonMutationsType.RESET_MODULE](state: S): void,
}

export const mutations: MutationTree<TransactionsState> & TransactionsMutations = {
  [TransactionsMutationsNames.SET_TOP_TRANSACTIONS](state, payload) {
    state.topTransactionsList = payload;
  },

  [TransactionsMutationsNames.SET_LOADING_TOP_TRANSACTIONS](state, payload) {
    state.isLoadingTopTransactions = payload;
  },


  [CommonMutationsType.RESET_MODULE](state) {
    Object.assign(state, getDefaultTransactionsState());
  }
};
