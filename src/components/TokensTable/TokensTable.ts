import BaseTable from '@/components/baseComponents/BaseTable/BaseTable.vue';
import { defineComponent, PropType } from 'vue';
import { Token } from '@/generated/graphql';
import { getTokensColumns, TokensTableColumnNames } from '@/app.options/tables/tokensTable';
import { getTemplateFullName, getVisibleColumn } from '@/app.options/tables/utils';
import TokenFullName from '@/components/customComponents/TokenFullName/TokenFullName.vue';

export default defineComponent({
  name: 'TokensTable',

  components: {
    BaseTable,
    TokenFullName
  },

  props: {
    list: {
      type: Array as PropType<Token[]>,
      required: true,
    },
    isLoading: {
      type: Boolean
    }
  },

  setup() {

    return {
      TokensTableColumnNames,
      getTemplateFullName,
      getTokensColumns,
      getVisibleColumn
    };
  },
});
