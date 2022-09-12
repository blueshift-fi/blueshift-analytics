import { computed, defineComponent, ref } from 'vue';
import BaseChart from '@/components/baseComponents/BaseChart/BaseChart.vue';
import CardChart from '@/components/customComponents/CardChart/CardChart.vue';
import { SingleValueData, Time } from 'lightweight-charts';
import ButtonsGroup from '@/components/ButtonsGroup/ButtonsGroup.vue';
import { getFullPeriodsControllerOptions, MappedListItem, Period } from '@/app.options/periodControllers';
import { getFullStatisticsControllerOptions, Statistic } from '@/app.options/statisticControllers';
import { useGetStatPortfoliosQuery } from '@/generated/graphql';

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


    const changePeriod = (period: MappedListItem<Period>) => {
      activePeriod.value = period;
      void refetch({
        start: new Date(new Date().setTime(new Date().getTime() - activePeriod.value.data.timeAgo)).toISOString().slice(0, -1),
        end: new Date().toISOString().slice(0, -1),
        interval: activePeriod.value?.data?.interval,
        portfolioAddress: props.portfolioAddress
      });
    };

    const changeStatistic = (statistic: MappedListItem<Statistic>) => {
      activeStatistic.value = statistic;
      void refetch({
        start: new Date(new Date().setTime(new Date().getTime() - activePeriod.value.data.timeAgo)).toISOString().slice(0, -1),
        end: new Date().toISOString().slice(0, -1),
        interval: activePeriod.value?.data?.interval,
        portfolioAddress: props.portfolioAddress
      });
    };


    const { result, error, loading, refetch } = useGetStatPortfoliosQuery({
      start: new Date(new Date().setTime(new Date().getTime() - activePeriod.value.data.timeAgo)).toISOString().slice(0, -1),
      end: new Date().toISOString().slice(0, -1),
      interval: activePeriod.value?.data?.interval,
      portfolioAddress: props.portfolioAddress
    });
    const statistic = computed((): SingleValueData[] => {
      if (!result.value?.portfolioIntervalDatas?.length) return [];
      return result.value?.portfolioIntervalDatas?.map(item => {
        return {
          value: item!.tvlBase!,
          time: new Date(item!.dateTime!).getTime() as Time
        };
      });
    });

    return {
      loading,
      statistic,
      getFullPeriodsControllerOptions,
      getFullStatisticsControllerOptions,
      changePeriod,
      activePeriod,
      // getDates,
      changeStatistic,
      activeStatistic
    };
  }
});
