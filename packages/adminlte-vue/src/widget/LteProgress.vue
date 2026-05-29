<script setup lang="ts">
import { cn } from '../lib/class-name'
import type { BootstrapTheme, ComponentSize } from '../types/theme'

const props = withDefaults(
  defineProps<{
    value: number
    max?: number
    theme?: BootstrapTheme
    size?: ComponentSize
    striped?: boolean
    animated?: boolean
    showLabel?: boolean
    height?: string
  }>(),
  { max: 100, theme: 'primary' }
)

const pct = () => Math.min(100, Math.max(0, (props.value / props.max) * 100))
</script>

<template>
  <div
    class="progress"
    :class="{ 'progress-sm': size === 'sm', 'progress-lg': size === 'lg' }"
    :style="height ? { height } : undefined"
    role="progressbar"
    :aria-valuenow="value"
    aria-valuemin="0"
    :aria-valuemax="max"
  >
    <div
      :class="cn('progress-bar', `bg-${theme}`, striped && 'progress-bar-striped', animated && 'progress-bar-animated')"
      :style="{ width: `${pct()}%` }"
    >
      <template v-if="showLabel">{{ Math.round(pct()) }}%</template>
    </div>
  </div>
</template>
