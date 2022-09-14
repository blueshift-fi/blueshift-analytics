<template>
  <router-link
    class="row items-center no-wrap"
    :to="{ name: RouterNames.TOKEN_PAGE, params: { id: name } }"
  >
    <TokenIcon :addressId="addressId" :size="logoSize" />
    <div class="q-ml-2 flex items-center">
      <div class="subtitle text-wrap q-mr-sm">{{ name }}</div>
      <div class="caption text-light">
        <template  v-if="isBase">
          (Base token)
        </template>
        <template  v-if="symbol">
          ({{ symbol }})
        </template>
      </div>
    </div>
  </router-link>
</template>

<script src="./TokenFullName.ts" lang="ts" />
<style src="./TokenFullName.scss" lang="scss" />
