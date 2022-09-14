import { computed, defineComponent, ref } from 'vue';
import BaseChart from '@/components/baseComponents/BaseChart/BaseChart.vue';
import CardChart from '@/components/customComponents/CardChart/CardChart.vue';
import { SingleValueData, Time } from 'lightweight-charts';
import ButtonsGroup from '@/components/ButtonsGroup/ButtonsGroup.vue';
import {
  getFullPeriodsControllerOptions,
  MappedListItem,
  Period
} from '@/app.options/periodControllers';
import { useGetTvlStatisticQuery } from '@/generated/graphql';
import { getDatesForChartFilters } from '@/utils/getDate';

export default defineComponent({
  name: 'TvlChart',

  components: {
    BaseChart,
    CardChart,
    ButtonsGroup
  },

  props: {
  },

  setup(props) {
    //TODO localstorage
    const activePeriod = ref<MappedListItem<Period>>(getFullPeriodsControllerOptions()[0]);

    const filter = computed(() => {
      return {
        start: getDatesForChartFilters(activePeriod.value.data).start,
        end: getDatesForChartFilters().end,
        interval: activePeriod.value?.data?.interval,
      };
    });

    const { result, error, loading, refetch } = useGetTvlStatisticQuery(filter.value);

    const statistic = computed((): SingleValueData[] => {
      if (!result.value?.factories?.length) return [];
      return result.value?.factories?.map(item => {
        return {
          value: +item!.tvlUSD!.toFixed(0),
          time: new Date(item!.dateTime!).getTime() as Time
        };
      }).reverse();
    });

    const changePeriod = (period: MappedListItem<Period>) => {
      activePeriod.value = period;
      void refetch(filter.value);
    };

    return {
      loading,
      statistic,
      getFullPeriodsControllerOptions,
      changePeriod,
      activePeriod,
    };
  }
});
