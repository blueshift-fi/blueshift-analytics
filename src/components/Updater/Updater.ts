import { computed, defineComponent, PropType, watch } from 'vue';
import { RootState } from '@/store/state';
import { useRoute } from 'vue-router';
import { RouterNames } from '@/router/router.names';
import { Portfolio, useGetPortfolioQuery } from '@/generated/graphql';
import { PortfoliosMutationsNames } from '@/store/modules/portfolios/names/mutations.names';
import { useStore } from '@/store';
import { ModulesNames } from '@/store/names/modules.names';
import { useQuery } from '@vue/apollo-composable';

export default defineComponent({
  name: 'Updater',

  components: {
  },

  props: {
    state: {
      type: Object as PropType<RootState>,
      required: true
    }
  },

  setup() {
    // const route = useRoute();
    // const { commit } = useStore();
    //
    // const { result, error } = useGetPortfolioQuery({ name: route.params.id.toString() });
    //
    //
    // watch(() => route.params.id, () => {
    //   if(route.name !== RouterNames.PORTFOLIO_PAGE) return;
    //   commit(`${ModulesNames.PORTFOLIOS}/${PortfoliosMutationsNames.SET_PORTFOLIO}`, (result?.value?.portfolios[0] || {}) as Portfolio);
    // });


  },
});
