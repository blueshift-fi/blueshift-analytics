import { getDataForCell } from '@/utils/getDataForCell';
import type { Transaction } from '@/generated/graphql';
import { TableColumn } from '@/components/baseComponents/BaseTable/types';

export enum TransactionsTableColumnNames {
  NAME = 'name',
  TOTAL_VALUE = 'totalValue',
  AMOUNT_USD = 'usdAmount',
  AMOUNT_TOKEN = 'tokenAmount',
  ACCOUNT = 'account',
  TIME = 'time'
}

export const getTransactionsColumns = (): TableColumn[] => [
  {
    name: TransactionsTableColumnNames.NAME,
    label: 'Name',
    align: 'left',
    field: (val: Transaction) => getDataForCell(val.id),
  },
  {
    name: TransactionsTableColumnNames.TOTAL_VALUE,
    label: 'Total value',
    align: 'left',
    field: (val: Transaction) => getDataForCell(val?.id),
    hidden: {
      xs: true,
    }
  },
  {
    name: TransactionsTableColumnNames.AMOUNT_USD,
    label: 'Amount in USD',
    align: 'left',
    field: (val: Transaction) => getDataForCell(val?.id),
    hidden: {
      xs: true,
      sm: true
    }
  },
  {
    name: TransactionsTableColumnNames.AMOUNT_TOKEN,
    label: 'Token amount',
    align: 'left',
    field: (val: Transaction) => getDataForCell(val?.id),
    hidden: {
      xs: true,
      sm: true
    }
  },
  {
    name: TransactionsTableColumnNames.ACCOUNT,
    label: 'Account',
    align: 'left',
    field: (val: Transaction) => getDataForCell(val?.id),
    hidden: {
      xs: true,
      sm: true
    }
  },
  {
    name: TransactionsTableColumnNames.TIME,
    label: 'Time',
    align: 'left',
    field: (val: Transaction) => getDataForCell(val?.id),
  },
];

export const getTransactionsTableColumnOptions = (name: TransactionsTableColumnNames): TableColumn => {
  const column = getTransactionsColumns().find(item => item.name === name);
  if(!column) { throw new Error(`not found mapped column for name: "${name}"`); }
  return column;
};

