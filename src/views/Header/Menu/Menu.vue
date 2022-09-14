<template>
  <div class="ui-menu" :class="$q.screen.lt.md ? 'mobile' : 'desktop'">
    <template
      v-for="(item, index) in getMenuItems()"
      :key="index"
    >
        <router-link :to="item.path" class="menuitem-link flex items-center">
          <div>{{ item.label }}</div>
        </router-link>
      </template>
    <div class="menuitem-link flex items-center" v-if="$q.screen.gt.sm">
      <ExternalLink :url="EXTERNAL_LINKS.BLUESHIFT_ABOUT" label="About"/>
    </div>
    <template v-else>
    <div class="menuitem-link flex items-center" @click="openExternalLink(EXTERNAL_LINKS.BLUESHIFT_ABOUT)">
      About
    </div>
    <div class="menuitem-link flex items-center" @click="openExternalLink(EXTERNAL_LINKS.BLUESHIFT_APP)">
      Go To App
    </div>
    </template>
  </div>
</template>

<script src="./Menu.ts"/>
<style src="./Menu.scss" lang="scss" />
