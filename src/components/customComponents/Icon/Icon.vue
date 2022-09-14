<template>
  <div
    class="icon inline-flex align-items-center justify-content-center"
    :style="[
      size
        ? { width: size + 'px', height: size + 'px' }
        : { width: '24px', height: '24px' },
    ]"
    v-html="iconSrc"
  ></div>
</template>

<script setup lang="ts">
import { ICONS } from '@/constants/ICONS';
import { computed } from 'vue';

const props = defineProps<{
  name: string;
  size?: string | number;
}>();

const iconSrc = computed(() => ICONS[props.name]);
</script>

<style scoped></style>
