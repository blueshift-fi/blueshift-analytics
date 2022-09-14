import { computed, defineComponent } from 'vue';
import { useGetTokensListQuery } from '@/generated/graphql';
import TokensTable from '@/components/TokensTable/TokensTable.vue';


export default defineComponent({
  name: 'PageTokenList',

  components: {
    TokensTable
  },

  setup() {
    const { result, error, loading, refetch } = useGetTokensListQuery();

    const list = computed(() => {
      return result.value?.tokens;
    });

    return {
      loading,
      list
    };
  }
});
