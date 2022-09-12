<template>
  <header class="flex justify-between w-full">
    <Menu />
    <BaseDropDownButton>
      <template #label>
        <div class="flex justify-between items-center">
          <img :src="activeNetwork.imageURL" width="15" height="15" class="q-mr-sm">
          <div>{{ activeNetwork.name }}</div>
        </div>
      </template>
      <template #default>
        <q-list>
          <q-item
            v-for="net in mappedSupportedNetworks"
            :key="net?.id"
            clickable
            v-close-popup
            @click="changeActiveNetwork(net)"
          >
            <q-item-section>
              <q-item-label>
                <div class="flex justify-around">
                  <img :src="net.imageURL" width="15" height="15">
                  <div>{{ net.name }}</div>
                </div>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </template>
    </BaseDropDownButton>
  </header>
</template>

<script src="./Header.ts"/>
<style src="./Header.scss" lang="scss"/>
