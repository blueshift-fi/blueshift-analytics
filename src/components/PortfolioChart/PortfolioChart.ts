import { computed, defineComponent, ref } from 'vue';
import BaseChart from '@/components/baseComponents/BaseChart/BaseChart.vue';
import CardChart from '@/components/customComponents/CardChart/CardChart.vue';
import { SingleValueData, Time } from 'lightweight-charts';
import ButtonsGroup from '@/components/ButtonsGroup/ButtonsGroup.vue';
import { getFullPeriodsControllerOptions, MappedListItem, Period } from '@/app.options/periodControllers';
import { getFullStatisticsControllerOptions, Statistic } from '@/app.options/statisticControllers';
import { useGetStatPortfoliosQuery } from '@/generated/graphql';
import { getDatesForChartFilters } from '@/utils/getDate';

export default defineComponent({
  name: 'PortfolioChart',

  components: {
    BaseChart,
    CardChart,
    ButtonsGroup
  },

  props: {
    title: String,
    portfolioAddress: {
      type: String,
      required: true
    }
  },

  setup(props) {
    //TODO localstorage
    const activePeriod = ref<MappedListItem<Period>>(getFullPeriodsControllerOptions()[0]);
    const activeStatistic = ref<MappedListItem<Statistic>>(getFullStatisticsControllerOptions()[0]);

    const filter = computed(() => {
      return {
        start: getDatesForChartFilters(activePeriod.value.data).start,
        end: getDatesForChartFilters().end,
        interval: activePeriod.value?.data?.interval,
        portfolioAddress: props.portfolioAddress
      };
    });

    const { result, error, loading, refetch } = useGetStatPortfoliosQuery(filter.value);

    const statistic = computed((): SingleValueData[] => {
      if (!result.value?.portfolioIntervalDatas?.length) return [];
      return result.value?.portfolioIntervalDatas?.map(item => {
        return {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          value: Number(item[activeStatistic.value.data]),
          time: new Date(item!.dateTime!).getTime() as Time
        };
      }).reverse();
    });

    const changePeriod = (period: MappedListItem<Period>) => {
      activePeriod.value = period;
      void refetch(filter.value);
    };

    const changeStatistic = (statistic: MappedListItem<Statistic>) => {
      activeStatistic.value = statistic;
      void refetch(filter.value);
    };

    return {
      loading,
      statistic,
      getFullPeriodsControllerOptions,
      getFullStatisticsControllerOptions,
      changePeriod,
      activePeriod,
      changeStatistic,
      activeStatistic
    };
  }
});
