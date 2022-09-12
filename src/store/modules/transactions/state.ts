import type { Transaction } from '@/generated/graphql';

export type TransactionsState = {
  topTransactionsList: Transaction[],
  isLoadingTopTransactions: boolean
}

export const getDefaultTransactionsState = (): TransactionsState => {
  return {
    topTransactionsList: [],
    isLoadingTopTransactions: true,
  };
};

export const state: TransactionsState = getDefaultTransactionsState();
