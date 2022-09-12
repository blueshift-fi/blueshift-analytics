<template>
  <ul class="flex ui-menu">
    <li
      v-for="(item, index) in getMenuItems()"
      :key="index"
    >
      <router-link :to="item.path">
        <BaseButton>
          <div class="item-name">{{ item.label }}</div>
        </BaseButton>
      </router-link>
    </li>
  </ul>
</template>

<script src="./Menu.ts"/>
<style src="./Menu.scss" lang="scss" />
