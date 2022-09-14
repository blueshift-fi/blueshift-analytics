<template>
  <div class="row q-gutter-x-xl items-center justify-center">
    <template v-for="link in links" :key="link">
      <Icon
        :name="link.name" @click="openExternalLink(link.url)"
        class="text-gray icon"
        size="20"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { SOCIAL_LINKS } from '@/constants/EXTERNAL_LINKS';
import Icon from '@/components/customComponents/Icon/Icon.vue';
import { useUtils } from '@/composables/useUtils';
import { computed } from 'vue';

const { openExternalLink } = useUtils();
const links = computed(() => Object.keys(SOCIAL_LINKS).map((key) => {
  return { name: key.toLowerCase(), url: SOCIAL_LINKS[key] };
}));
</script>

<style lang="scss" scoped>
.icon {
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
}
</style>
