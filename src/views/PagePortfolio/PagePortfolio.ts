import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import PortfolioChart from '@/components/PortfolioChart/PortfolioChart.vue';
import { useStore } from '@/store';
import { ModulesNames } from '@/store/names/modules.names';
import { PortfoliosGettersNames } from '@/store/modules/portfolios/names/getters.names';
import { Portfolio, useGetPortfolioQuery, useGetStatPortfoliosQuery } from '@/generated/graphql';
import { PortfoliosActionsNames } from '@/store/modules/portfolios/names/actions.names';
import { useRoute } from 'vue-router';
import TokenIcon from '@/components/customComponents/TokenIcon/TokenIcon.vue';
import TokenGroup from '@/components/customComponents/TokenGroup/TokenGroup.vue';
import BaseButton from '@/components/baseComponents/BaseButton/BaseButton.vue';
import TokensTable from '@/components/TokensTable/TokensTable.vue';
import { getConvertedNumber } from '@/utils/getConvertedNumber';
import TransactionsTable from '@/components/TransactionsTable/TransactionsTable.vue';
import ExternalLink from '@/components/customComponents/ExternalLink/ExternalLink.vue';
import { getFullPeriodsControllerOptions, Period } from '@/app.options/periodControllers';
import { getFullStatisticsControllerOptions, Statistic } from '@/app.options/statisticControllers';
import { StatisticFilter } from '@/store/modules/portfolios/state';
// import { statisticFilter } from '@/cache';

export default defineComponent({
  name: 'PagePortfolio',

  components: {
    PortfolioChart,
    TokenIcon,
    TokenGroup,
    BaseButton,
    TokensTable,
    TransactionsTable,
    ExternalLink
  },

  setup() {
    const route = useRoute();

    const { result, error, loading, refetch } = useGetPortfolioQuery({ name: route.params.id.toString() });
    const portfolio = computed((): Portfolio => {
      if (!result.value?.portfolios?.length) return {};
      return result.value?.portfolios[0] as Portfolio;
    });
    watch(() => route.params.id, () => {
      void refetch();
    });



    // const { result: stat, error: e, loading: l, variables, refetch: re } = useGetStatPortfoliosQuery({
    //   start: getDates().start(),
    //   end: getDates().end(),
    //   interval: statisticFilter.value?.period?.interval,
    //   portfolioAddress: portfolio.value.addressId
    // });
    // const changeFilters = (data: StatisticFilter) => {
    //   statisticFilter.value = data;
    //   // void re();
    //   // void dispatch(`${ModulesNames.PORTFOLIOS}/${PortfoliosActionsNames.SET_FILTER}` ,data);
    // };

    return {
      result,
      data: [{ time: 9999999, value: 167 }, { time: 99994999, value: 169 }, { time: 99999999, value: 142 }],
      portfolio,
      __mock: [
        {
          icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5692.png',
          symbol: 'COMP2',
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
      ],
      // changeFilters,
      // statisticFilter,
      loading,
      getConvertedNumber
    };
  }
});
