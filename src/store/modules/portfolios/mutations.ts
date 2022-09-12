import type { MutationTree } from 'vuex';
import { CommonMutationsType } from '@/store/names/common.mutations.names';
import {
  getDefaultPortfoliosState,
  PortfoliosState,
  PortfolioStatistic,
  StatisticFilter
} from '@/store/modules/portfolios/state';
import { PortfoliosMutationsNames } from '@/store/modules/portfolios/names/mutations.names';
import { Portfolio } from '@/generated/graphql';

export type PortfoliosMutations<S = PortfoliosState> = {
  [PortfoliosMutationsNames.SET_TOP_PORTFOLIOS](state: S, payload: Portfolio[]): void,
  [PortfoliosMutationsNames.SET_LOADING_TOP_PORTFOLIOS](state: S, payload: boolean): void,

  [PortfoliosMutationsNames.SET_PORTFOLIO](state: S, payload: Portfolio): void,
  [PortfoliosMutationsNames.SET_LOADING_PORTFOLIO](state: S, payload: boolean): void,

  [PortfoliosMutationsNames.SET_STATISTIC](state: S, payload: PortfolioStatistic[]): void,
  [PortfoliosMutationsNames.SET_STATISTIC_FILTER](state: S, payload: StatisticFilter): void,
  [PortfoliosMutationsNames.SET_LOADING_STATISTIC](state: S, payload: boolean): void,

  [CommonMutationsType.RESET_MODULE](state: S): void,
}

export const mutations: MutationTree<PortfoliosState> & PortfoliosMutations = {
  [PortfoliosMutationsNames.SET_TOP_PORTFOLIOS](state, payload) {
    state.topPortfoliosList = payload;
  },

  [PortfoliosMutationsNames.SET_LOADING_TOP_PORTFOLIOS](state, payload) {
    state.isLoadingTopPortfolios = payload;
  },

  [PortfoliosMutationsNames.SET_PORTFOLIO](state, payload) {
    state.portfolio = payload;
  },

  [PortfoliosMutationsNames.SET_LOADING_PORTFOLIO](state, payload) {
    state.isLoadingPortfolio = payload;
  },

  [PortfoliosMutationsNames.SET_STATISTIC](state, payload) {
    state.statistic = payload;
  },

  [PortfoliosMutationsNames.SET_STATISTIC_FILTER](state, payload) {
    state.statisticFilter = payload;
  },

  [PortfoliosMutationsNames.SET_LOADING_STATISTIC](state, payload) {
    state.isLoadingStatistic = payload;
  },

  [CommonMutationsType.RESET_MODULE](state) {
    Object.assign(state, getDefaultPortfoliosState());
  }
};
