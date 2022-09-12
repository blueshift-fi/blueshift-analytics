<template>
  <div class="chart-wrapper">
    <div ref="titleRef" class="flex column info-block">
      <div class="text-grey-7 title">{{ title }}</div>
      <div class="h2 last-value value">{{ lastValue }}</div>
      <div class="text-grey-7 date"></div>
    </div>
    <div
      v-show="!isLoading"
      ref="chartRef"
      class="ui-chart"
    ></div>
    <q-skeleton
      v-if="isLoading"
      class="chart-wrapper"
      type="rect"
    ></q-skeleton>
  </div>
</template>

<script src="./BaseChart.ts" lang="ts" />
<style src="./BaseChart.scss" lang="scss" />
