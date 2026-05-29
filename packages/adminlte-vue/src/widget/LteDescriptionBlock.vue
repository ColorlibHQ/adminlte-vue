<script setup lang="ts">
import type { BootstrapTheme } from '../types/theme'
import { biClass } from '../lib/class-name'

defineProps<{
  header: string
  text?: string
  icon?: string
  iconTheme?: BootstrapTheme
  /** Trend percentage; positive renders green-up, negative red-down. */
  percentage?: number
}>()
</script>

<template>
  <div class="description-block">
    <span v-if="percentage != null" class="description-percentage" :class="percentage >= 0 ? 'text-success' : 'text-danger'">
      <i :class="['bi', percentage >= 0 ? 'bi-caret-up-fill' : 'bi-caret-down-fill']"></i>
      {{ Math.abs(percentage) }}%
    </span>
    <h5 class="description-header">
      <i v-if="icon" :class="[biClass(icon), iconTheme && `text-${iconTheme}`, 'me-1']"></i>{{ header }}
    </h5>
    <span class="description-text">{{ text }}</span>
    <slot />
  </div>
</template>
