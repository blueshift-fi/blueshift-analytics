import { IChartApi, ISeriesApi, MouseEventParams } from 'lightweight-charts';
import { getDate } from '@/utils/getDate';
import { getConvertedNumber } from '@/utils/getConvertedNumber';

export type UseChartTooltip = {
  createChartTooltip: (chart: IChartApi, areaSeries: ISeriesApi<'Area'>, wrapper: HTMLElement, dataRef?: HTMLElement, lastValue?: string) => void,
}

export type CrosshairMoveHandler = ((param: MouseEventParams) => void) | null;

export const useChartTooltip = (): UseChartTooltip => {
  let crosshairMoveHandler: CrosshairMoveHandler = null;

  const createChartTooltip = (chart: IChartApi, areaSeries: ISeriesApi<'Area'>, wrapper: HTMLElement, dataRef?: HTMLElement, lastValue?: string) => {
    crosshairMoveHandler = (param: MouseEventParams) => {
      if(!dataRef) { return; }

      if (!param.time || param.point!.x < 0 || param.point!.y < 0) {
        dataRef.querySelector('.date')!.innerHTML = '';
        dataRef.querySelector('.value')!.innerHTML = lastValue?.toString() ||  '';
        return;
      }

      const dateStr = <number>param.time;
      const price = param.seriesPrices.get(areaSeries);

      // const activePeriod: PeriodItem = getPeriodItem(period);
      dataRef.querySelector('.date')!.innerHTML = getDate(dateStr);
      dataRef.querySelector('.value')!.innerHTML = getConvertedNumber({
        number: price as number,
        currency: 'USD'
      }) || '';
    };

    chart.subscribeCrosshairMove(crosshairMoveHandler);
  };

  return {
    // destroyChartTooltip,
    createChartTooltip
  };
};
