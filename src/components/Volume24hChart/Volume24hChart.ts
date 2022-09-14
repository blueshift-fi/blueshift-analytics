import { computed, defineComponent, ref } from 'vue';
import BaseChart from '@/components/baseComponents/BaseChart/BaseChart.vue';
import CardChart from '@/components/customComponents/CardChart/CardChart.vue';
import { SingleValueData, Time } from 'lightweight-charts';
import ButtonsGroup from '@/components/ButtonsGroup/ButtonsGroup.vue';
import { getShortPeriodsControllerOptions, MappedListItem, Period } from '@/app.options/periodControllers';
import { useGetTvlStatisticQuery } from '@/generated/graphql';

export default defineComponent({
  name: 'Volume24hChart',

  components: {
    BaseChart,
    CardChart,
    ButtonsGroup
  },

  props: {},

  setup(props) {
    //TODO localstorage
    const activePeriod = ref<MappedListItem<Period>>(getShortPeriodsControllerOptions()[0]);

    const { result, error, loading, refetch } = useGetTvlStatisticQuery({
      start: new Date(new Date().setTime(new Date().getTime() - activePeriod.value.data.timeAgo)).toISOString().slice(0, -1),
      end: new Date().toISOString().slice(0, -1),
      interval: activePeriod.value?.data?.interval,
    });

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
      void refetch({
        start: new Date(new Date().setTime(new Date().getTime() - activePeriod.value.data.timeAgo)).toISOString().slice(0, -1),
        end: new Date().toISOString().slice(0, -1),
        interval: activePeriod.value?.data?.interval,
      });
    };

    return {
      _mock: [
        {
          value: 20,
          time: 167839900000
        },
        {
          value: 21,
          time: 167849900000
        },
        {
          value: 29,
          time: 167859900000
        },
        {
          value: 12,
          time: 167869900000
        },
        {
          value: 17,
          time: 167879900000
        },
        {
          value: 13,
          time: 167889900000
        },
        {
          value: 3,
          time: 167899900000
        },
      ],
      loading,
      statistic,
      getShortPeriodsControllerOptions,
      changePeriod,
      activePeriod,
    };
  }
});
