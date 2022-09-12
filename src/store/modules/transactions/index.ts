import { Module } from 'vuex';
import { actions } from '@/store/modules/transactions/actions';
import { state } from '@/store/modules/transactions/state';
import { mutations } from '@/store/modules/transactions/mutations';
import { getters } from '@/store/modules/transactions/getters';
import type { RootState } from '@/store/state';
import type { TransactionsState } from '@/store/modules/transactions/state';

export const transactions: Module<TransactionsState, RootState> = {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
};
