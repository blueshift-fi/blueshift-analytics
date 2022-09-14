<template>
  <BaseDropDownButton
    v-model="isMenuOpen"
    :icon="isMenuOpen ? 'eva-close-outline' : 'eva-menu-outline'"
    class-name="button-control-icon"
    :content-class="
      $q.screen.xs ? 'mobile-menu-content' : 'tablet-menu-content'
    "
  >
    <Menu />
    <div v-if="$q.screen.xs" class="q-gutter-y-xl q-mt-none">
      <div class="flex items-center">
        <div class="caption q-mr-sm">{{ baseTokenInfo.symbol }} price:</div>
        <div class="text-sm">{{ baseTokenPrice }}</div>
      </div>
      <NetworkSelect class="full-width" />
    </div>
  </BaseDropDownButton>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import BaseDropDownButton from '@/components/baseComponents/BaseDropDownButton/BaseDropDownButton.vue';
import Menu from '@/views/Header/Menu/Menu.vue';
import NetworkSelect from '@/views/Header/NetworkSelect/NetworkSelect.vue';

const props = defineProps<{
  baseTokenInfo: Record<string, string>;
}>();
const isMenuOpen = ref(false);
const baseTokenPrice = computed(() => `$${props?.baseTokenInfo.price}`);
</script>

<style scoped></style>
