import BaseTable from '@/components/baseComponents/BaseTable/BaseTable.vue';
import { defineComponent, PropType } from 'vue';
import { Token } from '@/generated/graphql';
import {  } from '@/app.options/tables/tokensTable';
import { getTemplateFullName, getVisibleColumn } from '@/app.options/tables/utils';
import TokenFullName from '@/components/customComponents/TokenFullName/TokenFullName.vue';
import {
  getTokensInPortfolioColumns,
  TokensInPortfolioTableColumnNames
} from '@/app.options/tables/tokensInPortfolioTable';

export default defineComponent({
  name: 'TokensInPortfolioTable',

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
    },
    baseToken: {
      type: Object as PropType<Token>,
      required: true,
    }
  },

  setup() {

    return {
      TokensInPortfolioTableColumnNames,
      getTemplateFullName,
      getTokensInPortfolioColumns,
      getVisibleColumn
    };
  },
});
