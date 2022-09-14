<template>
  <CardChart>
    <template #default>
      <BaseChart
        title="Volume 24h"
        :is-loading="loading"
        :data="_mock"
        chartType="Histogram"
      />
    </template>

    <template v-slot:stats>
      <ButtonsGroup
        :list="getShortPeriodsControllerOptions()"
        :value="activePeriod"
        @change="changePeriod"
      />
    </template>
  </CardChart>
</template>
<script src="./Volume24hChart.ts" lang="ts"/>
<style src="./Volume24hChart.scss" lang="scss"/>
