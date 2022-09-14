import { createChart, SingleValueData } from 'lightweight-charts';
import { areaOptions, barOptions, chartOptions } from '@/components/baseComponents/BaseChart/options';
import { ChartController } from '@/components/baseComponents/BaseChart/types';
import { cloneDeep } from 'lodash';
import { useChartTooltip } from '@/components/baseComponents/BaseChart/useChartTooltip';

//TODO chart types to type!
export const useCreateChart = (wrapper: HTMLElement, data: SingleValueData[], type: 'Area' | 'Histogram'): ChartController => {
  const chart = createChart(wrapper, chartOptions);
  const areaSeries = type === 'Area' ?
    chart.addAreaSeries(areaOptions) :
    chart.addHistogramSeries(barOptions);

  areaSeries.setData(cloneDeep(data));
  chart.timeScale().fitContent();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  new ResizeObserver((entries) => {
    if (entries.length === 0 || entries[0].target !== wrapper) { return; }
    const newRect = entries[0].contentRect;
    chart.applyOptions({ height: newRect.height, width: newRect.width });
  }).observe(wrapper);

  const useTooltip = useChartTooltip();

  return {
    chart,
    areaSeries,
    useTooltip
  };
};
