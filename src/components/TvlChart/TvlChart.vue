<template>
  <CardChart>
    <template #default>
      <BaseChart
        title="TVL"
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
  </CardChart>
</template>

<script src="./TvlChart.ts" lang="ts"/>
<style src="./TvlChart.scss" lang="scss"/>
