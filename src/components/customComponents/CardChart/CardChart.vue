<template>
    <div class="ui-card card-chart flex-grow-1">
<!--      <div-->
<!--        class="card-header q-pb-3"-->
<!--      >-->
<!--        <slot name="top-content"></slot>-->
<!--      </div>-->
      <div class="card-content">
        <slot></slot>
      </div>
      <div class="card-footer column row-sm items-sm-center ">
        <div class="chart-controller order-sm-last">
          <slot name="controller"></slot>
        </div>
        <div class="chart-stats">
          <slot name="stats"></slot>
        </div>
      </div>
    </div>
</template>

<script src="./CardChart.ts" lang="ts" />
<style src="./CardChart.scss" lang="scss" />
