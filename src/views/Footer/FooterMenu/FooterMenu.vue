<template>
  <div class="flex no-wrap justify-between justify-sm-start" :class="{ 'full-width': $q.screen.xs }">
    <template v-for="(item, index) in menu" :key="index">
      <div class="q-mr-sm-xl">
        <div class="q-mb-xl q-mb-md-md caption uppercase">
          {{ item.name }}
        </div>
        <div class="q-gutter-y-xl q-gutter-md-y-xs">
          <div v-for="item in item.items" :key="item.label">
            <span
              class="text-sm text-link"
              role="button"
              @click="openExternalLink(item.url)"
            >
              {{ item.label }}
            </span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { EXTERNAL_LINKS, SOCIAL_LINKS } from '@/constants/EXTERNAL_LINKS';
import { useUtils } from '@/composables/useUtils';

const menu = [
  {
    name: 'About',
    items: [
      {
        label: 'About Blueshift',
        url: EXTERNAL_LINKS.BLUESHIFT_ABOUT,
      },
      {
        label: 'Whitepaper',
        url: EXTERNAL_LINKS.WHITEPAPER,
      },
      {
        label: 'Careers',
        url: EXTERNAL_LINKS.CAREERS,
      },
    ],
  },
  {
    name: 'Community',
    items: [
      {
        label: 'Telegram (off Group)',
        url: EXTERNAL_LINKS.TELEGRAM_OFF_GROUP,
      },
      {
        label: 'Telegram (Chat)',
        url: EXTERNAL_LINKS.TELEGRAM_CHAT,
      },
      {
        label: 'Twitter',
        url: SOCIAL_LINKS.TWITTER,
      },
    ],
  },
  {
    name: 'Support',
    items: [
      {
        label: 'E-mail',
        url: SOCIAL_LINKS.MAIL,
      },
    ],
  },
];
const { openExternalLink } = useUtils();
</script>

<style scoped></style>
