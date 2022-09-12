import { TableColumn } from '@/components/baseComponents/BaseTable/types';
import { Screen } from 'quasar';

export const getTemplateFullName = (name: string): string => {
  return `body-cell-${name}`;
};

export const getVisibleColumn = (arr: TableColumn[]) => {
  return arr.filter(item => {
    if (!item.hidden) return true;
    return !item.hidden[Screen.name as keyof typeof item.hidden];
  }).map(item => item.name);
};

// TODO
// export type ColumnOptions = {
//   name: string
//   label?: string,
//   align?: string,
//   field?: any,
//   hiddenSm?: boolean,
//   hiddenMd?: boolean
// }
