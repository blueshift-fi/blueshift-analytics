import BaseTable from '@/components/baseComponents/BaseTable/BaseTable.vue';
import { defineComponent, PropType } from 'vue';
import type { Portfolio } from '@/generated/graphql';
import { getPortfoliosColumns, PortfoliosTableColumnNames } from '@/app.options/tables/portfoliosTable';
import { getTemplateFullName, getVisibleColumn } from '@/app.options/tables/utils';
import TokenFullName from '@/components/customComponents/TokenFullName/TokenFullName.vue';
import { RouterNames } from '@/router/router.names';
import { getDataForCell } from '@/utils/getDataForCell';
import TokenGroup from '@/components/customComponents/TokenGroup/TokenGroup.vue';
import { getConvertedNumber } from '@/utils/getConvertedNumber';
import { Token } from 'graphql';

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


    return {
      Token,
      RouterNames,
      getDataForCell,
      PortfoliosTableColumnNames,
      getTemplateFullName,
      getVisibleColumn,
      getConvertedNumber,
      getPortfoliosColumns,
    };
  },
});
