<script setup lang="ts">
import type { BootstrapTheme } from '../types/theme'

const props = withDefaults(
  defineProps<{
    label: string
    value: number
    max?: number
    theme?: BootstrapTheme
  }>(),
  { max: 100, theme: 'primary' }
)

const pct = () => Math.min(100, Math.max(0, (props.value / props.max) * 100))
</script>

<template>
  <div class="progress-group">
    <span class="progress-text">{{ label }}</span>
    <span class="float-end"><b>{{ value }}</b>/{{ max }}</span>
    <div class="progress progress-sm">
      <div class="progress-bar" :class="`bg-${theme}`" :style="{ width: `${pct()}%` }"></div>
    </div>
  </div>
</template>
