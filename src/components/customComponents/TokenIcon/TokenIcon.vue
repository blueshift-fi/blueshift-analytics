<template>
  <div class="ui-token-icon" :style="`width: ${imgSize}; height: ${imgSize}`">
    <q-skeleton type="circle" v-if="!addressId" />
    <img :src="source" :alt="alt" :style="`width: ${imgSize}; height: ${imgSize}`" v-else @error="onErrorLoad" />
  </div>
</template>

<script src="./TokenIcon.ts" lang="ts" />
<style src="./TokenIcon.scss" lang="scss" />
