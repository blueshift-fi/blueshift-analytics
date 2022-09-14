import { getDataForCell } from '@/utils/getDataForCell';
import { Token } from '@/generated/graphql';
import { TableColumn } from '@/components/baseComponents/BaseTable/types';
import { getConvertedNumber } from '@/utils/getConvertedNumber';

export enum TokensTableColumnNames {
  NAME = 'name',
  PRICE = 'price',
  PRICE_CHANGE = 'priceChange',
  VOLUME = 'volume',
  TVL = 'tvl'
}

export const getTokensColumns = (): TableColumn[] => [
  {
    name: TokensTableColumnNames.NAME,
    label: 'Name',
    align: 'left',
    field: (val: Token) => getDataForCell(val?.name),
  },
  {
    name: TokensTableColumnNames.PRICE,
    label: 'Price',
    align: 'left',
    field: (val: Token) => getDataForCell(
      getConvertedNumber(val?.priceUSD
        ? { number: val.priceUSD, currency: 'USD' }
        : undefined)
    ),
  },
  {
    name: TokensTableColumnNames.PRICE_CHANGE,
    label: 'Price Change',
    align: 'left',
    field: (val: Token) => getDataForCell(val?.priceUSD),
    hidden: {
      xs: true,
      sm: true
    }
  },
  {
    name: TokensTableColumnNames.VOLUME,
    label: 'Volume',
    align: 'left',
    field: (val: Token) => getDataForCell(val?.volume24hUSD),
    hidden: {
      xs: true,
    }
  },
  {
    name: TokensTableColumnNames.TVL,
    label: 'TVL',
    align: 'left',
    field: (val: Token) => getDataForCell(
      getConvertedNumber(val?.tvlUSD
        ? { number: val.tvlUSD, currency: 'USD' }
        : undefined)
    ),
    hidden: {
      xs: true,
      sm: true
    }
  },
];

export const getTokensTableColumnOptions = (name: TokensTableColumnNames): TableColumn => {
  const column = getTokensColumns().find(item => item.name === name);
  if(!column) { throw new Error(`not found mapped column for name: "${name}"`); }
  return column;
};
