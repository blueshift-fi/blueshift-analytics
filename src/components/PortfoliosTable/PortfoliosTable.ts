import BaseTable from '@/components/baseComponents/BaseTable/BaseTable.vue';
import { defineComponent, PropType } from 'vue';
import type { Portfolio } from '@/generated/graphql';
import { getPortfoliosColumns, PortfoliosTableColumnNames } from '@/app.options/tables/portfoliosTable';
import { getTemplateFullName, getVisibleColumn } from '@/app.options/tables/utils';
import TokenFullName from '@/components/customComponents/TokenFullName/TokenFullName.vue';
import { RouterNames } from '@/router/router.names';
import { getDataForCell } from '@/utils/getDataForCell';
import TokenGroup from '@/components/customComponents/TokenGroup/TokenGroup.vue';

export default defineComponent({
  name: 'PortfoliosTable',

  components: {
    BaseTable,
    TokenFullName,
    TokenGroup
  },

  props: {
    list: {
      type: Array as PropType<Portfolio[]>,
      required: true,
    },
    isLoading: {
      type: Boolean
    }
  },

  setup() {
    const __mock = [
      {
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5692.png',
        symbol: 'COMP',
      },
      {
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6538.png',
        symbol: 'CRV',
      },
      {
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18876.png',
        symbol: 'APE',
      },
      {
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png',
        symbol: 'AAVE',
      },
      {
        icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7486.png',
        symbol: 'RGT',
      },
      // {
      //   icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2586.png',
      //   symbol: 'SNX',
      // },
      // {
      //   icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5617.png',
      //   symbol: 'UMA',
      // },
    ];

    return {
      __mock,
      RouterNames,
      getDataForCell,
      PortfoliosTableColumnNames,
      getTemplateFullName,
      getVisibleColumn,
      getPortfoliosColumns,
    };
  },
});
