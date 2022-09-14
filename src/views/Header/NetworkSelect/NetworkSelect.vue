<template>
  <BaseDropDownButton>
    <template #label>
      <div class="flex justify-between items-center">
        <img
          :src="activeNetwork.imageURL"
          width="15"
          height="15"
          class="q-mr-sm"
        />
        <div>{{ activeNetwork.name }}</div>
      </div>
    </template>
    <template #default>
      <q-list class="dd-list">
        <q-item
          v-for="net in mappedSupportedNetworks"
          :key="net?.id"
          clickable
          v-close-popup
          @click="changeActiveNetwork(net)"
          :class="{'active': net.name === activeNetwork.name }"
        >
          <q-item-section>
            <q-item-label>
              <div class="flex q-gutter-x-sm">
                <img :src="net.imageURL" width="15" height="15" />
                <div>{{ net.name }}</div>
              </div>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </template>
  </BaseDropDownButton>
</template>

<script setup lang="ts">
import BaseDropDownButton from '@/components/baseComponents/BaseDropDownButton/BaseDropDownButton.vue';
import { mappedSupportedNetworks, NetworkInfo } from '@/app.options/networks';
import { useStore } from '@/store';
import { RootGettersType } from '@/store/names/getters.names';
import { RootMutationsType } from '@/store/names/mutations.names';
import { computed } from 'vue';

const { getters, commit } = useStore();

const activeNetwork = computed(
  () => <NetworkInfo>getters[RootGettersType.GET_ACTIVE_NETWORK]
);

const changeActiveNetwork = (network: NetworkInfo) => {
  commit(RootMutationsType.SET_ACTIVE_NETWORK, network);
};
</script>

<style scoped></style>
