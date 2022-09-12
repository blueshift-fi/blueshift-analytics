import { defineComponent, ref, PropType, watch, toRaw, onMounted, computed } from 'vue';
import { useCreateChart } from '@/components/baseComponents/BaseChart/useCreateChart';
import { SingleValueData } from 'lightweight-charts';
import { ChartController } from '@/components/baseComponents/BaseChart/types';
import { cloneDeep } from 'lodash';
import { getConvertedNumber } from '@/utils/getConvertedNumber';

export default defineComponent({
  name: 'BaseChart',

  props: {
    data: {
      type: Array as PropType<SingleValueData[]>,
      required: true
    },
    title: {
      type: String,
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  },

  setup(props) {
    const chartRef = ref<HTMLElement>();
    const titleRef = ref<HTMLElement>();
    const control = ref<ChartController | undefined>();

    const lastValue = computed(() => getConvertedNumber({
      number: props.data[props.data?.length - 1]?.value,
      currency: 'USD'
    }));


    //TODO
    watch(() => props.data, () => {
      if (control.value) {
        control.value.areaSeries.setData(cloneDeep(props.data));
        control.value.chart.timeScale().fitContent();
        control.value.useTooltip.createChartTooltip(
          control.value?.chart,
          toRaw(control.value?.areaSeries),
          chartRef.value!,
          titleRef.value,
          lastValue.value
        );
      } else {
        control.value = useCreateChart(chartRef.value!, props.data);
        control.value.useTooltip.createChartTooltip(
          control.value?.chart,
          toRaw(control.value.areaSeries),
          chartRef.value!,
          titleRef.value,
          lastValue.value
        );
      }
    });

    onMounted(() => {
      control.value = useCreateChart(chartRef.value!, props.data);
      control.value.useTooltip.createChartTooltip(
        control.value?.chart,
        toRaw(control.value.areaSeries),
        chartRef.value!,
        titleRef.value,
        lastValue.value
      );
    });

    return { chartRef, control, lastValue, titleRef };
  }
});
