<script setup lang="ts">
import type { BootstrapTheme } from '../types/theme'

withDefaults(defineProps<{ theme?: BootstrapTheme; title?: string }>(), { theme: 'info' })
</script>

<template>
  <div :class="`callout callout-${theme}`">
    <h5 v-if="title">{{ title }}</h5>
    <slot />
  </div>
</template>
