import { getDataForCell } from '@/utils/getDataForCell';
import { Token } from '@/generated/graphql';
import { TableColumn } from '@/components/baseComponents/BaseTable/types';
import { getConvertedNumber } from '@/utils/getConvertedNumber';

export enum TokensInPortfolioTableColumnNames {
  NAME = 'name',
  AMOUNT = 'amount',
  PRICE_IN_USD = 'priceInUsd',
  PRICE_IN_BASE = 'priceInBaseCurrency',
  TARGET = 'target',
  SHARE = 'share'
}

export const getTokensInPortfolioColumns = (): TableColumn[] => [
  {
    name: TokensInPortfolioTableColumnNames.NAME,
    label: 'Name',
    align: 'left',
    field: (val: Token) => getDataForCell(val?.name),
  },
  {
    name: TokensInPortfolioTableColumnNames.AMOUNT,
    label: 'Amount',
    align: 'right',
    field: (val: Token) => getDataForCell(
      getConvertedNumber(val?.amount
        ? { number: val.amount, currency: 'USD' }
        : undefined)
    ),
  },
  {
    name: TokensInPortfolioTableColumnNames.PRICE_IN_USD,
    label: 'Price in USD',
    align: 'right',
    field: (val: Token) => getDataForCell(
      getConvertedNumber(val?.priceUSD
        ? { number: val.priceUSD, currency: 'USD' }
        : undefined)
    ),
    hidden: {
      xs: true,
    }
  },
  {
    name: TokensInPortfolioTableColumnNames.PRICE_IN_BASE,
    label: 'Price in Base currency',
    align: 'right',
    field: (val: Token) => `${getDataForCell(
      getConvertedNumber(val?.priceBase
        ? { number: val.priceBase }
        : undefined)
    )} ${val.symbol}`,
    hidden: {
      xs: true,
      sm: true
    }
  },
  {
    name: TokensInPortfolioTableColumnNames.TARGET,
    label: 'Target',
    align: 'right',
    field: (val: Token) => `${getDataForCell(val?.targetWeight)}%`,
    hidden: {
      xs: true,
      sm: true
    }
  },
  {
    name: TokensInPortfolioTableColumnNames.SHARE,
    label: 'Share',
    align: 'right',
    field: (val: Token) => `${getDataForCell(val?.portfolioShare)}%`,
    hidden: {
      xs: true,
      sm: true
    }
  },
];

export const getTokensTableColumnOptions = (name: TokensInPortfolioTableColumnNames): TableColumn => {
  const column = getTokensInPortfolioColumns().find(item => item.name === name);
  if(!column) { throw new Error(`not found mapped column for name: "${name}"`); }
  return column;
};
