import { computed, defineComponent, onMounted } from 'vue';
import { ModulesNames } from '@/store/names/modules.names';
import { TokensGettersNames } from '@/store/modules/tokens/names/getters.names';
import type { Portfolio, Token } from '@/generated/graphql';
import { useStore } from '@/store';
import { TokensActionsNames } from '@/store/modules/tokens/names/actions.names';
import TokensTable from '@/components/TokensTable/TokensTable.vue';
import { TransactionsActionsNames } from '@/store/modules/transactions/names/actions.names';
import { TransactionsGettersNames } from '@/store/modules/transactions/names/getters.names';
import TransactionsTable from '@/components/TransactionsTable/TransactionsTable.vue';
import PortfoliosTable from '@/components/PortfoliosTable/PortfoliosTable.vue';
import { PortfoliosGettersNames } from '@/store/modules/portfolios/names/getters.names';
import { PortfoliosActionsNames } from '@/store/modules/portfolios/names/actions.names';
import { RouterNames } from '@/router/router.names';
import TvlChart from '@/components/TvlChart/TvlChart.vue';
import Volume24hChart from '@/components/Volume24hChart/Volume24hChart.vue';

export default defineComponent({
  name: 'PageMain',

  components: {
    TokensTable,
    TransactionsTable,
    PortfoliosTable,
    TvlChart,
    Volume24hChart
  },

  setup() {
    const { dispatch, getters } = useStore();

    const isLoadingTopTokens = computed(() => <boolean>getters[`${ModulesNames.TOKENS}/${TokensGettersNames.GET_LOADING_TOP_TOKENS}`]);
    const topTokens = computed(() => <Token[]>getters[`${ModulesNames.TOKENS}/${TokensGettersNames.GET_TOP_TOKENS}`]);

    const isLoadingTopTransactions = computed(() => <boolean>getters[`${ModulesNames.TRANSACTIONS}/${TransactionsGettersNames.GET_LOADING_TOP_TRANSACTIONS}`]);
    const topTransactions = computed(() => <Token[]>getters[`${ModulesNames.TRANSACTIONS}/${TransactionsGettersNames.GET_TOP_TRANSACTIONS}`]);

    const isLoadingTopPortfolios = computed(() => <boolean>getters[`${ModulesNames.PORTFOLIOS}/${PortfoliosGettersNames.GET_LOADING_TOP_PORTFOLIOS}`]);
    const topPortfolios = computed(() => <Portfolio[]>getters[`${ModulesNames.PORTFOLIOS}/${PortfoliosGettersNames.GET_TOP_PORTFOLIOS}`]);

    onMounted(() => {
      void dispatch(`${ModulesNames.TOKENS}/${TokensActionsNames.FETCH_TOP_TOKENS}`);
      void dispatch(`${ModulesNames.TRANSACTIONS}/${TransactionsActionsNames.FETCH_TOP_TRANSACTIONS}`);
      void dispatch(`${ModulesNames.PORTFOLIOS}/${PortfoliosActionsNames.FETCH_TOP_PORTFOLIOS}`);
    });

    return {
      isLoadingTopTokens,
      topTokens,
      isLoadingTopTransactions,
      topTransactions,
      isLoadingTopPortfolios,
      topPortfolios,
      RouterNames
    };
  }
});
