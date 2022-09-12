import type { RootState } from '@/store/state';
import type { ActionContext, ActionTree } from 'vuex';
import type { Modify } from '@/typesUtils/modify';
import { PortfoliosMutationsNames } from '@/store/modules/portfolios/names/mutations.names';
import { PortfoliosMutations } from '@/store/modules/portfolios/mutations';
import { PortfoliosActionsNames } from '@/store/modules/portfolios/names/actions.names';
import {
  Portfolio,
  useGetPortfolioQuery,
  useGetStatPortfoliosQuery,
  useGetTopPortfoliosQuery
} from '@/generated/graphql';
import { PortfoliosState, PortfolioStatistic, StatisticFilter } from '@/store/modules/portfolios/state';
import { watch } from 'vue';


export type AugmentedActionContext = Modify<
  ActionContext<PortfoliosState, RootState>,
  { commit<K extends keyof PortfoliosMutations>(key: K, payload?: Parameters<PortfoliosMutations[K]>[1]): ReturnType<PortfoliosMutations[K]> }
>;

export type DaoListActions = {
  [PortfoliosActionsNames.FETCH_TOP_PORTFOLIOS]({ commit }: AugmentedActionContext): void,
  [PortfoliosActionsNames.FETCH_PORTFOLIO_BY_NAME]({ commit }: AugmentedActionContext, payload: string): void,
  [PortfoliosActionsNames.FETCH_STATISTIC_FOR_PORTFOLIO]({ commit, state }: AugmentedActionContext): void,
  [PortfoliosActionsNames.SET_FILTER]({ commit, dispatch }: AugmentedActionContext, payload: StatisticFilter): void,
}

export const actions: ActionTree<PortfoliosState, RootState> & DaoListActions = {
  [PortfoliosActionsNames.FETCH_TOP_PORTFOLIOS]({ commit }) {
    commit(PortfoliosMutationsNames.SET_LOADING_TOP_PORTFOLIOS, true);

    const { result, error } = useGetTopPortfoliosQuery();

    watch(() => result.value, () => {
      if(error.value) throw new Error();
      commit(PortfoliosMutationsNames.SET_TOP_PORTFOLIOS, result.value?.portfolios as Portfolio[]);
      commit(PortfoliosMutationsNames.SET_LOADING_TOP_PORTFOLIOS, false);
    }, { immediate: true });

  },

  [PortfoliosActionsNames.FETCH_PORTFOLIO_BY_NAME]({ commit }, payload) {
    // commit(PortfoliosMutationsNames.SET_LOADING_PORTFOLIO, true);
    //
    // const { result, error } = useGetPortfolioQuery({ name: payload });
    //
    // watch(() => result.value, () => {
    //   if(error.value) throw new Error();
    //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //   // @ts-ignore
    //   commit(PortfoliosMutationsNames.SET_PORTFOLIO, (result?.value?.portfolios[0] || {}) as Portfolio);
    //   commit(PortfoliosMutationsNames.SET_LOADING_PORTFOLIO, false);
    // }, { immediate: true });
  },

  [PortfoliosActionsNames.FETCH_STATISTIC_FOR_PORTFOLIO]({ commit, state }) {
    commit(PortfoliosMutationsNames.SET_LOADING_STATISTIC, true);
    const { result, error } = useGetStatPortfoliosQuery({
      start: new Date(state.statisticFilter!.period.timeAgo).toISOString().slice(0, -1),
      end: new Date().toISOString().slice(0, -1),
      interval: state.statisticFilter?.period.interval,
      portfolioAddress: state.portfolio.addressId
    });

    watch(() => result.value, () => {
      if (error.value) throw new Error();

      commit(PortfoliosMutationsNames.SET_STATISTIC, (result?.value?.portfolioIntervalDatas || []) as PortfolioStatistic[]);
      commit(PortfoliosMutationsNames.SET_LOADING_STATISTIC, false);
    }, { immediate: true });
  },

  [PortfoliosActionsNames.SET_FILTER]({ commit, dispatch }, payload) {
    commit(PortfoliosMutationsNames.SET_STATISTIC_FILTER, payload);
    //
    // try {
    //   const { result, error } = useGetStatPortfoliosQuery({
    //     start: state.statisticFilter?.period.timeAgo.toString(),
    //     end: new Date().getTime().toString(),
    //     interval: state.statisticFilter?.period.interval,
    //     portfolioAddress: state.portfolio.addressId
    //   });
    //   watch(() => result.value, () => {
    //
    //     if(error.value) throw new Error();
    //
    //     commit(PortfoliosMutationsNames.SET_STATISTIC, (result?.value?.portfolioIntervalDatas || []) as PortfolioStatistic[]);
    //     commit(PortfoliosMutationsNames.SET_LOADING_STATISTIC, false);
    //   }, { immediate: true });
    // }
    // catch (e) {
    //   console.error(e);
    //
    // }
    void dispatch(`${PortfoliosActionsNames.FETCH_STATISTIC_FOR_PORTFOLIO}`);
  },
};
