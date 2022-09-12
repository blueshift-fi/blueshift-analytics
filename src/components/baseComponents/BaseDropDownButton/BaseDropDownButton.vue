<template>
  <q-btn-dropdown
    :label="label"
    :loading="isLoading"
    :type="type"
    :to="to"
    v-bind="$attrs"
    dropdown-icon="eva-arrow-ios-downward-outline"
    @click="click"
    v-model="isVisible"
    :class="`ui-dd-button ${className}`"
    flat
    menu-self="top end"
    menu-anchor="bottom end"
  >
    <template #label>
      <slot name="label">

      </slot>
    </template>
<!--    <div class="row items-center justify-between dd-menu-header" v-if="header">-->
<!--      <div>-->
<!--        {{ header }}-->
<!--      </div>-->
<!--      <q-icon name="eva-close" @click="close" class="cursor-pointer q-ml-auto" />-->
<!--    </div>-->
<!--    <div class="dd-menu-divider" v-if="header" />-->
    <slot></slot>
  </q-btn-dropdown>
</template>

<script src="./BaseDropDownButton.ts" lang="ts"/>
<style src="./BaseDropDownButton.scss" lang="scss" />
