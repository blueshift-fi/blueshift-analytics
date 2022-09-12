import type { RootState } from '@/store/state';
import type { GetterTree } from 'vuex';
import { Portfolio } from '@/generated/graphql';
import { PortfoliosState } from '@/store/modules/portfolios/state';
import { PortfoliosGettersNames } from '@/store/modules/portfolios/names/getters.names';
import { SingleValueData } from 'lightweight-charts';

export type DaoListGetters = {
  [PortfoliosGettersNames.GET_TOP_PORTFOLIOS](state: PortfoliosState): Portfolio[],
  [PortfoliosGettersNames.GET_LOADING_TOP_PORTFOLIOS](state: PortfoliosState): boolean,

  [PortfoliosGettersNames.GET_PORTFOLIO](state: PortfoliosState): Portfolio,
  [PortfoliosGettersNames.GET_LOADING_PORTFOLIO](state: PortfoliosState): boolean,

  // [PortfoliosGettersNames.GET_PORTFOLIO_STATISTIC](state: PortfoliosState): SingleValueData[],
  [PortfoliosGettersNames.GET_LOADING_PORTFOLIO_STATISTIC](state: PortfoliosState): boolean,
}

export const getters: GetterTree<PortfoliosState, RootState> & DaoListGetters = {
  [PortfoliosGettersNames.GET_TOP_PORTFOLIOS](state) {
    return state.topPortfoliosList;
  },

  [PortfoliosGettersNames.GET_LOADING_TOP_PORTFOLIOS](state) {
    return state.isLoadingTopPortfolios;
  },

  [PortfoliosGettersNames.GET_PORTFOLIO](state) {
    return state.portfolio;
  },

  [PortfoliosGettersNames.GET_LOADING_PORTFOLIO](state) {
    return state.isLoadingPortfolio;
  },

  // [PortfoliosGettersNames.GET_PORTFOLIO_STATISTIC](state) {
  //   const list = state.statistic.map(item => {
  //     return {
  //       time: item.dateTime,
  //       // value: item[state.statisticFilter.statistic]
  //     };
  //   });
  //   // return state.statistic.map(item => {
  //   //   time: item.dateTime,
  //   //     value:
  //   // });
  // },

  [PortfoliosGettersNames.GET_LOADING_PORTFOLIO_STATISTIC](state) {
    return state.isLoadingStatistic;
  },
};
