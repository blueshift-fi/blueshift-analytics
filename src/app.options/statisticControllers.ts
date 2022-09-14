import { PortfolioIntervalDataDto } from '@/generated/graphql';
import { MappedListItem } from '@/app.options/periodControllers';

export type Statistic = keyof PortfolioIntervalDataDto;

export const getFullStatisticsControllerOptions = (): MappedListItem<Statistic>[] => [
  {
    id: 1,
    data: 'volume24hUSD',
    label: 'Volume'
  },
  {
    id: 2,
    data: 'tvlUSD',
    label: 'TVL'
  }
];
