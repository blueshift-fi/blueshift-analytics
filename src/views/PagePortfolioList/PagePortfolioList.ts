import { computed, defineComponent } from 'vue';
import { useGetPortfoliosListQuery } from '@/generated/graphql';
import PortfoliosTable from '@/components/PortfoliosTable/PortfoliosTable.vue';


export default defineComponent({
  name: 'PagePortfolioList',

  components: {
    PortfoliosTable
  },

  setup() {
    const { result, error, loading, refetch } = useGetPortfoliosListQuery();

    const list = computed(() => {
      return result.value?.portfolios;
    });

    return {
      loading,
      list
    };
  }
});
