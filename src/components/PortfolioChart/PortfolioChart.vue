<template>
  <CardChart>
    <template #default>
      <BaseChart
        :title="title"
        :is-loading="loading"
        :data="statistic"
      />
    </template>

    <template v-slot:stats>
      <ButtonsGroup
        :list="getFullPeriodsControllerOptions()"
        :value="activePeriod"
        @change="changePeriod"
      />
    </template>

    <template v-slot:controller>
      <ButtonsGroup
        :list="getFullStatisticsControllerOptions()"
        :value="activeStatistic"
        @change="changeStatistic"
      />
    </template>
  </CardChart>
</template>
<script src="./PortfolioChart.ts" lang="ts"/>
<style src="./PortfolioChart.scss" lang="scss"/>
