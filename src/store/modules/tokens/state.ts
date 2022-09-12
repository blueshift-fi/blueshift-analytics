import { Token } from '@/generated/graphql';

export type TokensState = {
  topTokensList: Token[],
  isLoadingTopTokens: boolean
}

export const getDefaultTokensState = (): TokensState => {
  return {
    topTokensList: [],
    isLoadingTopTokens: true,
  };
};

export const state: TokensState = getDefaultTokensState();
