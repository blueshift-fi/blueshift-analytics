import BaseTable from '@/components/baseComponents/BaseTable/BaseTable.vue';
import { defineComponent, PropType } from 'vue';
import type { Transaction } from '@/generated/graphql';
import { getTransactionsColumns } from '@/app.options/tables/transactionsTable';
import { getTemplateFullName, getVisibleColumn } from '@/app.options/tables/utils';

export default defineComponent({
  name: 'TransactionsTable',

  components: {
    BaseTable,
  },

  props: {
    list: {
      type: Array as PropType<Transaction[]>,
      required: true,
    },
    isLoading: {
      type: Boolean
    }
  },

  setup() {

    return {
      getTemplateFullName,
      getVisibleColumn,
      getTransactionsColumns,
    };
  },
});
