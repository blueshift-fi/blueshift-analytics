<template>
  <header class="flex justify-between w-full">
    <div class="header-content flex justify-between items-center">
      <div class="flex items-center">
        <Logo class="q-mr-xl" />
        <Menu class="q-mr-auto" v-if="$q.screen.gt.sm" />
      </div>
      <div class="flex items-center q-gutter-x-md">
        <template v-if="$q.screen.gt.xs">
          <div class="flex items-center">
            <div class="caption q-mr-sm">{{ baseTokenInfo.symbol }} price:</div>
            <div class="text-sm">${{ baseTokenInfo.price }}</div>
          </div>
          <NetworkSelect />
        </template>
        <BaseButton label="Go to App" class-name="button-base" @click="goToApp" v-if="$q.screen.gt.sm"/>
        <HeaderMobileMenu v-else :base-token-info="baseTokenInfo" />
      </div>
    </div>
  </header>
</template>

<script src="./Header.ts"/>
<style src="./Header.scss" lang="scss"/>
