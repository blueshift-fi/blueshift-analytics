import { IntervalType } from '@/generated/graphql';

export type MappedListItem<S> = {
  id: number,
  data: S,
  label: string
}

export type Period = {
  interval: IntervalType,
  timeAgo: number
}

export const getFullPeriodsControllerOptions = (): MappedListItem<Period>[] => [
  {
    id: 1,
    data: {
      interval: IntervalType.Hours_24,
      // TODO moment().subtract(7,'d').format('YYYY-MM-DD');
      timeAgo: 24 * 60 * 60 * 1000
    },
    label: '1d'
  },
  {
    id: 2,
    data: {
      interval: IntervalType.Hours_24,
      timeAgo: 7 * 24 * 60 * 60 * 1000
    },
    label: '7d'
  },
  {
    id: 3,
    data: {
      interval: IntervalType.Hours_24,
      timeAgo: 30 * 24 * 60 * 60 * 1000
    },
    label: '1m'
  },
  {
    id: 4,
    data: {
      interval: IntervalType.Hours_24,
      timeAgo: 3 * 30 * 24 * 60 * 60 * 1000
    },
    label: '3m'
  },
  {
    id: 5,
    data: {
      interval: IntervalType.Hours_24,
      timeAgo: 12 * 31 * 24 * 60 * 60 * 1000
    },
    label: '1y'
  },
  {
    id: 6,
    data: {
      interval: IntervalType.Hours_24,
      timeAgo: 36 * 31 * 24 * 60 * 60 * 1000
    },
    label: 'All'
  },
];

export const getShortPeriodsControllerOptions = (): MappedListItem<Period>[] => [
  {
    id: 1,
    data: {
      interval: IntervalType.Hours_24,
      timeAgo: 24 * 60 *  60 * 1000,
    },
    label: 'Day'
  },
  {
    id: 2,
    data: {
      interval: IntervalType.Hours_24,
      timeAgo: 7 * 24 * 60 *  60 * 1000,
    },
    label: 'Week'
  },
  {
    id: 3,
    data: {
      interval: IntervalType.Hours_24,
      timeAgo: 30 * 24 * 60 *  60 * 1000,
    },
    label: 'Month'
  }
];
