import { computed, defineComponent, watch } from 'vue';
import PortfolioChart from '@/components/PortfolioChart/PortfolioChart.vue';
import { Portfolio, useGetPortfolioQuery } from '@/generated/graphql';
import { useRoute } from 'vue-router';
import TokenIcon from '@/components/customComponents/TokenIcon/TokenIcon.vue';
import TokenGroup from '@/components/customComponents/TokenGroup/TokenGroup.vue';
import BaseButton from '@/components/baseComponents/BaseButton/BaseButton.vue';
import { getConvertedNumber } from '@/utils/getConvertedNumber';
import TransactionsTable from '@/components/TransactionsTable/TransactionsTable.vue';
import ExternalLink from '@/components/customComponents/ExternalLink/ExternalLink.vue';
import TokensInPortfolioTable from '@/components/TokensInPortfolioTable/TokensInPortfolioTable.vue';

export default defineComponent({
  name: 'PagePortfolio',

  components: {
    PortfolioChart,
    TokenIcon,
    TokenGroup,
    BaseButton,
    TokensInPortfolioTable,
    TransactionsTable,
    ExternalLink
  },

  setup() {
    const route = useRoute();

    const { result, error, loading, refetch } = useGetPortfolioQuery({ name: route.params.id.toString() });
    watch(() => route.params.id, () => {
      void refetch();
    });

    const portfolio = computed((): Portfolio => {
      if (!result.value?.portfolios?.length) return {};
      return result.value?.portfolios[0] as Portfolio;
    });


    return {
      result,
      portfolio,
      loading,
      getConvertedNumber
    };
  }
});
