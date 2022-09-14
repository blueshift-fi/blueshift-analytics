import moment from 'moment';
import { Period } from '@/app.options/periodControllers';

export const getDate = (date: number | undefined | string, format?: string): string => {
  return moment(date).isValid() ? moment(date).format(format || 'DD.MM.YYYY HH:mm:ss') : '';
};

export const makeDateFromISOToTimestamp = (date: string): number => {
  return new Date(date).getTime();
};

export const getDatesForChartFilters = (activePeriod?: Period) => {
  return {
    start: new Date(new Date().setTime(new Date().getTime() - (activePeriod?.timeAgo || 0))).toISOString().slice(0, -1),
    end: new Date().toISOString().slice(0, -1),
  };
};
