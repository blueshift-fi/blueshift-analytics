<template>
  <div
    class="row wrap no-wrap-md justify-between white-space-nowrap q-ml-md-auto q-col-gutter-xl"
  >
    <div class="col-md-auto col-xs-6 flex no-wrap">
      <Icon name="point" size="20" class="q-mr-sm text-secondary" />
      <div class="flex-grow-1">
        <div class="q-mb-md caption uppercase">BLUES price</div>
        <Skeleton v-if="!bluesPrice" class="w-5"></Skeleton>
        <div v-else class="white-space-nowrap text-sm">
          {{ '$' + format(bluesPrice.toFixed(2)) }}
        </div>
      </div>
    </div>

    <div class="col-md-auto col-xs-6 flex no-wrap">
      <Icon name="point" size="20" class="q-mr-sm text-secondary" />
      <div class="flex-grow-1">
        <div class="q-mb-md caption uppercase">Total supply</div>
        <div class="white-space-nowrap text-sm">
          {{ totalBluesSupply }} BLUES
        </div>
      </div>
    </div>

    <div class="col-md-auto col-xs-6 flex no-wrap">
      <Icon name="point" size="20" class="q-mr-sm text-secondary" />
      <div class="flex-grow-1">
        <div class="q-mb-md caption uppercase">TVL</div>
        <Skeleton v-if="!tvlAmount" class="w-full"></Skeleton>
        <div v-else class="white-space-nowrap text-sm">
          {{ format(tvlAmount) }}
        </div>
      </div>
    </div>

    <div class="col-md-auto col-xs-6 flex no-wrap">
      <Icon name="point" size="20" class="q-mr-sm text-secondary" />
      <div class="flex-grow-1">
        <div class="q-mb-md caption uppercase">Contract</div>
        <div class="flex column q-mb-sm text-sm">
          <div class="flex align-items-center q-mb-sm">
            <ClipboardCopy :data="contractAddress" ellipsis />
          </div>
          <ExternalLink
            label="View in Explorer"
            :url="externalLink"
            class="text-accent q-mb-sm"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/customComponents/Icon/Icon.vue';
import ExternalLink from '@/components/customComponents/ExternalLink/ExternalLink.vue';
import ClipboardCopy from '@/components/customComponents/ClipboardCopy/ClipboardCopy.vue';
import { format } from '@/utils/format-numbers';

const contractAddress = '0x8c008BBA2Dd56b99f4A6aB276bE3a478cB075F0C';
const tvlAmount = 4450095;
const bluesPrice = 0.31935;
const totalBluesSupply = 100000000;
</script>

<style scoped></style>
