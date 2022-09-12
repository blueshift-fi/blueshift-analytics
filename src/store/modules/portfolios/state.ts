import { Portfolio, PortfolioIntervalDataDto } from '@/generated/graphql';
import { Period } from '@/app.options/periodControllers';
import { Statistic } from '@/app.options/statisticControllers';

export type PortfoliosState = {
  topPortfoliosList: Portfolio[]
  isLoadingTopPortfolios: boolean
  portfolio: Portfolio
  isLoadingPortfolio: boolean
  statisticFilter?: StatisticFilter
  statistic: PortfolioStatistic[]
  isLoadingStatistic: boolean
}

export type PortfolioStatistic = PortfolioIntervalDataDto;

export type StatisticFilter = { period: Period, statistic: Statistic, addressId: string }

export const getDefaultPortfoliosState = (): PortfoliosState => {
  return {
    topPortfoliosList: [],
    isLoadingTopPortfolios: true,
    isLoadingPortfolio: true,
    portfolio: {},
    statisticFilter: undefined,
    statistic: [],
    isLoadingStatistic: true,
  };
};

export const state: PortfoliosState = getDefaultPortfoliosState();
