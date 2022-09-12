import { Module } from 'vuex';
import { actions } from '@/store/modules/portfolios/actions';
import { state } from '@/store/modules/portfolios/state';
import { mutations } from '@/store/modules/portfolios/mutations';
import { getters } from '@/store/modules/portfolios/getters';
import type { RootState } from '@/store/state';
import type { PortfoliosState } from '@/store/modules/portfolios/state';

export const portfolios: Module<PortfoliosState, RootState> = {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
};
