<template>
  <div class="controller-wrapper button-tumbler-group">
    <BaseButton
      v-for="period in list"
      :key="period.id"
      @click="changeValue(period)"
      :label="period.label"
      class="button-tumbler"
      :class-name="(period.id === activeValue?.id) ? 'button-tumbler-active' : ''"
      :disabled="isLoading"
    />
  </div>
</template>
<script src="./ButtonsGroup.ts" lang="ts" />
<style src="./ButtonsGroup.scss" lang="scss" />
