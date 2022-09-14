<template>
  <q-btn-dropdown
    :label="label"
    :loading="isLoading"
    :type="type"
    :to="to"
    :dropdown-icon="icon"
    :ripple="false"
    v-bind="$attrs"
    @click="click"
    v-model="isVisible"
    :class="`ui-dd-button ${className}`"
    :content-class="contentClass"
    flat
    menu-self="top end"
    menu-anchor="bottom end"
  >
    <template #label>
      <slot name="label">

      </slot>
    </template>
    <slot></slot>
  </q-btn-dropdown>
</template>

<script src="./BaseDropDownButton.ts" lang="ts"/>
<style src="./BaseDropDownButton.scss" lang="scss" />
