import { getDataForCell } from '@/utils/getDataForCell';
import { Portfolio } from '@/generated/graphql';
import { TableColumn } from '@/components/baseComponents/BaseTable/types';
import { getConvertedNumber } from '@/utils/getConvertedNumber';

export enum PortfoliosTableColumnNames {
  NAME = 'name',
  TOTAL_VALUE = 'totalValue',
  VOLUME = 'volume',
  LP_TOKEN_PRICE = 'lpTokenPrice',
  LP_TOKEN_PRICE_CHANGE = 'lpTokenPriceChange',
}

export const getPortfoliosColumns = (): TableColumn[] => [
  {
    name: PortfoliosTableColumnNames.NAME,
    label: 'Name',
    align: 'left',
    field: (val: Portfolio) => getDataForCell(val?.name),
  },
  {
    name: PortfoliosTableColumnNames.TOTAL_VALUE,
    label: 'TVL',
    align: 'left',
    field: (val: Portfolio) => getDataForCell(
      getConvertedNumber(val?.tvlUSD
        ? { number: val.tvlUSD, currency: 'USD' }
        : undefined)
    ),
  },
  {
    name: PortfoliosTableColumnNames.VOLUME,
    label: 'Volume',
    align: 'left',
    field: (val: Portfolio) => getDataForCell(val?.volume30dUSD),
    hidden: {
      xs: true,
    }
  },
  {
    name: PortfoliosTableColumnNames.LP_TOKEN_PRICE,
    label: 'LP Token Price',
    align: 'left',
    field: (val: Portfolio) => getDataForCell(
      getConvertedNumber(val.lpToken?.priceUSD
        ? { number: val.lpToken?.priceUSD, currency: 'USD' }
        : undefined)
    ),
    hidden: {
      xs: true,
      sm: true
    }
  },
  {
    name: PortfoliosTableColumnNames.LP_TOKEN_PRICE_CHANGE,
    label: 'LP Token Price Change',
    align: 'left',
    field: (val: Portfolio) => getDataForCell(val?.lpToken?.priceUSD),
    hidden: {
      xs: true,
      sm: true
    }
  },
];

export const getPortfoliosTableColumnOptions = (name: PortfoliosTableColumnNames): TableColumn => {
  const column = getPortfoliosColumns().find(item => item.name === name);
  if (!column) {
    throw new Error(`not found mapped column for name: "${name}"`);
  }
  return column;
};

