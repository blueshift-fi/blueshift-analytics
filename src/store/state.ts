import { TokensState } from '@/store/modules/tokens/state';
import { TransactionsState } from '@/store/modules/transactions/state';
import { milkomedaNetworkOptions, NetworkInfo } from '@/app.options/networks';

export type RootState = {
  isLoadingDictionaries: boolean,
  activeNetwork: NetworkInfo,
  tokens?: TokensState,
  transactions?: TransactionsState
}

export type Dictionaries = any

export const getDefaultRootState = (): RootState => {
  return {
    isLoadingDictionaries: false,
    activeNetwork: milkomedaNetworkOptions
  };
};

export const state: RootState = getDefaultRootState();
